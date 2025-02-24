import React from "react";
import Header from "../../../components/header";
import DynamicTextContainer from "../../../components/dynamicTextContainer";
import TextImageBanner from "../../../components/textImageBanner";
import TextImageContainer from "../../../components/textImageContainer";
import Footer from "../../../components/footer";
import TextBanner from "../../../components/textBanner";
import "./contactUs.scss";
import images from "../../../assets";
const Fabric = () => {
  return (
    <>
      <Header />
      <div className="container home__container__1">
        <DynamicTextContainer
          headerFontSize="40px"
          headerFontWeight="900"
          headerText={[{ text: "Contact Us", color: "black" }]}
          textAlign="center"
          bodyFontSize="16px"
          bodyBullets={true}
          bodyText={[
            {
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              color: "black",
            },
          ]}
          gap="10px"
          bodyGap="15px"
          width="600px"
        />
      </div>
      <div className="container contactUs__parent">
        <div className="contactUs__container1">
          <div className="contactUs__container1__1">
            <DynamicTextContainer
              headerFontSize="40px"
              headerFontWeight="900"
              headerText={[{ text: "revive", color: "#89EDD9" }]}
              textAlign="left"
              bodyFontSize="16px"
              bodyBullets={true}
              bodyText={[
                {
                  text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                  color: "white",
                },
              ]}
              gap="10px"
              bodyGap="15px"
              width="100%"
            />
          </div>
          <div className="contactUs__container1__2">
            <hr className="line__width" />
          </div>
          <div className="contactUs__container1__2">
            <DynamicTextContainer
              headerFontSize="20px"
              headerFontWeight="900"
              headerText={[{ text: "Join the Journey", color: "white" }]}
              textAlign="left"
              width="100%"
            />
            <div className="contactUs__container1__2__social">
              <a href="">
                <img
                  src={images.facebook}
                  className="footer-images"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
              <a href="">
                <img
                  src={images.linkedin}
                  className="footer-images"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
              <a href="">
                <img
                  src={images.twitter}
                  className="footer-images"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
              <a href="">
                <img
                  src={images.instagram}
                  className="footer-images"
                  alt=""
                  style={{ width: "20px" }}
                />
              </a>
            </div>
          </div>
          <div className="contactUs__container1__2">
            <hr className="line__width" />
          </div>
          <div className="contactUs__container1__2">
            <DynamicTextContainer
              headerFontSize="17px"
              headerFontWeight="900"
              headerText={[
                { text: "Send us a Email ", color: "white" },
                { text: "info@revive.com", color: "white" },
              ]}
              width="100%"
            />
          </div>
        </div>
        <div className="contactUs__container2">
          <form action="" className="contactUs__container2__form">
            <div className="contactUs__container2__form__fields">
              <div className="contactUs__container2__form__fields__field-wrapper">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  placeholder=""
                  className="contactUs__container2__form__fields__input contactUs__container2__form__fields__input__text"
                />
              </div>
              <div className="contactUs__container2__form__fields__field-wrapper">
                <label htmlFor="">Last name:</label>
                <input
                  type="email"
                  placeholder=""
                  className="contactUs__container2__form__fields__input contactUs__container2__form__fields__input__text"
                />
              </div>
              <div className="contactUs__container2__form__fields__field-wrapper">
                <label htmlFor="">Email:</label>
                <input
                  type="text"
                  placeholder=""
                  className="contactUs__container2__form__fields__input contactUs__container2__form__fields__input__text"
                />
              </div>
              <div className="contactUs__container2__form__fields__field-wrapper">
                <label htmlFor="">Phone:</label>
                <input
                  type="text"
                  placeholder=""
                  className="contactUs__container2__form__fields__input contactUs__container2__form__fields__input__text"
                />
              </div>
              <div className="contactUs__container2__form__fields__field-wrapper contactUs__container2__form__fields__field-wrapper__textarea">
                <label htmlFor="">Message:</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder=""
                  className="contactUs__container2__form__fields__input contactUs__container2__form__fields__input__message"
                ></textarea>
              </div>
            </div>
            <button className="contactUs__container2__form__fields__button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fabric;
