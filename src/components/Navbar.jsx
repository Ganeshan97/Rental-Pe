import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export default function Navbar({ cartDisplay }) {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  //Sign In and Register button action
  const [modal, setModal] = useState(false);
  const [signInModal, setSignInModal] = useState(false);

  const [formValue, setFormValue] = useState({
    First_Name: "",
    Last_Name: "",
    Phone_Number: "",
    age: "",
    email: "",
    address: "",
    zipcode: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormFilledOut = Object.values(formValue).every(
      (value) => value !== ""
    );
    if (isFormFilledOut) {
      confirmBooking();
      setFormValue({
        First_Name: "",
        Last_Name: "",
        Phone_Number: "",
        age: "",
        email: "",
        address: "",
        zipcode: "",
        city: "",
      });
    } else {
      alert("Please fill out all form fields.");
    }
  };

  const openModal = (e) => {
    e.preventDefault();

    setModal(!modal);
    const modalDiv = document.querySelector(".register-modal");
    modalDiv.scroll(0, 0);
  };

  const openSignInModal = (e) => {
    e.preventDefault();

    setSignInModal(!signInModal);
    const modalDiv = document.querySelector(".signIn-modal");
    modalDiv.scroll(0, 0);
  };

  useEffect(() => {
    if (signInModal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [signInModal]);

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = () => {
    setModal(!modal);
    const doneMsg = document.querySelector(".register-done");
    doneMsg.style.display = "flex";
  };

  const hideMessage = () => {
    const doneMsg = document.querySelector(".register-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div
            onClick={openNav}
            className={`${
              modal ? "" : signInModal ? "" : "mobile-navbar__close"
            }`}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openModal} to="/" className="navbar_btns_register">
                Register
              </Link>
            </li>
            <li>
              <Link
                onClick={openSignInModal}
                to="/"
                className="navbar_btns_sign_in"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/furnitures">
                Furnitures
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/appliances">
                Appliances
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/ourteam">
                Our Team
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Desktop */}
        <div className="navbar">
          <div className="navbar_img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="navbar_links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="furnitures">Furnitures</Link>
            </li>
            <li>
              <Link to="appliances">Appliances</Link>
            </li>
            <li>
              <Link to="ourteam">Our Team</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div className="navbar_btns">
            <Link
              onClick={openSignInModal}
              to="/"
              className="navbar_btns_sign_in"
            >
              Sign In
            </Link>
            <Link onClick={openModal} to="/" className="navbar_btns_register">
              Register
            </Link>
          </div>
          {cartDisplay && (
            <Link
              to="/cart"
              onClick={() =>
                window.scrollTo({ top: (0, 0), behavior: "smooth" })
              }
            >
              <div className="cartIcon">
                <i
                  className="fa-solid fa-cart-shopping fa-2xl"
                  style={{ color: "#c56e33" }}
                ></i>
              </div>
            </Link>
          )}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
        <p className="register-done">
          Thank you for registering, your form is in process.{" "}
          <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
        </p>
      </nav>
      {/* openModal */}
      <div
        onClick={openModal}
        className={`modal-overlay ${modal ? "active-modal" : ""}`}
      ></div>
      <div
        onClick={openSignInModal}
        className={`modal-overlay ${signInModal ? "active-modal" : ""}`}
      ></div>

      <div className={`signIn-modal ${signInModal ? "active-modal" : ""}`}>
        <div className="signIn-modal__personal-info">
          <div className="head">
            <div onClick={openSignInModal} className="mobile-navbar__close">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h4>Sign In</h4>
          </div>
          <form className="info-form">
            <div className="info-form__1col">
              <span>
                <label>
                  Username <b>*</b>
                </label>
                <input type="text" required pattern="[A-Za-z0-9]+" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Password <b>*</b>
                </label>
                <input type="password" required />
                <p className="error-modal">This field is required.</p>
              </span>
              <div className="reserve-button">
                <button type="submit">Sign In</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className={`register-modal ${modal ? "active-modal" : ""}`}>
        <div className="register-modal__person-info">
          <div className="head">
            <div onClick={openModal} className="mobile-navbar__close">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <h4>Personal Information</h4>
          </div>
          <form className="info-form" onSubmit={handleSubmit} id="form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  required
                  name="First_Name"
                  value={formValue.First_Name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  required
                  name="Last_Name"
                  value={formValue.Last_Name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  required
                  name="Phone_Number"
                  value={formValue.Phone_Number}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  required
                  name="age"
                  value={formValue.age}
                  onChange={handleChange}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  required
                  name="email"
                  value={formValue.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  required
                  name="address"
                  value={formValue.address}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  required
                  name="city"
                  value={formValue.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  required
                  name="zipcode"
                  value={formValue.zipcode}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button type="submit">Register Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
