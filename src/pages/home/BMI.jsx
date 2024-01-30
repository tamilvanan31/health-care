import { useState } from "react";
import PropTypes from "prop-types";

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0.0);
  const [message, setMessage] = useState("");
  const handleHeightChange = event => setHeight(event.target.value);
  const handleWeightChange = event => setWeight(event.target.value);
  const handleSubmit = event => {
    calculateBMI();
    event.preventDefault();
  };

  const calculateBMI = () => {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setBMI(bmi);
    console.log(bmi);
    let msg = "";
    if (bmi < 18.5) {
      msg = "Under Weight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      msg = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      msg = "Over Weight.";
    } else if (bmi >= 30) {
      msg = "Obesity.";
    }
    setMessage(msg);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Feel free to check your BMI</h2>
        <div>
          <label>Height(cm)</label>
          <input
            type="number"
            name="height"
            value={height}
            className="height"
            onChange={handleHeightChange}
          />
        </div>
        <div>
          <label>Weight(kg)</label>
          <input
            type="number"
            name="weight"
            value={weight}
            className="weight"
            onChange={handleWeightChange}
          />
        </div>
        <button type="submit">Submit</button>
        <DisplayBMI bmi={BMI} msg={message} />
      </form>
    </div>
  );
};

function DisplayBMI({ bmi, msg }) {
  return (
    <div style={{ fontWeight: "lighter" }}>
      <h2>
        BMI: <b>{bmi}</b>
      </h2>
      <h2>
        <b>{msg}</b>
      </h2>
    </div>
  );
}

DisplayBMI.propTypes = {
  bmi: PropTypes.number,
  msg: PropTypes.string,
};

export default BMI;
