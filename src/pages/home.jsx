import { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Citations from '../components/Citations';
import Posting_Card from '../components/Posting_Card';
import Resume_Section from '../components/Resume_Section';
import About_Section from '../components/About_Section';

function home() {
  
  const [count, setCount] = useState(0);
  const cite_name = "Front page Citations";
  const [WindowSize, setWindowSize] = useState(0);
  
  function getWindowSize() {
    return window.innerWidth;          
}

// Effect to update itemsPerPage on window resize
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

  const cardData = {
    image: "",
    ProjectName: "Neural Network Development with Micrograd Package",
    ProjectDescription: "The mass adoption of Automatic differentiation in Machine Learning and A.I. development, facilitated the development of modern-day deep learning algorithms that have found use in voice-recognition and image-recognition technologies, as well as chatbot A.I.s that are based around Recurrent Neural Networks (e.g. common internet chatbot or twitter chatbot) and Generative pre-trained transformers (e.g. ChatGPTA). Automatic differentiation is most commonly implemented through PyTorch's AutoGrad engine; but a well-known A.I. researcher Andrej Karpathy developed his own simple implementation of PyTorch's AutoGrad Engine in the form of Micrograd [4]. I thought it be interesting to utilized Micrograd to develop several neural networks to solve a classification problem and interpolation problem. Indeed micrograd might lack the parallelization of Pytorch's Autograd engine, but it retains all the functionality, which make it a perfect tool to learn from and to gain a deeper comprehension and appreciation of automatic differentiation and its crucial role in deep learning models.",
  };

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

        <div className="Brief-About-Section">
          <div className="About-wrapper">
            <h1 className="About-Section-Titles">Brief About Me</h1>
            <p className="About-Me-Paragraph">
              Hello, my name Barry Daemi. I am a computational mathematician. And I attended Southern Methodist University for my undergraduate and graduate education, 
              and completed three degrees: M.S. in Computation and Applied Mathematics, B.S. in Mathematics and B.A. in Economics. My intellectual interests lie 
              in quantitative finance, numerical linear algebra, sparse numerical linear algebra, machine learning, and Monte Carlo simulations.
              <br/><br/>This is my portfolio website, I will publish completed research projects and web application that pertain to my intellectual interests. 
              The publishing format for my completed research projects will either be in a Jupyter Notebook or a web-page format. These complete research projects 
              can be located on this page, below in the Research Project section. Completed web application will always be in a web page format, and will be published 
              to the Web App web-page. 
              <br/><br/>   
              I do hope some of the visitors of this website find some of its content useful. Anyways, I hope all have a 
              wonderful day! {WindowSize > 1140 ? <br/>: null}  {"(\\(^-^)/)"}
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


        
        </main>

    <Footer></Footer>
  </>
  );

}

export default home;