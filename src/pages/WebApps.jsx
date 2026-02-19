import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppIcon1 from '../assets/images/Option_Prcing_Web_App_Icon.webp';
import AppIcon2 from '../assets/images/Delta_Hedging_WebApp_Icon2.jpg';
 
function WebApps() {

    /*
    First Description (pertaining to the WebApp page):
    As aforemented on the home page, the Web App page will contain the completed and published web applications. 
    These web applications will pertain to a specific research application.
    The first application is a web application that is based on the Black-Scholes-Merton model that prices European call and put options of a theoretical underlying asset. 
    The coming second web application will have a built-in API inquiry system that will be able request real-time stock data, so will be able to price European call and put 
    options for real-time stock exchanged securities. In addition, the second web application backend will have a Rust based-backend instead of the Javascript backend of the 
    first web-application.
    */

    return (
    <>
        <Header></Header>

        <main>

        <div className="web-app-description-container">
            <h2>Web App Description</h2>
            <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As aforemented on the home page, the Web-App page will contain completed and published web-applications.
                These web-applications will pertain to specific research applications.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The <b>European Option Pricing App</b> is 
                a European option pricing web-application, that can price either a call or a put options of a non-dividend yielding financial instrument. 
                The web-application includes a table of the Call and Put Greeks, as well, as a Greeks plot to show the plausible evolution of the Greek measurement
                with change to the various dependent variables.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Delta Hedge Simulation App</b> is a web-application with a built-in Node.JS
                market data proxy server; it is capable of generating realistic simulations of the Delta Hedge trading strategy found in Black and Scholes 
                [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}}>1</a>] for 
                actively traded European call options of non-dividend yielding financial instruments. A Profit&Loss analysis will be added on a later date.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The coming third web-application will contain a Rust-based market data proxy server. In this third iteration,
                Monte Carlo methods will be leveraged so to price options for dividend yielding financial instruments. The web-application will include a Delta hedge simulation, 
                and perhaps, other hedging strategies simulations.
            </p>
        </div>
        
        <div className="web-app-Container">
            <h2>Web Applications</h2>

            <div className="Web-Applications-Container"> 
                <div className="External-app-Icon-Container">
                    <Link to="/Pricing_Option_App" className="App-Link">
                        <div className="App-Icon-Container">
                            <div className="App-img-container">
                                <img src={AppIcon1} alt="Option Pricing App logo" height="150px" width="150px"/>
                            </div>
                            <div>
                                <p className="App-title">European Option Pricing App<br/>By Barry Daemi</p>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="External-app-Icon-Container">
                    <Link to="/Delta_Hedge_Simulation_App" className="App-Link">
                        <div className="App-Icon-Container">
                            <div className="App-img-container">
                                <img src={AppIcon2} alt="Option Pricing App logo" height="150px" width="150px"/>
                            </div>
                            <div>
                                <p className="App-title">Delta Hedge Simulation App<br/>By Barry Daemi</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </div>


        </main>

        <Footer></Footer>#545455
    </>
    );
}

export default WebApps;