import "./landMarks.scss";
import React from "react";

const LandMarks = ({ image, width }) => {
  return (
    <div className="land-marks">
      <div>
        <img src={image} alt="LandMarks" style={(width = width)} />
      </div>
    </div>
  );
};

export default LandMarks;
