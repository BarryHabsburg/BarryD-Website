import LinkedInLogo from '/social-09.svg';
import GitHubLogo from '/social-33.svg';


function Footer() {
    return (
    <>
    <footer>
        <hr />
        <div className="Footer-container">
            <div className="About-div">
                <h4>About Barry Daemi</h4>
                <p>This is a work portfolio webpage for Barry Daemi to store his public research and projects.</p>
                <p>&copy; {new Date().getFullYear()} Barry Daemi website.</p>
            </div>
            <div></div>
            <div className="About-div">
                <h4>social</h4>
                <div className="Link-wrapper"><img src={LinkedInLogo} width="20" alt="LinkedIn Logo" className="info-icon" />
                    <a href="https://www.linkedin.com/in/barry-daemi/" target="_blank" className="footer-link with-icon">LinkedIn</a>
                </div>

                <div className="Link-wrapper"><img src={GitHubLogo} width="20" alt="GitHub Logo" className="info-icon" />
                    <a href="https://github.com/BarryHabsburg" target="_blank" className="footer-link with-icon">Github</a>
                </div>

            </div>
        </div>
        
    </footer>
    </>
    );
}

export default Footer;