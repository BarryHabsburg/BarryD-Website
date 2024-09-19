import Header from "../components/Header";
import Footer from "../components/Footer";
import Citations from "../components/Citations";
import Latex from 'react-latex-next';

function BlackScholesModelExplain() {

    /* 

    */

    return (
    <>
    <Header></Header>
    <main>
    <div className="Article-Section">
        <div className="Article-Section-Wrapper">
            <div className="section-title-group">
                <h2 className="Article-section-heading">Explanation of Black-Scholes Model in Option Pricing</h2>
                <div className="Article-subsection-heading">last Updated: September 5, 2024.</div>
            </div>

            <h3 className="Article-subtitle">Introduction</h3>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                The Black-Scholes-Merton model is a product of two research papers, Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">1</a>] and Merton (1973) [<a href="https://www.maths.tcd.ie/~dmcgowan/Merton.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>],
                the finding in the first paper shown that an option's risk could be perfectly hedged  
                
                in the first paper Black and Scholes the found that options could be perfectly hedged 
                
                that founds itself on the assumption of a complete market <span className="Latex-span"><Latex>{"$\\mathcal{M}$"}</Latex></span>
                
                  a that ass market model approach to pricing European call and put options
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suppose a continuous sample space <span className="Latex-span"><Latex>{"$\\Omega=\\mathbb{R}$"}</Latex></span>, and   
                an associated <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>-algebra <span className="Latex-span"><Latex>{"$\\mathcal{F}$"}</Latex></span>,
                with a  fil
            </p>

            <p className="Article-Paragraphc-format">{"Explanation of Black Scholes model."}</p>


            <p className="Article-Paragraphc-format"><b>Black-Scholes Model to Price European Call Option:</b></p>

            <div className="Math-Equation">
                <Latex>{"$$C(S,K,T,r,\\sigma)=S\\mathcal{N}(d_{1})-ke^{-rT}\\mathcal{N}(d_{2}) \\tag{1}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">where</p>

            <div className="Math-Equation">
                <Latex>{"$$d_{1} = \\frac{\\ln\\big(\\frac{S}{K}\\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\;\\;\\;\\;"
                +" \\text{and} \\;\\;\\;\\; d_{2}=d_{1}-\\sigma\\sqrt{T}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Black-Scholes Model to Price European Put Option:</b></p>

            <div className="Math-Equation">
                <Latex>{"$$P(S,K,T,r,\\sigma)=Ke^{-rT}\\mathcal{N}(-d_{2})-S\\mathcal{N}(-d_{1}) \\tag{2}$$"}</Latex>
            </div>

            <h3 className="Article-subtitle">Derivations of the Greeks</h3>

            <p className="Article-Paragraphc-format"><b>Call Greek Delta</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's begin with taking the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span> 
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial S} = \\frac{\\partial }{\\partial S} \\Bigg( \\frac{\\ln\\big(\\frac{S}{K}\\big) + \\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}} \\Bigg)"
                +"= \\frac{\\partial }{\\partial S} \\Bigg( \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}} \\Bigg)"
                +"= \\frac{\\partial }{\\partial S} \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial S} \\frac{\\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{1}{\\sigma\\sqrt{T}}\\frac{K}{S} \\frac{\\partial }{\\partial S} \\frac{S}{K} + 0 = \\frac{1}{\\sigma\\sqrt{T}}\\frac{K}{S} \\frac{1}{K} = \\frac{1}{\\sigma\\sqrt{T}}\\frac{1}{S} = \\frac{1}{S\\sigma \\sqrt{T}}"+
                "\\to \\color{#c70e0e}{ \\frac{\\partial d_{1}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>Next the same differentiation with <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.</p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial S} = \\frac{\\partial }{\\partial S} \\bigg( d_{1} - \\sigma\\sqrt{T} \\bigg) " 
                +"= \\frac{\\partial d_{1}}{\\partial S} - \\frac{\\partial }{\\partial S} \\sigma \\sqrt{T} = \\frac{1}{S\\sigma\\sqrt{T}} - 0 = \\frac{1}{S\\sigma\\sqrt{T}}"
                +"\\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The result of <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial S}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial S}$"}</Latex></span> is that <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial S}=\\frac{\\partial d_{2}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}$"}</Latex></span>.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,K,T,r,\\sigma)$"}</Latex></span>
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
            </p> 

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial C}{\\partial S} = \\frac{\\partial }{\\partial S} \\bigg( S\\mathcal{N}(d_{1})-ke^{-rT}\\mathcal{N}(d_{2}) \\bigg)"
                +"=\\frac{\\partial }{\\partial S} S\\mathcal{N}(d_{1}) - \\frac{\\partial }{\\partial S} ke^{-rT}\\mathcal{N}(d_{2}).$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                It is important to note that the differentiation of the first term will result in a product rule and chain rule of differentiation, and that the 
                differentiation of the second term will result in a chain rule of differentiation. 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\partial S}{\\partial S} \\mathcal{N}(d_{1})+S\\frac{\\partial}{\\partial S} \\mathcal{N}(d_{1}) - ke^{-rT} \\frac{\\partial }{\\partial S} \\mathcal{N}(d_{2})"
                +"=\\frac{\\partial S}{\\partial S} \\mathcal{N}(d_{1}) + S \\frac{\\partial }{\\partial S} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS"
                +"-ke^{-rT}\\frac{\\partial }{\\partial S} \\int_{-\\infty}^{d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\mathcal{N}(d_{1})+S \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{1}^{2}} \\frac{\\partial d_{1}}{\\partial S} - ke^{-rT} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\frac{\\partial d_{2}}{\\partial S}"
                +"=\\mathcal{N}(d_{1})+S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})\\frac{\\partial d_{1}}{\\partial S}-ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})\\frac{\\partial d_{2}}{\\partial S}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                For <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial S}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial S}$"}</Latex></span> their 
                results can be substituted for themselves in the equation.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$=\\mathcal{N}(d_{1})+S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})\\frac{1}{S\\sigma\\sqrt{T}}-ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})\\frac{1}{S\\sigma\\sqrt{T}}"
                +"= \\mathcal{N}(d_{1})+\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}}.$$"}</Latex>
            </div> 

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                    <Latex>{"$$\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}} = 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            
            <div className="Math-Equation">
                <Latex>{"$$= \\mathcal{N}(d_{1})+\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}} "
                +"= \\mathcal{N}(d_{1}) + 0 = \\mathcal{N}(d_{1}) \\to \\color{#c70e0e}{\\frac{\\partial C}{\\partial S} = \\mathcal{N}(d_{1})}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Put Greek Delta</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let's begin with taking the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span> 
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                    <Latex>{"$$\\frac{\\partial d_{1}}{\\partial S} = \\frac{\\partial }{\\partial S} \\Bigg( \\frac{\\ln\\big(\\frac{S}{K}\\big) + \\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}} \\Bigg)"
                    +"= \\frac{\\partial }{\\partial S} \\Bigg( \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}} \\Bigg)"
                    +"= \\frac{\\partial }{\\partial S} \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial S} \\frac{\\big(r+\\frac{1}{2}\\sigma^{2}\\big)T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{1}{\\sigma\\sqrt{T}}\\frac{K}{S} \\frac{\\partial }{\\partial S} \\frac{S}{K} + 0 = \\frac{1}{\\sigma\\sqrt{T}}\\frac{K}{S} \\frac{1}{K} = \\frac{1}{\\sigma\\sqrt{T}}\\frac{1}{S} = \\frac{1}{S\\sigma \\sqrt{T}}"
                +"\\to \\color{#c70e0e}{ \\frac{\\partial d_{1}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>Next the same differentiation with <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.</p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial S} = \\frac{\\partial }{\\partial S} \\bigg( d_{1} - \\sigma\\sqrt{T} \\bigg) " 
                +"= \\frac{\\partial d_{1}}{\\partial S} - \\frac{\\partial }{\\partial S} \\sigma \\sqrt{T} = \\frac{1}{S\\sigma\\sqrt{T}} - 0 = \\frac{1}{S\\sigma\\sqrt{T}}"
                +"\\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The result of <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial S}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial S}$"}</Latex></span> is that <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial S}=\\frac{\\partial d_{2}}{\\partial S} = \\frac{1}{S\\sigma\\sqrt{T}}$"}</Latex></span>.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,K,T,r,\\sigma)$"}</Latex></span>
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
            </p> 

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial P}{\\partial S} = \\frac{\\partial }{\\partial S} \\Bigg( Ke^{-rT}\\mathcal{N}(-d_{2})-S\\mathcal{N}(-d_{1}) \\Bigg)"
                +"= \\frac{\\partial }{\\partial S} Ke^{-rt}\\mathcal{N}(-d_{2})-\\frac{\\partial }{\\partial S}S\\mathcal{N}(-d_{1}).$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                Chain rule of differentiation will apply to the first term, and chain rule and product rule of differentiation will apply to the second term.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$=Ke^{-rt} \\frac{\\partial }{\\partial S} \\mathcal{N}(-d_{2}) - \\frac{\\partial S}{\\partial S} \\mathcal{N}(d_{1}) + S\\frac{\\partial }{\\partial S} \\mathcal{N}(d_{2})"
                +"=Ke^{-rt} \\frac{\\partial }{\\partial S} \\int_{-\\infty}^{-d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS - \\Bigg( \\frac{\\partial S}{\\partial S} \\mathcal{N}(-d_{1}) + S \\frac{\\partial }{\\partial S} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=Ke^{-rt} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}} \\cdot - \\frac{\\partial d_{2}}{\\partial S} - \\Bigg( \\mathcal{N}(-d_{1})+S \\frac{1}{\\sqrt{2\\pi}} e^{\\frac{1}{2}d_{1}^{2}} \\cdot -\\frac{\\partial d_{1}}{\\partial S} \\Bigg)"
                +"= -Ke^{-rt} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}} \\frac{1}{S\\sigma\\sqrt{T}} - \\Bigg( \\mathcal{N}(-d_{1}) - S \\frac{1}{\\sqrt{2\\pi}} e^{\\frac{1}{2}d_{1}^{2}} \\frac{1}{S\\sigma\\sqrt{T}} \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-Ke^{-rt} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}} \\frac{1}{S\\sigma\\sqrt{T}} - \\mathcal{N}(-d_{1}) + S \\frac{1}{\\sqrt{2\\pi}} e^{\\frac{1}{2}d_{1}^{2}} \\frac{1}{S\\sigma\\sqrt{T}}"
                +"= -\\mathcal{N}(-d_{1}) + S \\frac{1}{\\sqrt{2\\pi}} e^{\\frac{1}{2}d_{1}^{2}} \\frac{1}{S\\sigma\\sqrt{T}} -Ke^{-rt} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}} \\frac{1}{S\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= -\\mathcal{N}(-d_{1}) + \\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}} = 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$= -\\mathcal{N}(-d_{1}) + \\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{\\sigma\\sqrt{T}}-\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2})}{S\\sigma\\sqrt{T}}"
                +"= -\\mathcal{N}(-d_{1}) + 0 = -\\mathcal{N}(-d_{1}) \\to \\color{#c70e0e}{\\frac{\\partial P}{\\partial S} = -\\mathcal{N}(-d_{1})}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"></p>

            <hr />

            <p className="Article-Paragraphc-format"></p>

            <p className="Article-Paragraphc-format"><b>Call Greek Gamma</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial^{2} C}{\\partial S^{2}} = \\frac{\\partial }{\\partial S} \\frac{\\partial C}{\\partial S} = \\frac{\\partial }{\\partial S} "
                +"\\mathcal{N}(d_{1})=\\frac{\\partial }{\\partial S} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS"
                +"=\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2} d_{1}^{2}} \\frac{\\partial d_{1}}{\\partial S} = \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2} d_{1}^{2}} \\frac{1}{S\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{S\\sigma\\sqrt{T}} \\to \\color{#c70e0e}{\\frac{\\partial^{2} C}{\\partial S^{2}} = \\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{S\\sigma\\sqrt{T}}}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Put Greek Gamma</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial^{2} P}{\\partial S^{2}} = \\frac{\\partial }{\\partial S} \\frac{\\partial P}{\\partial S} = \\frac{\\partial }{\\partial S} "
                +"-\\mathcal{N}(-d_{1})= - \\frac{\\partial }{\\partial S} \\int_{-\\infty}^{- d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}S^{2}} dS"
                +"=-\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2} d_{1}^{2}} \\cdot - \\frac{\\partial d_{1}}{\\partial S} =  \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2} d_{1}^{2}} \\frac{1}{S\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{S\\sigma\\sqrt{T}} \\to \\color{#c70e0e}{\\frac{\\partial^{2} C}{\\partial S^{2}} = \\frac{\\mathcal{N}^{\\; \\displaystyle'}(d_{1})}{S\\sigma\\sqrt{T}}}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"></p>

            <hr />

            <p className="Article-Paragraphc-format"></p>

            <p className="Article-Paragraphc-format"><b>Call Greek Theta</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The best approach would be to begin with the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial T} = \\frac{\\partial }{\\partial T} \\frac{\\ln\\big(\\frac{S}{K}\\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=\\frac{\\partial }{\\partial T} \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial T} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\partial }{\\partial T} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\frac{\\partial }{\\partial T}\\big[ (r+\\frac{1}{2}\\sigma^{2})T\\big]\\cdot\\sigma\\sqrt{T} - (r+\\frac{1}{2}\\sigma^{2})T \\cdot \\frac{\\partial }{\\partial T} \\sigma \\sqrt{T}}{\\big( \\sigma\\sqrt{T} \\big)^{2}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{(r+\\frac{1}{2}\\sigma^{2})\\sigma\\sqrt{T}-(r+\\frac{1}{2}\\sigma^{2})T\\cdot \\frac{\\sigma}{2\\sqrt{T}}}{\\sigma^{2}T}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r\\sigma\\sqrt{T}+\\frac{\\sigma^{3}\\sqrt{T}}{2}-\\frac{r\\sigma T}{2\\sqrt{T}}-\\frac{\\sigma^{3}T}{4\\sqrt{T}}}{\\sigma^{2}T}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r\\sigma\\sqrt{T}}{\\sigma^{2}T}+\\frac{\\sigma^{3}\\sqrt{T}}{2\\sigma^{2}T}-\\frac{r\\sigma T}{2\\sigma^{2}T^{3/2}}-\\frac{\\sigma^{3}T}{4\\sigma^{2}T^{3/2}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r}{\\sigma \\sqrt{T}}+\\frac{\\sigma}{2\\sqrt{T}}-\\frac{r}{2\\sigma \\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}}"
                +" = -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{2\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}}+\\frac{r}{\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2}{2 }\\frac{\\sigma}{2\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}} + \\frac{2}{2}\\frac{r}{\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2\\sigma}{4\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}} + \\frac{2r}{2\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{4\\sqrt{T}}+\\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{\\sigma} \\frac{\\sigma}{4\\sqrt{T}} + \\frac{2}{2} \\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma^{2}}{4\\sigma\\sqrt{T}} + \\frac{2r}{4\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2r+\\sigma^{2}}{4\\sigma\\sqrt{T}} = -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2 \\big(r+\\frac{1}{2}\\sigma^{2}\\big)}{4\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r+\\frac{1}{2}\\sigma^{2}}{2\\sigma\\sqrt{T}} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg)}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The second step should be to take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial T} = \\frac{\\partial }{\\partial T} \\big( d_{1} - \\sigma\\sqrt{T} \\big) = \\frac{\\partial d_{1}}{\\partial T} - \\frac{\\partial }{\\partial T} \\sigma\\sqrt{T}"
                +"=\\frac{\\partial d_{1}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}}}$$"}</Latex>
            </div>

            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                With <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial T}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial T}$"}</Latex></span> computed, 
                we can proceed on to compute <span className="Latex-span"><Latex>{"$\\frac{\\partial C}{\\partial T}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial C}{\\partial T} = \\frac{\\partial }{\\partial T} \\Bigg( S\\mathcal{N}(d_{1})-ke^{-rT}\\mathcal{N}(d_{2}) \\Bigg)"
                +"=\\frac{\\partial }{\\partial T} S\\mathcal{N}(d_{1}) - \\frac{\\partial }{\\partial T} ke^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S\\frac{\\partial }{\\partial T}\\mathcal{N}(d_{1})-\\Bigg( \\frac{\\partial }{\\partial T} ke^{-rT} \\cdot \\mathcal{N}(d_{2}) + ke^{-rT} \\cdot \\frac{\\partial }{\\partial T} \\mathcal{N}(d_{2}) \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S\\frac{\\partial }{\\partial T} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}T^{2}} dT - "
                +"\\Bigg( \\frac{\\partial }{\\partial T} ke^{-rT} \\cdot \\mathcal{N}(d_{2}) + ke^{-rT} \\frac{\\partial }{\\partial T} \\int_{-\\infty}^{d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}rT^{2}} dT \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{1}^{2}} \\cdot \\frac{\\partial d_{1}}{\\partial T} - \\Bigg(  -Kre^{-rT} \\mathcal{N}(d_{2}) + ke^{-rT} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}rd_{2}^{2}} \\cdot \\frac{\\partial d_{2}}{\\partial T} \\Bigg)" 
                +"= S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\cdot \\frac{\\partial d_{1}}{\\partial T} + Kre^{-rT}\\mathcal{N}(d_{2})-ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot \\frac{\\partial d_{2}}{\\partial T}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\cdot  \\Bigg[ \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) \\Bigg] + Kre^{-rT}\\mathcal{N}(d_{2})-ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot \\Bigg[ \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}} \\Bigg]$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})(r + \\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2})"
                +"+\\frac{ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} - \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) (r+\\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}} + \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}}$$"}</Latex>
            </div> 
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{-S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\ln\\big( \\frac{S}{K} \\big) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\ln \\big( \\frac{S}{K} \\big)}{2\\sigma T^{3/2}} + \\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})(r + \\frac{1}{2}\\sigma^{2}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) (r+\\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}} + \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= \\frac{ \\ln\\big( \\frac{S}{K} \\big) \\big[ -S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\big]}{2\\sigma T^{3/2}} + \\frac{(r + \\frac{1}{2}\\sigma^{2}) \\big[ S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\big]}{2\\sigma \\sqrt{T}} + \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                    <Latex>{"$$\\frac{ \\ln\\big( \\frac{S}{K} \\big) \\big[ -S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\big]}{2\\sigma T^{3/2}} + \\frac{(r + \\frac{1}{2}\\sigma^{2}) \\big[ S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\big]}{2\\sigma \\sqrt{T}} + \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} \\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}},$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2}) \\to \\frac{\\partial C}{\\partial T} \\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2}) \\to -\\frac{\\partial C}{\\partial T} \\approx  -\\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} - kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{-\\frac{\\partial C}{\\partial T} \\approx  -\\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} - Kre^{-rT}\\mathcal{N}(d_{2})}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Put Greek Theta</b></p>
            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>
            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The best approach would be to begin with the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
            </p>
            
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial T} = \\frac{\\partial }{\\partial T} \\frac{\\ln\\big(\\frac{S}{K}\\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=\\frac{\\partial }{\\partial T} \\frac{\\ln\\big(\\frac{S}{K}\\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial T} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\partial }{\\partial T} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\frac{\\partial }{\\partial T}\\big[ (r+\\frac{1}{2}\\sigma^{2})T\\big]\\cdot\\sigma\\sqrt{T} - (r+\\frac{1}{2}\\sigma^{2})T \\cdot \\frac{\\partial }{\\partial T} \\sigma \\sqrt{T}}{\\big( \\sigma\\sqrt{T} \\big)^{2}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{(r+\\frac{1}{2}\\sigma^{2})\\sigma\\sqrt{T}-(r+\\frac{1}{2}\\sigma^{2})T\\cdot \\frac{\\sigma}{2\\sqrt{T}}}{\\sigma^{2}T}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r\\sigma\\sqrt{T}+\\frac{\\sigma^{3}\\sqrt{T}}{2}-\\frac{r\\sigma T}{2\\sqrt{T}}-\\frac{\\sigma^{3}T}{4\\sqrt{T}}}{\\sigma^{2}T}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r\\sigma\\sqrt{T}}{\\sigma^{2}T}+\\frac{\\sigma^{3}\\sqrt{T}}{2\\sigma^{2}T}-\\frac{r\\sigma T}{2\\sigma^{2}T^{3/2}}-\\frac{\\sigma^{3}T}{4\\sigma^{2}T^{3/2}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r}{\\sigma \\sqrt{T}}+\\frac{\\sigma}{2\\sqrt{T}}-\\frac{r}{2\\sigma \\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}}"
                +" = -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{2\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}}+\\frac{r}{\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2}{2 }\\frac{\\sigma}{2\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}} + \\frac{2}{2}\\frac{r}{\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2\\sigma}{4\\sqrt{T}}-\\frac{\\sigma}{4\\sqrt{T}} + \\frac{2r}{2\\sigma\\sqrt{T}}-\\frac{r}{2\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{4\\sqrt{T}}+\\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma}{\\sigma} \\frac{\\sigma}{4\\sqrt{T}} + \\frac{2}{2} \\frac{r}{2\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{\\sigma^{2}}{4\\sigma\\sqrt{T}} + \\frac{2r}{4\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2r+\\sigma^{2}}{4\\sigma\\sqrt{T}} = -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{2 \\big(r+\\frac{1}{2}\\sigma^{2}\\big)}{4\\sigma\\sqrt{T}}"
                +"=-\\frac{\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{r+\\frac{1}{2}\\sigma^{2}}{2\\sigma\\sqrt{T}} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg)}$$"}</Latex>
            </div>
             
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The second step should be to take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
            </p>
            
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial T} = \\frac{\\partial }{\\partial T} \\big( d_{1} - \\sigma\\sqrt{T} \\big) = \\frac{\\partial d_{1}}{\\partial T} - \\frac{\\partial }{\\partial T} \\sigma\\sqrt{T}"
                +"=\\frac{\\partial d_{1}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial T} = \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}}}$$"}</Latex>
            </div>
            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                With <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial T}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial T}$"}</Latex></span> computed, 
                we can proceed on to compute <span className="Latex-span"><Latex>{"$\\frac{\\partial P}{\\partial T}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial P}{\\partial T} = \\frac{\\partial }{\\partial T} \\Bigg( Ke^{-rT}\\mathcal{N}(-d_{2})-S\\mathcal{N}(-d_{1}) \\Bigg)"
                +"=\\frac{\\partial }{\\partial T} Ke^{-rT}\\mathcal{N}(-d_{2})-\\frac{\\partial }{\\partial T} S \\mathcal{N}(-d_{1})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\partial }{\\partial T} Ke^{-rT} \\cdot \\mathcal{N}(-d_{2}) + Ke^{-rT} \\cdot \\frac{\\partial }{\\partial T} \\mathcal{N}(-d_{2}) - S \\frac{\\partial }{\\partial T} \\mathcal{N}(-d_{1})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\partial }{\\partial T} Ke^{-rT} \\cdot \\mathcal{N}(-d_{2}) + Ke^{-rT} \\cdot \\frac{\\partial }{\\partial T} \\int_{-\\infty}^{-d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}T^{2}} dT "
                +"- S \\frac{\\partial }{\\partial T} \\int_{-\\infty}^{-d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}T^{2}} dT$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-Kre^{-rT}\\mathcal{N}(-d_{2}) + Ke^{-rT}\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\cdot -\\frac{\\partial d_{2}}{\\partial T}"
                +"- S \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{1}^{2}} \\cdot -\\frac{\\partial d_{1}}{\\partial T}"
                +"=-Kre^{-rT}\\mathcal{N}(-d_{2}) - Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot \\frac{\\partial d_{2}}{\\partial T}"
                +"+ S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\cdot \\frac{\\partial d_{1}}{\\partial T}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-Kre^{-rT}\\mathcal{N}(-d_{2}) - Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot \\Bigg[ \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) - \\frac{\\sigma}{2\\sqrt{T}} \\Bigg]"
                +"+ S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\cdot \\Bigg[ \\frac{1}{2\\sigma\\sqrt{T}} \\bigg( -\\frac{\\ln\\big(\\frac{S}{K}\\big)}{ T} + (r + \\frac{1}{2}\\sigma^{2}) \\bigg) \\Bigg]$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= - Kre^{-rT}\\mathcal{N}(d_{2}) + \\frac{Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} "
                +"- \\frac{Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) (r+\\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}} "
                +"+ \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} - \\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})\\ln\\big(\\frac{S}{K}\\big)}{2\\sigma T^{3/2}} + \\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})(r + \\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= \\frac{-S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\ln\\big( \\frac{S}{K} \\big) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\ln \\big( \\frac{S}{K} \\big)}{2\\sigma T^{3/2}} "
                +"+ \\frac{S\\mathcal{N}^{\\; \\displaystyle'}(d_{1})(r + \\frac{1}{2}\\sigma^{2}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) (r+\\frac{1}{2}\\sigma^{2})}{2\\sigma \\sqrt{T}} "
                +"+ \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} - Kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{ \\ln\\big( \\frac{S}{K} \\big) \\big[ -S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\big]}{2\\sigma T^{3/2}} "
                +"+ \\frac{(r+\\frac{1}{2}\\sigma^{2}) \\big[ S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\big]}{2\\sigma \\sqrt{T}} "
                +"+ \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} - Kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                    <Latex>{"$$\\frac{ \\ln\\big( \\frac{S}{K} \\big) \\big[ -S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\big]}{2\\sigma T^{3/2}} + \\frac{(r + \\frac{1}{2}\\sigma^{2}) \\big[ S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) - ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\big]}{2\\sigma \\sqrt{T}} + \\frac{ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\sigma}{2\\sqrt{T}} \\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}},$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} - Kre^{-rT}\\mathcal{N}(d_{2}) \\to \\frac{\\partial C}{\\partial T} \\approx \\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} - Kre^{-rT}\\mathcal{N}(d_{2}) \\to -\\frac{\\partial C}{\\partial T} \\approx  -\\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} + kre^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{-\\frac{\\partial P}{\\partial T} \\approx  -\\frac{S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sigma}{2\\sqrt{T}} + Kre^{-rT}\\mathcal{N}(d_{2})}$$"}</Latex>
            </div>





            <p className="Article-Paragraphc-format"></p>

            <hr />

            <p className="Article-Paragraphc-format"></p>

            <p className="Article-Paragraphc-format"><b>Call Greek Rho</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                First step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial r} = \\frac{\\partial }{\\partial r} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\Bigg)"
                +"=\\frac{\\partial }{\\partial r} \\frac{\\ln\\big( \\frac{S}{K} \\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=\\frac{\\partial }{\\partial r} \\frac{\\ln\\big( \\frac{S}{K} \\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{rT}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{\\frac{1}{2}\\sigma^{2}T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=0+\\frac{T}{\\sigma\\sqrt{T}}+0=\\frac{\\sqrt{T}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                Second step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\partial }{\\partial r} \\big( d_{1} - \\sigma\\sqrt{T} \\big)"
                +"=\\frac{\\partial d_{1}}{\\partial r} - \\frac{\\partial }{\\partial r} \\sigma\\sqrt{T} = \\frac{\\sqrt{T}}{\\sigma} + 0 = \\frac{\\sqrt{T}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The result of <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial r}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial r}$"}</Latex></span> is that <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial r}=\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}$"}</Latex></span>.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,K,T,r,\\sigma)$"}</Latex></span>
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$r$"}</Latex></span>.
            </p> 

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial C}{\\partial r} = \\frac{\\partial }{\\partial r} \\bigg( S\\mathcal{N}(d_{1})-ke^{-rT}\\mathcal{N}(d_{2}) \\bigg)"
                +"=\\frac{\\partial }{\\partial r} S\\mathcal{N}(d_{1}) - \\frac{\\partial }{\\partial r} ke^{-rT}\\mathcal{N}(d_{2}).$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S \\frac{\\partial }{\\partial r} \\mathcal{N}(d_{1}) - "
                +" \\Bigg( \\frac{\\partial }{\\partial r} Ke^{-rT} \\cdot \\mathcal{N}(d_{2}) + ke^{-rT} \\cdot \\frac{\\partial }{\\partial r} \\mathcal{N}(d_{2}) \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S \\frac{\\partial }{\\partial r} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2}r^{2}} dr "
                +"- \\Bigg( \\frac{\\partial }{\\partial r} Ke^{-rT} \\cdot \\mathcal{N}(d_{2}) + ke^{-rT} \\cdot \\frac{\\partial }{\\partial r} \\int_{-\\infty}^{d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}r^{2}} dr \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2}d_{1}^{2}} \\cdot \\frac{\\partial d_{1}}{\\partial r} - \\Bigg( -KTe^{-rT}\\mathcal{N}(d_{2}) + ke^{-rT}\\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\cdot \\frac{\\partial d_{2}}{\\partial r} \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{\\sqrt{T}}{\\sigma} - \\Bigg( -KTe^{-rT}\\mathcal{N}(d_{2}) + ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{\\sqrt{T}}{\\sigma} \\Bigg) = S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{\\sqrt{T}}{\\sigma} + KTe^{-rT} \\mathcal{N}(d_{2}) - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{\\sqrt{T}}{\\sigma}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= KTe^{-rT} \\mathcal{N}(d_{2}) + S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{\\sqrt{T}}{\\sigma}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{\\sqrt{T}}{\\sigma} = 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$= KTe^{-rT} \\mathcal{N}(d_{2}) + S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{\\sqrt{T}}{\\sigma} = KTe^{-rT} \\mathcal{N}(d_{2}) + 0 = KTe^{-rT} \\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial C}{\\partial r} = KTe^{-rT} \\mathcal{N}(d_{2})}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Put Greek Rho</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                First step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
            </p>
            
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial r} = \\frac{\\partial }{\\partial r} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\Bigg)"
                +"=\\frac{\\partial }{\\partial r} \\frac{\\ln\\big( \\frac{S}{K} \\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{(r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}}"
                +"=\\frac{\\partial }{\\partial r} \\frac{\\ln\\big( \\frac{S}{K} \\big)}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{rT}{\\sigma\\sqrt{T}} + \\frac{\\partial }{\\partial r} \\frac{\\frac{1}{2}\\sigma^{2}T}{\\sigma\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=0+\\frac{T}{\\sigma\\sqrt{T}}+0=\\frac{\\sqrt{T}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}}.$$"}</Latex>
            </div>
            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                Second step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
            </p>
            
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\partial }{\\partial r} \\big( d_{1} - \\sigma\\sqrt{T} \\big)"
                +"=\\frac{\\partial d_{1}}{\\partial r} - \\frac{\\partial }{\\partial r} \\sigma\\sqrt{T} = \\frac{\\sqrt{T}}{\\sigma} + 0 = \\frac{\\sqrt{T}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}}$$"}</Latex>
            </div>
              
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The result of <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial r}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial r}$"}</Latex></span> is that <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial r}=\\frac{\\partial d_{2}}{\\partial r} = \\frac{\\sqrt{T}}{\\sigma}$"}</Latex></span>.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,K,T,r,\\sigma)$"}</Latex></span>
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$r$"}</Latex></span>.
            </p> 

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial P}{\\partial r} = \\frac{\\partial }{\\partial r} \\bigg( Ke^{-rT}\\mathcal{N}(-d_{2})-S\\mathcal{N}(-d_{1}) \\bigg)"
                +"=\\frac{\\partial }{\\partial r} Ke^{-rT}\\mathcal{N}(-d_{2}) - \\frac{\\partial }{\\partial r} S\\mathcal{N}(-d_{1}).$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\partial }{\\partial r} Ke^{-rT} \\cdot \\mathcal{N}(-d_{2}) + Ke^{-rT} \\cdot \\frac{\\partial }{\\partial r} \\mathcal{N}(-d_{2}) - S \\frac{\\partial }{\\partial r} \\mathcal{N}(-d_{1})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\partial }{\\partial r} Ke^{-rT} \\cdot \\mathcal{N}(-d_{2}) + Ke^{-rT} \\cdot \\frac{\\partial }{\\partial r} \\int_{-\\infty}^{-d_{2}} \\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2}r^{2}} dr "
                +"- S \\frac{\\partial }{\\partial r} \\int_{-\\infty}^{-d1} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}r^{2}} dr$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-KTe^{-rT} \\cdot \\mathcal{N}(-d_{2}) + Ke^{-rT} \\cdot \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\cdot -\\frac{\\partial d_{2}}{\\partial r} + "
                +"-S \\cdot \\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{1}{2}d_{1}^{2}} \\cdot -\\frac{\\partial d_{1}}{\\partial r}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-KTe^{-rT}\\mathcal{N}(-d_{2}) - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(-d_{2}) \\frac{\\sqrt{T}}{\\sigma} + S \\mathcal{N}^{\\; \\displaystyle'}(-d_{1}) \\frac{\\sqrt{T}}{\\sigma}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=-KTe^{-rT}\\mathcal{N}(-d_{2}) + S \\mathcal{N}^{\\; \\displaystyle'}(-d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(-d_{2}) \\frac{\\sqrt{T}}{\\sigma}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$S\\mathcal{N}^{\\; \\displaystyle'}(-d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(-d_{2}) \\frac{\\sqrt{T}}{\\sigma} = 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$=-KTe^{-rT}\\mathcal{N}(-d_{2}) + S \\mathcal{N}^{\\; \\displaystyle'}(-d_{1}) \\frac{\\sqrt{T}}{\\sigma} - Ke^{-rT}\\mathcal{N}^{\\; \\displaystyle'}(-d_{2}) \\frac{\\sqrt{T}}{\\sigma} = -KTe^{-rT}\\mathcal{N}(-d_{2}) + 0 = -KTe^{-rT}\\mathcal{N}(-d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial C}{\\partial r} = -KTe^{-rT}\\mathcal{N}(-d_{2})}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"></p>
               
            <hr />
            
            <p className="Article-Paragraphc-format"></p>
              
            <p className="Article-Paragraphc-format"><b>Call Greek Vega</b></p>
                
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>
            
            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                First step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
            </p>
             
            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{1}}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\Bigg)"
                +"=\\frac{1}{\\sqrt{T}} \\cdot \\frac{\\partial }{\\partial \\sigma} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma} \\Bigg)$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{1}{\\sqrt{T}} \\cdot \\frac{\\frac{\\partial }{\\partial \\sigma} \\bigg( \\ln\\big( \\frac{S}{K} \\big)  + (r + \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma "
                +"- \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot \\frac{\\partial \\sigma}{\\partial \\sigma} }{(\\sigma)^{2}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{ \\bigg( \\frac{\\partial }{\\partial \\sigma} \\ln\\big( \\frac{S}{K} \\big)  + \\frac{\\partial }{\\partial \\sigma} (r + \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma "
                +" - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot 1 }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{ \\bigg( \\frac{\\partial }{\\partial \\sigma} \\ln\\big( \\frac{S}{K} \\big)  + ( \\frac{\\partial }{\\partial \\sigma} r + \\frac{\\partial }{\\partial \\sigma} \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot 1 }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{ \\bigg( 0 + ( 0 + \\sigma )T \\bigg) \\cdot \\sigma - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) }{\\sigma^{2}\\sqrt{T}}"
                +"= \\frac{ \\sigma^{2}T - \\ln\\big( \\frac{S}{K} \\big) - (r + \\frac{1}{2}\\sigma^{2} )T }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} + \\frac{-\\ln\\big( \\frac{S}{K} \\big) - (r + \\frac{1}{2}\\sigma^{2})}{\\sigma^{2}\\sqrt{T}}"
                +"=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} - \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})}{\\sigma \\sqrt{T}} \\Bigg) \\cdot \\frac{1}{\\sigma}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= \\sqrt{T} - d_{1} \\cdot \\frac{1}{\\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial \\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                Second step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial d_{2}}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\big( d_{1} - \\sigma\\sqrt{T} \\big) "
                +"=\\frac{\\partial d_{1}}{\\partial \\sigma} - \\frac{\\partial }{\\partial \\sigma} \\sigma \\sqrt{T} = \\sqrt{T} - \\frac{d_{1}}{\\sigma} - \\sqrt{T} = - \\frac{d_{1}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial \\sigma} = - \\frac{d_{1}}{\\sigma}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                The result is <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial \\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial \\sigma} = - \\frac{d_{1}}{\\sigma}$"}</Latex></span>.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial \\sigma}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial \\sigma}$"}</Latex></span> computed, 
                we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,K,T,r,\\sigma)$"}</Latex></span>
                with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial C}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\Bigg( S\\mathcal{N}(d_{1}) - Ke^{-rT}\\mathcal{N}(d_{2}) \\Bigg)"
                +"=\\frac{\\partial }{\\partial \\sigma } S\\mathcal{N}(d_{1}) - \\frac{\\partial }{\\partial \\sigma} Ke^{-rT}\\mathcal{N}(d_{2})$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$=S\\frac{\\partial }{\\partial \\sigma} \\mathcal{N}(d_{1}) - Ke^{-rT} \\frac{\\partial }{\\partial \\sigma} \\mathcal{N}(d_{2})"
                +"=S \\frac{\\partial }{\\partial \\sigma} \\int_{-\\infty}^{d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\sigma^{2}} d\\sigma - Ke^{-rT} \\frac{\\partial }{\\partial \\sigma} \\int_{-\\infty}^{d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2} \\sigma^{2}} d\\sigma$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= S \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{1}^{2}} \\cdot \\frac{\\partial d_{1}}{\\partial \\sigma} - Ke^{-rT} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\cdot \\frac{\\partial d_{2}}{\\partial \\sigma}"
                +"= S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\bigg( \\sqrt{T} - \\frac{d_{1}}{\\sigma} \\bigg) - Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot - \\frac{d_{1}}{\\sigma}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$= S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} - S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{  d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                And as, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$- S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{  d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma} = 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                and therefore, 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$= S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} - S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{  d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma} = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} + 0 = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T}$$"}</Latex>
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial C}{\\partial \\sigma} = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T}}.$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format"><b>Put Greek Vega</b></p>
                
                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}><b>Proof:</b></p>
                
                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                    First step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{1}$"}</Latex></span>.
                </p>
                 
                <div className="Math-Equation">
                    <Latex>{"$$\\frac{\\partial d_{1}}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\Bigg)"
                    +"=\\frac{1}{\\sqrt{T}} \\cdot \\frac{\\partial }{\\partial \\sigma} \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma} \\Bigg)$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=\\frac{1}{\\sqrt{T}} \\cdot \\frac{\\frac{\\partial }{\\partial \\sigma} \\bigg( \\ln\\big( \\frac{S}{K} \\big)  + (r + \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma "
                    +"- \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot \\frac{\\partial \\sigma}{\\partial \\sigma} }{(\\sigma)^{2}}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=\\frac{ \\bigg( \\frac{\\partial }{\\partial \\sigma} \\ln\\big( \\frac{S}{K} \\big)  + \\frac{\\partial }{\\partial \\sigma} (r + \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma "
                    +" - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot 1 }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=\\frac{ \\bigg( \\frac{\\partial }{\\partial \\sigma} \\ln\\big( \\frac{S}{K} \\big)  + ( \\frac{\\partial }{\\partial \\sigma} r + \\frac{\\partial }{\\partial \\sigma} \\frac{1}{2}\\sigma^{2})T \\bigg) \\cdot \\sigma - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) \\cdot 1 }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=\\frac{ \\bigg( 0 + ( 0 + \\sigma )T \\bigg) \\cdot \\sigma - \\bigg( \\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2} )T \\bigg) }{\\sigma^{2}\\sqrt{T}}"
                    +"= \\frac{ \\sigma^{2}T - \\ln\\big( \\frac{S}{K} \\big) - (r + \\frac{1}{2}\\sigma^{2} )T }{\\sigma^{2}\\sqrt{T}}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} + \\frac{-\\ln\\big( \\frac{S}{K} \\big) - (r + \\frac{1}{2}\\sigma^{2})}{\\sigma^{2}\\sqrt{T}}"
                    +"=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} - \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})}{\\sigma \\sqrt{T}} \\Bigg) \\cdot \\frac{1}{\\sigma}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$= \\sqrt{T} - d_{1} \\cdot \\frac{1}{\\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{1}}{\\partial \\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma}}.$$"}</Latex>
                </div>
    
                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                    Second step take the partial differentiation of <span className="Latex-span"><Latex>{"$d_{2}$"}</Latex></span>.
                </p>
    
                <div className="Math-Equation">
                    <Latex>{"$$\\frac{\\partial d_{2}}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\big( d_{1} - \\sigma\\sqrt{T} \\big) "
                    +"=\\frac{\\partial d_{1}}{\\partial \\sigma} - \\frac{\\partial }{\\partial \\sigma} \\sigma \\sqrt{T} = \\sqrt{T} - \\frac{d_{1}}{\\sigma} - \\sqrt{T} = - \\frac{d_{1}}{\\sigma} \\to \\color{#c70e0e}{\\frac{\\partial d_{2}}{\\partial \\sigma} = - \\frac{d_{1}}{\\sigma}}.$$"}</Latex>
                </div>
    
                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                    The result is <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial \\sigma} = \\sqrt{T} - \\frac{d_{1}}{\\sigma}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial \\sigma} = - \\frac{d_{1}}{\\sigma}$"}</Latex></span>.
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{1}}{\\partial \\sigma}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial d_{2}}{\\partial \\sigma}$"}</Latex></span> computed, 
                    we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,K,T,r,\\sigma)$"}</Latex></span>
                    with respect to the underlying asset value, <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>.
                </p>

                <div className="Math-Equation">
                    <Latex>{"$$\\frac{\\partial P}{\\partial \\sigma} = \\frac{\\partial }{\\partial \\sigma} \\Bigg( Ke^{-rT}\\mathcal{N}(-d_{2}) - S\\mathcal{N}(-d_{1}) \\Bigg)"
                    +"= \\frac{\\partial }{\\partial \\sigma}  Ke^{-rT}\\mathcal{N}(-d_{2}) - \\frac{\\partial }{\\partial \\sigma} S\\mathcal{N}(-d_{1}) $$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$= Ke^{-rT} \\frac{\\partial }{\\partial \\sigma} \\mathcal{N}(-d_{2}) - S\\frac{\\partial }{\\partial \\sigma} \\mathcal{N}(-d_{1})"
                    +"=Ke^{-rT}\\frac{\\partial }{\\partial \\sigma} \\int_{-\\infty}^{-d_{2}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\sigma^{2}} d\\sigma - S\\frac{\\partial }{\\partial \\sigma} \\int_{-\\infty}^{-d_{1}} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\sigma^{2}} d\\sigma $$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=Ke^{-rT} \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{2}^{2}} \\cdot -\\frac{\\partial d_{2}}{\\partial \\sigma} - S \\frac{1}{\\sqrt{2\\pi}} e^{-\\frac{1}{2}d_{1}^{2}} \\cdot -\\frac{\\partial d_{1}}{\\partial \\sigma}"
                    +"=Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\cdot - \\bigg( - \\frac{d_{1}}{\\sigma} \\bigg) - S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\cdot -\\bigg( \\sqrt{T} - \\frac{d_{1}}{\\sigma} \\bigg)$$"}</Latex>
                </div>
                <div className="Math-Equation">
                    <Latex>{"$$=Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma} + S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} - S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{d_{1}}{\\sigma}"
                    +"= S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} - S\\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma}$$"}</Latex>
                </div>

                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                        And as, 
                </p>

                <div className="Math-Equation">
                        <Latex>{"$$- S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{  d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma} = 0,$$"}</Latex>
                </div>

                <p className="Article-Paragraphc-format" style={{marginLeft: "3%"}}>
                        and therefore, 
                </p>

                <div className="Math-Equation">
                        <Latex>{"$$= S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} - S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\frac{  d_{1}}{\\sigma} + Ke^{-rT} \\mathcal{N}^{\\; \\displaystyle'}(d_{2}) \\frac{d_{1}}{\\sigma} = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T} + 0 = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T}$$"}</Latex>
                </div>
                <div className="Math-Equation">
                        <Latex>{"$$\\to \\color{#c70e0e}{\\frac{\\partial P}{\\partial \\sigma} = S \\mathcal{N}^{\\; \\displaystyle'}(d_{1}) \\sqrt{T}}.$$"}</Latex>
                </div>




        </div>
    </div>
    </main>
    <Footer></Footer>
    </>
    );
}

export default BlackScholesModelExplain;