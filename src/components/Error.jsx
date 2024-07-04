const Error = () => {
  const errorStyle = {
    margin: "0 auto",
    textAlign: "center",
  };
  return (
    <div style={errorStyle}>
      <h2>Oops! The page cannot be found</h2>
      <h3>Please check your internet connection</h3>
      <button onClick={window.location.reload()}>Reload</button>
    </div>
  );
};

export default Error;
