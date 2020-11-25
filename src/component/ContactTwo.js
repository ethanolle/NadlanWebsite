import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import Form from "./Form";
import Card from "./Card";
import particles from "../assets/css/particle";
import Particles from "react-particles-js";

class ContactTwo extends Component {
  render() {
    return (
      <section className='contact-area contact-area-two bg_color' id='contacts'>
        <div className='container'>
          <div className='row'>
            <div style={{ position: "absolute" }}></div>
            <Particles
              width='100vw'
              height='100vh'
              params={particles}
              className='particle'
            />
            <Card>
              <div className='section_title m-3 ' id='contact_no_wrap'>
                <SectionTitleTwo stitle='' btitle='פרטים שלכם:' />
              </div>
              <div className='col-lg-12 col-md-12'>
                <Reveal effect='fadeInRight' duration={800}>
                  <div className='input_form'>
                    <Form />
                  </div>
                </Reveal>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTwo;
