import { Carousel } from 'react-bootstrap';

export default function Services({services}) {
    return (
    
        <section id='service'>
            <h2 class="content-title">What We Do</h2>
    <Carousel id="carouselExampleCaptions" style={{ 
                                                    maxWidth: '70%',
                                                    margin: '0 auto',
                                                    border: '10px solid', /* El grosor del borde */
                                                    borderImage: 'linear-gradient(90deg, #3d6098, #f04b4c) 1', /* Gradiente de rojo a azul */
                                                    borderRadius: '15px', /* Bordes redondeados opcionales */ 
                                                    color: 'black',}}>
        {services.map((service, index) => (
          <Carousel.Item key={service.id}>
            <img
              className="d-block w-100"
              src={`/img/${service.image}`}
              alt={service.name}
              style={{
                objectFit: 'cover',  
                height: '650px',     
                 
              }}
            />

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
          <div className="price-bgimg">
          <div class="moving-benefits">
    <h2 class="content-title">Why Choose Us?</h2>
    <ul>
        <li><span>Experienced Movers:</span> Skilled team ready for all types of moves—apartments, houses, offices, and more.</li>
        <li><span>Stress-Free Service:</span> Relax while we handle everything: packing, loading, unloading, and unpacking.</li>
        <li><span>Competitive Rates:</span> Affordable moving services without compromising quality. Get your free quote!</li>
        <li><span>Reliable and Trustworthy:</span> Your satisfaction is our priority; we treat your belongings with care.</li>
        <li><span>All-Inclusive Supplies:</span> Moving straps, elastic bands, blankets, dollies, tools, and shrink wrap included!</li>
    </ul>
</div>
          <div className="price">
            <div className="card">
              <h2>Starting at:</h2>
              <div className="price-title">
                <span>$99</span>/h*
              </div>
              <div className="included">Two Professional Movers </div>
              <div className="included">lorem ipsum</div>
              <div className="included">*3 hour minimum</div>
              <a href="#contact">
              <button className="button-more big">Contact us!</button>
            </a>
            </div>
          </div>
          </div>
        </section>
      );
    }