import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message_subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const CaptureMessage = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        setSubmitted(true);
    };
    
    return (
    <>
        <Header></Header>

        <div className="web-app-description-container">
        <h2>Contact Page</h2>
            <p className="Web-App-Description">
                This page will be the dedicated contact page.
                <br/><br/>As I have not developed the Rust backend for my website, the submit button does not 
                actually send the message. Instead of sending your email correspondence, it will just display the 
                following message: "Thank you for your message! I hope
                you have a nice day!" 
            </p>
            <div className="Contact-form-container">
                {submitted ? 
                <>
                <p>Thank you for your message! I hope you have a nice day!</p>
                </>  : 
                <>
                <form onSubmit={handleSubmit}>
                    <div className="Contact-form-div">
                        <label className="Contact-form-label">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={CaptureMessage}
                            className="Contact-form-input"
                            required
                        ></input>
                    </div>
                    <div className="Contact-form-div">
                        <label className="Contact-form-label">Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={CaptureMessage}
                        className="Contact-form-input"
                        required
                        />
                    </div>
                    <div className="Contact-form-div">
                        <label className="Contact-form-label">Message Subject:</label>
                        <input
                            type="text"
                            name="message_subject"
                            value={formData.message_subject}
                            onChange={CaptureMessage}
                            className="Contact-form-input"
                            required
                        ></input>
                    </div>
                    <div className="Contact-form-div">
                        <label className="Contact-form-label">Message:</label>
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={CaptureMessage}
                        className="Contact-form-message-input"
                        required
                        />
                    </div>
                    <div className="Submit-btn-alignment">
                        <button
                            type="submit"
                            className="Contact-form-submit-btn"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
                </> }
            </div>
        </div>
  
        <Footer></Footer>
    </>
    );
}

export default Contact;