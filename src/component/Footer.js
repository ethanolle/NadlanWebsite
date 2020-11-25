import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
class Footer extends Component {
  render() {
    let jhonData = this.props.jhonData;
    return (
      <section className='footer-area'>
        <div className='container'>
          <div className='footer-content d-flex justify-content-between'>
            <h4>Home@re-friendly.com</h4>
            <h4>ארלוזרוב 11, רמת גן</h4>
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
