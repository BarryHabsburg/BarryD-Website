import Header from '../components/Header';
import Footer from '../components/Footer';

function AcademicInterests() {

    /*
    Course work section

    <div className="web-app-description-container">
        <h2>Graduate Course work</h2>
        <p className="Web-App-Description"></p>
    </div>

    Complete this section later. Would be nice to have some of my course work up on 
    this portfolio website.
    */

    return (
    <>
        <Header></Header>

        <div className="web-app-description-container">
            <h2>Academic Interests page Description</h2>
            <p className="Web-App-Description">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As aforementioned my intellectual interests lie in quantitative finance, numerical linear algebra, sparse numerical linear algebra, 
                machine learning, and Monte Carlo simulations.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This web page will contain miscellaneous content, such as previous school projects, homework assignments et cetera, but
                perhaps other miscellaneous content.
            </p>
        </div>

        <Footer></Footer>
    </>
    );
}

export default AcademicInterests;