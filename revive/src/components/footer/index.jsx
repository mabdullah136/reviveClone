import "./footer.scss";
import React from "react";
import images from "../../assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container-1">
        <div className="container footer__container-1__wrapper">
          <div className="footer__subscribe-text">
            <div className="footer__stay-informed-text">Stay informed</div>
            <div className="footer__subscribe-text__input">
              Subscribe to our newsletter
            </div>
          </div>
          <div className="footer__input-box">
            <input
              type="text"
              placeholder="Your Email"
              className="footer__input"
            />
            <div className="footer__input-box__overlay">
              <img src={images.rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container-2">
        <div className="container footer__container-2__wrapper">
          <div className="footer__container-2__wrapper__text-box1">
            Revive eco-friendly fabric and encourage an eco-friendly environment
            by employing innovation and sustainable development
          </div>
          <div className="footer__container-2__wrapper__text-box2">
            <div className="footer__container-2__wrapper__text-box2__heading">
              Join the Journey
            </div>
            <div className="footer__container-2__wrapper__text-box2__links-images">
              <a href="">
                <img src={images.facebook} className="footer-images" alt="" />
              </a>
              <a href="">
                <img src={images.linkedin} className="footer-images" alt="" />
              </a>
              <a href="">
                <img src={images.twitter} className="footer-images" alt="" />
              </a>
              <a href="">
                <img src={images.instagram} className="footer-images" alt="" />
              </a>
              {/* <a href="">
                <img src={images.facebook} className="footer-images" alt="" />
              </a>
              <a href="">
                <img src={images.facebook} className="footer-images" alt="" />
              </a> */}
            </div>
            <div className="footer__container-2__wrapper__text-box2__email-info">
              <div className="footer__container-2__wrapper__text-box2__email-info__heading">
                Send us a Email
              </div>
              <div className="footer__container-2__wrapper__text-box2__email-info__heading__detail">
                info@revive.com
              </div>
            </div>
          </div>
          <div className="footer__container-2__wrapper__text-box3">
            <div className="footer__container-2__wrapper__text-box3__heading">
              Quick Links
            </div>
            <div className="footer__container-2__wrapper__text-box3__links">
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a href="">Products</a>
              <a href="">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__container-3">
        <div className="container footer__container-3__wrapper">
          Copyright © 2021 - revive. all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
