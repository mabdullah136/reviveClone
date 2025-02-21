import React from "react";
import "./dynamicTextContainer.scss";

const DynamicTextContainer = ({
  headerFontSize,
  headerText = [],
  textAlign,
  bodyFontSize,
  bodyText = [],
  gap,
  bodyGap,
  width,
  headerFontWeight,
  bodyBullets,
  bulletImage,
  headerBodySeparator,
}) => {
  return (
    <div
      className="dynamic-text-container"
      style={{
        width,
        gap,
        textAlign,
      }}
    >
      {headerText.length !== 0 && (
        <div
          className="dynamic-text-container__header"
          style={{
            fontSize: headerFontSize,
            fontWeight: headerFontWeight,
          }}
        >
          {headerText.map((obj) => {
            if (obj === "break") return <br />;
            return <span style={{ color: obj.color }}>{obj.text}</span>;
          })}
        </div>
      )}

      {headerBodySeparator && (
        <hr className="dynamic-text-container__separator" />
      )}

      {bodyText.length !== 0 && (
        <div
          className="dynamic-text-container__body"
          style={{
            fontSize: bodyFontSize,
            gap: bodyGap,
          }}
        >
          {bodyText.map((obj) => {
            return (
              <div className="dynamic-text-container__body__container">
                {bodyBullets && (
                  <span className="dynamic-text-container__body__bullet">
                    <img src={bulletImage} alt="" />
                  </span>
                )}
                <p
                  style={{ color: obj.color }}
                  className="dynamic-text-container__body__paragraph"
                >
                  {obj.text}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DynamicTextContainer;
