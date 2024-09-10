import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import GreeksChart from "../components/GreeksChart";

function BSMTest() {

    /* x_axis={selectedOption}
    xvalue={x_values}
    yvalue1={Delta_values}
    yvalue2={Gamma_values}
    yvalue3={Theta_values}
    yvalue4={Rho_values}
    yvalue5={Vega_values} */

    const [Curr_Asset_Price, setCurr_Asset_Price] = useState(100.00);
    const [Strike_Price, setStrike_Price] = useState(120.00);
    const [Time_to_Maturate, setTime_to_Maturate] = useState(1.00);
    const [Vol, setVol] = useState(0.50);
    const [Risk_free_rate, setRisk_free_rate] = useState(0.050);
    const [Valuation_date, setValuation_date] = useState(0.00);
    const [x_values, setX_values] = useState([]);
    const [Delta_values, setDelta_values] = useState([]);
    const [Gamma_values, setGamma_values] = useState([]);
    const [Theta_values, setTheta_values] = useState([]);
    const [Rho_values, setRho_values] = useState([]);
    const [Vega_values, setVega_values] = useState([]);
    const [Delta_Put_values, setDelta_Put_values] = useState([]);
    const [Theta_Put_values, setTheta_Put_values] = useState([]);
    const [Rho_Put_values, setRho_Put_values] = useState([]);
    const [loading, setLoading] = useState(false);

    function linspace(lower_boundary, upper_boundary, num=10, endpoint=true) {
        const array = [];
        const step_size = (upper_boundary-lower_boundary)/(endpoint ? num-1 : num);

        for (let i = 0; i < num; i++) {
            array.push(roundValue(lower_boundary+step_size*i));
        }
        return array;
    }

    let new_x_values;
    let new_y_values;
    const [selectedOption, setSelectedOption] = useState("");
    const Option = (e) => {
        const selectedValue=e.target.value
        setSelectedOption(selectedValue)
        
        setLoading(true);
        switch (selectedValue) {
            case "Current Asset Price":
                setTimeout(() => { 
                console.log("Option 1 was selected.");

                new_x_values = linspace(Curr_Asset_Price-50, Curr_Asset_Price+50, 100);
                setX_values(new_x_values);
                
                new_y_values = new_x_values.map(element => Delta(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate));
                setDelta_values(new_y_values);

                new_y_values = new_x_values.map(element => Gamma(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setGamma_values(new_y_values);

                new_y_values = new_x_values.map(element => Delta_Full(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setTheta_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setRho_values(new_y_values);

                new_y_values = new_x_values.map(element => Vega(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setVega_values(new_y_values);
                
                new_y_values = new_x_values.map(element => Delta_Put(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setDelta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta_Put(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setTheta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho_Put(element, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setRho_Put_values(new_y_values);

                setLoading(false); }, 200);
                break;
            case "Strike Price":
                setTimeout(() => { 
                console.log("Option 2 was selected.");
                setX_values([]);
                setDelta_values([]);
                setGamma_values([]);
                setTheta_values([]);
                setRho_values([]);
                setVega_values([]);
                setDelta_Put_values([]);
                setTheta_Put_values([]);
                setRho_Put_values([]);

                new_x_values = linspace(Strike_Price-50, Strike_Price+50, 100);
                setX_values(new_x_values);

                new_y_values = new_x_values.map(element => Delta(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate));
                setDelta_values(new_y_values);

                new_y_values = new_x_values.map(element => Gamma(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setGamma_values(new_y_values);

                new_y_values = new_x_values.map(element => Delta_Full(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setTheta_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setRho_values(new_y_values);

                new_y_values = new_x_values.map(element => Vega(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setVega_values(new_y_values);
                
                new_y_values = new_x_values.map(element => Delta_Put(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setDelta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta_Put(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setTheta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho_Put(Curr_Asset_Price, element, Time_to_Maturate, Vol, Risk_free_rate, Valuation_date));
                setRho_Put_values(new_y_values);

                setLoading(false); }, 200);
                break;
            case "Time to Maturity":
                setTimeout(() => { 
                console.log("Option 3 was selected.");
                setX_values([]);
                setDelta_values([]);
                setGamma_values([]);
                setTheta_values([]);
                setRho_values([]);
                setVega_values([]);
                setDelta_Put_values([]);
                setTheta_Put_values([]);
                setRho_Put_values([]);

                new_x_values = linspace((Time_to_Maturate-1) < 0 ? 0 : Time_to_Maturate-1, Time_to_Maturate+1, 100);
                setX_values(new_x_values);

                new_y_values = new_x_values.map(element => Delta(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate));
                setDelta_values(new_y_values);

                new_y_values = new_x_values.map(element => Gamma(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setGamma_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setTheta_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setRho_values(new_y_values);

                new_y_values = new_x_values.map(element => Vega(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setVega_values(new_y_values);
                
                new_y_values = new_x_values.map(element => Delta_Put(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setDelta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta_Put(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setTheta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho_Put(Curr_Asset_Price, Strike_Price, element, Vol, Risk_free_rate, Valuation_date));
                setRho_Put_values(new_y_values);

                setLoading(false); }, 200);
                break;
            case "Volatility of the asset":
                setTimeout(() => {
                console.log("Option 4 was selected.");
                setX_values([]);
                setDelta_values([]);
                setGamma_values([]);
                setTheta_values([]);
                setRho_values([]);
                setVega_values([]);
                setDelta_Put_values([]);
                setTheta_Put_values([]);
                setRho_Put_values([]);

                new_x_values = linspace((Vol-1) < 0 ? 0 : Vol-1, Vol+1, 100);
                setX_values(new_x_values);

                new_y_values = new_x_values.map(element => Delta(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate));
                setDelta_values(new_y_values);

                new_y_values = new_x_values.map(element => Gamma(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setGamma_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setTheta_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setRho_values(new_y_values);

                new_y_values = new_x_values.map(element => Vega(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setVega_values(new_y_values);
                
                new_y_values = new_x_values.map(element => Delta_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setDelta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setTheta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, element, Risk_free_rate, Valuation_date));
                setRho_Put_values(new_y_values);

                setLoading(false); }, 200);
                break;
            case "Risk-Free interest rate":
                setTimeout(() => {
                console.log("Option 5 was selected.");
                setX_values([]);
                setDelta_values([]);
                setGamma_values([]);
                setTheta_values([]);
                setRho_values([]);
                setVega_values([]);
                setDelta_Put_values([]);
                setTheta_Put_values([]);
                setRho_Put_values([]);

                new_x_values = linspace((Risk_free_rate-0.1) < 0 ? 0 : Risk_free_rate-0.1, Vol+0.1, 100);
                setX_values(new_x_values);

                new_y_values = new_x_values.map(element => Delta(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element));
                setDelta_values(new_y_values);

                new_y_values = new_x_values.map(element => Gamma(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setGamma_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setTheta_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setRho_values(new_y_values);

                new_y_values = new_x_values.map(element => Vega(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setVega_values(new_y_values);
                
                new_y_values = new_x_values.map(element => Delta_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setDelta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Theta_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setTheta_Put_values(new_y_values);

                new_y_values = new_x_values.map(element => Rho_Put(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, element, Valuation_date));
                setRho_Put_values(new_y_values);

                setLoading(false); }, 200);
                break;
            default:
                console.log("No options are selected. Please select an option.")
        }
    
    };

    // Function to rerun the selected option's action
    const handleRerun = () => {
        if (selectedOption) {
            Option({ target: { value: selectedOption } });
        } 
    };

    // let Curr_Asset_Price = 100.0000;
    // let Strike_Price = 100.0000;
    // let Time_to_Maturate = 1.0000;
    // let vol = 0.2000;
    // let risk_free_rate = 0.0500;

    function CompositeTrapezoidRule(f, a, b, n) {
        
        if (b < a) {
            console.error("Error: b < a.");
        } 
        if (n < 1) {
            console.error("Error: The partition size must be greater than 1."
                + "\nPartition size set to 10.");
            n=10;
        }

        const h=(b-a)/n;

        let sum=0;
        for (let i = 1; i < n; i++) {
            sum+=2*f(a+i*h);
        }

        const integral=(h/2)*(f(a)+f(b)+sum);
        // console.log("n: " + n + "  " + "Integral: " + integral);
        return integral;
    }

    /* Text example code to test CompositeTr
    const f = (x) => -1 * x ** 2 + 10;
    const a = -6;
    const b = 6;
    const n = 10000;

    const result = CompositeTrapezoidRule(f, a, b, n);
    console.log("Result of the integral:", result);
    */

    // Gaussian cumulative distribution function
    const mean = 0; const std = 1;
    const Gcdf = (x,mu,sigma) => (1/(sigma*Math.sqrt(2*Math.PI)))*Math.exp((-1/2)*Math.pow((x-mu)/sigma, 2));
    /* function Gcdf (x, mu, sigma) {
        return (sigma/(1*Math.sqrt(2*Math.PI)))*Math.exp((-1/2)*Math.pow((x-mu)/sigma, 2));
    } */
    const G = x => Gcdf(x, mean, std);

    function d_1(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate) {
        return (Math.log(Curr_Asset_Price/Strike_Price)+(Risk_free_rate+0.5*Math.pow(Vol, 2)*Time_to_Maturate))/(Vol*Math.sqrt(Time_to_Maturate)); // right boundary
    }

    function d_2(d1, Vol, Time_to_Maturate) {
        return (d1-Vol*Math.sqrt(Time_to_Maturate));
    }

    function BSM_Call_Opt_Val(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate) {
        // d1 and d2 of the Black-Schole equation for pricing for Euro Options
        const d1 = d_1(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate)
        const d2 = d_2(d1, Vol, Time_to_Maturate);

        // Probabilities of d1 and d2; note Gaussian Cdf(d1) is Greek Delta, e.g., prob1 = Greek_Delta for Euro Call Option
        const prob1 = CompositeTrapezoidRule(G, -10, d1, 10000);
        const prob2 = CompositeTrapezoidRule(G, -10, d2, 10000);

        return Curr_Asset_Price*prob1-Strike_Price*Math.exp(-Risk_free_rate*Time_to_Maturate)*prob2;
    }

    function BSM_Put_Opt_Val(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate) {
        // d1 and d2 of the Black-Schole equation for pricing for Euro Options
        const d1 = d_1(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate);
        const d2 = d_2(d1, Vol, Time_to_Maturate);

        // Probabilities of -d2 and -d1; prob3 = Greek_Delta for Euro Put Option
        let prob3 = CompositeTrapezoidRule(G, -10, -d2, 10000);
        let prob4 = CompositeTrapezoidRule(G, -10, -d1, 10000);

        return (Strike_Price*Math.exp(-Risk_free_rate*Time_to_Maturate)*prob3)-Curr_Asset_Price*prob4;
    }
    
    // d1 and d2 of the Black-Schole equation for pricing for Euro Call Options
    let d1 = d_1(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate);
    let d2 = d_2(d1, Vol, Time_to_Maturate);

    // Price of Euro Call Option
    let call_value = BSM_Call_Opt_Val(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate);
    
    // Price of Euro Put Option
    let put_value = BSM_Put_Opt_Val(Curr_Asset_Price, Strike_Price, Time_to_Maturate, Vol, Risk_free_rate);

    const roundValue = (value) => {
        return Math.round(value * 100) / 100; // Rounds to 2 decimal places
    };

    // Call Greeks
    function Delta(S, K, T, sigma, r) {
        return CompositeTrapezoidRule(G, -10, d_1(S, K, T, sigma, r), 10000);
    }

    function Delta_Full(S, K, T, sigma, r) {
        return CompositeTrapezoidRule(G, -10, d_1(S, K, T, sigma, r), 10000)+S*G(d_1(S, K, T, sigma, r))*(1/(S*sigma*Math.sqrt(T)))-
        K*Math.exp(-r*T)*G(d_2(d_1(S, K, T, sigma, r), sigma, T))*(1/(S*sigma*Math.sqrt(T)));
    }

    function Gamma(S, K, T, sigma, r, t) {
        return G(d_1(S, K, T, sigma, r))/(S*sigma*Math.sqrt(T-t));
    }

    function Theta(S, K, T, sigma, r, t) {
        return -((S*G(d1)*sigma)/(2*Math.sqrt(T-t)))-r*K*Math.exp(-r*(T-t))
        *CompositeTrapezoidRule(G, -10, d_2(d_1(S, K, T, sigma, r), sigma, T), 10000);
    }

    function Rho(S, K, T, sigma, r, t) {
        const prob2 = CompositeTrapezoidRule(G, -10, d_2(d_1(S, K, T, sigma, r), sigma, T), 10000);

        return K*(T-t)*Math.exp(-r*(T-t))*prob2;
    }

    function Vega(S, K, T, sigma, r, t) {
        return S*G(d_1(S, K, T, sigma, r))*Math.sqrt(T-t);
    }

    // Put Greeks
    function Delta_Put(S, K, T, sigma, r) {
        return -G(-d_1(S,K,T,sigma, r));
    }

    function Theta_Put(S, K, T, sigma, r, t) {
        return -((S*G(d1)*sigma)/(2*Math.sqrt(T-t)))+r*K*Math.exp(-r*(T-t))*
        CompositeTrapezoidRule(G, -10, -d_2(d_1(S, K, T, sigma, r), sigma, T), 10000);
    }

    function Rho_Put(S, K, T, sigma, r, t) {
        const prob3 = CompositeTrapezoidRule(G, -10, -d_2(d_1(S, K, T, sigma, r), sigma, T), 10000);

        return -K*T*Math.exp(-r*(T-t))*prob3;
    }

    return (
    <>
    <Header></Header>

    <div className="Option_Selector_Container">
        <label htmlFor="options">Choose an option:</label>
        <select id="options" value={selectedOption} onChange={Option}>
            <option value="" disabled>
            --Select an option--
            </option>
            <option value="Current Asset Price">Current Asset Price</option>
            <option value="Strike Price">Strike Price</option>
            <option value="Time to Maturity">Time to Maturity</option>
            <option value="Volatility of the asset">Volatility</option>
            <option value="Risk-Free interest rate">Risk-free interest rate</option>
        </select>
        {/* Button to rerun the selected option */}
        <button onClick={handleRerun} disabled={!selectedOption}>
            {loading ? 'Loading...' : 'Rerun Selected Option'}
        </button>
        <p>You selected: {selectedOption}</p>
        {loading ? (<p className="loading-title">Loading...</p>) : ''}
    </div>

    <GreeksChart
        chartTitle={"Call Option Greeks"}
        chartDescription = {`The following chart displays the Call options greeks behavior as the ${selectedOption} varies.`}
        x_axis={selectedOption}
        xvalue={x_values}
        yvalue1={Delta_values}
        yvalue2={Gamma_values}
        yvalue3={Theta_values}
    ></GreeksChart>

    <Footer></Footer>
    </>
    );
}

export default BSMTest;