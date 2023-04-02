import FurnitureData from "../Data/FurnitureData";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
export default function Appliances() {
  return (
    <section className="furniture_card">
      <div className="container card_container">
        <div className="heading">
          <h2>Don't miss out, buy your favourites now</h2>
          <p>
            Give your house a new look, Rent items from our bestsellers with
            amazing offers.
          </p>
        </div>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {FurnitureData.map((card, index) => (
            <div className="card" key={index}>
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
        </Carousel>
      </div>
    </section>
  );
}
