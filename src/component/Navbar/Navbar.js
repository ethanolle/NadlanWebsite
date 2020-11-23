import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    var { mClass, mContainer, mainlogo, stickylogo } = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass='navbar_fixed'>
        <nav className={`navbar navbar-expand-lg navbar-light ${mClass}`}>
          <div className={`container ${mContainer}`}>
            <a className='navbar-brand logo_h ' href='index.html' id='logo_img'>
              <img src={require("../../image/" + mainlogo)} alt='' />
              <img src={require("../../image/" + stickylogo)} alt='' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div
              className='collapse navbar-collapse offset'
              id='navbarSupportedContent'
            ></div>

            <h5 className='header nav-item'>test</h5>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default Navbar;
