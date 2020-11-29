import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";

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
          <div className=''>
            <h4>Home@re-friendly.com</h4>
            <h4>ארלוזרוב 11, רמת גן</h4>
          </div>
          <div className='share'>
            <IconContext.Provider value={{ color: "blue", size: "6vh" }}>
              <FaBeer />
            </IconContext.Provider>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
