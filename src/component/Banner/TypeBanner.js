import React, { Component } from "react";
import { Parallax } from "react-parallax";
import Reveal from "react-reveal/Reveal/";

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
                <h1 className='wow fadeInLeft animated banner_content_header d-flex justify-content-center '>
                  {jhonData.name2}
                </h1>
                <h5 className='wow fadeInLeft animated '>{jhonData.ptext}</h5>
              </Reveal>
              <Reveal effect='fadeInUp' duration={2000}></Reveal>
            </div>
          </div>
        </Parallax>
      </section>
    );
  }
}

export default TypeBanner;
