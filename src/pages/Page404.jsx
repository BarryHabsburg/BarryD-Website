import Header from "../components/Header";
import Footer from "../components/Footer";

function Page404() {

    return (
    <>
    <Header></Header>
    <main>
    <div className="web-app-description-container">
        <h1>404: Page Not Found</h1>
        <p className="Web-App-Description">Unfortunately your page is in another castle. {"😔"}</p>
    </div>
    </main>
    <Footer></Footer>
    </>
    );
}

export default Page404;