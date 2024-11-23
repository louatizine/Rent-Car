import SelectCar from "../../images/plan/icon1.png";
import Contact from "../../images/plan/icon2.png";
import Drive from "../../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3> Our Services</h3>
              <h2>Quick & easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                {<img src={SelectCar} alt="icon_img" />} <h3>Car Inspection</h3>
                <p>
                At Zine Cars, we provide comprehensive car inspections to ensure the highest standards of safety and performance.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                {<img src={Contact} alt="icon_img" />} <h3>Car Financing</h3>
                <p>
                Explore flexible car finance options at Zine Cars, tailored to suit your budget and make owning your dream car easy.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                {<img src={Drive} alt="icon_img" />} <h3>Car Rental</h3>
                <p>
                Zine Cars offers a premium selection of luxury vehicles for rent, ensuring convenience, style, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
