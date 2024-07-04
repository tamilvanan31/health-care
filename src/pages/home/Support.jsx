import {
  FcVoicePresentation,
  FcInspection,
  FcApproval,
  FcDataProtection,
} from "react-icons/fc";

const Support = () => {
  const supportItemStyle = {
    backgroundColor: "rgb(65, 65, 63)",
    width: "15.313rem",
    padding: "1rem",
    borderRadius: "0.625rem",
  };

  const supportIconStyle = {
    height: "3rem",
    width: "3rem",
    borderRadius: "50%",
    backgroundColor: "rgb(65, 65, 63)",
  };

  return (
    <div className="support-container">
      <div style={supportItemStyle}>
        <FcVoicePresentation style={supportIconStyle} />
        <h3>24/7</h3>
        Online Support available at almost any time
      </div>
      <div style={supportItemStyle}>
        <FcInspection style={supportIconStyle} />
        <h3>Online Booking</h3> Book your appointment from anywhere with just
        one click
      </div>
      <div style={supportItemStyle}>
        <FcApproval style={supportIconStyle} />
        <h3>Fast Report</h3> Check your health within few minutes
      </div>
      <div style={supportItemStyle}>
        <FcDataProtection style={supportIconStyle} />
        <h3>Trusted and Secure </h3>Our team makes sure a Highly Tested and
        Secured Environment
      </div>
    </div>
  );
};

export default Support;
