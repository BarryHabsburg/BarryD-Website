import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
                that is based on the Black-Schole-Merton model that prices European call and put options for a theoretical underlying asset. The coming second 
                web application will have a built-in API inquiry system to request real stock data, it will be able to price call and put options for stockexchanged securities. 
                It backend will also be a Rust based-backend, instead of the Javascript backend of the first web-application. 
            </p>
        </div>
        
        <div className="web-app-Container">
            <h2>Web Applications</h2>

            <div className="External-app-Icon-Container">
                <Link to="/Pricing_Option_App" className="App-Link">
                    <div className="App-Icon-Container">
                        <div className="App-img-container">
                            <img src="./src/assets/images/Option_Prcing_Web_App_Icon.webp" alt="Option Pricing App logo" height="150px" width="150px"/>
                        </div>
                        <div>
                            <p className="App-title">Option Pricing App<br/>By Barry Daemi</p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>


        </main>

        <Footer></Footer>#545455
    </>
    );
}

export default WebApps;