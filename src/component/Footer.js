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
          <div className='mw-3 share '>
            <img
              src={facebookLogo}
              className='img-fluid'
              alt='Responsive image'
            />
            <img
              src={whatsappLogo}
              className='img-fluid'
              alt='Responsive image'
            />
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
