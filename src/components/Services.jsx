import { Carousel } from 'react-bootstrap';

export default function Services({services}) {
    return (
    
        <><section id='service'>
        <h2 class="content-title">What We Do</h2>
        <Carousel id="carouselExampleCaptions" style={{
          maxWidth: '70%',
          margin: '0 auto',
          border: '10px solid', /* El grosor del borde */
          borderImage: 'linear-gradient(90deg, #3d6098, #f04b4c) 1', /* Gradiente de rojo a azul */
          borderRadius: '15px', /* Bordes redondeados opcionales */
          color: 'black',
        }}>
          {services.map((service, index) => (
            <Carousel.Item key={service.id}>
              <img
                className="d-block w-100"
                src={`/img/${service.image}`}
                alt={service.name}
                style={{
                  objectFit: 'cover',
                  height: '650px',
                }} />

            </Carousel.Item>
          ))}
        </Carousel>

        {/* Other and Pricing Section */}
        <div className="card-container">
          <div class="service-card">
            <div className="content">
              <h2>House Moving</h2>
              <p>Professional moving services for your entire household. Stress-free and efficient.</p>
            </div>
          </div>

          <div class="service-card">
            <div className="content">
              <h2>Small Moving</h2>
              <p>Perfect for small apartments or single-item moves. Quick and reliable service.</p>
            </div>
          </div>

          <div class="service-card">
            <div className="content">
              <h2>Furniture Installation</h2>
              <p>Expert assembly and installation of your furniture. Hassle-free and fast.</p>
            </div>
          </div>

          <div class="service-card">
            <div className="content">
              <h2>Handy-Man Services</h2>
              <p>Get help with various tasks around your home. Skilled professionals at your service.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='price-bgimg'>
          <div class="moving-benefits">
            <h2 class="content-title">Why Choose Us?</h2>
            <ul className='ulMoving'>
              <li><span>Experienced Movers</span><span className='hiddenli'>: Skilled team ready for all types of moves—apartments, houses, offices, and more.</span></li>
              <li><span>Stress-Free Service</span><span className="hiddenli">: Relax while we handle everything: packing, loading, unloading, and unpacking.</span></li>
              <li><span>Competitive Rates</span><span className="hiddenli">: Affordable moving services without compromising quality. Get your free quote!</span></li>
              <li><span>Reliable and Trustworthy</span><span className="hiddenli">: Your satisfaction is our priority; we treat your belongings with care.</span></li>
              <li><span>All-Inclusive Supplies</span><span className="hiddenli">: Moving straps, elastic bands, blankets, dollies, tools, and shrink wrap included!</span></li>
            </ul>
          </div>
          <div className="price">
            <div className="card">
              <h2>Starting as low as:</h2>
              <img src="/img/movers.png" alt=""/>
              <div className="price-title">
                <span className="pricetag">US$</span><span className="price-value">90</span><span className="perhour">/h</span>
              </div>
              <div className="included"><img src="/img/circle-check-solid.svg" alt="" />Two Professional Movers Included! </div>
              <a href="#contact">
                <button className="button-more big">Ask for other options!</button>
              </a>
            </div>
          </div>
        </section></>
      );
    }