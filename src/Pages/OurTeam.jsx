import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../Assets/team-1.jpg";
import Person2 from "../Assets/team-2.jpg";
import Person3 from "../Assets/team-3.jpg";
import Person4 from "../Assets/team-4.jpg";
import Person5 from "../Assets/team-5.jpg";
import Person6 from "../Assets/team-6.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Makrand Mjahe", job: "Salesman" },
    { img: Person2, name: "Purojit Sharma", job: "Business Owner" },
    { img: Person3, name: "S Venkataraman", job: "Photographer" },
    { img: Person4, name: "Kartik Subburaj", job: "Furniture Specialist" },
    { img: Person5, name: "Rahul Shetty", job: "Appliance Specialist" },
    { img: Person6, name: "Surya Rane", job: "Manager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;
