import { Link } from "react-router-dom";

import ApplianceImage from "../Assets/appliances.png";
import FurnitureImage from "../Assets/Furnitures.png";
import { useState, useEffect } from "react";

import { HeroImage3d } from "./HeroImage3d";

export default function Hero() {
  // Hero-Image Fade

  // const [currentImage, setCurrentImage] = useState(0);
  const [goUp, setGoUp] = useState(false);

  // const images = [ApplianceImage, FurnitureImage];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const img = document.querySelector(".hero-content__car-img");
  //     img.classList.add("hidden");
  //     setTimeout(() => {
  //       img.src = images[currentImage];
  //       img.classList.remove("hidden");
  //       setCurrentImage(
  //         currentImage === images.length - 1 ? 0 : currentImage + 1
  //       );
  //     }, 1000);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [currentImage]);

  // Rent Now & Learn More Button destination

  const applianceCard = () =>
    document
      .querySelector("#appliance_card")
      .scrollIntoView({ behavior: "smooth" });

  const process = () => {
    document
      .querySelector(".process-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  //Scroll to Top function

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () =>
      window.scrollY > 600 ? setGoUp(true) : setGoUp(false);

    window.addEventListener("scroll", onPageScroll);

    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          {/* <img className="bg-shape" src={BgShape} alt="bg-shape" /> */}

          <div className="hero-content">
            <div className="hero-content__text">
              <h4>You need it, We rent it!</h4>
              <h1>
                Save <span>big</span> with our rental
              </h1>
              <p>Pick a item. Hassle free process.</p>
              <p style={{ marginBottom: "4rem" }}>Starting at Rs. 100/Month</p>
              <div className="hero-content__text__btns">
                <Link
                  onClick={applianceCard}
                  className="hero-content__text__btns__rent-now"
                  to="/"
                >
                  Rent Now &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link
                  onClick={process}
                  className="hero-content__text__btns__learn-more"
                  to="/"
                >
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            {/* <img
              src={images[currentImage]}
              alt="car-img"
              className="hero-content__car-img"
            /> */}
            <div className="hero-content__img">
              <HeroImage3d />
            </div>
          </div>
        </div>

        <div
          onClick={scrollToTop}
          className={`scrollUp ${goUp ? "showScroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>
      </section>
    </>
  );
}
