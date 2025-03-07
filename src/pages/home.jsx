import { useState, useEffect, createContext, useContext } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from '../components/Citations';
import Posting_Card from '../components/Posting_Card';
import Resume_Section from '../components/Resume_Section';
import About_Section from '../components/About_Section';
import Honor_Society_Section from '../components/Honor_Society_Section';

function home() {
  
  const [count, setCount] = useState(0);
  const cite_name = "Front page Citations";
  const [WindowSize, setWindowSize] = useState(0);
  
  function getWindowSize() {
    return window.innerWidth;          
}

// Effect to update itemsPerPage on window resize
// WindowSize is used to format CSS of Brief-About-Section sections
useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

// Original citation format. The JSON format was chosen over this format.
  const cardData = {
    image: "",
    ProjectName: "Neural Network Development with Micrograd Package",
    ProjectDescription: "The mass adoption of Automatic differentiation in Machine Learning and A.I. development, facilitated the development of modern-day deep learning algorithms that have found use in voice-recognition and image-recognition technologies, as well as chatbot A.I.s that are based around Recurrent Neural Networks (e.g. common internet chatbot or twitter chatbot) and Generative pre-trained transformers (e.g. ChatGPTA). Automatic differentiation is most commonly implemented through PyTorch's AutoGrad engine; but a well-known A.I. researcher Andrej Karpathy developed his own simple implementation of PyTorch's AutoGrad Engine in the form of Micrograd [4]. I thought it be interesting to utilized Micrograd to develop several neural networks to solve a classification problem and interpolation problem. Indeed micrograd might lack the parallelization of Pytorch's Autograd engine, but it retains all the functionality, which make it a perfect tool to learn from and to gain a deeper comprehension and appreciation of automatic differentiation and its crucial role in deep learning models.",
  };

  // Was experimenting with a Rust backend application. Unfortunately, I done with my experimentation. (v_v)
 /* async function getResponse() {
   const response = await axios.get("http://127.0.0.1:8080/todos");
    console.log(response);
  }

  getResponse(); */

  return (
  <>
    <Header></Header>

      <main>

        <Resume_Section></Resume_Section>

        <div className={WindowSize > 800 ? "Brief-About-Section" : "Brief-About-Section2"}>
          <div className="About-wrapper">
            <h1 className="About-Section-Titles">Brief About Me</h1>
            <p className="About-Me-Paragraph">
              Hello, my name Barry Daemi. I am a computational mathematician. I attended Southern Methodist University for my undergraduate and graduate education, 
              and completed three degrees: M.S. in Computation and Applied Mathematics, B.S. in Mathematics and B.A. in Economics. My intellectual interests lie 
              in quantitative finance, numerical linear algebra, sparse numerical linear algebra, data science, machine learning, and Monte Carlo simulations.
              <br/><br/>This is my portfolio website, I will publish completed research projects and web applications pertaining to my intellectual interests. 
              The publishing format for my completed research projects will either be in a Jupyter Notebook, Rust Notebook or a web-page format. These completed research projects 
              can be found on this page, below in the Research Project section. Completed web applications will always be in a web page format, and will be published 
              to the Web App web-page. 
              <br/><br/>   
              I do hope some of the visitors of this website, will find some of its content useful. Anyways, I hope all have a 
              wonderful day! {WindowSize > 1140 ? <br/>: null}  {"(\\(^-^)/)"}
            </p> 
          </div>    
        </div>

        <div className={WindowSize > 800 ? "Brief-About-Section" : "Brief-About-Section2"}>
          <div className="About-wrapper">
            <h1 className="About-Section-Titles">Programming Languages</h1>
            <p className="About-Me-Paragraph">
              My principal programming proficiencies lie in <b>Python</b> and <b>Rust</b>, both of these languages have been extensively used in my various research projects. 
              Though I also have attain proficiencies in other programming languages. The following HTML table categorizes the programming languages with which I am familiar.
              <br/><br/>
            </p>
            <div>
              <table className="Programming-Table">
                <tbody>
                    <tr>
                      <th>Application Specific<br/>Programming Languages:</th>
                      <td>SQL, SAS, MATLAB</td>
                    </tr>
                    <tr>
                      <th>High-Level<br/>Programming Languages:</th>
                      <td>Python, R, JavaScript</td>
                    </tr>
                    <tr>
                      <th>Middle-Level Programming Languages:</th>
                      <td>Rust and C++</td>
                    </tr>
                </tbody>
              </table>
              
            </div>

            <p className="About-Me-Paragraph">
            <br/><br/>
            I am able to utilize large-language models (LLMs), such as xAI's Grok and OpenAI's ChatGPT (Chat Generative Pre-trained Transformer), 
            to enhance my programming efficiency. These tools have significantly improved my coing productivity by assisting debugging code and software issues - 
            such as dependency management and environment configuration, and code optimization.
            </p>
          </div>
        </div>

        <About_Section></About_Section>

        <div className="Research-Section-Container">
            <h1 className="About-Section-Titles" >Research Projects</h1>

            <Posting_Card ></Posting_Card>

            <Citations
              variable={cite_name}
            ></Citations>
        </div>

        <Honor_Society_Section></Honor_Society_Section>
        
        </main>

    <Footer></Footer>
  </>
  );

}

export default home;