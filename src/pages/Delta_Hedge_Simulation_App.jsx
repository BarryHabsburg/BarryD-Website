import { useState } from 'react';
import { differenceInDays, parse } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stock_Chart from '../components/Stock_Chart';
import CubeCalculator from '../components/CubeCalculator';
import DeltaHedgeInputs from '../components/DeltaHedgeInputs';
import DeltaHedgeDataDisplay from '../components/DeltaHedgeDataDisplay';
import Latex from 'react-latex-next';
import TimeSpanCalculator from '../components/TimeSpanCalculator';
import Display_hashmap from '../components/Display_hashmap';
import valid_tickers from '../components/valid_tickers.json';

function Delta_Hedge_Simulation_App() {

    // ticker for the desired security equity
    let ticker = "MSFT";

    // create a label and input for the ticker symbol
    // create a individual div and function for the importation of the stock data from Alpha Vantage
    // Display the current info on that specific stock.
    // Use DataTableDisplay

    // Create alignment amongst the various pieces of the web-app

    // Delta Hedge simulation parameters
    const [simulation_parameters, setSimulation_parameters] = useState({
        quantity_of_stock: '',
        strike_price: '',
        market_option_price: '',
        quantity_of_options: '',
        maturation_date: '',
        cash_balance: '',
        num_sim: '',
        ticker_symbol: ''
    });

    // Delta Hedge simulation P&L Calculation parameters
    const [pl_parameters, setPl_parameters] = useState({
        number_of_simulations: ''
    });

    // States for 1YR Treasury Bill interest rates and stock data
    const [interestRates, setInterestRates] = useState([]);
    const [stockData, setStockData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [latestInterestRate, setLatestInterestRate] = useState(null);
    const [latestStockPrice, setLatestStockPrice] = useState(null);

    // Handles the changes in the inputs (e.g. simulation parameters)
    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        // Only allows dates and positive numbers to be used to update the JavaScript object: simulation_parameters
        if (type === 'date' || value === '' || (!isNaN(value) && Number(value) >= 0) || type === 'text' && name === 'ticker_symbol') {
            setSimulation_parameters(prev => ({
                ...prev, [name]: value
            }));
        }
    };

    const [volume, setVolume] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const [err_code, setErr_code] = useState(null);
    const [days_since_epoch, setDays_since_epoch] = useState(0);
    const [todays_date, setTodays_date] = useState(null);
    const [temp_num_sim, setTemp_num_sim] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false);

    // Simulation Data arrays
    const [simulation_data, setSimulation_data] = useState([]);
    const [sim_parameters, setSim_parameters] = useState(new Map());
    const [stock_parameters, setStock_parameters] = useState(new Map());
    const [cir_parameters, setCir_parameters] = useState([]);
    const [sim_parameters_headers, setSim_parameters_headers] = useState([]);
    const [gbm_path, setGbm_path] = useState([]);
    const [xvalues, setXvalues] = useState([]);
    const [pl_values, setPl_values] = useState([]);

    // Function to fetch both stock data and interest rates
    async function fetchMarketData(e) {
        e.preventDefault();
        setFetchError(null); // Clear previous errors
        setLoading(true);

        const validTickerSet = new Set(valid_tickers);
        if (!validTickerSet.has(simulation_parameters.ticker_symbol)) {
            setFetchError("Invalid ticker symbol. Please enter a supported ticker symbol from the list.");
            setLoading(false);
            return;
        } else {
            setFetchError(null);
        }

        try {
            const [stockResult, interestResult] = await Promise.all([
                fetch(`https://tranquil-forest-11514-fbbb74e693fd.herokuapp.com/api/alpha-vantage?symbol=${simulation_parameters.ticker_symbol}`).then(res => res.json()),
                fetch('https://tranquil-forest-11514-fbbb74e693fd.herokuapp.com/api/fred').then(res => res.json())
            ]);
            setStockData(stockResult["Time Series (Daily)"] ? Object.entries(stockResult["Time Series (Daily)"]).map(([date, data]) => [new Date(date), parseFloat(data["4. close"])]) : []);
            const interestRateData = interestResult.observations
                ? interestResult.observations
                    .map(observation => parseFloat(observation.value.trim()))
                    .filter(rate => !isNaN(rate))
                : [];
            setInterestRates(interestRateData.length > 252 ? interestRateData.slice(-252).map(rate => rate / 100.0) : interestRateData.map(rate => rate / 100.0));
            if (interestRateData.length > 0) {
                const latest = interestResult.observations[interestResult.observations.length - 1];
                setLatestInterestRate({ rate: latest.value, date: latest.date });
            }
            if (stockResult["Time Series (Daily)"]) {
                const latest = Object.entries(stockResult["Time Series (Daily)"])[0];
                setLatestStockPrice({ price: parseFloat(latest[1]["4. close"]), date: latest[0] });
            }
            setLoading(false);
        } catch (error) {
            setFetchError("Failed to fetch market data. Please check your proxy setup.");
            setLoading(false);
        } 
    }
    
    // Function to calculate expected return (annualized)
    function calculateExpectedReturn(prices) {
        if (prices.length < 2) return 0.0;
        const returns = [];
        for (let i = 1; i < prices.length; i++) {
            const returnValue = (prices[i][1]-prices[i-1][1])/prices[i-1][1];
            returns.push(returnValue);
        }
        const meanReturn = mean(returns);
        return meanReturn*252; // Annualize by multiplying by 252 trading days
    }

    // Function to calculate historical volatility (annualized)
    function calculateHistoricalVolatility(prices) {
        if (prices.length < 2) return 0.0;
        const returns = [];
        for (let i = 1; i < prices.length; i++) {
            const returnValue = (prices[i][1]-prices[i-1][1])/prices[i-1][1];
            returns.push(returnValue);
        }
        const varianceReturn = variance(returns);
        return Math.sqrt(varianceReturn)*Math.sqrt(252); // Annualize by multiplying by sqrt(252)
    }

    // Function that the Delta Hedge simulation requires to function
    function mean(data) {
        let sum = 0.0;
        
        for (let i = 0; i < data.length; i++) {  // Fixed typo
            sum += data[i];
        }

        return sum/data.length;
    }

    function variance(data) {
        if (data.length < 2) {
            return 0.0;
        } 

        let sum = 0.0;
        let average = mean(data);
        
        for (let i = 0; i < data.length; i++) {
            sum += Math.pow((average-data[i]), 2)
        }

        return sum/(data.length-1);
    }

    const roundNum = (num, decimals) => {
        const factor = Math.pow(10, decimals);
        return Math.round(num*factor)/factor;
    };

    function linspace(lower_boundary, upper_boundary, num=10, endpoint=true) {
        const array = [];
        const step_size = (upper_boundary-lower_boundary)/(endpoint ? num-1 : num);

        for (let i = 0; i < num; i++) {
            array.push(lower_boundary+step_size*i);
        }
        return array;
    }

    function Gauss_Legendre_Quadrature(f, a, b, n) {
        if (b < a) {
            console.error("Gauss_Legendre_Quadrature Error: b < a.");
        }
        if (n < 1) {
            console.error("Gauss_Legendre_Quadrature Error: The partition size must be greater than 1."
                +"\nThe number of partitions was set to 10."
            );
            n=10;
        }

        let xvals = linspace(a, b, n+1);
        const scaled_h=(b-a)/(2*n);
        let integrand = 0.0;

        /* Degree-4 Legendre polynomial roots */
        const Legendre_roots = [
            -Math.sqrt((3-4*Math.sqrt(0.3))/7),
            -Math.sqrt((3+4*Math.sqrt(0.3))/7),
            Math.sqrt((3-4*Math.sqrt(0.3))/7),
            Math.sqrt((3+4*Math.sqrt(0.3))/7)
        ];

        /* Degree-4 Legendre polynomial weights */
        const Legendre_weights = [
            (18+Math.sqrt(30))/36,
            (18-Math.sqrt(30))/36,
            (18+Math.sqrt(30))/36,
            (18-Math.sqrt(30))/36
        ];

        for (let i = 0; i < xvals.length - 1; i++) {
            let midpoint = (xvals[i]+xvals[i+1])/2;

            for (let j = 0; j < Legendre_roots.length; j++) {
                integrand += Legendre_weights[j]*f(midpoint+scaled_h*Legendre_roots[j]);
            }
        }        
        return scaled_h*integrand;
    }

    // Gaussian cumulative distribution function
    const num_mean = 0; const std = 1;
    const Gcdf = (x,mu,sigma) => (1/(sigma*Math.sqrt(2*Math.PI)))*Math.exp((-1/2)*Math.pow((x-mu)/sigma, 2));
    const G = x => Gcdf(x, num_mean, std);

    // Black-Scholes-Merton model
    function d_1(S, K, T, sigma, r) {
        return (Math.log(S/K)+(r+0.5*Math.pow(sigma, 2)*T))/(sigma*Math.sqrt(T)); // right boundary
    }

    function d_2(d1, sigma, T) {
        return (d1-sigma*Math.sqrt(T));
    }

    function BSM_Call_Opt_Val(S, K, T, sigma, r) {
        if (sigma <= 0.0) {
            return 0.0;
        } else if (T <= 0.0) {
            return 0.0;
        }

        // d1 and d2 of the Black-Scholes equation for pricing Euro Options
        const d1 = d_1(S, K, T, sigma, r);
        const d2 = d_2(d1, sigma, T);

        // Cumulative probabilities of d1 and d2; note Gaussian CDF(d1) is Greek Delta, e.g., prob1 = Greek_Delta for Euro Call Option
        const prob1 = Gauss_Legendre_Quadrature(G, -1e5, d1, 100000);
        const prob2 = Gauss_Legendre_Quadrature(G, -1e5, d2, 100000);

        return Math.max(S*prob1-K*Math.exp(-r*T)*prob2,0.0);
    }

    function BSM_Put_Opt_Val(S, K, T, sigma, r) {
        if (sigma <= 0.0) {
            return 0.0;
        } else if (T <= 0.0) {
            return 0.0;
        }

        // d1 and d2 of the Black-Scholes equation for pricing Euro Options
        const d1 = d_1(S, K, T, sigma, r);
        const d2 = d_2(d1, sigma, T);

        // Cumulative probabilities of d1 and d2; note Gaussian CDF(d1) is Greek Delta, e.g., prob1 = Greek_Delta for Euro Call Option
        const prob3 = Gauss_Legendre_Quadrature(G, -1e5, -d2, 100000);
        const prob4 = Gauss_Legendre_Quadrature(G, -1e5, -d1, 100000);

        return Math.max((K*Math.exp(-r*T)*prob3)-S*prob4,0.0);
    }

    // Call Greek Delta
    function Greek_Delta(S, K, T, sigma, r) {
        if (T <= 0.0 && S < K) {
            return 0.0;
        }

        if (T <= 0.0 && S > K) {
            return 0.0;
        }

        return Gauss_Legendre_Quadrature(G, -1e4, d_1(S, K, T, sigma, r), 10000);
    }

    // Call Greek Vega
    function Greek_Vega(S, K, T, sigma, r) {
        if (T <= 0.0) {
            return 0.0;
        }

        return S*G(d_1(S, K, T, sigma, r))*Math.sqrt(T);
    }

    // Newton-Raphson method to solve for implied volatility
    function implied_volatility_call(call_market_value, S, K, T, vol, r, tol = 1e-6, max_iter = 100) {
        let sigma = vol; // initial guess at volatility of the stock
        let price_difference = 0.0;
        let vega = 0.0;
    
        for (let i = 0; i < max_iter; i++) {
            // Calculate the Black-Scholes call option value and Vega
            const BSM_call_value = BSM_Call_Opt_Val(S, K, T, sigma, r);
            vega = Greek_Vega(S, K, T, sigma, r) * 100.0; // Scale Vega by 100 for option contracts
    
            // Compute the price difference
            price_difference = BSM_call_value - call_market_value;
    
            // Newton-Raphson method itself, which calculates implied volatility
            const sigma_new = sigma - price_difference / vega;
    
            // Check convergence
            if (Math.abs(price_difference) < tol) {
                console.log(`Newton-Raphson method - Converged on iteration: ${i}`);
                console.log(`Implied volatility: ${sigma_new.toFixed(6)}`);
                return sigma_new;
            }
    
            sigma = sigma_new;
    
            // Optional: Safeguard against divergence or NaN
            if (isNaN(sigma) || sigma <= 0) {
                console.warn(`Implied volatility calculation diverged or became invalid at iteration ${i}. Returning last valid value: ${sigma}`);
                return sigma;
            }
        }
        
        console.error(`Newton-Raphson method did not converge within ${max_iter} iterations. Last estimate: ${sigma.toFixed(6)}`);
        return sigma; // Return the last estimate if no convergence
    }

    // Bisection method to solve for implied volatility
    function approx_implied_volatility(call_market_value, S, K, T, vol, r, tol = 1e-6, max_iter = 100) {
        let sigma_low = 0.0001;
        let sigma_high = 1.5;

        for (let i = 0; i < max_iter; i++) {
            const sigma_mid = (sigma_low+sigma_high)/2;
            const price_mid = BSM_Call_Opt_Val(S, K, T, sigma_mid, r);
            const f_mid = price_mid - call_market_value;

            if (Math.abs(f_mid) < tol || (sigma_high-sigma_low) < tol) {
                console.log(`Bisection method - Converged on iteration: ${i}`);
                return sigma_mid;
            }

            const price_low = BSM_Call_Opt_Val(S, K, T, sigma_low, r);
            const f_low = price_low - call_market_value;

            if (f_low*f_mid < 0) {
                sigma_high = sigma_mid;
            } else {
                sigma_low = sigma_mid;
            }
        }

        console.error(`Bisection method did not converge within ${max_iter} iterations. Last estimate:  ${sigma_mid}`);
        return sigma_mid; // Return the estimate, Bisection method did not converge
    }

    // Used to test Newton-Raphson method function
    // let temp_val = approx_implied_volatility(81.15, 378.77, 300.00, 0.0575, 0.7, 0.04076, 1e-6, 10000);
    // console.log(`Answer = ${temp_val}`);
    // let temp_val2 = implied_volatility_call(81.15, 378.77, 300.00, 0.0575, 0.7, 0.04076, 1e-6, 10000);
    // console.log(`Answer = ${temp_val2}`);

    // Although uniform_rv is not used; it was nice translate the Rust implementation
    // into JavaScript
    function uniform_rv(min, max, sample_size) {
        return Array.from({length: sample_size}, () => Math.random()*(max-min)+min);
    }

    // Generates standard normal random variables (rvs) N(0,1)
    function polar_method(num_step) {
        const output = [];
        let i = 0;

        while (i < num_step) {
            let w1 = Math.random()*2-1;
            let w2 = Math.random()*2-1;
            let w = w1*w1+w2*w2;

            if (w < 1) {
                let factor = Math.sqrt(-2*Math.log(w)/w);
                output.push(w1*factor);
                i++;
            }
        }

        return output;
    }

    // Generates standard Brownian motion path, e.g. stochastic process of standard normal rvs
    function brownian_motion(S_0, num_step) {
        let delta = Math.sqrt(1.0/252.0);
        let S_t = S_0;
        
        let norm_rv = polar_method(num_step-1);
        let bm_path = [S_0];

        for (let i = 0; i < num_step-1; i++) {
            S_t += norm_rv[i]*delta*S_t;
            bm_path.push(S_t);
        }

        return bm_path;
    }

    // Generates Geometric Brownian motion path
    function geometric_brownian_motion(S_0, exp_return, vol, num_step) {
        const dt = 1.0/252.0;
        let S_t = S_0;

        const norm_rv = polar_method(num_step-1);
        const gbm_path = [S_0];

        for (let i = 0; i < num_step-1; i++) {
            S_t = S_t*Math.exp((exp_return-0.5*vol)*dt+Math.sqrt(vol)*(norm_rv[i]*Math.sqrt(dt)));
            gbm_path.push(S_t);
        }
        
        return gbm_path;
    }

    // Cox-Ingersoll-Ross model to simulate short-term interest rate dynamics
    function CIR_model(interest_rate, a, b, sigma, n) {
        let r_t = interest_rate; let dt = 0.01;
        let drift; let diffusion;

        const cir_path = [r_t]; const norm_rv = polar_method(n-1);

        for (let i = 0; i < n-1; i++) {
            drift = a*(b-r_t); diffusion = sigma*Math.sqrt(r_t);
            r_t += drift*dt+diffusion*Math.sqrt(dt)*norm_rv[i];
            cir_path.push(r_t);
        }
        return cir_path;
    }

    // Function to estimate the CIR model's parameters from the decimal 1YR Treasury bill interest rate data
    function estimate_cir_parameters(historical_data) {
        const cir_parameters = [];
        const temp_array = [];

        const sample_mean = mean(historical_data);
        const sample_variance = variance(historical_data);

        for (let i = 0; i < historical_data.length-1; i++) {
            temp_array.push((historical_data[i+1]-sample_mean)*(historical_data[i]-sample_mean));
        }

        const sample_autocovariance = mean(temp_array);

        // Estimate parameter (speed of mean reversion): a
        if (sample_autocovariance <= 0.0 || sample_variance <= 0.0) {
            console.error("Warning: Autocovariance or variance is non-positive. Setting to a small positive value.");
            cir_parameters.push(0.0);
        } else {
            cir_parameters.push(-1.0*Math.log(sample_autocovariance / sample_variance));
        }

        // Estimate parameter (long-term mean): b
        cir_parameters.push(sample_mean);

        // Estimate parameter (volatility): sigma
        cir_parameters.push( Math.sqrt((2.0*cir_parameters[0]*sample_variance)/cir_parameters[1]));

        return cir_parameters;
    }

    //  Computes the time span between current date and Maturation date of the call option
    function TimeSpan_Calculator(datestr) {
        const current_Date = new Date();
        // Parse the date string into a Date object
        const maturation_Date = parse(datestr, "yyyy-MM-dd", new Date());

        // Computes the days differerence between the maturation date and current date
        const daysSinceEpoch = differenceInDays(maturation_Date, current_Date);

        const endTime = 0.0001; const time_to_maturity = daysSinceEpoch/365.0;
        const rawTimespan = linspace(time_to_maturity, endTime, daysSinceEpoch);

        // Rounds the time span values
        const roundedTimeSpan = rawTimespan.map(time => roundNum(time, 4));

        return roundedTimeSpan;
    }

    function calculateDaysBetweenDates(maturationDateStr) {
        const currentDate = new Date(); // Current date (March 11, 2025, based on your context)
        const maturationDate = parse(maturationDateStr, "yyyy-MM-dd", new Date()); // Parse the date string
    
        // Calculate the number of days
        const numberOfDays = differenceInDays(maturationDate, currentDate);
    
        // Format the current date and maturation date as readable strings
        const formattedCurrentDate = currentDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        const formattedMaturationDate = maturationDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    
        // Return the JSX element
        return (
            <div className="Delta-Hedge-web-app-description-container">
                <p className="Web-App-Description-2">
                    The number of days between {formattedCurrentDate} and {formattedMaturationDate} is{" "}
                    {numberOfDays} days.
                </p>
            </div>
        );
    }

    // Used to test the mean and variance functions
    //
    // const d = [1, 7, 1, 6, 4, 7, 5, 9, 8, 8];
    
    // let sum = 0;
    // for (let i = 0; i < d.length; i++) {
    //     sum += d[i];
    // }

    // console.log("Sum is " + sum);
    // console.log("Mean is " + mean(d));
    // console.log("Variance is " + variance(d));
    // console.log("Gaussian CDF(X=0.40) = " + Gauss_Legendre_Quadrature(G, -1e5, 0.40, 100000));
    // console.log("Premium of European Call Option: " + BSM_Call_Opt_Val(120.0, 100.0, 1.0, 0.2, 0.05));
    // console.log("Premium of European Put Option: " + BSM_Put_Opt_Val(120.0, 100.0, 1.0, 0.2, 0.05));

    // Sample data to demonsrate the functionality of DeltaHedgeDataDisplay component
    // const data = [
    //     ['MSFT250314C00230000', '3/3/2025 11:37 AM', 230, 164.16, 162.00, 165.70, 0.00, '0.00%'],
    //     ['MSFT250314C00240000', '2/20/2025 9:59 AM', 240, 171.19, 152.00, 155.70, 0.00, '0.00%'],
    //     ['MSFT250314C00250000', '3/7/2025 10:14 AM', 250, 143.38, 142.05, 145.75, 143.38, ''],
    //     ['MSFT250314C00300000', '3/7/2025 11:41 AM', 300, 86.74, 92.05, 95.80, -13.86, '-13.78%'],
    //     ['MSFT250314C00320000', '3/7/2025 11:29 AM', 320, 68.32, 72.10, 75.15, -7.12, '-9.44%'],
    //     ['MSFT250314C00325000', '3/5/2025 2:39 PM', 325, 73.77, 67.40, 70.05, 0.00, ''],
    //     ['MSFT250314C00330000', '3/7/2025 10:13 AM', 330, 63.00, 62.35, 65.15, 5.00, '8.62%'],
    //     ['MSFT250314C00335000', '3/6/2025 11:09 AM', 335, 67.00, 57.20, 60.20, 67.00, ''],
    // ];

    // const headers = [
    //     'Contract Name',
    //     'Last Trade Date (EDT)',
    //     'Strike',
    //     'Last Price',
    //     'Bid',
    //     'Ask',
    //     'Change',
    //     '% Change',
    // ];
    
    const delta_hedge_simulation = (e) => {
        e.preventDefault();
        setIsSimulating(true); // Disables the submit button

        // Checked if external data has been retrieved from the APIs
        // if (stockData.length === 0 || interestRates.length === 0) {
        //     setErrMessage(true);
        //     setErr_code("Need_to_fetch_data");
        //     setIsSimulating(false);
        //     return;
        // } else {
        //     setErrMessage(false); // Re-enables the submit button
        //     setErr_code(null);
        // }

        // Check if all fields are filled
        if (!simulation_parameters.quantity_of_stock || !simulation_parameters.strike_price || 
            !simulation_parameters.market_option_price || !simulation_parameters.maturation_date || 
            !simulation_parameters.cash_balance || !simulation_parameters.num_sim) {
            setErrMessage(true);
            setErr_code("missing_fields");
            setIsSimulating(false); // Re-enables the submit button
            return;
        } else {
            setErrMessage(false);
            setErr_code(null);
        }

        let time_span = TimeSpan_Calculator(simulation_parameters.maturation_date);
        let end_time = 0.0001;
        let today = new Date().toISOString().split('T')[0]; // current date: yyyy-mm-dd
        const current_Date = new Date();
        // Parse the date string into a Date object
        const maturation_Date = parse(simulation_parameters.maturation_date, "yyyy-MM-dd", new Date());
        // Computes the days differerence between the maturation date and current date
        const days_Since_Epoch = differenceInDays(maturation_Date, current_Date);
        setTodays_date(today);
        setDays_since_epoch(days_Since_Epoch);
        console.log(today);
        
        // Computes the x-values for the GBM simulation plot
        const x_values = [];
        for (let i = 1; i <= time_span.length; i++) {
        x_values.push(i);
        }
        setXvalues(x_values)

        let number_of_sims = simulation_parameters.num_sim;
        setTemp_num_sim(number_of_sims);

        if (number_of_sims > days_Since_Epoch || number_of_sims <= 0 ) {
            setErrMessage(true);
            setErr_code("too_many_sims");
            setIsSimulating(false); // Re-enables the submit button
            return;
        } else {
            setErrMessage(false);
            setErr_code(null);
        }

        const length = Number(simulation_parameters.cash_balance);
        const width = Number(simulation_parameters.market_option_price);
        const height = Number(simulation_parameters.quantity_of_stock);
    
        // Calculate volume
        const calculatedVolume = length * width * height;
        setVolume(calculatedVolume);

        // Use the latest stock price if available, otherwise fall back to default
        let stock_price = latestStockPrice ? latestStockPrice.price : 408.43;
        let commision_cost = 5.0;

        // Computes the expected return and historical volatility of the stock, from the retrieved stock data
        // If no data is retrieved: it fall back to the expected return and historical volatility of MSFT stock
        // at the time of February 17.
        let exp_return = stockData.length > 1 ? calculateExpectedReturn(stockData) : 0.1786432320;
        let historical_volatility = stockData.length > 1 ? calculateHistoricalVolatility(stockData) : 0.2321576690;

        // Simulation variables
        let number_of_steps = Number(simulation_parameters.num_sim);
        const sim_length = number_of_steps === days_Since_Epoch ? number_of_steps-1 : number_of_steps;
        let iter_array = [];
        let storage_array = [];
        let strike_price = Number(simulation_parameters.strike_price);
        let delta = 0.0;
        let delta_old = 0.0;
        let quantity_of_stock = Number(simulation_parameters.quantity_of_stock);
        let quantity_of_options = Number(simulation_parameters.quantity_of_options);
        let BSM_option_price = 0.0;
        let order_quantity = 0.0;
        let cash_balance = Number(simulation_parameters.cash_balance);
        let Adjustment_Cashflow = 0.0;

        // Initial asset and liabilities calculations
        let liabilities = -1.0*(commision_cost+quantity_of_options*simulation_parameters.market_option_price*100.0);
        let assets = stock_price*quantity_of_stock+quantity_of_options*simulation_parameters.market_option_price*100.0;
        cash_balance = cash_balance+liabilities;

        // Use the latest 252 interest rates for CIR model, fall back to default if insufficient data
        const initialInterestRate = interestRates.length >= 252 
            ? interestRates[interestRates.length - 1] 
            : (interestRates.length > 0 ? interestRates[interestRates.length - 1] : 0.0405
        );
        // let risk_free_rate = latestInterestRate.rate ? Number(latestInterestRate.rate) : 0.0405;
        let risk_free_rate = 0.0405;

        let implied_volatility = approx_implied_volatility(
            Number(simulation_parameters.market_option_price), stock_price, strike_price, time_span[0], 0.7, risk_free_rate, 1e-6, 10000
        );
        //let implied_volatility = 0.2169; // Fall back implied volatility - for debugging
        let cir_parameters = interestRates.length > 0 ? estimate_cir_parameters(interestRates) : [0.0070022575196388446, 0.044112698412698416, 0.0022277959040571033];
        let sim_stock_prices  = geometric_brownian_motion(
            stock_price, exp_return, historical_volatility, number_of_steps
        );
        setGbm_path(sim_stock_prices); 

        let cir_interest_rates = CIR_model(risk_free_rate, cir_parameters[0], cir_parameters[1], cir_parameters[2], number_of_steps);

        let map_headers = [
            "quantity of stock", "Current stock price ($)", "Strike Price ($)", "Historical Volatility",
            "Implied Volatility", "Risk-free interest", "Market Option price", "BSM Option price ($)",
            "quantity of options", "Option Delta", "Current date (Y-M-D)", `Maturation date (Y-M-D) (T=${time_span[0]})`,
            "Time (days)", "Liabilities ($)", "Assets ($)", "Cash Balance"
        ];

        // Creates a Map to contains the simulation parameters. We use it to generate an HTML table
        let sim_parameters = new Map();
        sim_parameters.set("quantity of stock", quantity_of_stock);
        sim_parameters.set("Current stock price ($)", stock_price);
        sim_parameters.set("Strike Price ($)", strike_price);
        sim_parameters.set("Historical Volatility", historical_volatility.toFixed(4));
        sim_parameters.set("Implied Volatility", implied_volatility.toFixed(4));
        sim_parameters.set("Risk-free interest", initialInterestRate);
        sim_parameters.set("Market Option price", simulation_parameters.market_option_price);
        sim_parameters.set("BSM Option price ($)", BSM_Call_Opt_Val(
            sim_stock_prices[0], strike_price, time_span[0], implied_volatility, cir_interest_rates[0]
        ).toFixed(2));
        sim_parameters.set("quantity of options", quantity_of_options);
        sim_parameters.set("Option Delta", Greek_Delta(
            stock_price, strike_price, time_span[0], implied_volatility, cir_interest_rates[0]
        ).toFixed(4));
        sim_parameters.set("Current date (Y-M-D)", todays_date);
        sim_parameters.set(`Maturation date (Y-M-D) (T=${time_span[0]})`, simulation_parameters.maturation_date);
        sim_parameters.set("Time (days)", days_since_epoch);
        sim_parameters.set("Liabilities ($)", liabilities);
        sim_parameters.set("Assets ($)", assets);
        sim_parameters.set("Cash Balance", cash_balance);

        // Creates a Map for the stock parameters: expected return and historical volatility
        let stock_para = new Map();
        stock_para.set("Expected Return", exp_return);
        stock_para.set("Historical Volatility", historical_volatility);

        // Updating the various useStates
        setSim_parameters(sim_parameters);
        setSim_parameters_headers(map_headers);
        setStock_parameters(stock_para);
        setCir_parameters(cir_parameters);

        for (let i = 0; i < number_of_steps; i++) {
            iter_array.push(i); iter_array.push(time_span[i]);
            BSM_option_price = BSM_Call_Opt_Val(
                sim_stock_prices[i], strike_price, time_span[i], implied_volatility, cir_interest_rates[i]
            );
            iter_array.push(BSM_option_price);
            iter_array.push(sim_stock_prices[i]);
            delta = Greek_Delta(
                sim_stock_prices[i], strike_price, time_span[i], implied_volatility, cir_interest_rates[i]
            );
            iter_array.push(delta);

            if (delta > delta_old && i !== sim_length) {
                if (i === 0 && quantity_of_stock !== 0) {
                    order_quantity = Math.round(quantity_of_options*100.0*(delta-delta_old))-quantity_of_stock;
                    quantity_of_stock += order_quantity;
                    iter_array.push(quantity_of_stock);
                } else {
                    order_quantity = Math.round(quantity_of_options*100.0*(delta-delta_old));
                    quantity_of_stock += order_quantity;
                    iter_array.push(quantity_of_stock);
                }
                assets = sim_stock_prices[i]*quantity_of_stock+quantity_of_options*BSM_option_price*100.0;
                if (order_quantity === 0) {
                    iter_array.push("No order");
                    iter_array.push(0.0);
                    iter_array.push(cash_balance);
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                } else {
                    iter_array.push(`Buy ${order_quantity}`);
                    Adjustment_Cashflow = -1.0*(sim_stock_prices[i]*order_quantity+commision_cost);
                    iter_array.push(Adjustment_Cashflow);
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance);
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                }
                delta_old = delta;
            } else if (delta < delta_old && i !== sim_length) {
                if (i === 0 && quantity_of_stock !== 0) {
                    order_quantity = Math.round(quantity_of_options*100.0*(delta_old-delta))-quantity_of_stock;
                    quantity_of_stock = Math.round(Math.max( quantity_of_stock-order_quantity, 0.0));
                    iter_array.push(quantity_of_stock);
                } else {
                    order_quantity = Math.round(quantity_of_options*100.0*(delta_old-delta));
                    //quantity_of_stock += order_quantity;
                    quantity_of_stock = Math.round(Math.max( quantity_of_stock-order_quantity, 0.0));
                    iter_array.push(quantity_of_stock);
                }
                assets = sim_stock_prices[i]*quantity_of_stock+quantity_of_options*BSM_option_price*100.0;
                if (order_quantity === 0) {
                    iter_array.push("No order");
                    iter_array.push(0.0);
                    iter_array.push(cash_balance);
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                } else {
                    iter_array.push(`Sell ${order_quantity}`);
                    Adjustment_Cashflow = sim_stock_prices[i]*order_quantity-commision_cost;
                    iter_array.push(Adjustment_Cashflow);
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance);
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                }
                delta_old = delta;
            }

            const tolerance = 0.00001;
            if (i === sim_length && Math.abs(roundNum(time_span[i], 4) - end_time) < tolerance) {
                // Existing expiry logic
                if (sim_stock_prices[i] > strike_price) {
                    // Exercised the Call options.
                    order_quantity = quantity_of_options*100.0;
                    quantity_of_stock += order_quantity;
                    assets = sim_stock_prices[i]*quantity_of_stock;
                    iter_array.push(quantity_of_stock);
                    iter_array.push(`Exercised call options! Buy ${order_quantity}`);
                    Adjustment_Cashflow = -1.0*(strike_price*order_quantity+commision_cost);
                    iter_array.push(Adjustment_Cashflow);
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance);
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                } else if (sim_stock_prices[i] < strike_price) {
                    // Did not exercise the Call options.
                    iter_array.push(quantity_of_stock);
                    iter_array.push(`Did not exercise Call options. No order.`);
                    iter_array.push(0.0);
                    iter_array.push(cash_balance);
                    assets = sim_stock_prices[i]*quantity_of_stock;
                    iter_array.push(assets);
                    iter_array.push(liabilities);
                }
            }
            storage_array.push([...iter_array]); // Push a copy instead of a reference
            iter_array.length = 0; // Clears iter_array for the next iteration
        }
        setSimulation_data(storage_array);
        setIsSimulating(false); // Re-enables the submit button
    }

    const data_headers = [
        'Index',
        'Time',
        'Option Price ($)',
        'Stock Price ($)',
        'Delta',
        'Qty of Stock',
        'Orders',
        'Cashflow Adjustment ($)',
        'Cash Balance ($)',
        'Assets ($)',
        'Liabilities ($)'
    ];
    // Headers for the table
    const indexPresent = true;
    const indexPlace = 0; // Bold the second column (index 1)

    const P_and_L_compute = (e) => {
        e.preventDefault();


    }

    return (
    <>
    <Header></Header>

    <main>
        <div className="Delta_Hedge_sim_App_container">
            <div className="Delta-Hedge-web-app-description-container-2">
                <p className="Web-App-Description-3"><b>Description:</b> <b>Delta Hedge Simulation App</b> is a web-application with a built-in Node.JS
                market data proxy server; it is capable of generating realistic simulations of the Delta Hedge trading strategy found in Black and Scholes 
                [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}}>1</a>] for 
                actively traded European call options of non-dividend yielding financial instruments.<br/>
                The following list contains simple instructions on how to run the Delta hedge simulation.       
                </p>
            </div>
            <div className="Delta-Hedge-web-app-description-container-2">
                <ol className="Web-App-Description-3">
                    <li>Enter the ticker symbol of the stock. Click the Fetch Market Data button.</li>
                    <li>Fill in the input fields in the second form.</li>
                    <ul className="Web-App-Description">
                        <li>Enter the initial stock holding in the portfolio.</li>
                        <li>Enter the strike price of the option.</li>
                        <li>Enter the market premium of the actively traded option.</li>
                        <li>Enter the quantity of the option that will be purchased.</li>
                        <li>Enter the exercise date for the option.</li>
                        <li>Enter the amount of cash available to invest.</li>
                        <li>Enter the number of trading day to be simulated.</li>
                    </ul>
                    <li>
                        Click the Run Simulation button to execute the Delta hedge simulation.<br/>Note: To execute the
                        Delta hedge simulation, the web-application has to successful retrieve the market data. 
                        Otherwise the Delta Hedge simulation cannot be executed. 
                    </li>
                </ol>
            </div>
            <div className="Delta-Hedge-web-app-description-container-2">
                <p className="Web-App-Description-3">
                    Note: Alpha Vantage has a limit of 25 API calls per-day. If the ticker symbol you entered is valid 
                    but the data request fails, it is possible that the daily API call limit was reached before your session.
                </p>
            </div>
        </div>
        <div className="Delta_Hedge_sim_App_container">
            <div className="Delta-Hedge-web-app-description-container">
                <p className="Web-App-Description-2">Web-Application</p>
            </div>

            {/* First Form: Fetch Market Data */}
            <form onSubmit={fetchMarketData}>
                <div className="Delta-Hedge-input-container">
                    <div className="Option-Input-Container-2">
                        <DeltaHedgeInputs
                            label={"Ticker Symbol"}
                            label_type={"text"}
                            id_name={"ticker_symbol"}
                            data={simulation_parameters.ticker_symbol}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter ticker symbol (e.g., MSFT)"}
                        ></DeltaHedgeInputs>

                        <button type="submit" className="Resume-btn-3" disabled={loading}>
                            {loading ? "Loading..." : "Fetch Market Data"}
                        </button>
                        {fetchError && (
                            <p className="Web-App-Description">
                                <font color="#880808">{fetchError}</font>
                            </p>
                        )}  
                    </div>
                </div>
            </form>

            {loading ? (<p className="loading-title">Loading...</p>) : ''}

            {latestInterestRate && (
                            <div className="Delta-Hedge-web-app-description-container">
                                <p className="Web-App-Description-2">
                                    Latest 1-YR Treasury Bill interest rate: {latestInterestRate.rate}% on {latestInterestRate.date}
                                </p>
                            </div>
                        )}
                        {latestStockPrice && (
                            <div className="Delta-Hedge-web-app-description-container">
                                <p className="Web-App-Description-2">
                                    Latest stock price for {simulation_parameters.ticker_symbol}: ${latestStockPrice.price} on {latestStockPrice.date}
                                </p>
                            </div>
            )}    

            {!simulation_parameters.maturation_date ? (<><br/><br/></>) : (<></>)}

            {/* Second Form: Simulation Parameters */}
            {simulation_parameters.maturation_date && calculateDaysBetweenDates(simulation_parameters.maturation_date)}
            <form onSubmit={delta_hedge_simulation}>
                <div className="Delta-Hedge-input-container">
                    <div className="Option-Input-Container-2">
                        <DeltaHedgeInputs
                            label={"Quantity of Stock"}
                            label_type={"number"}
                            id_name={"quantity_of_stock"}
                            data={simulation_parameters.quantity_of_stock}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter Initial stock holding"}
                        ></DeltaHedgeInputs>

                        <DeltaHedgeInputs
                            label={"Strike Price"}
                            label_type={"number"}
                            id_name={"strike_price"}
                            data={simulation_parameters.strike_price}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter strike price"}
                        ></DeltaHedgeInputs>
 
                        <DeltaHedgeInputs
                            label={"Option's Market Price"}
                            label_type={"number"}
                            id_name={"market_option_price"}
                            data={simulation_parameters.market_option_price}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter the Option's Market Price"}
                        ></DeltaHedgeInputs>

                        <DeltaHedgeInputs
                            label={"Quantity of Options"}
                            label_type={"number"}
                            id_name={"quantity_of_options"}
                            data={simulation_parameters.quantity_of_options}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter the desire quantity"}
                        ></DeltaHedgeInputs>

                        <div className="Option-Input">
                            <label htmlFor="maturation_date">{"Maturation Date (mm/dd/yyyy)"}</label>
                            <div className="Input-Wrapper-2">
                                <input
                                    type="date"
                                    id="maturation_date"
                                    name="maturation_date"
                                    value={simulation_parameters.maturation_date}
                                    onChange={handleInputChange}
                                    placeholder="select date"
                                ></input>
                            </div>
                        </div>
 
                        <DeltaHedgeInputs
                            label={"Cash Balance "}
                            label_type={"number"}
                            id_name={"cash_balance"}
                            data={simulation_parameters.cash_balance}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter Initial cash balance"}
                        ></DeltaHedgeInputs>

                        <DeltaHedgeInputs
                            label={"Number of Simulations"}
                            label_type={"number"}
                            id_name={"num_sim"}
                            data={simulation_parameters.num_sim}
                            onChangeValue={handleInputChange}
                            place_holder={"Enter desired number of simulations"}
                        ></DeltaHedgeInputs>


                        {errMessage == true && (
                            <>
                            <p className="Web-App-Description">
                                <font color="#880808">
                                    {(() => {
                                        switch (err_code) {
                                            case "Need_to_fetch_data":
                                                return "The user needs to fetch the data for the simulation, prior to its execution. Please select the desired stock by entering its ticker symbol into the field. Press the fetch button to fetch the stock data.";
                                            case "missing_fields":
                                                return "The simulation requires all parameters to run. Please fill in all fields.";
                                            case "invalid_input":
                                                return "One or more input values are invalid. Please check your entries.";
                                            case "too_many_sims":
                                                return `The Number of Simulations: ${temp_num_sim} days exceeds the ` 
                                                + `the days_since_epoch: ${days_since_epoch}. Please choose a number that is equal to` 
                                                + `or less than ${days_since_epoch}.`;
                                            case "server_error":
                                                return "An error occurred on the server. Please try again later.";
                                            case "invalid_time_span":
                                                return "Invalid time span generated. Please check the maturation date.";
                                            default:
                                                return "An unknown error occurred.";
                                        }
                                    })()}
                                </font>
                            </p>
                            </>
                        )}

                        {
                        

                        }
                    </div>
                    <button type="submit" className="Resume-btn-2" disabled={isSimulating}>
                        {isSimulating ? "Simulating..." : "Run Simulation"}
                    </button>
                    {isSimulating ? (<p className="loading-title">Loading...</p>) : ''}
                </div>
            </form>
        </div>
        
        
        {volume !== null && (
            <div className="Delta_Hedge_sim_App_container">
                <div className="Stock_chart_container">
                    <Stock_Chart
                        chartTitle={`GBM simulation of ${ticker}`}
                        chartDescription={`Geometric Brownian Motion simulation of ${ticker}.`}
                        xvalues={xvalues}
                        yvalues={gbm_path}
                    >
                    </Stock_Chart>
                </div>


                <div className="Delta-Hedge-web-app-description-container">
                    <p className="Web-App-Description-2">
                        Expected Return: {stock_parameters.has("Expected Return") ? stock_parameters.get("Expected Return") : "Value not found."}
                        <br/>
                        Historical Volatility: {stock_parameters.has("Historical Volatility") ? stock_parameters.get("Historical Volatility") : "Value not found."}
                        <br/>
                        CIR model parameters: [{cir_parameters.join(", ")}]
                        <br/>
                        {`Number of days between ${sim_parameters.has("Current date (Y-M-D)") ? sim_parameters.get("Current date (Y-M-D)") : "Value not found"} and ${sim_parameters.has(sim_parameters_headers[11]) ? sim_parameters.get(sim_parameters_headers[11]) : "Value not found."} is ${days_since_epoch} days.`}
                    </p>
                </div>

                <div className="hashmap-table-container">
                    <Display_hashmap
                        map={sim_parameters}
                        map_headers={sim_parameters_headers}
                        row_max={5}
                    ></Display_hashmap>
                </div>


                <div className="data-table-container">
                    <div className="table-container">
                        <DeltaHedgeDataDisplay
                            data={simulation_data}
                            headers={data_headers}
                            indexPresent={indexPresent}
                            indexPlace={indexPlace}
                        ></DeltaHedgeDataDisplay>
                    </div>
                </div>
            </div>
        )}
 
        {/*<div className="Delta_Hedge_sim_App_container">
            <TimeSpanCalculator></TimeSpanCalculator>
        </div>*/}
    </main>

    <Footer></Footer>
    </>
    );
}

export default Delta_Hedge_Simulation_App;