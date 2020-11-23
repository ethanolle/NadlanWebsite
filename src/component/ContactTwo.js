import React, { Component } from "react";
import Reveal from "react-reveal/Reveal/";
import SectionTitleTwo from "../component/Banner/SectionTitleTwo";
import Form from "./Form";
import "./ContactTwo.css";
class ContactTwo extends Component {
  render() {
    return (
      <section className='contact-area contact-area-two bg_color' id='contacts'>
        <div className='container'>
          <div className='row'>
            <div className='section_title'>
              <SectionTitleTwo
                stitle='מבטיחים להיות ממוקדים ולא לחפור !'
                btitle='פרטים שלכם:'
              />
            </div>
            <div className='col-lg-12 col-md-12'>
              <Reveal effect='fadeInRight' duration={800}>
                <div className='input_form'>
                  <Form />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactTwo;
