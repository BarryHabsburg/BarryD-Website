import ProjectDataJson from 'C:/Users/Behrooz/Documents/Barry_website/BarryD-website/ProjectData.json';

function Citations({ variable }) {

    const Cites = ProjectDataJson[variable];
    //console.log(ProjectDataJson["SAS SQL Code Review"])

    return (
    <>
    <div className="Citation-Container">
        <h1 className="Citation-title">Citations:</h1>
        <ul className="Citation-List">
            {Cites.map((Citation) =>
            <li key={Citation.Identification}>
                <span>[{Citation.Identification}]: </span>
                {Citation["Cite-text"]} <br/>Url:
                <a href={Citation.Url} className="Citation-Url" target="_blank"> {Citation.Url}</a>
            </li> 
        )}
        </ul>
    </div>
    </>
    );
}

export default Citations;