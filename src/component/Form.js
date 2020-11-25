import React from "react";
import emailjs from "emailjs-com";

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      loading: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ name: "" });
    this.resetForm();
  }

  handleShow() {
    this.setState({ show: true, loading: false });
  }

  state = {
    name: "",
    phone: "",
    subject: "",
    message: "",
    show: false,
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const { phone, subject, message, name } = this.state;

    let templateParams = {
      phone: phone,
      name: name,
      to_name: "ethan.sayagh@gmail.com",
      subject: subject,
      message: message,
    };

    //=======================
    // Use your own API key
    //=======================

    emailjs
      .send(
        "ContactMail",
        "template_lw66b9m",
        templateParams,
        "user_dpP7RSRMd857gadzuRAji"
      )
      .then(
        (result) => {
          this.handleShow();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  resetForm() {
    this.setState({
      phone: "",
      subject: "",
      message: "",
      modal: false,
      name: "",
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='form_class'>
        <div className='row'>
          <div className='col-lg-6'>
            <input
              value={this.state.name}
              type='text'
              id='name'
              name='name'
              className='form-control'
              placeholder=' שם מלא'
              onChange={this.handleChange.bind(this, "name")}
              required
            />
          </div>
          <div className='col-lg-6 '>
            <input
              value={this.state.phone}
              type='text'
              className='form-control'
              id='phone'
              name='phone'
              placeholder='טלפון'
              onChange={this.handleChange.bind(this, "phone")}
            />
          </div>
          <div className='col-lg-12'>
            <h3 className='text-center d-flex justify-content-center'>
              איפה הייתם רוצים לגור ?
            </h3>
            <br />
            <div className='ques2 '>
              <h3 className='text-center'>רמת גן</h3>
              <div className=' row float-center d-flex justify-content-center '>
                <label className='m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  1
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  1.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  2
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  2.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  3
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  3.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  4
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  4.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  5.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  6
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  6.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  7
                </label>
                <label className=' m-3 '>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  יותר
                </label>
              </div>
            </div>
            <br />
            <div className='ques2 '>
              <h3 className='text-center'>כמה חדרים ?</h3>
              <div className=' row float-center d-flex justify-content-center '>
                <label className='m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  1
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  1.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  2
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  2.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  3
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  3.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  4
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  4.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  5.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  6
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  6.5
                </label>
                <label className=' m-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  7
                </label>
                <label className=' m-3 '>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  יותר
                </label>
              </div>
            </div>
            <br />
            <div className='ques3'>
              <h3 className='text-center '>גודל הדירה ?</h3>
              <div className='row float-center d-flex justify-content-center'>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  עד 50 מ"ר
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  50 – 70 מ"ר
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  70 – 90 מ"ר
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  90 – 120 מ"ר
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  120 ומעלה
                </label>
              </div>
            </div>
            <div className='ques4'>
              <h3 className='text-center '>מה עוד?</h3>
              <div className='row float-center d-flex justify-content-center'>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  חניה
                </label>
                <label className='col-lg-2 '>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  מעלית
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  ממ"ד
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  מרפסת שמש
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  מחסן
                </label>
                <label className='col-lg-2'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  משופצת
                </label>
              </div>
            </div>
            <div className='ques5 '>
              <h3 className='text-center '>צריכים למכור את דירתכם ?</h3>
              <div className='d-flex justify-content-center'>
                <div className='form-check form-check-inline m-2 '>
                  <input
                    className='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label className='form-check-label' for='inlineRadio1'>
                    כן
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='radio'
                    name='inlineRadioOptions'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label className='form-check-label' for='inlineRadio2'>
                    לא
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <button type='submit' className='btn btn-warning btn-lg  '>
            שלח
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
