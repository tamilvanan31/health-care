import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import DoctorCard from "./DoctorCard";
import doctors from "../../data/data.json";

const Contact = () => {
  const doctorsCardStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
  };

  return (
    <div className="sub-container">
      <div className="contact">
        <h1>Get In Touch.</h1>
        <p style={{ fontSize: "26px" }}>
          Our team is determined to solve your problems.
        </p>
        <p>Contact us below.</p>
        <p>
          <FaPhoneAlt /> 1234567890
        </p>
        <p>
          <MdOutlineEmail /> healthcare@gmail.com
        </p>
        <p>
          <FaInstagram /> health.care
        </p>
      </div>
      <div style={doctorsCardStyle}>
        {doctors.map((doc) => (
          <DoctorCard key={doc.id} {...doc} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
