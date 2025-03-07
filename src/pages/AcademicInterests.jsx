import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from "../components/Citations";
import Latex from 'react-latex-next';

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

    const Cite_Name = "Academic Interests Citations";

    return (
    <>
        <Header></Header>

        <div className="web-app-description-container">
            <h2>Academic Interests page Description</h2>
            <p className="Web-App-Description">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As aforementioned my intellectual interests lie in quantitative finance, numerical linear algebra, sparse numerical linear algebra, 
                machine learning, and Monte Carlo simulations.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This web page will contain miscellaneous content, such as previous school projects, homework assignments et cetera, and
                perhaps other kinds of miscellaneous content.
            </p>
        </div>

        <div className="web-app-description-container"> 
            <h2>Graduate Courses and Assignments</h2>
            <p className="Web-App-Description">Southern Methodist University {"(SMU)"}'s Mathematics Graduate courses catalog: <a href="https://catalog.smu.edu/preview_entity.php?catoid=57&ent_oid=6134" style={{"color":"#95B9C7"}} target="_blank">here</a>.</p>
            <div>
                <h3>Math 6395: Topics in Computational Mathematics</h3>
                <p className="Course-Description">Textbook: Y. Rubinstein, Reuven. P. Kroese, Dirk. <i>Simulation and the Monte Carlo Method</i>. 2nd ed. Hoboken, NJ. Wiley, 2008.<br/>URL: <a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470230381" style={{"color":"#95B9C7"}} target="_blank">here</a></p>
                <ul className="Course-List">
                    <li>MATH 6395: Homework #1 - Questions<br/>Problems: 1.1, 1.2, 1.4, 1.6, 1.9, 1.12, 1.15, 1.16, 1.17, 1.19, 1.20, 1.25, 1.26 from <i>"Simulation and the Monte Carlo Method"</i>, 2nd ed. by Reuven Y. Rubinstein and Dirk P. Kroese {"(2007)"} [<a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470230381" style={{"color":"#95B9C7"}} target="_blank">1</a>].<br/>Content link: <a href="/MATH_6395_Homework_1_Questions1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #2 - Report<br/>Section: 3.2.1-3.2.3 from <i>"Applied Stochastic Processes"</i> by Mario LefeBvre [<a href="https://link.springer.com/book/10.1007/978-0-387-48976-6" style={{"color":"#95B9C7"}} target="_blank">2</a>].<br/>Content link: <a href="/MATH_6395_Homework_2_Report1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #3 - PRN {"(Pseudo-Random Number)"} simulation.<br/>Problems: Use an accept-rejection algorithm [<a href="https://www.columbia.edu/~ks20/4703-Sigman/4703-07-Notes-ARM.pdf" style={{"color":"#95B9C7"}} target="_blank">3</a>] to pseudo-random number {"(PRN)"} sample for a <Latex>{"$\\text{Beta}(\\alpha, \\beta)$"}</Latex> distribution with shape parameters <Latex>{"$\\alpha = 2$"}</Latex> and <Latex>{"$\\beta = 5$"}</Latex>.<br/>Use the Box-Muller transformation method [<a href="https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform" style={{"color":"#95B9C7"}} target="_blank">4</a>] to PRN sample for a standard normal distribution, <Latex>{"$\\mathcal{N}(\\mu = 0, \\sigma = 1)$"}</Latex>.<br/>Content link: <a href="/MATH_6395_Homework_3_PRN_simulation1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #5 - Brownian Motion Stochastic Process.<br/>Problems: Implement algorithm 2.91 from <i>"Simulation and the Monte Carlo Method"</i> by Reuven Y. Rubinstein and Dirk P. Kroese {"(2016)"} [<a href="https://www.wiley.com/en-us/Simulation+and+the+Monte+Carlo+Method%2C+3rd+Edition-p-9781118632161" style={{"color":"#95B9C7"}} target="_blank">5</a>], and also implement Geometric Brownian motion [<a href="https://en.wikipedia.org/wiki/Geometric_Brownian_motion" style={{"color":"#95B9C7"}} target="_blank">6</a>, <a href="https://www.columbia.edu/~ks20/FE-Notes/4700-07-Notes-GBM.pdf" style={{"color":"#95B9C7"}} target="_blank">7</a>].<br/>Content link: <a href="/MATH_6395_Homework_5_Brownian_Motion_Stochastic_process1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #6 - Bridge Network<br/>Problems: Examples 9.1 and 9.7 from <i>"Handbook of Monte Carlo Methods"</i> by Kroese et al, e.g. Kroese et al. {"(2013)"} [<a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9781118014967" style={{"color":"#95B9C7"}} target="_blank">8</a>].<br/>Content link: <a href="/MATH_6395_Homework_6_Bridge_Network1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #7 - Questions<br/>Problems: 6.2, 6.3, 6.12 from <i>"Simulation and the Monte Carlo Method"</i>, 2nd ed. by Reuven Y. Rubinstein and Dirk P. Kroese {"(2007)"} [<a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470230381" style={{"color":"#95B9C7"}} target="_blank">1</a>].<br/>Content link: <a href="/MATH_6395_Homework_7_Questions1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>MATH 6395: Homework #8 - Questions<br/>Problems: 5.7 from <i>"Simulation and the Monte Carlo Method"</i>, 2nd ed. by Reuven Y. Rubinstein and Dirk P. Kroese {"(2007)"} [<a href="https://onlinelibrary.wiley.com/doi/book/10.1002/9780470230381" style={{"color":"#95B9C7"}} target="_blank">1</a>].<br/>Content link: <a href="/MATH_6395_Homework_8_Questions.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                </ul>
            </div>
            <p className="Web-App-Description">Southern Methodist University {"(SMU)"}'s Applied Statistics and Data Analytics, M.S. course catalog: <a href="https://catalog.smu.edu/preview_program.php?catoid=25&poid=5186" style={{"color":"#95B9C7"}} target="_blank">here</a>.</p>
            <div>
                <h3>STAT 6311: Introduction to Mathematical Statistics</h3>
                <p className="Course-Description">Textbook: D. Wackerly, Dennis. Mendenhall III, William. L. Scheaffer, Richard. Mathematical Statistics with Applications, 7th ed. Boston, MA. Cengage Learning, 2008 [<a href="https://www.cengage.com/c/mathematical-statistics-with-applications-7e-wackerly/9780495110811/" style={{"color":"#95B9C7"}} target="_blank">9</a>].<br/>URL: <a href="https://www.cengage.com/c/mathematical-statistics-with-applications-7e-wackerly/9780495110811/" style={{"color":"#95B9C7"}} target="_blank">here</a></p>
                <ul className="Course-List">
                    <li>STAT 6311: Exam #1<br/>Content link: <a href="/STAT6311Exam1Fall20211.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                    <li>STAT 6311: Exam #2<br/>Content link: <a href="/STAT_6311_Exam_2.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                </ul>
            </div>
            <div>
                <h3>STAT 6312: Mathematical Statistics II</h3>
                <p className="Course-Description">Textbook: D. Wackerly, Dennis. Mendenhall III, William. L. Scheaffer, Richard. Mathematical Statistics with Applications, 7th ed. Boston, MA. Cengage Learning, 2008 [<a href="https://www.cengage.com/c/mathematical-statistics-with-applications-7e-wackerly/9780495110811/" style={{"color":"#95B9C7"}} target="_blank">9</a>].<br/>URL: <a href="https://www.cengage.com/c/mathematical-statistics-with-applications-7e-wackerly/9780495110811/" style={{"color":"#95B9C7"}} target="_blank">here</a></p>
                <ul className="Course-List">
                    <li>STAT 6312: Exam #1<br/>Content link: <a href="/STAT_6312_Exam_1.html" style={{"color":"#95B9C7"}} target="_blank">here</a>.</li>
                </ul>
            </div>
        </div>

        <div className="web-app-description-container">
        <h2>RPubs by RStudio Content</h2>
            <p className="Web-App-Description">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;During the Spring term of 2020, I took a graduate Economics course, ECO 5380 - Computation of Economics {"(Note: the course is defunct.)"}, 
                taught by Adjunct professor Aren Cambre [<a href="https://www.smu.edu/cox/academics/faculty/aren-cambre" style={{"color":"#95B9C7"}} target="_blank">10</a>]. 
                In the course, Dr. Cambre covered object-orietned programming, the R programming language, data analysis, and Rstudio, alongside their applications to 
                computational economnics.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                One of the topics that was covered in the course was R Notebooks [<a href="https://rmarkdown.rstudio.com/lesson-10.html" style={{"color":"#95B9C7"}} target="_blank">11</a>, <a href="https://bookdown.org/yihui/rmarkdown/notebook.html" style={{"color":"#95B9C7"}} target="_blank">12</a>]: an interactive <b>Markdown</b> document that combines useful documentation
                alongside one's own R code and programs. Dr. Cambre taught the syntax, and demonstrated the process of generating an R notebook in Rstudio. 
                At the time, I was genuinely amazed by it. We had to author an R Notebook for a homework assigment, as well for the second mid-term and the final exam.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since I knew how to generate R notebooks, for the coding project in MATH 6316 - Numerical Methods I, I coded 
                the numerical linear algebra algorithms in 
                MATLAB, then wrote a R notebook with the accompaning problems and my solutions.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Although I don't use R notebooks for my research projects in the present-day; 
                R notebook and Dr. Cambre are the two reasons
                why I adopted this style of publication. Thus I extend my appreciations to both! 
                If it were not for either one, this website would not have been possible! {"(^-^)"}
            </p>
            <p className="Web-App-Description">My RPubs by RStudio page can be found: <a href="https://rpubs.com/Barry_Daemi" style={{"color":"#95B9C7"}} target="_blank">here</a>.</p>

        </div>

        <div className="web-app-description-container">
            <Citations
                variable={Cite_Name}
            ></Citations>
        </div>

        <Footer></Footer>
    </>
    );
}

export default AcademicInterests;