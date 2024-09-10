import AllyLogo from 'C:/Users/Behrooz/Documents/Barry_website/BarryD-website/public/Ally_Financial.svg.png';
import SMULogo from 'C:/Users/Behrooz/Documents/Barry_website/BarryD-website/public/Peruna_digitalonly_R.png';
import CollinLogo from 'C:/Users/Behrooz/Documents/Barry_website/BarryD-website/public/Collin_College_Logo.png';
import SMULogo2 from 'C:/Users/Behrooz/Documents/Barry_website/BarryD-website/public/SMU Logo Outlined_Formal_digitalonly_R.png';

function About_Section() {

    return (
    <>
    <div className="About-Section">
            <h1 className="About-Section-Titles">Education</h1>
            
            <div className="Eduction-container2">
                <div className="Image-Label-Container">
                    <a href="https://www.smu.edu/" target="_blank"><img src={SMULogo2} alt="SMU logo" /></a>
                    <div className="F1">
                        <div id="School-title">Southern Methodist University</div>
                        <div>August 2020 - December 2022</div>
                    </div>
                </div>

                <div className="F3">
                    M.S. in Computation and Applied Mathematics
                </div>
            </div><br/>

            <div className="Eduction-container">
                <div className="F1">
                    <div id="School-title">Southern Methodist University</div>
                    <div>August 2016 - May 2020</div>
                </div>
                <div className="F2">
                    B.S. in Computation and Applied Mathematics<br/>
                    with a Departmental Distinction Honor in Mathematics 
                </div>
            </div><br/>

            <div className="Eduction-container">
                <div className="F1">
                    <div id="School-title">Southern Methodist University</div>
                    <div>August 2016 - May 2020</div>
                </div>
                <div className="F2">
                    B.A. in Economics<br/>
                    with a Departmental Distinction Honor in Economics
                </div>
            </div>

            <br/>
            <h1 className="About-Section-Titles">Work Experience</h1>

            <div className="Work-Experience-container">
                <div className="Work-Experience-labels-containter">
                    <div className="Image-Label-Container F1">
                        <a href="https://www.collin.edu/"><img src={CollinLogo} alt="Collin College Logo" /></a>
                        <div>
                            <div id="Company-title"><span className="Font-Color-5">Collin College</span></div>
                            <div>Role: Mathematics Professor</div>
                        </div>
                    </div>
                    <div className="F2">
                        <div>Plano, Texas</div>
                        <div>August 2023 - May 2024</div>
                    </div>
                </div>
                <div className="List-container">
                    <ul>
                        <li style={{"listStyleType": "none"}}>
                        <b>Description</b>: Taught undergraduate mathematics courses, wrote my own course curriculum and examinations.
                        </li>
                        <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                        Taught: MATH 1314: College Algebra, MATH 0405: Foundation Math, MATH 2412: Pre-Calculus, MATH 1342: Intro. to Statistics
                        </li>
                        <li>Skills: Python, HTML, Latex, communication, detail-orientation, adaptability, Empathetic listening, respectfulness.</li>
                    </ul>
                </div>
            </div>
            
            <div className="Work-Experience-container">
                <div className="Work-Experience-labels-containter">
                    <div className="Image-Label-Container F1">
                        <a href="https://www.ally.com/" target="_blank"><img src={AllyLogo} alt="Ally Financial Logo" /></a>
                        <div>
                            <div id="Company-title"><span className="Font-Color-4">Ally Financial</span></div>
                            <div>Role: Data Science Intern</div>
                        </div>
                    </div>
                    <div className="F2">
                        <div>Lewisville, Texas</div>
                        <div>May 2022 - August 2022</div>
                    </div>
                </div>
                <div className="List-container">
                    <ul>
                        <li style={{"listStyleType": "none"}}>
                            <b>Description</b>: From May 2022 to August, I worked as a Data Analyst/Scientist intern on a Strategy and Analytics team
                            managed by Kevin Vaughn at Ally Financials' Lewisville office. I was a responsible for the development of a new proto-type
                            supervised machine learning model that was aimed at reducing the operational expenses of Ally Financials' debt collection 
                            efforts, while improving debt collection efficiency and effectiveness. It was a proof-of-concept project to determine the 
                            validity of machine learning in auto loan debt collection; my project succeeded, and as a result Ally Financial proceeded
                            with the acquisition of Dasceq's debt collection models.
                        </li>
                        <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                        Developed machine learning model in Python that considered customer 
                        preference towards collection treatment. 
                        </li>
                        <li>
                        The new model reduced operational expenses by replacing 23,605 manual dialer calls made by debt 
                        collectors with Automated voice mail. 
                        </li>
                        <li>
                        Due to the models’ performance, Ally Financial proceeded with acquisition of Dasceq Inc. supervised 
                        machine learning collection models. 
                        </li>
                        <li>
                        Created training, testing and validation datasets in SAS, cleaned and formatted datasets in Python.
                        </li>
                        <li style={{"listStyleType": "none"}}>Skills: Python, SAS, Statsmodels, Pandas, Scikit-learn, Numpy, General Linear Model</li>
                    </ul>
                </div>
            </div>

            <div className="Work-Experience-container">
                <div className="Work-Experience-labels-containter">
                    <div className="Image-Label-Container F1">
                        <a href="https://www.smu.edu/" target="_blank"><img src={SMULogo} alt="SMU Logo" /></a>
                        <div>
                            <div id="Company-title"><span className="Font-Color-1">Southern</span> <span className="Font-Color-2">Methodist</span> <span className="Font-Color-3">University</span>,<br/> Altshur Learning Enhancement Center</div>
                            <div>Role: Mathematics and Economic</div>
                        </div>
                    </div>
                    <div className=" F2">
                        <div>Dallas, Texas</div>
                        <div>February 2020 - May 2022</div>
                    </div>
                </div>
                <div className="List-container">
                    <ul>
                        <li style={{"listStyleType": "none"}}>
                            <b>Description</b>: During my time as a graduate student at Southern Methodist University, I worked as a Mathematics/Economics 
                            tutor at the ALEC (Altshur Learning Enhancement Center), and taught a wide range of courses, the following list is not exhaustive 
                            but highlight the most commonly taught: pre-calculus, business calculus, calculus I, calculus II, calculus III, linear algebra, 
                            ordinary differential equations, scientific computing, principle micro- and macro-economics, intermediate micro- and 
                            macro-economics, and advanced Economics courses. 
                        </li>
                        <li style={{"listStyleType": "none"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                        <li>
                            Coordinated walk-in appointments for Mathematics and Economics, as well as 
                            programming assistance appointments in MATLAB, R and Python, specifically for homework 
                            and project assignments.
                        </li>
                        <li>
                            Assisted students with reviewing course materials, and examination preparation.
                        </li>
                        <li>Skills: MATLAB, R, Python, organization, mentorship, record-keeping</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}

export default About_Section;