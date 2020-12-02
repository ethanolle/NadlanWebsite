import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
import facebookLogo from "./Facebook.png";
import whatsappLogo from "./WhatsApp.png";

import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
class Footer extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section className='footer-area'>
        <div className='d-flex justify-content-between container'>
          <div className='address'>
            <h4>Home@re-friendly.com</h4>
            <h4>ארלוזרוב 11, רמת גן</h4>
          </div>
          <div className='share '>
            <img
              src={facebookLogo}
              className='img-fluid'
              alt='Responsive image'
              onClick={() =>
                window.open(
                  "https://www.facebook.com/Friendly-%D7%AA%D7%99%D7%95%D7%95%D7%9A-%D7%95%D7%A9%D7%99%D7%95%D7%95%D7%A7-%D7%A0%D7%93%D7%9C%D7%9F-110933907419959/?view_public_for=110933907419959"
                )
              }
            />
            <img
              src={whatsappLogo}
              className='img-fluid'
              alt='Responsive image'
              onClick={() => window.open("https://wa.me/+972506710373")}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
