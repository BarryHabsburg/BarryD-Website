import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AppIcon1 from '../assets/images/Option_Prcing_Web_App_Icon.webp';

function WebApps() {

    return (
    <>
        <Header></Header>

        <main>

        <div className="web-app-description-container">
            <h2>Web App Description</h2>
            <p className="Web-App-Description">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As aforemented on the home page, the Web App page will contain the completed and published web applications.
                These web applications will pertain to a specific research application.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first application is a web application
                that is based on the Black-Scholes-Merton model that prices European call and put options of a theoretical underlying asset. The coming second 
                web application will have a built-in API inquiry system that will be able request real-time stock data, so will be able to price European 
                call and put options for real-time stock exchanged securities.
                In addition, the second web application backend will have a Rust based-backend instead of the Javascript backend of the first web-application. 
            </p>
        </div>
        
        <div className="web-app-Container">
            <h2>Web Applications</h2>

            <div className="grid-auto-fit"> 
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
                                <img src={AppIcon1} alt="Option Pricing App logo" height="150px" width="150px"/>
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