import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcApplePay,
  faCcMastercard,
  faCcStripe,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer1">
        <div className="footer-top">
          <div className="container">
            <div className="col1">
              <a href="#" className="brand">
                Moving Squad
              </a>
              <ul className="media-icons">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col2">
              <ul className="menu">
                <li>
                  <h4>About</h4>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Price</a>
                </li>

              </ul>
              <ul className="menu">
                <li>
                  <h4>Contact</h4>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Location</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p>The Moving Squad - All Rights Reserved</p>
              <ul className="service-icons">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCcMastercard} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCcApplePay} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCcStripe} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faCcVisa} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* <h1>Footer 2</h1>
      <footer className="footer2">
        <div className="container">
          <div className="col1">
            <a href="#" className="brand">
              Brand
            </a>
            <ul className="media-icons">
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col2">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            exercitationem aliquid eos quia iste est numquam, corporis quaerat
            nihil nobis sequi dolores? Ut ipsa laborum, qui consequuntur
            corporis exercitationem voluptas?
          </p>
        </div>
        <div className="col3">
          <p>Send us a message</p>
          <form>
            <div className="input-wrap">
              <input
                type="text"
                placeholder="Give us your opinition about our services"
              />
              <button type="submit">
                <FontAwesomeIcon icon={faPlane} />
              </button>
            </div>
          </form>
          <ul className="service-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCcMastercard} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCcApplePay} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCcStripe} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faCcVisa} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <h1>Footer 3</h1>
      <footer className="footer3">
        <div className="container">
          <div className="col1">
            <a href="#">Brand</a>
          </div>
          <div className="col2">
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
            <div className="col3">
              <ul className="media-icons">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <h1>Footer 4</h1>
      <footer className="footer4">
        <div className="container">
          <a href="#" className="brand">
            Brand
          </a>
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
          <ul className="media-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, earum exercitationem cumque minima ratione rerum autem
            doloribus at atque consequuntur officia, nihil repellendus maxime
            placeat aut, quia alias consectetur. Veritatis.
          </p>
        </div>
      </footer> */}
    </>
  );
}
