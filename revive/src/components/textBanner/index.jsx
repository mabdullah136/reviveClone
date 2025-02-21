import React from "react";
import "./textBanner.scss";
import DynamicTextContainer from "../dynamicTextContainer";

const TextBanner = ({ textDetails, textDetails1, bannerImage }) => {
  return (
    <div
      className="text-banner"
      style={bannerImage && { backgroundImage: `url(${bannerImage})` }}
    >
      <div className="container text-banner__wrapper">
        <DynamicTextContainer {...textDetails} />
        {textDetails1 && <DynamicTextContainer {...textDetails1} />}
      </div>
    </div>
  );
};

export default TextBanner;
