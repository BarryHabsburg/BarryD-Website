import React, { useState, useEffect, useRef, useReducer } from 'react';
import DOMPurify from 'dompurify';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from '../components/Citations';
import hljs from 'highlight.js'; // Import highlight.js
import 'highlight.js/styles/vs.css'; // Import default theme
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

function Data_Exploration_of_simulated_Data_with_Microsift_Excel() {

    const [WindowSize, setWindowSize] = useState(0);

    function getWindowSize() {
        return window.innerWidth;
    }

    // Used to size of the Article-Section div
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const Cite_Name = "Data Exploration Citations";
    const sanitizedStyleCode = DOMPurify.sanitize("style=\"color:rgb(245, 245, 255);\"");
    const [pdfUrls, setPdfUrls] = useState([]);
    const pdfFiles = [
        "/Income_Random_variable.pdf",
        "/Credit_uti_Random_variable.pdf",
        "/FICO_Random_variable.pdf",
        "/House_Applicant_Data.pdf"
    ];
    const [LightTheme, setLightTheme] = useState('dark');
    const [codeTheme, setCodeTheme] = useState("vs");
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
    }, [codeTheme]); // Re-run when the theme changes

    const updateTheme = (theme) => {
        setCodeTheme(theme);
        const themeLink = document.getElementById("theme");
        themeLink.href = `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/${theme}.min.css`;
    };

    useEffect(() => {
        const fetchPdfs = async () => {
          try {
            const urls = await Promise.all(
              pdfFiles.map(async (pdf) => {
                const response = await fetch(pdf);
                if (!response.ok) {
                  throw new Error(`Failed to fetch ${pdf}`);
                }
                const blob = await response.blob();
                return URL.createObjectURL(blob);
              })
            );
            setPdfUrls(urls);
          } catch (error) {
            console.error('Failed to load PDFs:', error);
          }
        };
    
        fetchPdfs();
    }, []);

    return (
    <>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/vs.min.css" id="theme" />
    <Header></Header>
    <main>
        <div className="Article-Section">
            <div className="Article-Section-Wrapper">
                <div className="section-title-group">
                    <h2 className="Article-section-heading">Data Exploration of simulated Data with Microsoft Excel</h2>
                    <div className="Article-subsection-heading">last Updated: April 17, 2023.</div>
                </div>

                <div className="Select-Container">
                    <label htmlFor="CodeTheme" style={{"fontFamily": "TimesNewRoman"}}>Select your desired Code Theme:</label><br/>
                    <select className={LightTheme === 'light' ? 'Custom-Select-light' : 'Custom-Select-dark'} id="CodeTheme" value={codeTheme} onChange={(e) => updateTheme(e.target.value)}>
                                <option value="vs">vs</option>
                                <option value="a11y-dark">a11y-dark</option>
                                <option value="atom-one-dark">atom-one-dark</option>
                                <option value="rainbow">rainbow</option>
                                <option value="dark">dark</option>
                                <option value="atom-one-dark-reasonable">atom-one-dark-reasonable</option>
                    </select>
                </div>

                <h3 className="Article-subtitle">Creating simulated data with Monte Carlo Methods</h3>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We created this research article to domestrate that Microsoft Excel still has relevancy in present-day Data analytics,
                    and that despite this enterpise SaaS dating back to 1985, it has extensive patches and upgrades over the decades. And 
                    because of this continuous investment by Microsoft, Microsoft Excel found itself with longevity as a useful data interpretation
                    and visualization tool in the year of 2023. Microsoft Excel is a decent tool to format, manipulate, interpet and visualize data, and because
                    of this it find its relevancy as a small-scale data analytic tool.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To demonstrate the functionality and feature suites 
                    of Microsoft Excel, we decided to conduct a data exploration of a simulated mortgage applicant dataset. For the dataset itself,
                    we generated it through a series of Pseudo-random number sampling algorithms, these algorithms are more commonly known as Monte Carlo
                    methods. Monte Carlo methods are typically used to generate random variables that possess known named distributions such as 
                    the known named Gaussian distribution, or Beta distribution, or Gamma distributionn, or et cetera. For the purposes of this project, the
                    Box-Muller transformation method was utilized to generate gaussian distributed random variables, and an Acceptance-Rejection algorithm was 
                    derived for the purpose of generating Beta distributed random variables.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the reader's convenience the Python code that was used to generate the simulated dataset 
                    has been broken up into indvidual Python code-block. The following code block contains all of the open-source packages used in this project. 
                    All of the following open-source packages were utilized to code the pseudo-random number sample methods, generate fake names, import real-housing data,
                    and compile the finalized  simulate mortgage applicant dataset.
                </p>
                <pre className="Code-Block">
                <code ref={codeRef1} className="python">
                    {`              
import numpy as np
import random
from scipy.stats import norm
import pandas as pd
import matplotlib.pyplot as plt
from scipy.special import gamma
import seaborn as sns
from faker import Faker
sns.set()
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The simplest variable generated was the names variable; it only took three lines of Python code to 
                    generate 500 fake names. To accomplish this, the following import statement needs to be in the Python script <code className="Code-Snippet">from faker import Faker</code>; this 
                    imports the <code className="Code-Snippet">Faker</code> function from the faker package folder. After importation of the <code className="Code-Snippet">Faker</code> function, 
                    an instance must be created in the script: <code className="Code-Snippet">f=Faker();</code>; said instance initializes the class function: Faker(). With an instance 
                    created and thus the Fake() function initiated, the name() function is avialable to be executed to generate a fake name. To generate more than a single fake name, one 
                    needs to recursively execute <code className="Code-Snippet">f.name()</code>; to do so, one only needs to include the <code className="Code-Snippet">f.name()</code> in a 
                    List Comprehension; the List comprehension would simultaneously execute f.name() function recursively, while storing resulting strings inside said list object. The 
                    complete code is as followed:
                </p>

                <pre className="Code-Block">
                <code ref={codeRef2} className="python">
{`              
f=Faker();
n=500;
names=[f.name() for _ in range(n)];
`}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As aforementioned the Box-Muller transformation method [<a href="https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform" style={{"color":"#95B9C7"}}>1</a>] was 
                    used to generate a gaussian distributed random variable that was used to represent the Income distribution of the mortgage applicants. Another Monte Carlo method 
                    that generates gaussian disitributed random variables is the Ziggurat algorithm [<a href="https://doi.org/10.18637/jss.v005.i08" style={{"color":"#95B9C7"}}>2</a>,<a href="https://people.sc.fsu.edu/~jburkardt/c_src/ziggurat/ziggurat.html" style={{"color":"#95B9C7"}}>3</a>,<a href="https://heliosphan.org/zigguratalgorithm/zigguratalgorithm.html" style={{"color":"#95B9C7"}}>4</a>], which 
                    is a type of acceptance-rejection method; the Ziggurat algorithm is used in MATLAB's gaussian PRN (pseduo-random number) sampler <code className="Code-Snippet">randn()</code>, while 
                    Ziggurat algorithm is also used in Numpy's <code className="Code-Snippet">random.normal()</code> and <code className="Code-Snippet">random.randn()</code>. Digressing unlike 
                    the Ziggurat algorithm, Box-Muller is an transformation methodology, which transforms uniform pseudo-random samplings from the cartesian coordinate system to the polar coordinate system. 
                    Within the transformation from cartesian to polar, the uniform pseudo-random samplings' that possess a uniform distribution can be represented as a square in the cartesian coordinate; 
                    applying the Box-Muller transformation turn the square coordinates of the sampling into curved coordinates of the polar system - thus transforming the distribution into a standard normal distribution. 
                    The mathematical formulation of the Box-Mullar transformation,
                </p>

                <div className="Math-Equation">
                    <Latex>{"$$X=R\\cos(x)=\\sqrt{-2\\ln(U_{2})}\\cos(2\\pi U_{1}) \\tag{1}$$"}</Latex>
                </div>


                <div className="Math-Equation">
                    <Latex>{"$$X=R\\sin(x)=\\sqrt{-2\\ln(U_{2})}\\sin(2\\pi U_{1}) \\tag{2}$$"}</Latex>
                </div>


                <p className="Article-Paragraphc-format">
                    is just the modified formulation of the polar coordinate conversion formulas: details of the derivation can be found here [<a href="https://blog.cupcakephysics.com/computational%20physics/2015/05/10/the-box-muller-algorithm.html" style={{"color":"#95B9C7"}}>5</a>]. In 
                    the following code block is the Python implementation of the Box-Muller transformation algorithm, though we also shifted the mean by <span className="Latex-span"><Latex>{"$70000$"}</Latex></span> and
                    expanded the normal spread by <span className="Latex-span"><Latex>{"$25000$"}</Latex></span>.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef3} className="python">
                    {`              
n=500;
U1=np.random.uniform(0,1,n);
U2=np.random.uniform(0,1,n);
X=np.sqrt(-2*np.log(U1))*np.cos(2*np.pi*U2);

# Shift center by 70000 and deviate spread by 25000
mean=70000; std=25000;
Income=mean+std*X;

# Plots random variable X
count,bins,ignored=plt.hist(Income, 100, density=True);

# Plot between -4 and 4 with
x_axis=np.arange(round(min(Income)),round(max(Income)),1);

# Calculates the mean and variance for random variable X
mean=np.mean(Income);
sd=np.std(Income);
   
# Plots the true Normal Distribution curve    
plt.plot(x_axis,norm.pdf(x_axis,mean,sd));
plt.title("Income-Random Variable");
plt.savefig("Income_Random_variable.pdf", format="html", bbox_inches="tight");
plt.show();
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    To display the resulting plot of the gaussian distributed random variable liably, it was thought best to export the plot through Matplotlib's savefig(), e.g., <code className="Code-Snippet">plt.savefig("Income_Random_variable.pdf", format="pdf", bbox_inches="tight")</code>, and 
                    embed the pdf file to this HTML file.
                </p>

                <iframe 
                    src={pdfUrls[0]} 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href={pdfUrls[0]} download={pdfUrls[0]}>
                        Download plot as pdf
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To create a separation between applicant's Income distribution and credit utilization variable (e.g. credit_uti), it 
                    was thought best that credit utilization be a Beta distributed random variable with shape parameters <span className="Latex-span"><Latex>{"$\\alpha=2$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\beta=2$"}</Latex></span>, e.g. <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=2,\\beta=2)$"}</Latex></span>. The methodology 
                    behind sampling for this specific Beta random variable is the Accept-Reject method; the algorithm is as followed:
                </p>

                <pre className="Code-Block">
                <code ref={codeRef4}>
{`              
The Accept-Reject Method:

STEP 1: Generate $Y$ having density g.
STEP 2: Generate a (uniform) random number U.
STEP 3: If $U \\leq \\frac{f(Y)}{c \\cdot g(Y)}$, set $X=Y$. Otherwise, return to Step 1.
`}
                </code>
                </pre>


                <div className="Math-Equation">
                    <Latex>{"$$\\text{Step 3: } \\; U \\leq \\frac{f(Y)}{c \\cdot g(Y)} \\tag{3}$$"}</Latex>
                </div>


                <p className="Article-Paragraphc-format">
                    this algorithm description was borrowed from <i>Simulation, Fifth edition</i> by Sheldon M. Ross [<a href="https://www.elsevier.com/books/simulation/ross/978-0-12-415825-2" style={{"color":"#95B9C7"}}>6</a>]. Without 
                    derivation detail the following code blocks contains the pseudo-random number sampling schema for <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=2,\\beta=2)$"}</Latex></span>.
                </p>


                <pre className="Code-Block">
                <code ref={codeRef5} className="python">
                    {`              
def beta_pdf(x):
    alpha=2;
    beta=2;
    beta_fun=gamma(alpha)*gamma(beta)/gamma(alpha+beta);
    prob=x**(alpha-1)*(1-x)**(beta-1);
    
    return 1/beta_fun*prob;

def beta_gen(n,mode):
    i=0;
    c=beta_pdf(mode);
    output=np.zeros(n);
    while i < n:
        U=np.random.uniform(size=1);
        V=np.random.uniform(size=1);
        if U < 1/c*beta_pdf(V):
            output[i]=V;
            i=i+1;
    return output;
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    The following code is to generate execute the previous code block, and thus generate <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=2,\\beta=2)$"}</Latex></span>.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef6} className="python">
                    {`              
alpha=2;
beta=2;
n=500;

# Mean of Beta distribution
mode=(alpha)/(alpha+beta);

x=np.arange(0,1.01,0.01);
y=beta_pdf(x);

credit_uti=beta_gen(n,mode);

fig,ax = plt.subplots();
temp = ax.hist(credit_uti,100,density=True);
ax.plot(x,y);
plt.title("Credit Uti R.V.: Alpha=2, Beta=2");
plt.savefig("Credit_uti_Random_variable.pdf", format="pdf", bbox_inches="tight");
plt.show();
                    `}
                </code>
                </pre>

                
                <p className="Article-Paragraphc-format">
                    The resulting distribution plot for <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=2,\\beta=2)$"}</Latex></span> was embed here.
                </p>
                

                <p style={{"fontSize": "17px"}}></p>

                <iframe 
                    src={pdfUrls[1]} 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href={pdfUrls[1]} download={pdfUrls[1]}>
                        Download plot as pdf
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The next variable was FICO scores, it was decided that this feature would take-on a 
                    Beta distributed random variable with shape parameters <span className="Latex-span"><Latex>{"$\\alpha=5$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\beta=3$"}</Latex></span>, 
                    e.g., <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=5,\\beta=3)$"}</Latex></span>. The previous Accept-Reject schema that was used to 
                    sample <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=2,\\beta=2)$"}</Latex></span> was reused for this pseudo-random number sampling, though 
                    the shape parameters were changed to <span className="Latex-span"><Latex>{"$\\alpha=5$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\beta=3$"}</Latex></span>. An additional is 
                    that a Beta distrubation domain is the closed domain of <span className="Latex-span"><Latex>{"$[0,1]$"}</Latex></span>, though FICO's scales 
                    from <span className="Latex-span"><Latex>{"$[300,850]$"}</Latex></span>; to rectify this disparsity, <span className="Latex-span"><Latex>{"$\\text{Beta}(\\alpha=5,\\beta=3)$"}</Latex></span> was 
                    simply shifted by 550 and it dispersion was expanded to 300. The resulting distribution plot 
                    of <span className="Latex-span"><Latex>{"$\\text{FICO}=550 + 300*\\text{Beta}(\\alpha=5,\\beta=3)$"}</Latex></span> is as followed:
                </p>

                <iframe 
                    src={pdfUrls[2]} 
                    width="100%" 
                    height="400px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href={pdfUrls[2]} download={pdfUrls[2]}>
                        Download plot as pdf
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    At this point the simulated mortgage applicant dataset has not been formed, and is just a collection of different random variables; 
                    to retectify this, we formed the first part of the simulated dataset with the following script. To embed the Panda's 
                    dataframe (e.g. <code className="Code-Snippet">dateframe</code>), the <code className="Code-Snippet">dataframe</code> had 
                    to be convert into a HTML format, and written into an HTML file script.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef7} className="python">
                    {`              
dataframe=pd.DataFrame({'names': names, 'Income': Income,'credit_uti':credit_uti,'FICO':FICO});

# exports the dataframe to a HTML file
html=dataframe.to_html();
text_file=open("dataframe_small.html","w");
text_file.write(html);
text_file.close();
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    An significant note is that the default font-color in the export process above is black; it was a problem for us, as the 
                    theme color of this web-page is dark-gray. We had to open the HTML file script "dataframe_small.html", and 
                    had to insert <code className="Code-Snippet">{sanitizedStyleCode}</code> to the table tag to change the font-color 
                    to shade of white.
                </p>

                <p className="Article-Paragraphc-format" id="Note"><b>Note:</b> The original website had a background color of a dark-shade of gray, which made the 
                native black of the HTML table difficult to observe. So it was needed that the font color be changed to a shade of white.
                <br/>In regards to the current website, iframe does not inherit the shade of black, so the native black font of the HTML table is present,
                no modification was needed this time.</p>

                <iframe 
                    src="/dataframe_small.html" 
                    width="100%" 
                    height="320px" 
                    style={{ border: 'none', "backgroundColor": "white" }}
                />
                <div>
                    <a href="/dataframe_small.html" download="dataframe_small.html">
                        Download dataframe as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the FICO feature generated, it was then possible to generate a random variable that would contain 
                    each applicants credit line limit (e.g. the maximum quantity of credit available to them without loans); to generate this 
                    random variable the following algorithm was devised that is roughly based around the average credit limit on a credit card for each 
                    bracket of FICO score and income level. To make this estimation more accurate, the estimated credit line for each mortgage applicant's 
                    was scaled by <span className="Latex-span"><Latex>$3.84$</Latex></span>; as national average number of credit cards held by a person in 
                    the U.S. is <span className="Latex-span"><Latex>$3.84$;</Latex></span> statistic can be found 
                    in [<a href="https://fortune.com/recommends/credit-cards/how-many-credit-cards-should-i-have/" style={{"color":"#95B9C7"}}>7</a>].
                </p>

                <pre className="Code-Block">
                <code ref={codeRef8} className="python">
                    {`              
credit_line=[];
for i,j in zip(dataframe['Income'],dataframe['FICO']):
    if j > 500 and j < 640:
        credit_line.append(i*0.01*3.84);
    elif j > 641 and j < 680:
        if i > 0 and i < 75000:
            credit_line.append(i*0.020*3.84);
        elif i > 50001 and i < 100000:
            credit_line.append(i*0.053*3.84);
        elif i > 10000 and i < 150000:
            credit_line.append(i*0.033*3.84);
        else:
            credit_line.append(0);
    elif j > 680 and j < 720:
        if i > 0 and 75000:
            credit_line.append(i*0.040*3.84);
        elif i > 50001 and i < 100000:
            credit_line.append(i*0.100*3.84);
        elif i > 10000 and i < 150000:
            credit_line.append(i*0.100*3.84);
        else:
            credit_line.append(0);
    elif j > 721 and j < 760:
        if i > 0 and i < 75000:
            credit_line.append(i*0.100*3.84);
        elif i > 50001 and i < 100000:
            credit_line.append(i*0.100*3.84);
        elif i > 10000 and i < 150000:
            credit_line.append(i*0.100*3.84);
        else:
            credit_line.append(0);
    elif j > 761 and j < 860:
        if i > 0 and i < 75000:
            credit_line.append(i*0.200*3.84);
        elif i > 50001 and i < 100000:
            credit_line.append(i*0.200*3.84);
        elif i > 10000 and i < 150000:
            credit_line.append(i*0.200*3.84);
        else:
            credit_line.append(0);
    else:
        credit_line.append(i*0.01);
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since the simulated dataset possesses a credit limit (e.g. <code className="Code-Snippet">credit_line</code>) and 
                    credit utilization (e.g. <code className="Code-Snippet">credit_uti</code>) features, it entirely made sense to incorporate a debt variable 
                    to the dataset. To calculate the debt that was held by each mortgage applicant, the following formulation was used, 
                </p>

                <div className="Math-Equation">
                    <Latex>{"$$\\text{debt} = \\text{credit\\_line} * \\text{credit\\_uti},$$"}</Latex>
                </div>

                <p className="Article-Paragraphc-format">
                    a rather simple formulation, it based on the assumption that <code className="Code-Snippet">credit_line</code> represent 
                    all of their credit, and that <code className="Code-Snippet">credit_uti</code> represent total credit utilization by an 
                    applicant.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A credit approval problem can be either be a univariate classification problem 
                    or multiclassification problem; in the latter case there are more than one target variable that divides the data into their 
                    own classifications, while in the former case only one target variable exists that divides the data into a binary category. 
                    For simplicity, we chose to construct a binary classification problem with this simulated mortgage applicant dataset, and 
                    therefore, we chose to incorportate a default variable as our target variable. To generate the default variable, we 
                    constructed the following python script:
                </p>

                <pre className="Code-Block">
                <code ref={codeRef9} className="python">
                    {`              
risky=dataframe[dataframe['FICO']<720];
riskynames=list(risky['names']);
x=random.choices(riskynames,k=50);

filtered_values=np.where((dataframe['FICO']>=680) & (dataframe['FICO']<=760));
risky2=dataframe.loc[filtered_values];
riskynames2=list(risky2['names']);
y=random.choices(riskynames2,k=50);

# removes duplicate names and keeps unique names
z=x+list(set(y)-set(x)); 

# generates the defaulted variable
defaulted=[];
for i in dataframe['names']:
    if i in z:
        defaulted.append(1);
    else:
        defaulted.append(0);
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    so accounts that held a FICO score below $720$ was selected into the risky name's list (e.g. <code className="Code-Snippet">riskynames</code>), and 
                    from there, fifty names were randomly selected with <code className="Code-Snippet">random.choice(riskynames,k=50)</code>. To further 
                    increase the number, we implemented a second script which selected names from accounts that held a FICO score between 680 and 760. 
                    To not double select names, we implemented <code className="Code-Snippet">z=x+list(set(y)-set(x))</code>, which removed duplicated 
                    names and kept unique names. To generate the default variable (e.g. <code className="Code-Snippet">defaulted</code>), redumentary search 
                    script that assigned $1$ to accounts with were found to be selected names, and $0$ to all other accounts.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At this point the simulated dataset (e.g. <code className="Code-Snippet">dataframe</code>) only consists 
                    of <code className="Code-Snippet">names</code>, <code className="Code-Snippet">Income</code>, <code className="Code-Snippet">credit_uti</code> and <code className="Code-Snippet">FICO</code>, and so, 
                    the simulated dataset is missing <code className="Code-Snippet">credit_line</code>, <code className="Code-Snippet">debt</code> and <code className="Code-Snippet">defaulted</code>; hence, 
                    it is time to redefine <code className="Code-Snippet">dataframe</code> to include the missing variables. And so to redefine <code className="Code-Snippet">dataframe</code>, we feed the random variables 
                    and their corresponding columns names into <code className="Code-Snippet">pd.DataFrame()</code>, and stored the Panda's dataframe into an objected named <code className="Code-Snippet">dataframe</code>.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef10} className="python">
                    {`              
dataframe=pd.DataFrame({'names': names, 'Income': np.round(Income,2),'credit_uti': np.round(credit_uti,4)
,'FICO': np.round(FICO,2), 'Credit_line': np.round(credit_line,2),'debt': np.round(debt,2)
, 'defaulted': np.round(defaulted,2)});

html=dataframe.to_html();
text_file=open("dataframe.html","w");
text_file.write(html);
text_file.close();
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format"></p>

                <iframe 
                    src="/dataframe.html" 
                    width="100%" 
                    height="320px" 
                    style={{ border: 'none', "backgroundColor": "white" }}
                />
                <div>
                    <a href="/dataframe_small.html" download="dataframe_small.html">
                        Download dataframe as HTML
                    </a>
                </div>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To around off this simulated dataset, we needed simulated housing data, so we borrowed the 
                    housing dataset "collegetown.xlsx" from the Github repository "POE5Rdata" [<a href="https://github.com/ccolonescu/POE5Rdata" style={{"color":"#95B9C7"}}>8</a>], which 
                    is a R data repository for a econometrics textbook: "Principle of econometrics with R" by Constantin Colonescu, 5th edition. 
                    We used <code className="Code-Snippet">read_excel</code> from Pandas to import the housing data contained in the excel file as a 
                    dataframe, <code className="Code-Snippet">df</code>. For liability the column names were reformatted to more readable names; 
                    the house prices were scaled by <span className="Latex-span"><Latex>$1000$</Latex></span> to restore the original magnitude of these values. 
                    To introduce some form of random selection to which house that an mortgage applicant select, the row of <code className="Code-Snippet">df</code> was permutated by rows 
                    through <code className="Code-Snippet">sample(frac=1)</code>. With the formatting complete, we were then able to finally 
                    concatenate <code className="Code-Snippet">dataframe</code> with <code className="Code-Snippet">df</code>; we stored the resulting 
                    dataframe in an object named <code className="Code-Snippet">House_Applicant_Data</code>. With that we have completed the simulated mortgage applicant dataset. 
                    To perform the data analysis in Excel, we needed to export the finished dataset to an Excel file. To accomplish to aim, <code className="Code-Snippet">to_excel()</code> was 
                    utilized, and the resulting file "House_Applicant_Data.xlsx" was outputted.
                </p>

                <pre className="Code-Block">
                <code ref={codeRef11} className="python">
                    {`              
# Imports Excel file
df=pd.read_excel("collegetown.xlsx");

# Renames the columns
df.columns=['House_price', 'sqft', 'House_age', 'pool', 'fireplace', 'close', 'twostory',
        'occupied'];

# Scales House price by 1000
df['House_price']=df['House_price']*1000;

# Permutates the rows of df and stores new dataframe in df1
df1=df.sample(frac=1);

# Combines 
House_Applicant_Data=pd.concat([dataframe,df1],axis=1);

# Export the dataframe to Excel file
House_Applicant_Data.to_excel("House_Applicant_Data.xlsx",sheet_name='DataSheet1'); 
                    `}
                </code>
                </pre>

                <p className="Article-Paragraphc-format">
                    For reader convenience, we embded a PDF version of <code className="Code-Snippet">House_Applicant_Data</code> just 
                    below this sentence
                </p>

                <iframe 
                    src={pdfUrls[3]} 
                    width="100%" 
                    height="320px" 
                    style={{ border: 'none' }}
                />
                <div>
                    <a href={pdfUrls[3]} download={pdfUrls[3]}>
                        Download House Applicant Data as pdf
                    </a>
                </div>

                <h3 className="Article-subtitle">Data Analysis in Excel</h3>

                <p className="Article-Paragraphc-format">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With the simulate mortgage applicant dataset complete, we are now able to open the 
                    aforementioned dataset in Microsoft Excel.
                </p>

                <div className="Research-Img-Container">
                    <img src={`./House_Applicant_Dataset.PNG`} alt="#"/>
                </div>

                <p className="Article-Paragraphc-format">
                    Under the Data tab in Excel, there exists the suite of data analytics tools that make data analysis possible in Microsoft Excel; in example, 
                    Excel's Filter tool possesses the same functionality to filter data as conditional statements in Panda's dataframes.
                </p>

                <div className="Research-Img-Container-Small">
                    <img src={`./Excel_Filter_tool.PNG`} alt="#" id="img-1"/>
                </div>

                <p className="Article-Paragraphc-format"></p>

                <div className="Research-Img-Container">
                    <img src={`./Excel_filtered_dataset.PNG`} alt="#"/>
                </div>

                <p className="Article-Paragraphc-format">
                    To generate a new column, one can use formulaic mathematical equations and conditional/boolean statements to shape already existing data variables 
                    into a new data variable. For example,
                </p>

                <div className="Math-Equation">
                    <Latex>{"$$=\\text{Log(I2:I501)} \\tag{4}$$"}</Latex>
                </div>

                <p className="Article-Paragraphc-format">
                    where "I" is the column name, and the numeric "2" is the row; so "I2:I501" is from element "I2" to "I501". So in essence to generate the logged house price, 
                    we only need this formula in a new column. Sometime more sophicated is nested conditionals, such as,
                </p>



                <div className="Math-Equation">
                    {WindowSize > 800 ? <Latex>{"$$=\\text{IF(E2<680,\"risky\", IF(AND(E2>680,E2<720),\"medium\\_risk\",}$$"}</Latex> : <><Latex>{"$$=\\text{IF(E2<680,\"risky\", }$$"+"\n"+"$$ \\text{IF(AND(E2>680,E2<720),\"medium\\_risk\",}$$"}</Latex></>}
                </div>

                <div className="Math-Equation">
                    {WindowSize > 800 ? <Latex>{"$$\\text{IF(AND(E2>720,E2<760),\"low\\_risk\", IF(E2>760,\"minimum\\_risk\"))))} \\tag{5}$$"}</Latex> : <Latex>{"$$\\text{IF(AND(E2>720,E2<760),\"low\\_risk\",}$$"+"\n"+"$$\\text{IF(E2>760,\"minimum\\_risk\")))) \\tag{5}}$$"}</Latex>}
                </div>

                <p className="Article-Paragraphc-format">
                    which generates a new category variable, which consists of "risky", "medium_risk", "low_risk" and "minimum_risk" categories.
                </p>

                <div className="Research-Img-Container">
                    <img src={`./Excel_new_data_in_dataset.PNG`} alt="#"/>
                </div>
                    
                <p className="Article-Paragraphc-format">
                    The next awesome tool is the pivot tool, one can generate nice tables and dashboards with this fantastic data analytics tool. To generate a pivot table, 
                    select all columns and rows from the desire dataset, then click the "Insert" tab, followed with clicking the "PivotTable" button in the upper left corner 
                    of the window; this should prompt a option window, as all columns and rows are already selected, just select "ok". Upon execution Excel will create a new 
                    work sheet to populate the new pivot table; we renamed the work sheet to "Pivot Table".
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pivot tables function and utility are similar to that of conditional indexing in Panda's dataframe, one can narrow the 
                    scope of a dataset by its columns or rows, element in its columns and rows. But instead of the use of boolean conditions, Excel's pivot table utilize 
                    areas: "filter", "columns", "rows" and "Values".
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Filter" behaves in the same way as a filtering condition statement as "dataframe[dataframe["credit_uti"]==0.9381]", where 
                    one can filter for a specific value. But if one desires to filter for multiple values, then must select the check box for "Select multiple items"; this feature 
                    makes the filter behave like "dataframe[dataframe.FICO.isin([711.95,678.51,774.06])]" or {"\"dataframe[(dataframe.FICO > 680 and dataframe.FICO < 720)]\""}.
                </p>

                <div className="Research-Img-Container-Small">
                    <img src={`./Excel_Pivot_Table_Example_Single_filter.PNG`} alt="#" id="img-2"/>
                    <div className="img-caption">Single item Filter</div>
                </div>
                

                <p className="Article-Paragraphc-format"></p>

                <div className="Research-Img-Container-Small">
                    <img src={`./Excel_Pivot_Table_Example_Mutli_filter.PNG`} alt="#" id="img-3"/>
                    <div className="img-caption">Multiple item Filter</div>
                </div>

                <p className="Article-Paragraphc-format">
                    "Axis (Categories)" is used to categorize data across a specific category of data, for example, average Income, average FICO score, average debt and 
                    average House price split across mortgage applicants that defaulted in the past and mortgage applicant that have not defaulted in the past. We generate 
                    this example with the simulated mortgage applicant dataset; the result is embeded below as a png.
                </p>

                <div className="Research-Img-Container">
                    <img src={`./Excel_Pivot_Table_Example.PNG`} alt="#"/>
                </div>

                <p className="Article-Paragraphc-format">
                    Needless to say is that the "columns" area composes the headings that stratchs acorss the pivot table, while "value" pertains to 
                    the data and the type of summarization (e.g. count, mean , standard deviation et ceteria) that is performed on said data.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In addition, Excel can be used for data visualization, for example, we can graph the counts for 
                    each risk level over the defaulted variable:
                </p>

                <div className="Research-Img-Container">
                    <img src={`./Excel_Pivot_Table_Example2.PNG`} alt="#"/>
                </div>

                <p className="Article-Paragraphc-format">
                    From this intricate graphical illustration, are able to draw useful inferences that can be describe in reports and deliverables.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In conclusion, Microsft Excel is a fantastic data analytics tool in present-day, it possesses 
                    a wide-breath of data parsing and filtering tools, that make complex analysis possible. In addition Microsoft Excel possesses good 
                    visualization tools that can be to create data visualization or board dashboards to describe complicated data set in simple and 
                    comprehensible manner. Despite the rise of Python as a data analysis platiform, Microsoft Excel remains a relevant data analysis 
                    platform that can address many different type of data-driven problems.
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

export default Data_Exploration_of_simulated_Data_with_Microsift_Excel;