import ClinicHours from "./ClinicHours";
import BMI from "./BMI";
import Support from "./Support";

const Home = () => {
  return (
    <div className="sub-container home-container">
      <div className="intro">
        <p className="quote">
          WE CARE ABOUT YOUR <b>HEALTH & WELLNESS</b>
        </p>
      </div>
      <div className="support">
        <Support />
      </div>
      <div className="bmi">
        <BMI />
      </div>
      <div className="clinic-hours">
        <ClinicHours />
      </div>
    </div>
  );
};

export default Home;
