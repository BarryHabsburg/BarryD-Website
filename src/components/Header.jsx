import { Link } from 'react-router-dom';

function Header() {

    // Web-page that tested the Black-Scholes-Merton model Greek formulas
    /* <li><Link to="/BSMTest">BSM Test</Link></li> */

    return(
    <>
    <header>
        <div className="Nav-container">
            <h1 className="Head-title">Barry Daemi</h1>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/WebApps">Web Apps</Link></li>
                    <li><Link to="/AcademicInterests">Academic Interests</Link></li>
                    <li><Link to="/Donate">Donate</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        

    </header>
    </>
    );
}

export default Header;