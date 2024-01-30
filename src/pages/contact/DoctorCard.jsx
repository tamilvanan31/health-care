import PropTypes from "prop-types";

const DoctorCard = props => {
  const { name, type, qualification, phone } = props;
  return (
    <div className="doctor-card">
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
