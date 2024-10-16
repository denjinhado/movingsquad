
export default function AboutUs() {

    return (
        <main id="movingsquad" className="movingsquad padding">
            <h2 className="content-title">The Moving Squad Experience</h2>
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
                        Picture this: our crew arrives at your doorstep, armed with smiles, high-fives, and a contagious 
                        energy that will instantly lift your spirits. From the moment we step foot in your home or office, 
                        we transform the mundane into an extraordinary journey.<br />
                    </p>
                    <button className="contact big">Check us out!</button>
                </div>
            </div>
        </main>
    )
}
