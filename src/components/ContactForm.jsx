import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactForm() {
    return (
        /* <section className="u-clearfix u-image u-shading u-section-3" id="carousel_4f77" data-image-width="1416" data-image-height="1080">
            <div id="contact" className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <div className="data-layout-selected u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
                    <div className="u-layout">
                        <div className="u-layout-row">
                            <div className="u-align-left u-container-align-left u-container-style u-layout-cell u-left-cell u-size-27-xl u-size-29-lg u-size-29-md u-size-29-sm u-size-29-xs u-layout-cell-1" data-animation-name="customAnimationIn" data-animation-duration="1500" data-animation-delay="500">
                                <div className="u-container-layout u-valign-middle-lg u-valign-middle-md u-valign-middle-xl u-container-layout-1">
                                    <h2 className="u-align-left u-text u-text-1">Contact Us</h2>
                                    <div className="u-list u-list-1">
                                        <div className="u-repeater u-repeater-1">
                                            <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                                                <div className="u-container-layout u-similar-container u-container-layout-2">
                                                    <h5 className="u-text u-text-3">
                                                        <span className="u-file-icon u-icon u-icon-1 u-text-palette-3-base">
                                                            <img src="#" alt="" />
                                                        </span>&nbsp;Contact Us At:
                                                    </h5>
                                                    <p className="u-text u-text-4">619-856-1737, themovingsquadsd@gmail.com</p>
                                                </div>
                                            </div>
                                            <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                                                <div className="u-container-layout u-similar-container u-container-layout-3">
                                                    <h5 className="u-text u-text-5">
                                                        <span className="u-file-icon u-icon u-icon-2 u-text-palette-3-base">
                                                            <img src="#" alt="" />
                                                        </span>&nbsp;Address:
                                                    </h5>
                                                    <p className="u-text u-text-6">San Diego, California</p>
                                                </div>
                                            </div>
                                            <div className="u-container-style u-list-item u-repeater-item u-shape-rectangle">
                                                <div className="u-container-layout u-similar-container u-container-layout-4">
                                                    <h5 className="u-text u-text-7">
                                                        <span className="u-file-icon u-icon u-icon-3 u-text-palette-3-base">
                                                            <img src="#" alt="" />
                                                        </span>&nbsp;Business Hours: 
                                                    </h5>
                                                    <p className="u-text u-text-8">All day everyday, you can count on us!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */
        <section className="contactUs">
            <h2 className="content-title">Contact Us</h2>
            <div className="contactAt">
            <h3>Contact Us At:</h3>
                <div className="contactInfo">
                    <div className="numberEmail">
                        <img src="public/img/phone-solid.svg" alt="" className="svgSolid"/>
                        <p>619-856-1737</p>
                    </div>
                    <div className="numberEmail">
                    <img src="public/img/envelope-solid.svg" alt="" className="svgSolid"/>
                        <p>themovingsquadsd@gmail.com</p>
                    </div>
                </div>                
            </div>
            <div className="address">
                <h3>Address:</h3>
                <p>San Diego, California</p>
            </div>
            <div className="businessHours">
                <h3>Business Hours:</h3>
                <p>All day everyday, you can count on us!</p>
            </div>
        </section>
    );
}
