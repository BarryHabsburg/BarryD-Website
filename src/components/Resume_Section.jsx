function Resume_Section() {

    return (
    <>
    <div className="Resume-section">
        <p className="Resume-description">The following buttons are links to my resume, LinkedIn and GitHub profiles.</p>
        <br/>
        <div style={{"textAlign": "center"}}>
            <a className="Resume-btn" id="blood-btn" href="/Barry_Daemi_Resume_2025.docx.pdf" target="_blank">Resume</a>
            <a className="Resume-btn" id="blood-btn" href="https://www.linkedin.com/in/barry-daemi/" target="_blank">LinkedIn</a>
            <a className="Resume-btn" id="blood-btn" href="https://github.com/BarryHabsburg" target="_blank">GitHub</a>
        </div>
        <br/><br/>
        <p className="Disclaimer">Any views expressed on this website are my own.</p>
    </div>
    </>
    );
}

export default Resume_Section;