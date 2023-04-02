import { CartContext } from "../components/CartContext";
import { useContext } from "react";
import HeroPages from "../components/HeroPages";
import { Link } from "react-router-dom";

export default function Cart({ setCartDisplay }) {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const handleBuyNow = () => {
    clearCart();
    setCartDisplay(false);
  };

  return (
    <>
      <HeroPages name="Shopping Cart" className="cart_hero" />
      {cart.length !== 0 && (
        <div className="cart_btn_buy_now">
          <Link className="buy_now" to="/" onClick={handleBuyNow}>
            Buy Now &nbsp; <i className="fa-solid fa-circle-check"></i>
          </Link>
        </div>
      )}

      <section className="cart_page">
        <div className="container">
          {cart.map((card) => (
            <div className="cart_card" key={card.id}>
              <div className="cart_card_img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="cart_card_desc">
                <h1>{card.title}</h1>
                <h2>In Stock</h2>
                <p>Sold by eFactor Techies and Fulfilled by RentalPe.</p>
                <div className="quantity">
                  <label htmlFor="Quantity" className="quantity">
                    Quantity:{" "}
                  </label>
                  <select name="quantity" id="quantity">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="delete">
                  <h2
                    onClick={() => removeFromCart(card.id)}
                    style={{
                      cursor: "pointer",
                      color: "#c56e33",
                      display: "inline-block",
                    }}
                  >
                    Delete
                  </h2>
                </div>
              </div>
              <div className="cart_card_price">
                <p>{card.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
