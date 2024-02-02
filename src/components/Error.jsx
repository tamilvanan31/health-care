const Error = () => {
  return (
    <div className="error">
      <h2>Oops! The page cannot be found</h2>
      <h3>Please check your internet connection</h3>
      <button onClick={window.location.reload()}>Reload</button>
    </div>
  );
};

export default Error;
