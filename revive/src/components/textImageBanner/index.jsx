import React from "react";
import "./textImageBanner.scss";
import images from "../../assets";
import DynamicTextContainer from "../dynamicTextContainer";

const TextImageBanner = ({
  backgroundColor,
  textDetails,
  image,
  height,
  // imageHeight,
  // imageWidth,
}) => {
  return (
    <div
      className="text-image-banner"
      style={{ backgroundColor: backgroundColor, height: height }}
    >
      <div className="text-image-banner__text-container">
        {/* <DynamicTextContainer {...textDetails} /> */}
      </div>
      <div className="text-image-banner__image-container">
        <img
          src={image}
          className="text-image-banner__image-container__image"
          alt=""
        />
      </div>
      <div className="text-image-banner__overlay" style={{ height: height }}>
        <div className="container">
          <div className="text-image-banner__overlay__text-wrapper">
            <DynamicTextContainer {...textDetails} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImageBanner;
