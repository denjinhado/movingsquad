
export default function Comments({ client }) {
    return (
        <section className="yelp-reviews padding">
            <h2 className="content-title">Our CLients</h2>
            <div className="reviews">
            {client.map((client) => (
                <div className="review-card" key={client.id}>
                    <div className="reviewer">
                        <img className="reviewer-img" src={`/img/${client.image}`} alt="Reviewer Emylyn" />
                        {client.nameClient}
                    </div>
                    <div className="review-text">
                        {client.comment}
                    </div>
                </div>
                ))}
            </div>
            <div className="best-movers">
            <h2 class="content-title">As featured on:</h2>
            <a class="best-movers-img" href="https://www.localmovers.com/movers-in-san-diego" target="_blank">
                <img class="" src="./img/best-movers.png" alt="" />
            </a>
            </div>

            <a className="link-ref" href="https://www.yelp.com/biz/the-moving-squad-chula-vista" target="_blank">
                <h3 className="">Check out more of what our customers have to say!</h3>
            </a>
        </section>
    );
}
