import { useState } from "react"

export default function AboutUs() {
    /* const [changeText] = useState(window.innerWidth > 600); */

    return (
        <main id="movingsquad" className="movingsquad padding">
            {/* {changeText ? <h2 className="content-title">The Moving Squad Experience</h2> : <h2 className="content-title">Experience</h2>} */}
            <h2 className="content-title content-title-desktop">The Moving Squad Experience</h2>
            <h2 className="content-title content-title-mobile">Experience</h2>       
            <div className="movingsquad-container">
                <div className="service-work">
                    <img 
                        width="1280" 
                        height="720" 
                        className="service-img" 
                        src="img/1.jpg" 
                        alt="" 
                    />
                </div>
                <div className="about">
                    <h3>About Us</h3>
                    <p>
                        Welcome to The Moving Squad, where moving becomes an adventure of joy and excitement! 
                        Buckle up and get ready for the ride of a lifetime as we redefine the way you perceive moving. <br />
                    </p>
                    <p>Picture this: our crew arrives at your doorstep, armed with smiles, high-fives, and a contagious 
                        energy that will instantly lift your spirits. From the moment we step foot in your home or office, 
                        we transform the mundane into an extraordinary journey.</p>
                    <button className="contact big">Check us out!</button>
                </div>
            </div>
        </main>
    )
}
