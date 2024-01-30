import {
  FcVoicePresentation,
  FcInspection,
  FcApproval,
  FcDataProtection,
} from "react-icons/fc";

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-item">
        <FcVoicePresentation className="support-icon" />
        <h3>24/7</h3>
        Online Support available at almost any time
      </div>
      <div className="support-item">
        <FcInspection className="support-icon" />
        <h3>Online Booking</h3> Book your appointment from anywhere with just
        one click
      </div>
      <div className="support-item">
        <FcApproval className="support-icon" />
        <h3>Fast Report</h3> Check your health within few minutes
      </div>
      <div className="support-item">
        <FcDataProtection className="support-icon" />
        <h3>Trusted and Secure </h3>Our team makes sure a Highly Tested and
        Secured Environment
      </div>
    </div>
  );
};

export default Support;
