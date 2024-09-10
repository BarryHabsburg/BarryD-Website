import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
    
    return (
    <>
        <Header></Header>

        <div className="web-app-description-container">
        <h2>Contact Page</h2>
            <p className="Web-App-Description">
                This page will be the dedicated contact page.
                <br/>As I have not developed the Rust backend for my website, this contact page
                will remain blank for now.
            </p>
        </div>
  
        <Footer></Footer>
    </>
    );
}

export default Contact;