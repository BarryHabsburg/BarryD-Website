import Header from "../components/Header";
import Footer from "../components/Footer";
import Citations from "../components/Citations";
import Latex from 'react-latex-next';

function BlackScholesModelExplain() {

    const Cite_Name = "BlackScholesModelExplain";

    return (
    <>
    <Header></Header>
    <main>
    <div className="Article-Section">
        <div className="Article-Section-Wrapper">
            <div className="section-title-group">
                <h2 className="Article-section-heading">Explanation of Black-Scholes-Merton Model in Option Pricing</h2>
                <div className="Article-subsection-heading">last Updated: September 25, 2024.</div>
            </div>

            <p className="Article-Paragraphc-format" style={{"textAlign":"center"}}></p>

            <h3 className="Article-subtitle">Introduction</h3>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Following the Black-scholes partial differential equation derivation in Wilmott et al. (1995) [<a href="https://doi.org/10.1017/CBO9780511812545" style={{"color":"#95B9C7"}} target="_blank">1</a>], consider an asset
                denoted <span className="Latex-span"><Latex>{"$S$"}</Latex></span> that is modeled by a <i>stationary</i> stochastic differential equation
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{dS}{S} = \\mu \\mathop{} dt + \\sigma \\mathop{} dX, \\tag{1}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                with a constant drift coefficient <span className="Latex-span"><Latex>{"$\\mu$"}</Latex></span> and a constant noise coefficient <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>, both 
                of which are not time dependent. Further suppose an option which is modeled by <span className="Latex-span"><Latex>{"$V(S,t)$"}</Latex></span>, which is a function with two independent variables, <span className="Latex-span"><Latex>{"$S$"}</Latex></span> that 
                denotes the value of the underlying asset and <span className="Latex-span"><Latex>{"$t$"}</Latex></span> that represent time. With that, a Taylor expansion 
                can be applied to <span className="Latex-span"><Latex>{"$V(S,t)$"}</Latex></span> about <span className="Latex-span"><Latex>{"$(S,t)$"}</Latex></span> where <span className="Latex-span"><Latex>{"$V(S+dS,t+dt)$"}</Latex></span>, so 
                to attain the following 
            </p>
 
            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} dV = V(S+dS, t+dt) & + \\frac{\\partial V(S+dS, t+dt)}{\\partial S}(S-S+dS) + \\frac{\\partial V(S+dS, t+dt)}{\\partial t}(t-t+dt) "
                +"  \\\\  & + \\frac{1}{2}\\frac{\\partial^{2} V(S+ds, t+dt)}{\\partial S^{2}}(S-S+dS)^{2} \\\\ "
                +" & + \\frac{1}{2}\\frac{\\partial^{2} V(S+ds, t+dt)}{\\partial S \\partial t} (S-S+dS)(t-t+dt) "
                +" \\\\ & + \\frac{1}{2} \\frac{\\partial^{2} V(S+ds, t+dt)}{\\partial t^{2}}(t-t+dt)^{2}. \\tag{2} \\end{align*}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
               To complete the Taylor expansion of <span className="Latex-span"><Latex>{"$V(S,t)$"}</Latex></span>, two simplification need to be performed on equation (2).
               The first simplification is that the factor terms need to be computed, and <span className="Latex-span"><Latex>{"$(S+dS,t+dt)$"}</Latex></span> needs 
               to be replaced with <span className="Latex-span"><Latex>{"$(S,t)$"}</Latex></span> for notational simplicity. 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} dV = V(S, t) & + \\frac{\\partial V(S, t)}{\\partial S}dS + \\frac{\\partial V(S, t)}{\\partial t}dt "
                +" + \\frac{1}{2}\\frac{\\partial^{2} V(S, t)}{\\partial S^{2}}dS^{2} \\\\ \\\\ "
                +" & + \\frac{1}{2} \\frac{\\partial^{2} V(S, t)}{\\partial S \\partial t} dSdt "
                +" + \\frac{1}{2} \\frac{\\partial^{2} V(S, t)}{\\partial t^{2}}dt^{2}. \\tag{3} \\end{align*}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first, fifth and sixth terms are dominated by the second, third and fourth terms, and for that reason
                these Taylor polynomial terms are dropped from the Taylor polynomial in equation (3). 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$dV = \\frac{\\partial V(S, t)}{\\partial S}dS + \\frac{\\partial V(S, t)}{\\partial t}dt "
                +" + \\frac{1}{2}\\frac{\\partial^{2} V(S, t)}{\\partial S^{2}}dS^{2}, \\tag{4}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                It is assume that <span className="Latex-span"><Latex>{"$V(S,t)$"}</Latex></span> is a continuous function over the domain, <span className="Latex-span"><Latex>{"$\\Omega = \\mathbb{R} \\times [0,T]$"}</Latex></span>, and 
                that its partial derivatives <span className="Latex-span"><Latex>{"$\\frac{\\partial V}{\\partial t}$"}</Latex></span>, <span className="Latex-span"><Latex>{"$\\frac{\\partial V}{\\partial S}$"}</Latex></span> and <span className="Latex-span"><Latex>{"$\\frac{\\partial^{2} V}{\\partial S^{2}}$"}</Latex></span> exist
                and are continuous functions themselves over that domain <span className="Latex-span"><Latex>{"$\\Omega$"}</Latex></span>. As with absolute certainty,
            </p>

            <div className="Math-Equation">
                <Latex>{"$$dX^{2} \\to dt \\; \\; \\text{ as } \\;\\; dt \\to 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                and therefore,  
            </p>

            <div className="Math-Equation">
                <Latex>{"$$dX \\to \\sqrt{dt} \\; \\; \\text{ as } \\;\\; dt \\to 0,$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                that means that the smaller the <span className="Latex-span"><Latex>{"$dt$"}</Latex></span> become the closer <span className="Latex-span"><Latex>{"$dX$"}</Latex></span> approximates <span className="Latex-span"><Latex>{"$\\sqrt{dt}$"}</Latex></span>, e.g. <span className="Latex-span"><Latex>{"$dX \\approx \\sqrt{dt}$"}</Latex></span>.<br/> 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note that a slight algebraic manipulation of equation (1) gives the desired <span className="Latex-span"><Latex>{"$dS$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{dS}{S} = \\mu \\mathop{} dt + \\sigma \\mathop{} dX \\to S \\cdot \\frac{dS}{S} = S \\cdot \\bigg( \\mu \\mathop{} dt + \\sigma \\mathop{} dX \\bigg) "
                +"\\to dS = \\mu S \\mathop{} dt + \\sigma S \\mathop{} dX  $$"}</Latex>
            </div>

            <div className="Math-Equation">
                <Latex>{"$$dS = \\mu S \\mathop{} dt + \\sigma S \\mathop{} dX, \\tag{5}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                To attain <span className="Latex-span"><Latex>{"$dS^{2}$"}</Latex></span> the first step is to simply square equation (5).
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} dS^{2} & = \\bigg( \\mu S \\mathop{} dt + \\sigma S \\mathop{} dX \\bigg)^{2} = \\mu^{2}S^{2} \\mathop{} dt^{2} + \\mu \\sigma S^{2} dtdX + \\mu \\sigma S^{2} dtdX + \\sigma^{2} S^{2} dX^{2} "
                +" \\\\ \\\\ & = \\mu^{2}S^{2} \\mathop{} dt^{2} + 2\\mu \\sigma S^{2} dtdX + \\sigma^{2} S^{2} dX^{2} \\tag{6} \\end{align*}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                The second step is to determine which terms of <span className="Latex-span"><Latex>{"$dS^{2}$"}</Latex></span> vanishes as <span className="Latex-span"><Latex>{"$dt \\to 0$"}</Latex></span>. The first term from equation (6) contains <span className="Latex-span"><Latex>{"$dt^{2}$"}</Latex></span>, which 
                make it the highest ordered term. The second term from equation (6) contains <span className="Latex-span"><Latex>{"$dtdX$"}</Latex></span>, this term is affected by Ito's lemma, as <span className="Latex-span"><Latex>{"$dt \\to 0$"}</Latex></span> the <span className="Latex-span"><Latex>{"$dtdX$"}</Latex></span> term with 
                absolute certainty will tend to <span className="Latex-span"><Latex>{"$dt^{3/2}$"}</Latex></span>, as <span className="Latex-span"><Latex>{"$dX \\to \\sqrt{dt}$"}</Latex></span> as <span className="Latex-span"><Latex>{"$dt \\to 0$"}</Latex></span> and therefore, <span className="Latex-span"><Latex>{"$dtdX \\to dt\\sqrt{dt} = dt^{3/2}$"}</Latex></span>. Needless to say, 
                the second term is a higher order than <span className="Latex-span"><Latex>{"$dt$"}</Latex></span>. The third term from equation (6) contains <span className="Latex-span"><Latex>{"$dX^{2}$"}</Latex></span>, which is also affected by Ito's lemma,
                as <span className="Latex-span"><Latex>{"$dt \\to 0$"}</Latex></span>, <span className="Latex-span"><Latex>{"$dX^{2} \\to dt$"}</Latex></span>, which mean the third term is of order <span className="Latex-span"><Latex>{"$dt$"}</Latex></span>. Any order greater than <span className="Latex-span"><Latex>{"$dt$"}</Latex></span> vanishes as <span className="Latex-span"><Latex>{"$dt \\to 0$"}</Latex></span>, and 
                therefore only the third term remains as <span className="Latex-span"><Latex>{"$\\sigma^{2}S^{2}dX^{2} \\to \\sigma^{2}S^{2}dt$"}</Latex></span>. 
            </p> 

            <div className="Math-Equation">
                <Latex>{"$$dS^{2} \\to \\sigma^{2}S^{2}dt, \\tag{7}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Substituted equations (5) and (7) into equation (4), and computed the series of algebraic manipulations needed to shape the equation into the correct form.   
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} dV & = \\frac{\\partial V(S, t)}{\\partial S} \\cdot \\bigg( \\mu S \\mathop{} dt + \\sigma S \\mathop{} dX \\bigg) + \\frac{\\partial V(S, t)}{\\partial t}dt "
                +" + \\frac{1}{2}\\frac{\\partial^{2} V(S, t)}{\\partial S^{2}} \\cdot \\bigg( \\sigma^{2}S^{2}dt \\bigg) "
                +"\\\\ \\\\ & = \\mu S \\frac{\\partial V(S,t)}{\\partial S} dt + \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX + \\frac{\\partial V(S,t)}{\\partial t} dt + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} dt "
                +"\\\\ \\\\ & = \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt \\end{align*}$$"}</Latex>
            </div>

            <div className="Math-Equation">
                <Latex>{"$$dV = \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt. \\tag{8}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                The following equation (8) that we derived is a stochastic partial differential equation that can price an arbitrary option. To attain the famed Black-Scholes partial differential equation, equation (8) needs further modifications.
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In order to modify equation (8) into the Black-Scholes partial differential equation, a Delte hedged position need to be constructed. This approach of constructing a Delta hedge position to formulate
                the Black-Scholes partial differential equation was taken in the original publication, Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>]. And in fact, 
                Fischer Black and Myron Scholes formulated the Delta hedge position, also known as a risk-neutral hedge position, as a means to formulate their partial differential equation. In following the derivation in Wilmott et al. (1995) [<a href="https://doi.org/10.1017/CBO9780511812545" style={{"color":"#95B9C7"}} target="_blank">1</a>], consider a portfolio
                that consisted of one option valued at <span className="Latex-span"><Latex>{"$V$"}</Latex></span> and a quantity of stock of <span className="Latex-span"><Latex>{"$\\Delta$"}</Latex></span> priced at <span className="Latex-span"><Latex>{"$S$"}</Latex></span>, in other words,
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\Pi = V - \\Delta S, \\tag{9}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                where the value of the portfolio is denoted <span className="Latex-span"><Latex>{"$\\Pi$"}</Latex></span>. Given that <span className="Latex-span"><Latex>{"$\\Delta$"}</Latex></span> is held fixed during time transitions, there also no change in the 
                quantity held of the option. And so, the change in the portfolio is
            </p>

            <div className="Math-Equation">
                <Latex>{"$$d\\Pi = dV - \\Delta dS, \\tag{10}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                after each time transition. Now substitute equation (5) and equation (8) into equation (10). 
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} d\\Pi & = \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt - \\Delta \\bigg( \\mu S \\mathop{} dt + \\sigma S \\mathop{} dX \\bigg)"
                +"\\\\ \\\\ &= \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt - \\mu S \\Delta \\mathop{} dt - \\sigma S \\Delta \\mathop{} dX"
                +"\\\\ \\\\ &= \\sigma S \\frac{\\partial V(S,t)}{\\partial S} dX - \\sigma S \\Delta \\mathop{} dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt - \\mu S \\Delta \\mathop{} dt"
                +"\\\\ \\\\ &= \\sigma S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\Delta \\bigg) dX + \\bigg( \\mu S \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} - \\mu S \\Delta \\bigg) dt"
                +"\\\\ \\\\ &= \\sigma S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\Delta \\bigg) dX + \\bigg[ \\mu S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\Delta \\bigg) + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg] dt \\end{align*}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                The random component <span className="Latex-span"><Latex>{"$dX$"}</Latex></span> isolated, and if <span className="Latex-span"><Latex>{"$\\Delta$"}</Latex></span> is set to be equal to <span className="Latex-span"><Latex>{"$\\frac{\\partial V(S,t)}{\\partial S}$"}</Latex></span>, then
                the <span className="Latex-span"><Latex>{"$dX$"}</Latex></span> will vanish from the stochastic partial differential equation, causing it to become a partial differential equation. As mentioned in Wilmott et al. (1995) [<a href="https://doi.org/10.1017/CBO9780511812545" style={{"color":"#95B9C7"}} target="_blank">1</a>], page 31,
                the random walks of the underlying asset <span className="Latex-span"><Latex>{"$S$"}</Latex></span> and the option <span className="Latex-span"><Latex>{"$V(S,t)$"}</Latex></span> are correlated and are not independent. And for that fact,
                the random walk component <span className="Latex-span"><Latex>{"$dX$"}</Latex></span> can be eliminated from equation (8) through the construction of a Delta hedge position, where <span className="Latex-span"><Latex>{"$\\Delta = \\frac{\\partial V(S,t)}{\\partial S}$"}</Latex></span>.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{align*} &= \\sigma S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\Delta \\bigg) dX + \\bigg[ \\mu S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\Delta \\bigg) + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg] dt"
                +"\\\\ \\\\ &= \\sigma S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\frac{\\partial V(S,t)}{\\partial S} \\bigg) dX + \\bigg[ \\mu S \\bigg( \\frac{\\partial V(S,t)}{\\partial S} - \\frac{\\partial V(S,t)}{\\partial S} \\bigg) + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg] dt"
                +"\\\\ \\\\ &= \\sigma S \\cdot 0 \\cdot dX + \\bigg( \\mu S \\cdot 0 + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt"
                +"\\\\ \\\\ &= \\bigg( \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt \\end{align*}$$"}</Latex> 
            </div>
            <div className="Math-Equation">
                <Latex>{"$$d\\Pi = \\bigg( \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt, \\tag{11}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Suppose the value of the portfolio <span className="Latex-span"><Latex>{"$\\Pi$"}</Latex></span> was invested in a riskless asset, with a riskless rate of interest <span className="Latex-span"><Latex>{"$r$"}</Latex></span>, the expected
                growth of the investment would be modeled by <span className="Latex-span"><Latex>{"$r\\Pi dt$"}</Latex></span> over a time-span of <span className="Latex-span"><Latex>{"$dt$"}</Latex></span>. Appealing to the logic present in Wilmott et al. (1995) [<a href="https://doi.org/10.1017/CBO9780511812545" style={{"color":"#95B9C7"}} target="_blank">1</a>], page 43,
            </p>

            <div className="Math-Equation">
                <Latex>{"$$r\\Pi dt = \\bigg( \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt, \\tag{12}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                due to the concepts of arbitrage and supply and demand, and with the assumption of frictionless transactions does equation (12) hold true. Substitute equation (9) and <span className="Latex-span"><Latex>{"$\\Delta = \\frac{\\partial V(S,t)}{\\partial S}$"}</Latex></span> into equation (12), and compute.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$r \\bigg( V(S,t) - S \\frac{\\partial V(S,t)}{\\partial S} \\bigg) dt = \\bigg( \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt$$"}</Latex> 
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to \\frac{1}{dt} \\cdot r \\bigg( V(S,t) - S \\frac{\\partial V(S,t)}{\\partial S} \\bigg) dt = \\frac{1}{dt} \\cdot \\bigg( \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t} \\bigg) dt$$"}</Latex> 
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to rV(S,t) - rS \\frac{\\partial V(S,t)}{\\partial S} =  \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t}$$"}</Latex> 
            </div>
            <div className="Math-Equation">
                <Latex>{"$$\\to 0 = - rV(S,t) + rS \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} + \\frac{\\partial V(S,t)}{\\partial t}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                This is the famed Black-Scholes partial differential equation from Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>].
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\frac{\\partial V(S,t)}{\\partial t} + rS \\frac{\\partial V(S,t)}{\\partial S} + \\frac{1}{2} \\sigma^{2} S^{2} \\frac{\\partial^{2} V(S,t)}{\\partial S^{2}} - rV(S, t) = 0. \\tag{13}$$"}</Latex> 
            </div>

            <p className="Article-Paragraphc-format">
                The next section will discuss the closed-form solutions to equation (13).
            </p>

            <h3 className="Article-subtitle">Black-Scholes-Merton Model to Price European Call Option</h3>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Black-Scholes-Merton model is a product of two research papers, Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>] and Merton (1973) [<a href="https://www.maths.tcd.ie/~dmcgowan/Merton.pdf" style={{"color":"#95B9C7"}} target="_blank">3</a>];
                the former publication formulating the Black-Scholes partial differential equation and its closed-form solutions, and the latter publication extending the black-scholes model to include dividends and more complex boundary conditions.
                A closed-form solution to equation (13) was presented by Fischer Black and Myron scholes in Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>], pages 643-644. 
                This closed-form solution to equation (13) was to price a European call option. The function formula and boundary condition is as follows:
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{array} {lcl} V(S,t) & = & S-K & \\text{if } \\; S \\geq K \\\\ \\\\ & = & 0 & \\text{if } \\; S < K \\end{array}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                The result of this function formula and boundary condition is the following closed-form solution. The details of attaining this closed-formed solution can be found in Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>], page 643-644.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$C(S,t)=S\\mathcal{N}(d_{1})-ke^{-rT}\\mathcal{N}(d_{2}) \\tag{14}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">where</p>

            <div className="Math-Equation">
                <Latex>{"$$d_{1} = \\frac{\\ln\\big(\\frac{S}{K}\\big) + (r+\\frac{1}{2}\\sigma^{2})T}{\\sigma\\sqrt{T}} \\;\\;\\;\\;"
                +" \\text{and} \\;\\;\\;\\; d_{2}=d_{1}-\\sigma\\sqrt{T}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                <b>Note</b>: For notational simplicity, <Latex>{"$t=0$"}</Latex>, and therefore <Latex>{"$(T-t)=(T-0)=T$"}</Latex>.
            </p>

            <h3 className="Article-subtitle">Black-Scholes Model to Price European Put Option</h3>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The closed-form solution to equation (13) that could price European call options was presented in Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>], pages 646-647.
                The function formula and boundary condition is as follows:
            </p>

            <div className="Math-Equation">
                <Latex>{"$$\\begin{array} {lcl} V(S,t) & = & 0 & \\text{if } \\; S \\geq K \\\\ \\\\ & = & S - K & \\text{if } \\; S < K \\end{array}$$"}</Latex>
            </div>

            <p className="Article-Paragraphc-format">
                The result of this function formula and boundary condition is the following closed-form solution. The details of solving equation (13) to attain this closed-form solution can be found in Black and Scholes (1973) [<a href="https://www.cs.princeton.edu/courses/archive/fall09/cos323/papers/black_scholes73.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>], page 646-647.
            </p>

            <div className="Math-Equation">
                <Latex>{"$$P(S,t)=Ke^{-rT}\\mathcal{N}(-d_{2})-S\\mathcal{N}(-d_{1}) \\tag{15}$$"}</Latex>

            </div>

            <p className="Article-Paragraphc-format">
                <b>Note</b>: For notational simplicity, <Latex>{"$t=0$"}</Latex>, and therefore <Latex>{"$(T-t)=(T-0)=T$"}</Latex>.
            </p>

            <h3 className="Article-subtitle">Derivations of the Greeks</h3>

            <p className="Article-Paragraphc-format">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this section the Greeks for call and put options were derived.
            </p>

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
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,t)$"}</Latex></span> with 
                respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
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
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,t)$"}</Latex></span> with 
                respect to the underlying asset value, <span className="Latex-span"><Latex>{"$S$"}</Latex></span>.
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
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,t)$"}</Latex></span> with 
                respect to the riskless interest rate, <span className="Latex-span"><Latex>{"$r$"}</Latex></span>.
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
                <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With those computed, we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,t)$"}</Latex></span> with 
                respect to the riskless interest rate, <span className="Latex-span"><Latex>{"$r$"}</Latex></span>.
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
                <Latex>{"$$=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} + \\frac{-\\ln\\big( \\frac{S}{K} \\big) - (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma^{2}\\sqrt{T}}"
                +"=\\frac{\\sigma^{2}T}{\\sigma^{2}\\sqrt{T}} - \\Bigg( \\frac{\\ln\\big( \\frac{S}{K} \\big) + (r + \\frac{1}{2}\\sigma^{2})T}{\\sigma \\sqrt{T}} \\Bigg) \\cdot \\frac{1}{\\sigma}$$"}</Latex>
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
                we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$C(S,t)$"}</Latex></span> with 
                respect to the volatility of the underlying asset value, <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>.
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
                    we can proceed with the computation of the the partial differentiation of <span className="Latex-span"><Latex>{"$P(S,t)$"}</Latex></span> with 
                    respect to the volatility of the underlying asset value, <span className="Latex-span"><Latex>{"$\\sigma$"}</Latex></span>.
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

export default BlackScholesModelExplain;