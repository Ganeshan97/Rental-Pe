import SelectCar from "../Assets/icon1.png";
import Contact from "../Assets/icon2.png";
import Drive from "../Assets/icon3.png";

function Process() {
  return (
    <>
      <section className="process-section">
        <div className="container">
          <div className="process-container">
            <div className="process-container__title">
              <h3>Rent now</h3>
              <h2>Quick & easy rental</h2>
            </div>

            <div className="process-container__boxes">
              <div className="process-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Select Item</h3>
                <p>
                  We offers a big range of furnitures and appliances. We have
                  the perfect item to meet your needs
                </p>
              </div>

              <div className="process-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Fast Delivery</h3>
                <p>
                  Get your home equipped easily in 72 Hours at very affordable
                  monthly rent.
                </p>
              </div>

              <div className="process-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Free Maintenance</h3>
                <p>
                  Use the products with peace of mind as we handles the product
                  service at zero cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;
