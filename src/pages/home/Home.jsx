import ClinicHours from "./ClinicHours";
import BMI from "./BMI";
import Support from "./Support";

const Home = () => {
  const clinicHoursStyle = {
    padding: "2rem",
    width: "400px",
  };

  const bmiStyle = {
    margin: "0 auto",
    padding: "1rem",
    marginTop: "3rem",
  };

  const quoteStyle = {
    fontSize: "3rem",
    width: "21.875rem",
    fontWeight: "lighter",
  };

  return (
    <div className="sub-container home-container">
      <div style={{ width: "7.625rem" }}>
        <p style={quoteStyle}>
          WE CARE ABOUT YOUR <b>HEALTH & WELLNESS</b>
        </p>
      </div>
      <div className="support">
        <Support />
      </div>
      <div style={bmiStyle}>
        <BMI />
      </div>
      <div style={clinicHoursStyle}>
        <ClinicHours />
      </div>
    </div>
  );
};

export default Home;
