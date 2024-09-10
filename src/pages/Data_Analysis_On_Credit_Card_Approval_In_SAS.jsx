import React, { useState, useEffect, useRef } from 'react';
import Latex from 'react-latex-next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from '../components/Citations';
import hljs from 'highlight.js'; // Import highlight.js
//import 'highlight.js/styles/vs.css'; // Import default theme

function Data_Analysis_On_Credit_Card_Approval_In_SAS() {

    const Cite_Name = "SAS Analysis Citations";
    const [LightTheme, setLightTheme] = useState('dark');
    const [codeTheme, setCodeTheme] = useState("vs");
    const codeRef1 = useRef(null);
    const codeRef2 = useRef(null);
    const codeRef3 = useRef(null);
    const codeRef4 = useRef(null);
    const codeRef5 = useRef(null);
    const codeRef6 = useRef(null);
    const codeRef7 = useRef(null);

    useEffect(() => {
        const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
        setLightTheme(matchMedia.matches ? 'dark' : 'light');

        const LightEventhandler = (e) => setTheme(e.matches ? 'dark' : 'light');
        matchMedia.addListener(LightEventhandler);
    
        return () => matchMedia.removeListener(LightEventhandler);
    }, []);


    useEffect(() => {
        if (codeRef1.current) {
            hljs.highlightElement(codeRef1.current); // Apply syntax highlighting
        }
        if (codeRef2.current) {
            hljs.highlightElement(codeRef2.current); // Apply syntax highlighting
        }
        if (codeRef3.current) {
            hljs.highlightElement(codeRef3.current); // Apply syntax highlighting
        }
        if (codeRef4.current) {
            hljs.highlightElement(codeRef4.current); // Apply syntax highlighting
        }
        if (codeRef5.current) {
            hljs.highlightElement(codeRef5.current); // Apply syntax highlighting
        }
        if (codeRef6.current) {
            hljs.highlightElement(codeRef6.current); // Apply syntax highlighting
        }
        if (codeRef7.current) {
            hljs.highlightElement(codeRef7.current); // Apply syntax highlighting
        }
    }, [codeTheme]); // Re-run when the theme changes

    const updateTheme = (theme) => {
        setCodeTheme(theme);
        const themeLink = document.getElementById("theme");
        themeLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`;
    };

    return (
    <>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs.min.css" id="theme" />
    <Header></Header>
    <main>
        <div className="Article-Section">
            <div className="Article-Section-Wrapper">
                <div className="section-title-group">
                    <h2 className="Article-section-heading">Data Analysis on Credit Card Approval in SAS</h2>
                    <div className="Article-subsection-heading">last Updated: April 3, 2023.</div>
                </div>

                <div className="Select-Container">
                    <label htmlFor="CodeTheme" style={{"fontFamily": "TimesNewRoman"}}>Select your desired Code Theme:</label><br/> {/* change highlighting to SAS specific highlighting js */}
                    <select className={LightTheme === 'light' ? 'Custom-Select-light' : 'Custom-Select-dark'} id="CodeTheme" value={codeTheme} onChange={(e) => updateTheme(e.target.value)}>
                                <option value="vs">vs</option>
                                <option value="a11y-dark">a11y-dark</option>
                                <option value="atom-one-dark">atom-one-dark</option>
                                <option value="rainbow">rainbow</option>
                                <option value="dark">dark</option>
                                <option value="atom-one-dark-reasonable">atom-one-dark-reasonable</option>
                    </select>
                </div>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;There exists an significant body of literature that addresses the 
                    data-driven problem of credit-decision-making, and there exist many tractable solutions to approaching this classification problem
                     [<a href="https://www.asc.ohio-state.edu/goel.1/STATLEARN/PROJECTS/Presentations/CreditCardApproval.pdf" style={{"color":"#95B9C7"}} target="_blank">1</a>, <a href="https://developer.ibm.com/articles/predicting-credit-card-approvals-with-netezza-python-in-database-analytics/" style={{"color":"#95B9C7"}} target="_blank">2</a>, <a href="https://aip.scitation.org/doi/abs/10.1063/5.0040744?journalCode=apc" style={{"color":"#95B9C7"}} target="_blank">3</a>]; 
                     the aim of this article is to address the credit-decision classification problem with a statistical methodology, and explore the 
                     statistical characteristics associated to this specific type of classification problem. To conduct the data analysis and data modeling, 
                     we used the SAS programming language within the SAS Studios platiform, and used the built-in function <code className="Code-Snippet">PROC SQL</code> to implement some 
                     SQL scripting in our SAS script.
                     For legibility of the text, we broken up the SAS script into consumable code-blocks, and have provided the reader with a image of the codes' 
                     result after each code-block.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the analysis we utilized simulated credit card applicant data, the simulated 
                     data was stored in a csv format. To import the dataset, we created a SAS library named <i>SASDATA</i> with the SAS function 
                     <code className="Code-Snippet">LIBNAME</code>; the purpose was to destinate a new working directory as the location to store the newly imported dataset.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef1}>
{`              
libname SASDATA '/home/u62122951/sasuser.v94/SASDATA';

PROC IMPORT OUT=SASDATA.CreditCardDATA 
            DATAFILE= "/home/u62122951/sasuser.v94/Homework/Credit_Card_Applicant_simulated_Data.csv" 
            DBMS=CSV REPLACE;
    GETNAMES=YES;
RUN;
`}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    To demonstrate that the simulated dataset was successfully imported into our working directory <i>SASDATA</i>, the following code was implemented to 
                    display the first 30 observations from the dataset.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef2}>
{`
PROC SQL outobs=30;
SELECT * 
FROM SASDATA.CreditCardDATA
;
RUN;
`}
                    </code>
                </pre>


                <p className="Article-Paragraphc-format">
                    To display the resulting SAS print table liably, we downloaded the HTML file and embeded it here; the reader can use the scroll bars to navigate the 
                    resulted printed dataset.
                </p>

                <iframe 
                    src="/SAS_Analysis_Dataset.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_Analysis_Dataset.html" download="SAS_Dataset.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                As one can observe the imported dataset possesses 20 predictor features {"(i.e., \"tot_balance\", \"avg_bal_cards\", et ceteria)"} alongside a binary target variable 
                {"(e.g. \"def_ind\")"}; the predictor features {"(e.g., features)"} range from total debt balance {"(e.g. \"tot_balance\")"} to number of credit inqueries in last 
                12 months {"(e.g., \"num_inq_12_month\")"}; to narrow the focus, a Feature Importance analysis [<a href="https://en.wikipedia.org/wiki/Feature_selection" style={{"color":"#95B9C7"}} target="_blank">4</a>] 
                was conducted to determine the important features of the dataset. To conduct this statistical procedure, the built-in SAS function <code className="Code-Snippet">PROC HPSPLIT</code> 
                was utilized; it can be used to create a classification tree model to determine the important features of a dataset [<a href="https://documentation.sas.com/doc/en/statcdc/14.2/statug/statug_hpsplit_examples07.htm" style={{"color":"#95B9C7"}} target="_blank">5</a>].
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef3} className="python">
{`
proc hpsplit data=SASDATA.CREDITCARDDATA;
  class Def_Ind rep_education;
  model Def_Ind = tot_balance avg_bal_cards credit_age credit_age_good_account 
  credit_card_age num_acc_30d_past_due_12_months num_acc_30d_past_due_6_months
  num_mortgage_currently_past_due tot_amount_currently_past_due
  num_inq_12_month num_card_inq_24_month num_card_12_month uti_open_card pct_over_50_uti 
  uti_max_credit_line pct_card_over_50_uti ind_XYZ rep_income rep_education;
  prune reducederror;
run;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    <code className="Code-Snippet">PROC HPSPLIT</code> is in essence a binary/multi-level classification model, so essentially one needs to specify the feature variables and 
                    target variable {"(or target variables)"} to the model in the <code className="Code-Snippet">PROC</code> statement, and provide an argument to decide what type of 
                    pruning regularization that should be performed.  Indeed as <code className="Code-Snippet">PROC HPSPLIT</code> is a decision tree classification model, it is particularly 
                    prone to overfitting data due to the lack of contraint in possible size of the decision tree, and therefore, requires a pruning regularization method 
                    that can penalize the decision tree to reduce its size so to reduce the model's over-fitting while increasing said model's generality. In reference to 
                    generality: In mathematics, generality refers to the degree of completionness of a mathematical solution or algorithm, does the solution or algorithm 
                    solve the mathematical problem completely or partially, and does it contain all possible cases [<a href="http://www.maths.gla.ac.uk/~cc/2x/2005_2xnotes/2x_chap5.pdf" style={{"color":"#95B9C7"}} target="_blank">6 (pg. 49)</a>]. 
                    In statistics the mathematical problems do not possess complete solutions, instead only possess partial solutions, and therefore generality is 
                    extrapolated to "does a model" explain the statistical problem to some desired degree of accuracy, and does said "model" capture the statistical phenomena 
                    captured by the dataset {"(e.g. good model)"}, or "does the model" only explain the dataset itself {"(e.g. poor model)"}. In former case, the "model" is a good partial 
                    solution to the statistical problem, while the later case the partial solution is over-fitted to the data and is a poor partial solution. In consequence 
                    we needed to perform a pruning regularization on decision tree classifer model from <code className="Code-Snippet">PROC HPSPLIT</code>; we choice Reduced-Error Pruning - the algorithms 
                    details can be found here [<a href="https://support.sas.com/documentation/onlinedoc/stat/142/hpsplit.pdf" style={{"color":"#95B9C7"}} target="_blank">7 (4692 pg.)</a>]. Embeded the 
                    resulted html file:
                </p>

                <p className="Article-Paragraphc-format" id="Note">
                    Note: As the model is trying to capture {"(e.g. interpolate)"} the statistical phenomena that is captured in the dataset; the dataset itself is trying to 
                    capture that statistical phenomena. A dataset <Latex>$D$ </Latex> is a subset of the sample space <Latex>$\Omega$</Latex>, e.g. <Latex>$D \subset \Omega$</Latex>,  
                    and therefore is an interpolation itself of a statistical phenomena. Only a complete dataset <Latex>{"$D_\{complete\}$"}</Latex> that completely captures the 
                    sample space <Latex>$\Omega$</Latex>, e.g. <Latex>$D \equiv \Omega$</Latex> is capable of capturing a statistical phenomena, this concept align perfectly with 
                    aligns with the concept of perfect information from Game Theory [<a href="https://en.wikipedia.org/wiki/Perfect_information" style={{"color":"#95B9C7"}} target="_blank">8</a>].
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    And thus in this regard, a question may arise of the quality of the data set itself, in regards to it capacity to properly capture the statistical phenomena,
                    as a dataset itself is a mean to interpolate, and question of how well it interpolates is also important.
                    Unfortunately we did not address this issue in this research article.
                </p>

                <iframe 
                    src="/SAS_Analysis_HPSPLIT_Result.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_Analysis_HPSPLIT_Result.html" download="SAS_Analysis_HPSPLIT_Result.html">
                        Download HPSPLIT Result as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    The Decision tree classifer model achieved a <Latex>$93.50\%$</Latex> accuracy, <Latex>$90.00\%$</Latex> precision and <Latex>$68.20\%$</Latex> recall, and the model's ROC 
                    {" (receiver operating characteristic)"} curve captured <Latex>$0.90$</Latex> of the area. Nonetheless key result is the Variable Importance Table:
                </p>

                <div className="img-div">
                    <img src={`./Importance_Variable_Sim_Cred_App_data.PNG`} alt="#" height="420px" width="357px"/>
                </div>

                <p className="Article-Paragraphc-format">
                    Observing the results from the Importance Variable table - the important features of the simulated credit card applicant dataset are "avg_bal_cards", "num_acc_30d_past_due_12_months", "uti_open_card", 
                    "num_inq_12_month", "credit_age" and "uti_max_credit_line". Now that the important features have been determined, their correlative relationship to the target variable 
                    "def_ind" needed to be determined; so <code className="Code-Snippet">PROC CORR</code> was implemented, and its result was embeded below:
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef4} className="python">
{`
PROC CORR data=SASDATA.CreditCardDATA;
  VAR avg_bal_cards num_acc_30d_past_due_12_months 
  uti_open_card num_inq_12_month credit_age uti_max_credit_line def_ind;
RUN;
`}
                    </code>
                </pre>

                <p style={{"textAlign": "justify", "fontFamily": "TimesNewRoman", "color": "rgb(245, 245, 255)", "fontSize": "17px"}}></p>

                <iframe 
                    src="/SAS_Analysis_Corr_Matrix.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_Analysis_Corr_Matrix.html" download="SAS_Analysis_Corr_Matrix.html">
                        Download Correlation Matrix Result as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    From the resulted correlation matrix, it was observed that "avg_bal_card" possessed a negative correlation of <Latex>$-0.113$</Latex> to "def_ind", meaning that applicant with 
                    a higher average credit card balance posed a lower risk of default, then an applicant with a lower average credit card balance. On the contrary "uti_open_card" possessed a 
                    positive correlation to "def_ind", which means that applicant with higher credit utilization poses a greater default risk than an applicant with a lower credit utilization. 
                    Which entirely make sense, as low risk borrowers usually possess many lines of credit, and despite possessing higher levels of average debt, their credit utilization is usually 
                    lower than higher risk borrowers. The last correlative statistic that needs to be highlighted, "num_acc_30d_past_due_12_months", which is the number of accounts in delinquency 
                    held by an applicant; this feature possessed the highest positive correlation to "def_ind", which means it poses the greatest risk that an applicant would default in the future 
                    after being approved for the credit card.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To provide the statistical figures to prove the previous statements; we implemented <code className="Code-Snippet">PROC MEANS</code> 
                    on "avg_bal_cards" and "uti_open_card" with <code className="Code-Snippet">CLASS num_acc_30d_past_due_12_months def_ind;</code>:
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef5} className="python">
{`
PROC MEANS DATA=SASDATA.Creditcarddata;
  CLASS num_acc_30d_past_due_12_months def_ind;
  VAR avg_bal_cards;
RUN;

PROC MEANS DATA=SASDATA.Creditcarddata;
  CLASS num_acc_30d_past_due_12_months def_ind;
  VAR uti_open_card;
RUN;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_Analysis_Means.html" 
                    width="100%" 
                    height="320px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_Analysis_Means.html" download="SAS_Analysis_Means.html">
                        Download Means Proc Result as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Observing the first Means table, one can gleam that each of the group of applicants that defaulted possessed lower average credit card balances than the groups of 
                    non-defaulted applicants. Moving onto the second Means table, it is also observed that the defaulted groups of applicants possessed higher average credit utilization, 
                    than the non-default groups. To better illustrate these trends, we implemented <code className="Code-Snippet">PROC UNIVARIATE</code> to generate two histogram plottings to visualize the trend 
                    in their respective probability distributions.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef6} className="python">
{`
ods graphics off;
PROC Univariate DATA=SASDATA.Creditcarddata;
  CLASS def_ind;
  VAR avg_bal_cards;
  HISTOGRAM avg_Bal_cards/normal kernal;
RUN;
ods graphics on;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    And indeed non-default group of applicants possessed a normal distibution with a larger mean then the default group of applicants; an additional note is that the 
                    default applicant group's probability distribution possesses a slight high skew towards the left tail of the distribution. In regards to "uti_open_card" both non-default 
                    and default applicant possessed a normal distribution; though as conveyed earlier, the default group possessed a higher utilization of credit compared to the non-default group, 
                    though both groups possessed a similar standard deviation.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastly we performed a logistic regression over the dataset using the built-in SAS 
                    function <code className="Code-Snippet">PROC LOGISTIC</code>.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef7} className="python" id="code-block">
{`
PROC Logistic data=SASDATA.CreditCardDATA;
  model Def_Ind = avg_bal_cards num_acc_30d_past_due_12_months 
  uti_open_card num_inq_12_month credit_age uti_max_credit_line;
run;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_Analysis_Logistic_Regression.html" 
                    width="100%" 
                    height="320px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_Analysis_Logistic_Regression.html" download="SAS_Analysis_Logistic_Regression.html">
                        Download Logistic Regression Results as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    After execution of the logistic regression, it was found that the beta coefficients of almost all important features were found to be statistically significant in explaining 
                    the target variable "def_ind"; except "uti_max_credit_line" which failed to reject the null hypothesis: <Latex>{"$\\beta_{uti max} = 0$"}</Latex>; P-value = 
                    <Latex>{"$0.4868$ > alpha = $0.05$"}</Latex>. With these beta coefficients, one could measure the probability of default for each credit card applicant; which could be quite 
                    useful in the decision-making, to which applicants to extend credit to, or decline credit to.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, as there exists many tractable 
                    machine learning approaches to address the problem of credit-decision-making; though a simple data analytics approach can still yeild useful conclusions and insights in a 
                    data-driven problem. On another note, SAS is still relevant as a statistical programming language, and it has plausible applications to address present-day data analystics and 
                    data science problems. Despite its in inflexibility as a programming language, it make up for that deficit with computational efficient, algorithmic robustness and simplicity; 
                    SAS is still a fantastic statistical programming language to use to address real-world data-driven problems.
                </p>

                <Citations
                    variable={Cite_Name}
                ></Citations>

            </div>
        </div>
    </main>
    <Footer></Footer>

    </>
    );
}

export default Data_Analysis_On_Credit_Card_Approval_In_SAS;