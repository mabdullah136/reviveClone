import "./textImageContainer.scss";
import DynamicTextContainer from "../dynamicTextContainer";
import React from "react";

const TextImageContainer = ({
  textDetails,
  image,
  imageContainerWidth,
  textContainerWidth,
  layout = "imageFirst",
  imageObjectFit,
}) => {
  return (
    <div className="text-image-container">
      {layout === "imageFirst" ? (
        <>
          <div
            className="text-image-container__image-container"
            style={{ width: imageContainerWidth }}
          >
            <img
              src={image}
              className="text-image-container__image-container__image"
              alt=""
              style={{ objectFit: imageObjectFit }}
            />
          </div>
          <div
            className="text-image-container__text-container"
            style={{ width: textContainerWidth }}
          >
            <DynamicTextContainer {...textDetails} />
          </div>
        </>
      ) : (
        <>
          <div
            className="text-image-container__text-container"
            style={{ width: textContainerWidth }}
          >
            <DynamicTextContainer {...textDetails} />
          </div>
          <div
            className="text-image-container__image-container"
            style={{ width: imageContainerWidth }}
          >
            <img
              src={image}
              className="text-image-container__image-container__image"
              alt=""
              style={{ objectFit: imageObjectFit }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TextImageContainer;
