import { useState, useEffect } from 'react';
import { differenceInDays, parse } from 'date-fns';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Stock_Chart from '../components/Stock_Chart';
import DeltaHedgeInputs from '../components/DeltaHedgeInputs';
import DeltaHedgeDataDisplay from '../components/DeltaHedgeDataDisplay';
import valid_tickers from '../components/valid_tickers.json';

function Delta_Hedge_Simulation_App() {
    let ticker = "MSFT";

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

    const [interestRates, setInterestRates] = useState([]);
    const [stockData, setStockData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [latestInterestRate, setLatestInterestRate] = useState(null);
    const [latestStockPrice, setLatestStockPrice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isSimulating, setIsSimulating] = useState(false);

    const [volume, setVolume] = useState(null);
    const [errMessage, setErrMessage] = useState(null);
    const [err_code, setErr_code] = useState(null);
    const [days_since_epoch, setDays_since_epoch] = useState(0);

    const [simulation_data, setSimulation_data] = useState([]);
    const [sim_parameters, setSim_parameters] = useState(new Map());
    const [stock_parameters, setStock_parameters] = useState(new Map());
    const [cir_parameters, setCir_parameters] = useState([]);
    const [sim_parameters_headers, setSim_parameters_headers] = useState([]);
    const [gbm_path, setGbm_path] = useState([]);
    const [xvalues, setXvalues] = useState([]);

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'date' || value === '' || (!isNaN(value) && Number(value) >= 0) || (type === 'text' && name === 'ticker_symbol')) {
            setSimulation_parameters(prev => ({
                ...prev, [name]: value
            }));
        }
    };

    async function fetchMarketData(e) {
        e.preventDefault();
        setFetchError(null);
        setLoading(true);

        const validTickerSet = new Set(valid_tickers);
        if (!validTickerSet.has(simulation_parameters.ticker_symbol)) {
            setFetchError("Invalid ticker symbol. Please enter a supported ticker symbol from the list.");
            setLoading(false);
            return;
        }

        try {
            const [stockResult, interestResult] = await Promise.all([
                fetch(`https://tranquil-forest-11514-fbbb74e693fd.herokuapp.com/api/alpha-vantage?symbol=${simulation_parameters.ticker_symbol}`).then(res => res.json()),
                fetch('https://tranquil-forest-11514-fbbb74e693fd.herokuapp.com/api/fred').then(res => res.json())
            ]);
            setStockData(stockResult["Time Series (Daily)"] ? Object.entries(stockResult["Time Series (Daily)"]).map(([date, data]) => [new Date(date), parseFloat(data["4. close"])]) : []);
            const interestRateData = interestResult.observations
                ? interestResult.observations.map(observation => parseFloat(observation.value.trim())).filter(rate => !isNaN(rate))
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
        } catch (error) {
            setFetchError("Failed to fetch market data. Please check your proxy setup.");
        } finally {
            setLoading(false);
        }
    }

    function calculateExpectedReturn(prices) {
        if (prices.length < 2) return 0.0;
        const returns = prices.slice(1).map((_, i) => (prices[i + 1][1] - prices[i][1]) / prices[i][1]);
        return mean(returns) * 252;
    }

    function calculateHistoricalVolatility(prices) {
        if (prices.length < 2) return 0.0;
        const returns = prices.slice(1).map((_, i) => (prices[i + 1][1] - prices[i][1]) / prices[i][1]);
        return Math.sqrt(variance(returns)) * Math.sqrt(252);
    }

    function mean(data) {
        return data.reduce((sum, val) => sum + val, 0) / data.length;
    }

    function variance(data) {
        if (data.length < 2) return 0.0;
        const avg = mean(data);
        return data.reduce((sum, val) => sum + Math.pow(avg - val, 2), 0) / (data.length - 1);
    }

    const roundNum = (num, decimals) => Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);

    function linspace(lower_boundary, upper_boundary, num = 10, endpoint = true) {
        const step = (upper_boundary - lower_boundary) / (endpoint ? num - 1 : num);
        return Array.from({ length: num }, (_, i) => lower_boundary + step * i);
    }

    function Gauss_Legendre_Quadrature(f, a, b, n) {
        if (b < a) console.error("Gauss_Legendre_Quadrature Error: b < a.");
        if (n < 1) {
            console.error("Gauss_Legendre_Quadrature Error: The partition size must be greater than 1. Set to 10.");
            n = 10;
        }
        const xvals = linspace(a, b, n + 1);
        const scaled_h = (b - a) / (2 * n);
        let integrand = 0.0;
        const Legendre_roots = [-Math.sqrt((3 - 4 * Math.sqrt(0.3)) / 7), -Math.sqrt((3 + 4 * Math.sqrt(0.3)) / 7), Math.sqrt((3 - 4 * Math.sqrt(0.3)) / 7), Math.sqrt((3 + 4 * Math.sqrt(0.3)) / 7)];
        const Legendre_weights = [(18 + Math.sqrt(30)) / 36, (18 - Math.sqrt(30)) / 36, (18 + Math.sqrt(30)) / 36, (18 - Math.sqrt(30)) / 36];
        for (let i = 0; i < xvals.length - 1; i++) {
            const midpoint = (xvals[i] + xvals[i + 1]) / 2;
            for (let j = 0; j < Legendre_roots.length; j++) {
                integrand += Legendre_weights[j] * f(midpoint + scaled_h * Legendre_roots[j]);
            }
        }
        return scaled_h * integrand;
    }

    const Gcdf = (x) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
    const G = (x) => Gauss_Legendre_Quadrature(Gcdf, -1e5, x, 100000);

    function d_1(S, K, T, sigma, r) {
        return (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2) * T)) / (sigma * Math.sqrt(T));
    }

    function d_2(d1, sigma, T) {
        return d1 - sigma * Math.sqrt(T);
    }

    function BSM_Call_Opt_Val(S, K, T, sigma, r) {
        if (sigma <= 0 || T <= 0) return 0.0;
        const d1 = d_1(S, K, T, sigma, r);
        const d2 = d_2(d1, sigma, T);
        return Math.max(S * G(d1) - K * Math.exp(-r * T) * G(d2), 0.0);
    }

    function BSM_Put_Opt_Val(S, K, T, sigma, r) {
        if (sigma <= 0 || T <= 0) return 0.0;
        const d1 = d_1(S, K, T, sigma, r);
        const d2 = d_2(d1, sigma, T);
        return Math.max(K * Math.exp(-r * T) * G(-d2) - S * G(-d1), 0.0);
    }

    function Greek_Delta(S, K, T, sigma, r) {
        if (T <= 0 && S < K) return 0.0;
        if (T <= 0 && S > K) return 0.0;
        return G(d_1(S, K, T, sigma, r));
    }

    function polar_method(num_step) {
        const output = [];
        let i = 0;
        while (i < num_step) {
            const w1 = Math.random() * 2 - 1;
            const w2 = Math.random() * 2 - 1;
            const w = w1 * w1 + w2 * w2;
            if (w < 1) {
                const factor = Math.sqrt(-2 * Math.log(w) / w);
                output.push(w1 * factor);
                i++;
            }
        }
        return output;
    }

    function geometric_brownian_motion(S_0, exp_return, vol, num_step) {
        const dt = 1 / 252.0;
        let S_t = S_0;
        const norm_rv = polar_method(num_step - 1);
        const gbm_path = [S_0];
        for (let i = 0; i < num_step - 1; i++) {
            S_t *= Math.exp((exp_return - 0.5 * vol) * dt + Math.sqrt(vol) * norm_rv[i] * Math.sqrt(dt));
            gbm_path.push(S_t);
        }
        return gbm_path;
    }

    function CIR_model(interest_rate, a, b, sigma, n) {
        let r_t = interest_rate;
        const dt = 0.01;
        const cir_path = [r_t];
        const norm_rv = polar_method(n - 1);
        for (let i = 0; i < n - 1; i++) {
            const drift = a * (b - r_t);
            const diffusion = sigma * Math.sqrt(r_t);
            r_t += drift * dt + diffusion * Math.sqrt(dt) * norm_rv[i];
            cir_path.push(r_t);
        }
        return cir_path;
    }

    function estimate_cir_parameters(historical_data) {
        const sample_mean = mean(historical_data);
        const sample_variance = variance(historical_data);
        const temp_array = historical_data.slice(0, -1).map((_, i) => (historical_data[i + 1] - sample_mean) * (historical_data[i] - sample_mean));
        const sample_autocovariance = mean(temp_array);
        const a = sample_autocovariance <= 0 || sample_variance <= 0 ? 0.0 : -Math.log(sample_autocovariance / sample_variance);
        const b = sample_mean;
        const sigma = Math.sqrt((2 * a * sample_variance) / b);
        return [a, b, sigma];
    }

    function TimeSpan_Calculator(datestr) {
        const current_Date = new Date();
        const maturation_Date = parse(datestr, "yyyy-MM-dd", new Date());
        const daysSinceEpoch = differenceInDays(maturation_Date, current_Date);
        setDays_since_epoch(daysSinceEpoch);
        const endTime = 0.0001;
        const time_to_maturity = daysSinceEpoch / 365.0;
        const rawTimespan = linspace(time_to_maturity, endTime, daysSinceEpoch);
        return rawTimespan.map(time => roundNum(time, 4));
    }

    function calculateDaysBetweenDates(maturationDateStr) {
        const currentDate = new Date();
        const maturationDate = parse(maturationDateStr, "yyyy-MM-dd", new Date());
        const numberOfDays = differenceInDays(maturationDate, currentDate);
        const formattedCurrentDate = currentDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        const formattedMaturationDate = maturationDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
        return (
            <p className="Web-App-Description">
                The number of days between {formattedCurrentDate} and {formattedMaturationDate} is{" "}
                {numberOfDays} days.
            </p>
        );
    }

    const runSimulationLogic = () => {
        const time_span = TimeSpan_Calculator(simulation_parameters.maturation_date);
        const end_time = 0.0001;
        const today = new Date().toISOString().split('T')[0];

        if (Number(simulation_parameters.num_sim) > days_since_epoch || Number(simulation_parameters.num_sim) <= 0) {
            setErrMessage(true);
            setErr_code("too_many_sims");
            return;
        }

        const length = Number(simulation_parameters.cash_balance);
        const width = Number(simulation_parameters.market_option_price);
        const height = Number(simulation_parameters.quantity_of_stock);
        const calculatedVolume = length * width * height;
        setVolume(calculatedVolume);

        let stock_price = latestStockPrice ? latestStockPrice.price : 408.43;
        const commision_cost = 5.0;

        let exp_return = stockData.length > 1 ? calculateExpectedReturn(stockData) : 0.1786432320;
        let historical_volatility = stockData.length > 1 ? calculateHistoricalVolatility(stockData) : 0.2321576690;

        const number_of_steps = Number(simulation_parameters.num_sim);
        const sim_length = number_of_steps === days_since_epoch ? number_of_steps - 1 : number_of_steps;
        const x_values = Array.from({ length: number_of_steps }, (_, i) => i + 1);
        setXvalues(x_values);

        let iter_array = [];
        let storage_array = [];
        const strike_price = Number(simulation_parameters.strike_price);
        let delta = 0.0;
        let delta_old = 0.0;
        let quantity_of_stock = Number(simulation_parameters.quantity_of_stock);
        let quantity_of_options = Number(simulation_parameters.quantity_of_options);
        let BSM_option_price = 0.0;
        let order_quantity = 0.0;
        let cash_balance = Number(simulation_parameters.cash_balance);
        let Adjustment_Cashflow = 0.0;

        let liabilities = -1.0 * (commision_cost + quantity_of_options * simulation_parameters.market_option_price * 100.0);
        let assets = stock_price * quantity_of_stock + quantity_of_options * simulation_parameters.market_option_price * 100.0;
        cash_balance += liabilities;

        const initialInterestRate = interestRates.length >= 252 
            ? interestRates[interestRates.length - 1] 
            : (interestRates.length > 0 ? interestRates[interestRates.length - 1] : 0.0405);
        let implied_volatility = historical_volatility;
        let cir_parameters = interestRates.length > 0 ? estimate_cir_parameters(interestRates) : [0.0070022575196388446, 0.044112698412698416, 0.0022277959040571033];
        let sim_stock_prices = geometric_brownian_motion(stock_price, exp_return, historical_volatility, number_of_steps);
        setGbm_path(sim_stock_prices);
        let cir_interest_rates = CIR_model(initialInterestRate, cir_parameters[0], cir_parameters[1], cir_parameters[2], number_of_steps);

        let map_headers = [
            "quantity of stock", "Current stock price ($)", "Strike Price ($)", "Historical Volatility",
            "Implied Volatility", "Risk-free interest", "Market Option price", "BSM Option price ($)",
            "quantity of options", "Option Delta", "Current date (Y-M-D)", `Maturation date (Y-M-D) (T=${time_span[0]})`,
            "Time (days)", "Liabilities ($)", "Assets ($)", "Cash Balance"
        ];

        let sim_parameters = new Map();
        sim_parameters.set("quantity of stock", quantity_of_stock);
        sim_parameters.set("Current stock price ($)", stock_price);
        sim_parameters.set("Strike Price ($)", strike_price);
        sim_parameters.set("Historical Volatility", historical_volatility.toFixed(4));
        sim_parameters.set("Implied Volatility", implied_volatility.toFixed(4));
        sim_parameters.set("Risk-free interest", initialInterestRate.toFixed(4));
        sim_parameters.set("Market Option price", simulation_parameters.market_option_price);
        sim_parameters.set("BSM Option price ($)", BSM_Call_Opt_Val(sim_stock_prices[0], strike_price, time_span[0], implied_volatility, cir_interest_rates[0]).toFixed(2));
        sim_parameters.set("quantity of options", quantity_of_options);
        sim_parameters.set("Option Delta", Greek_Delta(sim_stock_prices[0], strike_price, time_span[0], implied_volatility, cir_interest_rates[0]).toFixed(4));
        sim_parameters.set("Current date (Y-M-D)", today);
        sim_parameters.set(`Maturation date (Y-M-D) (T=${time_span[0]})`, simulation_parameters.maturation_date);
        sim_parameters.set("Time (days)", days_since_epoch);
        sim_parameters.set("Liabilities ($)", liabilities.toFixed(2));
        sim_parameters.set("Assets ($)", assets.toFixed(2));
        sim_parameters.set("Cash Balance", cash_balance.toFixed(2));

        let stock_para = new Map();
        stock_para.set("Expected Return", exp_return.toFixed(4));
        stock_para.set("Historical Volatility", historical_volatility.toFixed(4));

        setSim_parameters(sim_parameters);
        setSim_parameters_headers(map_headers);
        setStock_parameters(stock_para);
        setCir_parameters(cir_parameters);

        for (let i = 0; i < number_of_steps; i++) {
            iter_array.push(i);
            iter_array.push(time_span[i]);
            BSM_option_price = BSM_Call_Opt_Val(sim_stock_prices[i], strike_price, time_span[i], implied_volatility, cir_interest_rates[i]);
            iter_array.push(BSM_option_price.toFixed(2));
            iter_array.push(sim_stock_prices[i].toFixed(2));
            delta = Greek_Delta(sim_stock_prices[i], strike_price, time_span[i], implied_volatility, cir_interest_rates[i]);
            iter_array.push(delta.toFixed(4));

            if (delta > delta_old && i !== sim_length) {
                if (i === 0 && quantity_of_stock !== 0) {
                    order_quantity = Math.round(quantity_of_options * 100.0 * (delta - delta_old)) - quantity_of_stock;
                    quantity_of_stock += order_quantity;
                } else {
                    order_quantity = Math.round(quantity_of_options * 100.0 * (delta - delta_old));
                    quantity_of_stock += order_quantity;
                }
                iter_array.push(quantity_of_stock);
                assets = sim_stock_prices[i] * quantity_of_stock + quantity_of_options * BSM_option_price * 100.0;
                if (order_quantity === 0) {
                    iter_array.push("No order");
                    iter_array.push(0.0);
                    iter_array.push(cash_balance.toFixed(2));
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                } else {
                    iter_array.push(`Buy ${order_quantity}`);
                    Adjustment_Cashflow = -1.0 * (sim_stock_prices[i] * order_quantity + commision_cost);
                    iter_array.push(Adjustment_Cashflow.toFixed(2));
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance.toFixed(2));
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                }
                delta_old = delta;
            } else if (delta < delta_old && i !== sim_length) {
                if (i === 0 && quantity_of_stock !== 0) {
                    order_quantity = Math.round(quantity_of_options * 100.0 * (delta_old - delta)) - quantity_of_stock;
                    quantity_of_stock = Math.max(quantity_of_stock - order_quantity, 0);
                } else {
                    order_quantity = Math.round(quantity_of_options * 100.0 * (delta_old - delta));
                    quantity_of_stock = Math.max(quantity_of_stock - order_quantity, 0);
                }
                iter_array.push(quantity_of_stock);
                assets = sim_stock_prices[i] * quantity_of_stock + quantity_of_options * BSM_option_price * 100.0;
                if (order_quantity === 0) {
                    iter_array.push("No order");
                    iter_array.push(0.0);
                    iter_array.push(cash_balance.toFixed(2));
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                } else {
                    iter_array.push(`Sell ${order_quantity}`);
                    Adjustment_Cashflow = sim_stock_prices[i] * order_quantity - commision_cost;
                    iter_array.push(Adjustment_Cashflow.toFixed(2));
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance.toFixed(2));
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                }
                delta_old = delta;
            }

            if (i === sim_length && Math.abs(roundNum(time_span[i], 4) - end_time) < 0.00001) {
                if (sim_stock_prices[i] > strike_price) {
                    order_quantity = quantity_of_options * 100.0;
                    quantity_of_stock += order_quantity;
                    assets = sim_stock_prices[i] * quantity_of_stock;
                    iter_array.push(quantity_of_stock);
                    iter_array.push(`Exercised call options! Buy ${order_quantity}`);
                    Adjustment_Cashflow = -1.0 * (strike_price * order_quantity + commision_cost);
                    iter_array.push(Adjustment_Cashflow.toFixed(2));
                    cash_balance += Adjustment_Cashflow;
                    iter_array.push(cash_balance.toFixed(2));
                    liabilities += Adjustment_Cashflow;
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                } else if (sim_stock_prices[i] < strike_price) {
                    iter_array.push(quantity_of_stock);
                    iter_array.push(`Did not exercise Call options. No order.`);
                    iter_array.push(0.0);
                    iter_array.push(cash_balance.toFixed(2));
                    assets = sim_stock_prices[i] * quantity_of_stock;
                    iter_array.push(assets.toFixed(2));
                    iter_array.push(liabilities.toFixed(2));
                }
            }
            storage_array.push([...iter_array]);
            iter_array = [];
        }
        setSimulation_data(storage_array);
    };

    const delta_hedge_simulation = (e) => {
        e.preventDefault();
        setIsSimulating(true);
        setErrMessage(null);
        setErr_code(null);

        // Validate data fetch
        if (stockData.length === 0 || interestRates.length === 0) {
            setErrMessage(true);
            setErr_code("Need_to_fetch_data");
            setIsSimulating(false);
            return;
        }

        // Validate all required fields
        if (!simulation_parameters.quantity_of_stock || !simulation_parameters.strike_price || 
            !simulation_parameters.market_option_price || !simulation_parameters.maturation_date || 
            !simulation_parameters.cash_balance || !simulation_parameters.num_sim) {
            setErrMessage(true);
            setErr_code("missing_fields");
            setIsSimulating(false);
            return;
        }

        // Run the simulation logic asynchronously to allow UI to update
        setTimeout(() => {
            try {
                runSimulationLogic();
            } catch (error) {
                console.error("Simulation error:", error);
                setErrMessage(true);
                setErr_code("simulation_failed");
            } finally {
                setIsSimulating(false);
            }
        }, 0);
    };

    const data_headers = [
        'Index', 'Time', 'Option Price ($)', 'Stock Price ($)', 'Delta', 'Qty of Stock',
        'Orders', 'Cashflow Adjustment ($)', 'Cash Balance ($)', 'Assets ($)', 'Liabilities ($)'
    ];
    const indexPresent = true;
    const indexPlace = 0;

    return (
        <>
            <Header />
            <main>
                <div className="Delta_Hedge_sim_App_container">
                    <div className="Delta-Hedge-web-app-description-container">
                        <p className="Web-App-Description-2">Description: (Delta Hedge simulation description)</p>
                    </div>
                </div>
                <div className="Delta_Hedge_sim_App_container">
                    <div className="Delta-Hedge-web-app-description-container">
                        <p className="Web-App-Description-2">Web-Application</p>
                    </div>
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
                                />
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
                    {loading && <p className="loading-title">Loading...</p>}
                    {latestInterestRate && (
                        <p className="Web-App-Description">
                            Latest 1-YR Treasury Bill interest rate: {latestInterestRate.rate}% on {latestInterestRate.date}
                        </p>
                    )}
                    {latestStockPrice && (
                        <p className="Web-App-Description">
                            Latest stock price for {simulation_parameters.ticker_symbol}: ${latestStockPrice.price} on {latestStockPrice.date}
                        </p>
                    )}
                    {!simulation_parameters.maturation_date && <><br /><br /></>}

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
                                />
                                <DeltaHedgeInputs
                                    label={"Strike Price"}
                                    label_type={"number"}
                                    id_name={"strike_price"}
                                    data={simulation_parameters.strike_price}
                                    onChangeValue={handleInputChange}
                                    place_holder={"Enter strike price"}
                                />
                                <DeltaHedgeInputs
                                    label={"Option's Market Price"}
                                    label_type={"number"}
                                    id_name={"market_option_price"}
                                    data={simulation_parameters.market_option_price}
                                    onChangeValue={handleInputChange}
                                    place_holder={"Enter the Option's Market Price"}
                                />
                                <DeltaHedgeInputs
                                    label={"Quantity of Options"}
                                    label_type={"number"}
                                    id_name={"quantity_of_options"}
                                    data={simulation_parameters.quantity_of_options}
                                    onChangeValue={handleInputChange}
                                    place_holder={"Enter the desired quantity"}
                                />
                                <div className="Option-Input">
                                    <label htmlFor="maturation_date">Maturation Date (mm/dd/yyyy)</label>
                                    <div className="Input-Wrapper-2">
                                        <input
                                            type="date"
                                            id="maturation_date"
                                            name="maturation_date"
                                            value={simulation_parameters.maturation_date}
                                            onChange={handleInputChange}
                                            placeholder="select date"
                                        />
                                    </div>
                                </div>
                                <DeltaHedgeInputs
                                    label={"Cash Balance"}
                                    label_type={"number"}
                                    id_name={"cash_balance"}
                                    data={simulation_parameters.cash_balance}
                                    onChangeValue={handleInputChange}
                                    place_holder={"Enter Initial cash balance"}
                                />
                                <DeltaHedgeInputs
                                    label={"Number of Simulations"}
                                    label_type={"number"}
                                    id_name={"num_sim"}
                                    data={simulation_parameters.num_sim}
                                    onChangeValue={handleInputChange}
                                    place_holder={"Enter desired number of simulations"}
                                />
                                {isSimulating && <p className="loading-title">Loading...</p>}
                                {errMessage && (
                                    <p className="Web-App-Description">
                                        <font color="#880808">
                                            {(() => {
                                                switch (err_code) {
                                                    case "Need_to_fetch_data":
                                                        return "Please fetch market data first.";
                                                    case "missing_fields":
                                                        return "Please fill in all fields.";
                                                    case "too_many_sims":
                                                        return `Number of simulations (${simulation_parameters.num_sim}) exceeds days since epoch (${days_since_epoch}). Choose a number less than or equal to ${days_since_epoch}.`;
                                                    case "simulation_failed":
                                                        return "Simulation failed due to an unexpected error.";
                                                    default:
                                                        return "An unknown error occurred.";
                                                }
                                            })()}
                                        </font>
                                    </p>
                                )}
                            </div>
                            <button type="submit" className="Resume-btn-2" disabled={isSimulating}>
                                {isSimulating ? "Simulating..." : "Run Simulation"}
                            </button>
                        </div>
                    </form>
                </div>
                {volume !== null && (
                    <div className="Delta_Hedge_sim_App_container">
                        <p>Things</p>
                        <div className="Stock_chart_container">
                            <Stock_Chart
                                chartTitle={`GBM simulation of ${ticker}`}
                                chartDescription={`Geometric Brownian Motion simulation of ${ticker}.`}
                                xvalues={xvalues}
                                yvalues={gbm_path}
                            />
                        </div>
                        <div className="Delta-Hedge-web-app-description-container">
                            <p className="Web-App-Description-2">
                                Expected Return: {stock_parameters.get("Expected Return") || "Value not found."}<br />
                                Historical Volatility: {stock_parameters.get("Historical Volatility") || "Value not found."}<br />
                                CIR model parameters: [{cir_parameters.join(", ")}]<br />
                                Number of days between {sim_parameters.get("Current date (Y-M-D)") || "Value not found"} and {sim_parameters.get(sim_parameters_headers[11]) || "Value not found"} is {days_since_epoch} days.
                            </p>
                        </div>
                        <div className="hashmap-table-container">
                            <DeltaHedgeDataDisplay
                                map={sim_parameters}
                                map_headers={sim_parameters_headers}
                                row_max={5}
                            />
                        </div>
                        <div className="data-table-container">
                            <div className="table-container">
                                <DeltaHedgeDataDisplay
                                    data={simulation_data}
                                    headers={data_headers}
                                    indexPresent={indexPresent}
                                    indexPlace={indexPlace}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default Delta_Hedge_Simulation_App;