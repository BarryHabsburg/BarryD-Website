import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify'; // dangerouslySetInnerHTML
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import ProjectDataJson from '../components/ProjectData.json';

/* 
    Just in case HTML in a string need to be executed:
    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.ProjectDescription) }}></p>
*/

function Posting_Card() {

    const items = ProjectDataJson.ProjectData; // Your data here
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
    const totalPages = Math.ceil(items.length/itemsPerPage);
    const currentItems = items.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);
    
    function getItemsPerPage() {
        const width = window.innerWidth;
        if (width > 1200) return 10; // Large screens
        if (width > 800) return 8;   // Medium screens
        return 4;                    // Small screens
    }

    // Effect to update itemsPerPage on window resize
    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };
        
        window.addEventListener('resize', handleResize);
        
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Handler for page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
    <React.Fragment>  
        <div className="grid-auto-fit">  
            {currentItems.map((project) => 
                <div className="card-container" key={project.id}>
                    <div className="img-div">
                        <img src={`./${project.ProjectImage}`} alt="#" />
                    </div>
                    <h3>{project.ProjectName}</h3>

                    <div id="box_thing2">
                        <h4>Last updated: {project['Last-updated']}</h4>
                        <p><Latex>{project.ProjectDescription}</Latex></p>
                    </div>
                    {project['File-type'] == "Jupyter Notebook" || project['File-type'] == "R Notebook" ? <a className="Resume-btn" href={project['File-path']} target="_blank">{project['File-type']}</a> :
                    <Link className="Resume-btn" to={project['File-path']} target="_blank">{project['File-type']}</Link>}
                </div>
            )}
        </div>

        <div className="pagination">
            <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            >
            Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
            <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? 'active' : ''}
            >
                {index + 1}
            </button>
            ))}

            <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
            Next
            </button>
        </div>
    </React.Fragment>
    );
}

export default Posting_Card;