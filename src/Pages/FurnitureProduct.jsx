import FurnitureData from "../Data/FurnitureData";
import { useParams } from "react-router-dom";
import HeroPages from "../components/HeroPages";
import Footer from "../components/Footer";
import { useState, useContext } from "react";
import { CartContext } from "../components/CartContext";
import Hero from "../components/Hero";

export default function FurnitureProduct({ setCartDisplay }) {
  //Data fetch by productId
  const { productId } = useParams();
  const product = FurnitureData.find((p) => p.id === Number(productId));

  // Delivery Date
  const today = new Date();
  const deliveryDate = new Date(today.setDate(today.getDate() + 2));
  const fastDeliveryDate = new Date(today.setDate(today.getDate() - 1));

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // image zoom when mouse hover
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = event.pageX - left - window.pageXOffset;
    const y = event.pageY - top - window.pageYOffset;
    const newX = ((x / width) * 100).toFixed(2);
    const newY = ((y / height) * 100).toFixed(2);
    setPosition({ x: newX, y: newY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleTouchStart = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = event.pageX - left - window.pageXOffset;
    const y = event.pageY - top - window.pageYOffset;
    const newX = ((x / width) * 100).toFixed(2);
    const newY = ((y / height) * 100).toFixed(2);
    setPosition({ x: newX, y: newY });
  };

  const handleTouchEnd = () => {
    setPosition({ x: 0, y: 0 });
  };
  //carts

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (e) => {
    addToCart(e.target.id);
    setCartDisplay(true);
  };

  return (
    <>
      {/* <HeroPages name={"Products"} /> */}
      <HeroPages name="Product" />
      <section className="product_page">
        <div className="container">
          <div className="product_page_container">
            <div className="product_page_container_image-col">
              <div
                className="magnifier"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className="product_image_container">
                  <img src={product.image} alt={product.title} />
                </div>
                <p style={{ textAlign: "center", fontSize: "1.2rem" }}>
                  Roll over image to zoom in
                </p>
                <div
                  className="magnifier-glass"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                  }}
                ></div>
              </div>
            </div>
            <div className="product_page_container_title_desc-col">
              <h1>{product.title}</h1>
              <p className="deal">
                <span>{product.discount} off</span> Deal
              </p>
              <p>
                <strong style={{ color: "#c56e33", fontSize: "1.2rem" }}>
                  Deal of the day
                </strong>
              </p>
              <div className="liner"></div>
              <h1 className="price">{product.price}</h1>
              <p>Inclusive of all taxes</p>
              <div className="liner"></div>
              <div className="offer">
                <div className="offer_title">
                  <i
                    className="fa-solid fa-percent fa-beat-fade fa-lg"
                    style={{ color: "#c56e33" }}
                  ></i>
                  <h2>Offers</h2>
                </div>
                <div className="offer_content">
                  <div className="offer_content_card">
                    <h3>Bank Offer</h3>
                    <p>Upto ₹309.30 discount on select Credit & Debit Cards</p>
                  </div>
                  <div className="offer_content_card">
                    <h3>Partner Offer</h3>
                    <p>
                      Get GST invoice and save up to 28% on business purchases.
                    </p>
                  </div>
                  <div className="offer_content_card">
                    <h3>UPI offer</h3>
                    <p>Get upto ₹50 cashback.</p>
                  </div>
                </div>
              </div>
              <div className="offer_content_liner"></div>
              <div className="icon_farm">
                <div className="icon_farm_icons">
                  <i
                    className="fa-solid fa-truck fa-2xl"
                    style={{ color: "#c56e33" }}
                  ></i>
                  <h3>Free Delivery</h3>
                </div>
                <div className="icon_farm_icons">
                  <i
                    className="fa-solid fa-sack-dollar fa-2xl"
                    style={{ color: "#c56e33" }}
                  ></i>
                  <h3>Cash on Delivery</h3>
                </div>
                <div className="icon_farm_icons">
                  <i
                    className="fa-solid fa-screwdriver-wrench fa-2xl"
                    style={{ color: "#c56e33" }}
                  ></i>
                  <h3>Free Maintainence</h3>
                </div>
              </div>
              <div className="liner"></div>
              <div className="about">
                <h2>About this item</h2>
                <ul>
                  <li>{product.about[1]}</li>
                  <li>{product.about[2]}</li>
                  <li>{product.about[3]}</li>
                  <li>{product.about[4]}</li>
                  <li>{product.about[5]}</li>
                  <li>{product.about[6]}</li>
                  <li>{product.about[7]}</li>
                </ul>
              </div>
            </div>
            <div className="product_page_container_price-col">
              <div className="product_page_container_price-col_container">
                <h1>{product.price}</h1>
                <div className="deliveryInfo_container">
                  <p>
                    Free Delivery{" "}
                    <strong>
                      {deliveryDate.toLocaleDateString("en-IN", options)}
                    </strong>
                  </p>
                  <p>
                    Or fastest delivery Tomorrow,{" "}
                    <strong>
                      {fastDeliveryDate.toLocaleDateString("en-IN", options)}.
                      Order within 13 hrs 30 mins.
                    </strong>
                  </p>
                </div>
                <div className="location_container">
                  <i
                    className="fa-solid fa-location-dot fa-2xl"
                    style={{ color: "#c56e33" }}
                  ></i>
                  <p>Select Delivery Location</p>
                </div>
                <div className="retailer_info">
                  <h2>In Stock</h2>
                  <p>Sold by eFactor Techies and Fulfilled by RentalPe.</p>
                  <p>
                    Shows what is inside. Item often ships in manufacturer
                    container to reduce packaging. If this is a gift, consider
                    shipping to a different address.{" "}
                  </p>
                </div>
                {/* <div className="quantity">
                  <label htmlFor="Quantity">Quantity: </label>
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div> */}
                <div className="button_container">
                  <button
                    className="button_container_cart"
                    onClick={handleAddToCart}
                    id={product.id}
                  >
                    Add to Cart
                  </button>
                  <button className="button_container_buy">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
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
