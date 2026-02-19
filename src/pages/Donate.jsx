import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BuyMeACoffee from "../components/BuyMeACoffee";
import Citations from "../components/Citations";


    /* Small Story: Include this small story later. Soon... I should not be lazy...
    There was a moment in Elementary school, when I was in second grade, that my cursority in science was peaked. It was day when my second grade teacher Ms. Philips 
    took the class on a trip to the school's library. We were meant to select a book and read for the class peroid. I browsed for a bit, as other classmates did. 
    As they slowly selected their desired book to read for the peroid, I struggled to find a book that I found compelling, or a book of my interests.
    I wondered a bit across the library, until I stumbled upon a little section comprised of science books and textbooks. It was set aside on a small book self near one of 
    one of the library's doors. I browsed for a bit, awed by the selection. I used my finger to browse; I ultimately settled upon and selected an astronomy textbook - unfortunately the title and its author name now eludes me,
    but I spent the remainder of the class period reading that book. I recall being a saddened when the class bell rung and it was time to return to our second-grade classroom.
    But day after, on Thursday, there was another reading session in the school library. When it was time for the next reading session, I immediately took to continue reading from that same astronomy textbook, it was difficult to read, but it satiated my curiosity for 
    knowing more about this reality we existed in. It was alway a notation of desire to know more, and to be more rational about this reality of ours.
    My hunger for knowledge got the better of me, at the time. I went to the school library one day and managed to check out the astronomy textbook that I had been reading,
    as well, as another science book. Both were large books and I could barely hold both of them within my arms, but I manage to carry them around and was able to
    to bring them home. For the next two week, I read through the astronomy textbook, it ... celestial bodies 
    One day, I was conversing with my second grade teacher Ms. Philips about what I had learned
    I thought to bring the two science books to show my teacher. As I had barely managed to bring those two large book homes, it was not a very bright idea to return with them
    prematurely, before I had finished reading at least one of them. But as a child would do, I did not think to deeply about the consequences, and act without much thought. 
    I manage to bring both of the large science books to school the following day within my backpack, trouble was, I could barely lift the backpackage with those two book
    in it. I struggled to lift myself from the ground. 
    Needless to say 
    One of the other teachers was concerned, and worried that I had injury myself. So she confiscated the science textbook from me, alleviating the burden that I had of carrying the 
    textbooks back home. She remarked, that must feel better and that she will take the book back to the library for me. To say I was upset was an under statement, but as a 
    child there was not much I could do. Needless to say, those science textbooks in the school library were ceremonially banned from be lent out to students. I was unable to 
    borrow any books for two weeks, and was unable to borrow any of those science textbooks that interested me. Strange I was the child that cause those textbook to be banned from being lent out.
    But it is a atestment to my hunger for knowledge and perhaps my own stupidity. That statement make me want to laugh, at the moment and myself.
    Nevertheless, notation of curiosity have  
    */


