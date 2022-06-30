import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__icon">
        <img
          src="/assets/plane.png"
          alt="plane"
          className="loader__icon__planes"
        />
        <img
          src="/assets/earth.png"
          alt="plane"
          className="loader__icon__earth"
        />
      </div>
    </div>
  );
};

export default Loader;
