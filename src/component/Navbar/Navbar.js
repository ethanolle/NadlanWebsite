import React, { Component } from "react";
import Sticky from "react-stickynode";
import { Link } from "react-scroll";

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
            <div className='nav navbar-nav m-auto ' id='transparent'>
              <div className='nav-item'>
                <h1 className='header nav-link  '>מערכת התאמת נכסים לקונים</h1>
              </div>
            </div>
          </div>
        </nav>
      </Sticky>
    );
  }
}

export default Navbar;