function Donate() {

    // Tracks copy status for feedback
    const [copied, setCopied] = useState({ sol: false, btc: false }); 

    const cite_name = "Donation page Citations";
    const solAddress = "D2YkpuWdAkENANm1BPgxz6ozyP8cWHpBVZoBVU9Czw78";
    const btcNativeSegwitAddress = 'bc1q7yfznvr6yv2qfjr0ggycm9yjw5jgj7p22lwwn7';
    const btcTaprootAddress = 'bc1p46cdqr8789sede0k5287x7sfdrazkdjdgdfsnr35x3fzhzldcydqvl48gj';

    const handleCopy = async (solAddress, key) => {
        try {
            await navigator.clipboard.writeText(address);
            setCopied((prev) => ({ ...prev, [key]: true }));
            setTimeout(() => setCopied((prev) => ({ ...prev, [key]: false })), 2000); // Reset after 2s
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };
 
    return (
    <>
        <Header></Header>

        <main>

        <div className="web-app-description-container">
            <div style={{ padding: '20px', maxWidth: '920px', margin: '0 auto' }}>
                <h2 style={{textAlign: "Left"}}>Ways to Support My Independent Research and Creations</h2>
                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello, I'm Barry Daemi. I am a computational mathematician and independent researcher
                    with a Master of Science in Computational and Applied Mathematics from Southern Methodist University. My academic interests
                    lie in quantitative finance, numerical analysis, machine-learning and data science. I have authored projects on the following topics: Black-Scholes-Merton Model, 
                    linear regression (e.g. linear least squares) via QR decomposition, neural network development, monte carlo simulation, iterative methods (e.g. sparse numerical linear algebra methods), 
                    and several other topics. I have also developed React JS two web-applications: European option pricing web-app and Delta Hedge Simulation web-app. I plan on authoring more projects, 
                    and web-applications, as time progresses.
                </p>

                <h2 style={{textAlign: "Left"}}>Why You Should Support Me</h2>

                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your support enables me to do what I enjoy most - which is to create new things for other people, and to learn new things, and to 
                    satiate my own intellectual curiosity. Ever since I was a young child, I have enjoyed learning, and it has always been a preoccupation of mine. I read and learned, and discerned
                    what underlies the first principles of a concept or notion, and then tried to piece it together with my internal world model (e.g. the model of which I view and understand the world).
                    A world model is an abstract concept, that is drawn from human cognition theory, it is in reference to the internal representation of reality that a human brain forms with its cognition
                    to navigate, understand, imagine, predict outcomes and act withinin this reality of ours [<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9037540/#s3" style={{"color":"#95B9C7"}} target="_blank">1</a>] .
                    Innate to my own intellect, is a morbid curiosity of the world, it has always dirven me to seek out a better understanding of this reality of ours and that of myself. Since a young child,
                    I have been refining my internal world model; although it is not perfect, it has been a incredible asset to me.
                    It has given me purpose. Making, learning and creating has been defined purpose for myself; it has forged a genuine meaning for myself. I have contributed and will continue to contribute
                    to the collective knowledge of our species, I just hope that my small contributions make this reality a slightly better place to live within.
                </p>

                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As an artisan in spirit, I hope to contribute positively to the world betterment. I prided 
                    myself with the notion this - that an artisan contributes a part of themselves within the matter of which they work, and I view it no different here, that I contributed something of myself,
                    when I developed these independent creations or progressed through my own endeavors. That perhaps the small parts of myself, through effort and creation, that I have embued in my creations,
                    which are a small part me and my contributions to this reality, and of which make this a slightly better place (i.e. or that is at least what I hope).  
                </p>

                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As Friedrich Nietzsche the great German philospher praised the ancient Persian virtues of radical truthfulness, self-mastery, and a proactive, 
                    aristocratic ethos [<a href="https://ia803405.us.archive.org/32/items/thus-spoke-zarathustra/Thus%20spoke%20Zarathustra.pdf" style={{"color":"#95B9C7"}} target="_blank">2</a>, <a href="https://www.iranicaonline.org/articles/nietzsche-and-persia/" style={{"color":"#95B9C7"}} target="_blank">3</a>], I 
                    too praise these virtues. To be honest with others, it means, to be honest with one own self. One cannot tell another a lie, without lying 
                    to themselves first. To act and live virtuously within the reality, one needs to cling to a radical truthfulness, and one must act according to that radical truthfulness. 
                    One may stumble, and one may fall, but to stay up again is a virtue in and of itself. To be honest with one's own failing, to reveal a shortcoming to another or to oneself, 
                    allows for the opportunity to rectify it. 
                </p>

                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    Simply stating that neither I, myself, and that of another are perfect. That a person - may not be fully faithful to radical truthfulness or virtue, and that they may have sinned 
                    (e.g. a debt due to harm), but the pentitence (e.g. an action to feel remorse, to pay for said sin) is a virtue and not a sin of itself. It is the denial of sin, 
                    that one had sinned at all, that is a sin in of itself. As with Friedrich Nietzsche's eternal recurrence in mind, I raise again so that I may fall again, and so that I may better myself again. The cycle will repeat till I end.
                    But alas that is what I have observed, the reader can take such a sentiment, as they will, I hold no obligation toward them.
                    This is just my humble observation. An ideal that I hold myself to, an obligation to myself. To be truthful - to the best of my abilities. It holds no moral duty to the reader.
                </p>
                
                <p className="Web-App-Description" style={{ textAlign: 'justify' }}>
                    Nevertheless, this encapsulates a segment of my internal inqueries and thoughts. This sentiment captures the curiosities and prose of whim that drive me to discern and learn.
                    It a gleam of who I am as a person. Nonetheless, I hope whoever read this, has an awesome day! 
                </p>

                <p className="Web-App-Description">
                    To those who choose to support me. Thank you, I apprecate your kind patronage. {"(\\(^-^)/)"}
                </p>

                <h2>One-time or Recurring Support through Buy Me A Coffee</h2>

                <p className="Web-App-Description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fund my independent research and creations through a one-time or a recurring donation through <font color="#FFDD00">Buy Me A Coffee.</font></p> 
                <a className="BuyMeACoffee-btn" href="https://www.buymeacoffee.com/BarryDaemi"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=BarryDaemi&button_colour=880808&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /></a>

                <h2>One-Time crypto Donation: Bitcoin or Solana</h2>
                <p className="Web-App-Description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fund my independent research and creation through a one-time crypto donation.</p>

                      <div className="donation-options">
                <div className="option">
                    <h3>Solana (SOL)</h3>
                    <img
                        src="/Solana_QR_Code_Image.png" // Replace with your QR image path (e.g., in public folder)
                        alt="Scan to Donate SOL"
                        className="qr-code"
                    />
                    <p className="address">
                        Solana Address: <span>{solAddress.substring(0, 6)}...{solAddress.slice(-6)}</span>
                    </p>
                    <button className="donation-button" onClick={() => handleCopy(solAddress, 'sol')}>
                        {copied.sol ? 'Copied!' : 'Copy Full Address'}
                    </button>
                    </div>
                    <div className="option">
                    <h3>Bitcoin (BTC) - Native SegWit</h3>
                    <img
                        src="/Bitcoin_NativeSeqwit_QR_Code_Image.png" // Replace with your QR image path
                        alt="Scan to Donate BTC (Native SegWit)"
                        className="qr-code"
                    />
                    <p className="address">
                        BTC Address: <span>{btcNativeSegwitAddress.substring(0, 6)}...{btcNativeSegwitAddress.slice(-6)}</span>
                    </p>
                    <button className="donation-button" onClick={() => handleCopy(btcNativeSegwitAddress, 'btc')}>
                        {copied.btc ? 'Copied!' : 'Copy Full Address'}
                    </button>
                    </div>
                    {/* Add another for Taproot if desired */}
                </div>
                <p className="Web-App-Description">
                    Verify the address before sending. Donations are non-refundable. Minimum: 0.01 SOL or equivalent appreciated!
                </p>
            </div>
        </div>

        <div className="Research-Section-Container">
            <Citations
                variable={cite_name}
            ></Citations>
        </div>
        

        </main>

        <Footer></Footer>
    </>
    );
}

export default Donate;