import HeroPages from "../components/HeroPages";
import ApplianceData from "../Data/ApplianceData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Appliances() {
  return (
    <>
      <HeroPages name="Appliances" />
      <section className="appliance_page">
        <div className="container card_container appliance_page_container">
          {ApplianceData.map((card, index) => (
            <div className="card appliance_page_card" key={index}>
              <div className="card_img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card_content">
                <h3>{card.title}</h3>
                <div className="price__seeMore">
                  <div className="price">
                    <p>Rent</p>
                    <h4>{card.price}</h4>
                  </div>
                  <Link
                    to={`/applianceproducts/${card.id}`}
                    onClick={() =>
                      window.scrollTo({ top: (0, 0), behavior: "smooth" })
                    }
                  >
                    <div className="seeMore_btn">
                      <button>See More</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="banner-section">
        <div className="container">
          <div className="banner-content call-info">
            <div className="banner-content__text call-info_text">
              <h2>
                For additional information Call Us!{" "}
                <h4>
                  <span>
                    <i className="fa-solid fa-phone"></i>(91) - 8975666209
                  </span>
                </h4>
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
