import PropTypes from "prop-types";

const DoctorCard = (props) => {
  const { name, type, qualification, phone } = props;
  const doctorCard = {
    backgroundColor: "rgb(65, 65, 63)",
    borderRadius: " 10px",
    padding: "2rem",
    margin: "1rem",
    textAlign: "center",
  };
  return (
    <div style={doctorCard}>
      <p>{name}</p>
      <p>{type}</p>
      <p>{qualification}</p>
      <p>{phone}</p>
    </div>
  );
};

DoctorCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  qualification: PropTypes.string,
  phone: PropTypes.string,
};

export default DoctorCard;
