import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Reveal from "react-reveal/Reveal/";
import ContactTwo from "../ContactTwo";
import "./TypeBanner.css";

class TypeBanner extends Component {
  render() {
    let jhonData = this.props.jhonData;

    return (
      <section id='home'>
        <Parallax
          bgImage={require("../../image/Binian1.webp")}
          strength={0}
          className='banner_area'
        >
          <div className='container'>
            <div className='banner_content'>
              <Reveal effect='fadeInUp' duration={1500}>
                <h2 className='wow fadeInLeft animated'>{jhonData.name2}</h2>
                <h5 className='wow fadeInLeft animated '>{jhonData.ptext}</h5>
              </Reveal>
              <Reveal effect='fadeInUp' duration={2000}>
                {/* <ContactTwo /> */}
              </Reveal>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default TypeBanner;
