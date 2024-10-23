import { useState, useEffect } from 'react';
import ODELogo from '../assets/images/LCC-Logo.jpg';
import AlphaChiLogo from '../assets/images/Alpha_Chi_Logo.png';
import GoldenKeyLogo from '../assets/images/gk-seal.jpg';

function Honor_Society_Section() {

    const [showModal, setShowModal] = useState(false);
    const [pdfAddress, setPdfAddress] = useState(true);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const toggleModal2 = () => {
        setShowModal(!showModal);
        setPdfAddress("/Alpha_Chi_Invitation_Email.pdf");
    };

    const toggleModal3 = () => {
        setShowModal(!showModal);
        setPdfAddress("/Welcome_to_Alpha_Chi_Email.pdf");
    }

    const toggleModal4 = () => {
        setShowModal(!showModal);
        setPdfAddress("/Omicron_Delta_Epsilon_Invitation.pdf");
    }

    const toggleModal5 = () => {
        setShowModal(!showModal);
        setPdfAddress("/Golden_Key_International_Honor_Society_Invitation_Email.pdf");
    }

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        }
    }, [showModal]);


    return (
    <>
    <div className="About-Section">
        <h1 className="About-Section-Titles">Honor Societies</h1>

        <div className="Work-Experience-container">
            <div className="Work-Experience-labels-containter">
                <div className="Image-Label-Container F1">
                    <a href="https://odk.org/" target="_blank"><img src={ODELogo} alt="Omicron Delta Epsilon Logo" /></a>
                    <div>
                        <div id="Company-title"><span className="Font-Color-5">Omicron Delta Kappa (Inducted Twice)</span></div>
                        <div>University: Southern Methodist University</div>
                        <div>Chapter: SMU Chapter of Omicron Delta Kappa</div>
                        <div>University location: Dallas, Texas</div>
                    </div>
                </div>
                <div className="F2">
                    <div>Induction Date: 2/11/2019</div>
                </div>
            </div>
            <div className="List-container">
                <ul>
                    <li style={{"listStyleType": "none", "textAlign":"left"}}>
                    <b>Description</b>: Nomination by Department in recognition of departmental excellence. Faculty of the Economics Department conduct a 
                    complete survey review of each student, and each faculty member votes to nominate a student to this prestigious International organization.
                    </li>
                    <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                </ul>
                <div style={{"textAlign":"left", "marginLeft":"25px"}}>
                    <div className="pdfImage-Container">
                        <div className="pdfImage">
                            <img src="/Email_Top_Omicron_Delta_Epsilon_Invitation_Email2.PNG" alt="Image of Omicron Delta Epsilon Invitation Email" />
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button onClick={toggleModal4}>Open PDF</button>
                        </div>
                    </div>

                    {showModal && (
                        <div className="modal">
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                            <div className="modal-content">
                                <iframe 
                                src={pdfAddress} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <p className="Article-Paragraphc-format"></p>
            </div>
        </div>

        <div className="Work-Experience-container">
            <div className="Work-Experience-labels-containter">
                <div className="Image-Label-Container F1">
                    <a href="https://alphachihonor.org/" target="_blank"><img src={AlphaChiLogo} alt="Alpha Chi Logo" /></a>
                    <div>
                        <div id="Company-title"><span className="Font-Color-5">Alpha Chi</span></div>
                        <div>University: Southern Methodist University</div>
                        <div>Chapter: Texas Alpha Omega chapter of Alpha Chi</div>
                        <div>University location: Dallas, Texas</div>
                    </div>
                </div>
                <div className="F2">
                    <div>Induction Date: 10/6/2017</div>
                </div>
            </div>
            <div className="List-container">
                <ul>
                    <li style={{"listStyleType": "none", "textAlign": "left"}}>
                    <b>Description</b>: "Alpha Chi is a national college honor society founded February 22, 1922, that admits students from all academic disciplines. 
                    SMU is home to the Texas Alpha Omega Chapter, inaugurated in September, 2012, with 46 charter members. To be invited to membership in Texas Alpha Omega 
                    chapter a student must have at least junior standing and a cumulative GPA of 3.90 or higher. <br/> Contact: Professor Leslie DeArman (dearman@smu.edu, 214-768-4937)"
                    (Source: [<a href="https://www.smu.edu/academic-ceremonies/events/honors-convocation/honor-societies" style={{"color":"#95B9C7"}}>1</a>])
                    </li>
                    <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                </ul>
                <div style={{"textAlign":"left", "marginLeft":"25px"}}>
                    <div className="pdfImage-Container">
                        <div className="pdfImage">
                            <img src="/Email_Top_Alpha_Chi_Invitation_Email.PNG" alt="Image of Alpha Chi Invitation Email" />
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button onClick={toggleModal2}>Open PDF</button>
                        </div>
                    </div>
                    <div className="pdfImage-Container">
                        <div className="pdfImage">
                            <img src="/Email_Top_Alpha_Chi_Welcome_Email.PNG" alt="Image of Alpha Chi Welcome Email" />
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button onClick={toggleModal3}>Open PDF</button>
                        </div>
                    </div>

                    {showModal && (
                        <div className="modal">
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                            <div className="modal-content">
                                <iframe 
                                src={pdfAddress} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <p className="Article-Paragraphc-format"></p>
            </div>
        </div>
        
        <div className="Work-Experience-container">
            <div className="Work-Experience-labels-containter">
                <div className="Image-Label-Container F1">
                    <a href="https://www.goldenkey.org/" target="_blank"><img src={GoldenKeyLogo} alt="Golden Key International Honor Society Logo" /></a>
                    <div>
                        <div id="Company-title"><span className="Font-Color-5">Golden Key International Honor Society</span></div>
                        <div>University: Southern Methodist University</div>
                        <div>Chapter: SMU Chapter of Golden Key</div>
                        <div>University location: Dallas, Texas</div>
                    </div>
                </div>
                <div className="F2">
                    <div>Induction Date: 8/16/2017</div>
                </div>
            </div>
            <div className="List-container">
                <ul>
                    <li style={{"listStyleType": "none", "textAlign": "left"}}>
                    <b>Description</b>: "Golden Key is an international honor society with more than 400 chapters at colleges and universiies around the world. 
                    Membership in the Society is by invitation only and applies to the top 15% of university sophomores, juniors and seniorsm as well as 
                    top-performing graduate students in all fields of study, baed solely on their academic achievements. Golden Key is commited to a high standard 
                    of scholatic achievement, and an ethos of integrity, innovation, respect, collaboration and diversity.<br/>Contact: Brandilyn Stigler (bstigler@smu.edu)" 
                    (Source: [<a href="https://www.smu.edu/academic-ceremonies/events/honors-convocation/honor-societies" style={{"color":"#95B9C7"}}>1</a>])
                    </li>
                    <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                </ul>
                <div style={{"textAlign":"left", "marginLeft":"25px"}}>
                    <div className="pdfImage-Container">
                        <div className="pdfImage">
                            <img src="/Email_Top_Golden_Key_International_Honor_Society_Invitation_Email.PNG" alt="Alpha Chi Logo" />
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button onClick={toggleModal5}>Open PDF</button>
                        </div>
                    </div>

                    {showModal && (
                        <div className="modal">
                            <span className="close-button" onClick={toggleModal}>&times;</span>
                            <div className="modal-content">
                                <iframe 
                                src={pdfAddress} 
                                width="100%" 
                                height="100%" 
                                style={{ border: 'none' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <p className="Article-Paragraphc-format"></p>
            </div>
        </div>
    </div>
    </>
    );
}

export default Honor_Society_Section;