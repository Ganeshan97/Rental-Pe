import HeroPages from "../components/HeroPages";
import FurnitureData from "../Data/FurnitureData";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default function Furnitures() {
  return (
    <>
      <HeroPages name="Furnitures" />
      <section className="furniture_page">
        <div className="container card_container furniture_page_container">
          {FurnitureData.map((card, index) => (
            <div className="card furniture_page_card" key={index}>
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
                    to={`/furnitureproducts/${card.id}`}
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
