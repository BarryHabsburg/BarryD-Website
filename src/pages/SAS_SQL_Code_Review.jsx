import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from '../components/Citations';
import hljs from 'highlight.js'; // Import highlight.js


function SAS_SQL_Code_Review() {

    const Cite_Name = "SAS SQL Code Review";
    const [pdfUrl, setPdfUrl] = useState("");
    const [LightTheme, setLightTheme] = useState("dark");
    const [codeTheme, setCodeTheme] = useState("atom-one-dark-reasonable");
    const codeRef1 = useRef(null);
    const codeRef2 = useRef(null);
    const codeRef3 = useRef(null);
    const codeRef4 = useRef(null);
    const codeRef5 = useRef(null);
    const codeRef6 = useRef(null);
    const codeRef7 = useRef(null);
    const codeRef8 = useRef(null);
    const codeRef9 = useRef(null);
    const codeRef10 = useRef(null);
    const codeRef11 = useRef(null);
    const codeRef12 = useRef(null);
    const codeRef13 = useRef(null);
    const codeRef14 = useRef(null);
    const codeRef15 = useRef(null);
    const codeRef16 = useRef(null);
    const codeRef17 = useRef(null);
    const codeRef18 = useRef(null);
    const codeRef19 = useRef(null);
    const codeRef20 = useRef(null);
    const codeRef21 = useRef(null);

    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []);

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
        if (codeRef8.current) {
            hljs.highlightElement(codeRef8.current); // Apply syntax highlighting
        }
        if (codeRef9.current) {
            hljs.highlightElement(codeRef9.current); // Apply syntax highlighting
        }
        if (codeRef10.current) {
            hljs.highlightElement(codeRef10.current); // Apply syntax highlighting
        }
        if (codeRef11.current) {
            hljs.highlightElement(codeRef11.current); // Apply syntax highlighting
        }
        if (codeRef12.current) {
            hljs.highlightElement(codeRef12.current); // Apply syntax highlighting
        }
        if (codeRef13.current) {
            hljs.highlightElement(codeRef13.current); // Apply syntax highlighting
        }
        if (codeRef14.current) {
            hljs.highlightElement(codeRef14.current); // Apply syntax highlighting
        }
        if (codeRef15.current) {
            hljs.highlightElement(codeRef15.current); // Apply syntax highlighting
        }
        if (codeRef16.current) {
            hljs.highlightElement(codeRef16.current); // Apply syntax highlighting
        }
        if (codeRef17.current) {
            hljs.highlightElement(codeRef17.current); // Apply syntax highlighting
        }
        if (codeRef18.current) {
            hljs.highlightElement(codeRef18.current); // Apply syntax highlighting
        }
        if (codeRef19.current) {
            hljs.highlightElement(codeRef19.current); // Apply syntax highlighting
        }
        if (codeRef20.current) {
            hljs.highlightElement(codeRef20.current); // Apply syntax highlighting
        }
        if (codeRef21.current) {
            hljs.highlightElement(codeRef21.current); // Apply syntax highlighting
        }
    }, [codeTheme]); // Re-run when the theme changes

    const updateTheme = (theme) => {
        setCodeTheme(theme);
        const themeLink = document.getElementById("theme");
        themeLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`;
    };

    useEffect(() => {
        const fetchPdf = async () => {
            const response = await fetch("/SQL_Joins_Cheat_Sheet.pdf");
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setPdfUrl(url); 
        };
        fetchPdf();
    }, []);

    return (
    <>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/atom-one-dark-reasonable.min.css" id="theme" />
    <Header></Header>
    <main>
        <div className="Article-Section">
            <div className="Article-Section-Wrapper">
                <div className="section-title-group">
                    <h2 className="Article-section-heading">SAS SQL Code Review</h2>
                    <div className="Article-subsection-heading">last Updated: April 3, 2023.</div>
                </div>

                <div className="Select-Container">
                    <label htmlFor="CodeTheme" style={{"fontFamily": "TimesNewRoman"}}>Select your desired Code Theme:</label><br/>
                    <select className={LightTheme === 'light' ? 'Custom-Select-light' : 'Custom-Select-dark'} id="CodeTheme" value={codeTheme} onChange={(e) => updateTheme(e.target.value)}>
                            <option value="atom-one-dark-reasonable">atom-one-dark-reasonable</option>
                            <option value="vs">vs</option>
                            <option value="a11y-dark">a11y-dark</option>
                            <option value="atom-one-dark">atom-one-dark</option>
                            <option value="rainbow">rainbow</option>
                            <option value="dark">dark</option>
                    </select>
                </div>

                <h3 className="Article-subtitle">Basic SQL to Retrieve and Create Tables</h3>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This article will cover the most commonly used <code className="Code-Snippet">PROC SQL</code> statements, and will provide basic examples for 
                    each. The SQL Nomenclature: Table (e.g. datasets), Rows (e.g. observations) and Columns (e.g. variables); this nomenclature will be important to comprehend 
                    the sematics of <code className="Code-Snippet">PROC SQL</code>. Lets break down the <code className="Code-Snippet">PROC SQL</code> statement:
                </p>

                <pre className="Code-Block">
                <code ref={codeRef1}>
{`              
PROC SQL;
SELECT column list
FROM table list
WHERE condition list
GROUP BY column list
ORDER BY column list
;
quit;
`}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    The semantics of <code className="Code-Snippet">SELECT</code>, it is used to "select" the desired columns from the table (e.g. dataset); it is followed 
                    by <code className="Code-Snippet">FROM</code> which specifies the dataset to select from and its location in the database. As in any programming languages 
                    conditional statements are fundamental, and consequential, and so <code className="Code-Snippet">WHERE</code > is that conditional statement in 
                    &nbsp;<code className="Code-Snippet">PROC SQL</code> and in SQL. While <code className="Code-Snippet">GROUP BY</code> is the grouping statement and <code className="Code-Snippet">ORDER BY</code> 
                    the data arranging statement.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many of the examples in this article utilized either the <b><i>somedata.dat</i></b> dataset and the <b><i>cars.dat</i></b> 
                    &nbsp;dataset from <i>SAS Essentials - Mastering SAS for Data Analytics</i>, 2nd edition by Alan C. Elliot and Wayne A. Woodward, and so we will make the 
                    proper citation here, and below in the citation segment. An additional note is that we used SAS studio through SAS Academics On-Demand to create and 
                    run these examples. For the example, we created a SAS library with <code className="Code-Snippet">LIBNAME</code> and named it SASDATA. 
                    In this first demonstration <code className="Code-Snippet">*</code> was 
                    used in <code className="Code-Snippet">SELECT</code>, so to return the full dataset to the result page. In SQL <code className="Code-Snippet">*</code> is 
                    used to denote that the user desires th SQL interpreter return a dataset with all its associate columns, and so consequently, the same instruction can be 
                    used in SAS SQL to dictate that same result.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef2}>
{`              
PROC SQL;
    SELECT * FROM MYSASLIB.SOMEDATA
    ;
QUIT;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results1.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results1.html" download="SAS_SQL_Code_Review_results1.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Making use of the <code className="Code-Snippet">ORDER BY</code> statement, we can order the data by the values found in ID, and furthermore, it could be made in 
                    descending order.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef3}>
{`              
PROC SQL;
    SELECT * FROM SASDATA.SOMEDATA
    ORDER BY ID DESC
    ;
QUIT;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results2.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results2.html" download="SAS_SQL_Code_Review_results2.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    To demonstrate a conditional statement with <code className="Code-Snippet">WHERE</code>, we implemented the following conditional: <code className="Code-Snippet">GENDER</code> contains 
                    "Female", which only return observations with "Female" as value in GENDER.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef4}>
{`              
PROC SQL;
    SELECT * FROM SASDATA.SOMEDATA
    WHERE GENDER contains "Female"
    ORDER BY ID
    ;
QUIT;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results3.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results3.html" download="SAS_SQL_Code_Review_results3.html">
                        Download Dataset as HTML
                    </a>
                </div>
                
                <p className="Article-Paragraphc-format">
                    Limiting variables outputted can be accomplished by replacing the <code className="Code-Snippet">*</code> with typed names of the column 
                    variables from the given table; the names should be seperated by commas. If one want to recode a variable, one can use <code className="Code-Snippet">CASE</code>. 
                    In the case of <b><i>somedata.dat</i></b>, we used <code className="Code-Snippet">CASE</code> to recode "A" as "TRT 1" and "B" as "TRT 2", 
                    otherwise the value was recoded as "CONTROL".
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef5}>
{`              
PROC SQL;
    SELECT ID, GP, AGE, GENDER,
    CASE GP
        WHEN "A" THEN "TRT 1"
        WHEN "B" THEN "TRT 2"
        ELSE "CONTROL"
    END as TREATMENT
    FROM SASDATA.SOMEDATA
    ORDER BY ID
    ;
QUIT;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results4.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results4.html" download="SAS_SQL_Code_Review_results4.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Note that there is a comma after "GENDER", that is because we were creating a new variable denoted <code className="Code-Snippet">TREATMENT</code>. 
                    Suppose we needed to recode a numeric variable; then we can utilize {"\"<\""}, {"\"<\""}, or {"\"=\""} operators to create the conditional statements.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef6}>
{`              
PROC SQL;
    SELECT *,
    CASE 
        WHEN AGE <= 13 THEN "KID"
        ELSE "TEEN"
    END as STATUS
    FROM SASDATA.SOMEDATA
    ;
QUIT;
`}
                    </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results5.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results5.html" download="SAS_SQL_Code_Review_results5.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Yet again, there is a comma after <code className="Code-Snippet">SELECT *</code>, since <code className="Code-Snippet">CASE</code> is 
                    creating a new variable named <code className="Code-Snippet">STATUS</code>. The resulting table from <code className="Code-Snippet">PROC SQL</code> will 
                    contain all variables plus the new variable <code className="Code-Snippet">STATUS</code>. Proceeding on, if one desire to create a 
                    new table (e.g. dataset), one would use <code className="Code-Snippet">CREATE TABLE</code> statement followed with the destinated working directory, or 
                    SAS library; Otherwise the <code className="Code-Snippet">PROC SQL</code> statement retains all it functionality.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef7}>
{`              
PROC SQL;
    CREATE TABLE SASDATA.FEMALES AS
    SELECT ID,GP,AGE from SASDATA.SOMEDATA	
    WHERE GENDER CONTAINS "Female"
    ORDER by ID
    ;
QUIT;

PROC SQL;
    SELECT * FROM SASDATA.FEMALES
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results5.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results5.html" download="SAS_SQL_Code_Review_results5.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    See SAS Log for results - when you create a table, it is not displayed in the viewer. <code className="Code-Snippet">CREATE</code> <font color="#e22b19">goes 
                        before the </font> <code className="Code-Snippet">SELECT</code> <font color="#e22b19">- creates SAS data set, <u>no table 
                        displayed</u>.</font> <font color="#e22b19">From SAS LOG:</font> NOTE: Table <code className="Code-Snippet">WORK.FEMALES</code> created, 
                        with 30 rows and 3 columns.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef8}>
{`              
PROC SQL;
    CREATE VIEW SASDATA.FEMALES AS
    SELECT ID,GP,AGE from SASDATA.SOMEDATA	
    WHERE GENDER CONTAINS "Female"
    ORDER by ID
    ;
QUIT;

PROC PRINT LABEL data=SASDATA.females2;
RUN;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format">
                    Unlike <code className="Code-Snippet">CREATE TABLE</code> which creates a file in the working directory/SAS library, <code className="Code-Snippet">CREATE VIEW</code> <u>does 
                    not contain actual data</u> and therefore cannot be stored. Rather, <code className="Code-Snippet">CREATE VIEW</code> describes the data stored in 
                    other file structures – in this case a SQL Query. To view the view table, one can use <code className="Code-Snippet">PROC PRINT LABEL</code> which 
                    returned a printed table in the view.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To select the distinct observations from a table, then 
                    replace <code className="Code-Snippet">VIEW</code> with <code className="Code-Snippet">DISTINCT</code>.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef9}>
{`              
PROC SQL;
    SELECT DISTINCT SUBJECT
    FROM SASDATA.COMPlICATIONS;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results6.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results6.html" download="SAS_SQL_Code_Review_results6.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Let perform a simple a calculation on a small dataset named <i>ROOMSIZE</i>.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef10}>
{`              
DATA ROOMSIZE;
    INPUT ROOM $ WIDTH LENGTH @@;
    DATALINES;
    LIVING   14 22 DINING   14 12 BREAKFAST 10 12
    KITCHEN  12 16 BEDROOM1 18 12 BEDROOM2  12 14
    BEDROOM3 13 16 BATH1     8 12 BATH2      7 10
    BATH3     6  8 GARAGE   23 24 
    ;
RUN;

Proc SQL;
    SELECT *,
    ROUND(WIDTH*LENGTH, 0.01) FORMAT=6.2 AS AREA
    FROM ROOMSIZE
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results7.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results7.html" download="SAS_SQL_Code_Review_results7.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    More calculations with a <code className="Code-Snippet">GROUP BY</code> statement.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef11}>
{`              
Proc SQL;
    CREATE TABLE TIMEADJ AS 
    SELECT GP,COUNT(GP) AS N,TIME1,TIME2,MAX(TIME1) FORMAT=6.2 AS TIME1MAX,
    ROUND(TIME2/(CALCULATED TIME1MAX)*100,0.01)
    FORMAT=6.2 AS TIME2ADJ
    FROM SASDATA.SOMEDATA
    GROUP BY GP;
QUIT;

PROC SQL; SELECT * FROM TIMEADJ; QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results8.html" 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results8.html" download="SAS_SQL_Code_Review_results8.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Note there are THREE variables created by calculation step, which was variables: N, TIME1MAX and TIME2ADJ. 
                    Use this <code className="Code-Snippet">PROC SQL; SELECT *, FROM TIMEADJ; QUIT;</code> to view the table that was just created.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SQL Join Cheat Sheet: <a href="https://www.datacamp.com/cheat-sheet/sql-joins-cheat-sheet" style={{"color":"#95B9C7"}}>SQL Joins Cheat Sheet</a>. 
                </p>

                <iframe 
                    src={pdfUrl} 
                    width="100%" 
                    height="400px" 
                    style={{ border: "none"}}
                />
                <div>
                    <a href="/SQL_Joins_Cheat_Sheet.pdf" download="SQL_Joins_Cheat_Sheet.pdf">
                        Download SQL Joins Cheat Sheet as pdf
                    </a>
                </div>

                <h3 className="Article-subtitle">Basic SQL Operators for Combining Datasets</h3>

                <p className="Article-Paragraphc-format">
                    Combine two or more queries in various ways by using the following set operators (there are more than these):
                </p>

                <center>
                <table className="GeneratedTable" style={{"width":"50%"}}>
                    <thead>
                        <tr>
                            <th>Operators</th>
                            <th>Descriptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Union</td>
                            <td>produces all <font color="#e22b19">unique</font> rows from both queries.</td>
                        </tr>
                        <tr>
                            <td>Except</td>
                            <td>produces rows that are part of the first query only.</td>
                        </tr>
                        <tr>
                            <td>Intersect</td>
                            <td>produces rows that are common to both query results.</td>
                        </tr>
                        <tr>
                            <td>Outer Union</td>
                            <td>concatenates the query results.</td>
                        </tr>
                    </tbody>
                </table>
                </center>

                <p className="Article-Paragraphc-format">
                    To demonstrtate through example the SQL operators that can combine tables together, we generated two tables, <i>OLD1</i> and <i>OLD2</i>. The 
                    first append operator that will be presented will be <code className="Code-Snippet">UNION</code>. Union appends, keeps only 
                    unique rows (e.g, observations).
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef12}>
{`              
DATA OLD1;
    INPUT SUBJ $ AGE YRS_SMOKE;
    DATALINES;
    001 34 12
    003 44 14
    004 55 35
    006 21 3
    011 33 11
    ;
RUN;
    
DATA OLD2;
    INPUT SUBJ $ AGE YRS_SMOKE MARRIED;
    DATALINES;
    006 21 3 .
    011 33 11 1
    012 25 19 0
    023 65 45 1
    032 71 55 1
    ;
RUN;
    
PROC SQL;
    SELECT * FROM OLD1
    union
    SELECT * FROM OLD2;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results9.html" 
                    width="100%" 
                    height="300px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results9.html" download="SAS_SQL_Code_Review_results9.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    <font color="#e22b19">This is the same code from before - only difference is the duplicated records in the data sets. One row 
                    6 is unique. Two row 11's are unique. (UNION keeps all unique.)</font><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="Code-Snippet">UNION ALL</code> keeps all 
                    rows, regardless of the rows respective uniqueness.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef13}>
{`              
PROC SQL;
    SELECT * FROM OLD1
    union all
    SELECT * FROM OLD2;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results10.html" 
                    width="100%" 
                    height="300px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results10.html" download="SAS_SQL_Code_Review_results10.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Except only keeps the data from the first data set that are not in the 2nd data set (but all column variables are used).
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef14}>
{`              
PROC SQL;
    SELECT * FROM OLD1
    except
    SELECT * FROM OLD2;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results11.html" 
                    width="100%" 
                    height="150px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results11.html" download="SAS_SQL_Code_Review_results11.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    <font color="#e22b19">Suppose there was a duplicate record 006 in the first data set;</font> using <code className="Code-Snippet">EXCEPT</code> record 6 <u>would 
                    not appear in the result because there is a record 6 in the second data set.</u> If you want a duplicate record that is not a duplicate matched in the 2nd data set 
                    to appear in the result, use <code className="Code-Snippet">EXCEPT ALL</code>.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef15}>
{`              
PROC SQL;
    SELECT * FROM OLD1
    except all
    SELECT * FROM OLD2;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results12.html" 
                    width="100%" 
                    height="150px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results12.html" download="SAS_SQL_Code_Review_results12.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    The <code className="Code-Snippet">INTERSECT</code> command returns only those records that occur in both data sets.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef16}>
{`              
PROC SQL;
    SELECT * FROM OLD1
    intersect
    SELECT * FROM OLD2;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results13.html" 
                    width="100%" 
                    height="100px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results13.html" download="SAS_SQL_Code_Review_results13.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Compare Union with <code className="Code-Snippet">Outer Union</code>:<br/><br/>Union: produces all unique rows from both queries.
                    <br/><br/>Outer Union: concatenates the series results.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef17}>
{`              
PROC SQL;
    SELECT * FROM OLD1
    outer union
    SELECT * FROM OLD2
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results14.html" 
                    width="100%" 
                    height="300px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results14.html" download="SAS_SQL_Code_Review_results14.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Note: SQL allows DUPLICATE variables names in VIEW but not in CREATE TABLE.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef18}>
{`              
PROC SQL;
    CREATE TABLE TMP AS
    SELECT * FROM OLD1
    outer union
    SELECT * FROM OLD2
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format">
                    <code className="Code-Snippet">CREATE TABLE</code> cannot handle duplicate variables: i.e.
                    <br/><font color="#008B00">WARNING: VARIABLE SUBJ already exists on file WORK.TMP</font>.
                    <br/><br/>Using SQL Table Aliases:<br/><br/>
                    SQL aliases are used to give a database table or a column in a table, a temporary name -- to make column names more readable. 
                    SQL aliases can be useful when handling 2 or more tables. <font color="#e22b19">Table Alias</font> allows one to create distinctions 
                    amongst the variables from different tables, so to better distinguish said variables without ambiguity.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef19}>
{`              
PROC SQL;
    SELECT a.subj,a.age,b.subj,b.age,b.married as married
    FROM OLD1 a, OLD2 b
    WHERE a.subj=b.subj
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results15.html" 
                    width="100%" 
                    height="112px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results15.html" download="SAS_SQL_Code_Review_results15.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    In an <code className="Code-Snippet">INNER JOIN</code>, only keeps observations with <font color="#e22b19">both key values</font> that match in 
                    the selected variable, or variables.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using the table names as the alias.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef20}>
{`              
PROC SQL;
    SELECT *
    FROM OLD1, OLD2
    WHERE old1.subj=old2.subj
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results16.html" 
                    width="100%" 
                    height="112px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results16.html" download="SAS_SQL_Code_Review_results16.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    Add the phrase "order by old1.subj" to put the table in Subject Order.
                </p>

                <pre className="Code-Block">
                    <code ref={codeRef21}>
{`              
Proc SQL;
    SELECT *
    FROM OLD1, OLD2
    WHERE old1.subj=old2.subj
    ORDER by old1.subj
    ;
QUIT;
`}
                    </code>
                </pre> 

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/SAS_SQL_Code_Review_results17.html" 
                    width="100%" 
                    height="112px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href="/SAS_SQL_Code_Review_results17.html" download="SAS_SQL_Code_Review_results16.html">
                        Download Dataset as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    That should wrap-up the final appending operator that will be presented in this article; we hope that this article was useful to the reader 
                    in one way or another.
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

export default SAS_SQL_Code_Review;