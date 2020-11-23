import React from "react";
import emailjs from "emailjs-com";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {
        name: "",
        subject: "",
        phone: "",
        email: "",
      },
    };
  }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.valueב;
    let errors = this.state.errors;

    switch (name) {
      case "name":
        errors.name = value.length === 0 ? "Name is not empty" : "";
        break;
      // case "subject":
      //   errors.subject = value.length < 5 ? "Subject must be 5 characters" : "";
      //   break;
      case "phone":
        errors.phone = value.length < 5 ? "phone is not empty" : "";
        break;
      // case "email":
      //   errors.email = value.length < 5 ? "Subject is not empty" : "";
      //   let appos = value.indexOf("@");
      //   let dots = value.lastIndexOf(".");

      //   if (appos < 1 || dots - appos < 2) {
      //     errors.email = "please enter valid email";
      //   }

      //   break;

      default:
        break;
    }
    this.setState({ errors, [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // if (
    //   this.state.errors.name.length === 0 &&
    //   this.state.errors.subject.length === 0 &&
    //   this.state.errors.phone.length === 0 &&
    //   this.state.errors.email.length === 0
    // ) {
    //   alert("form is valid");
    // } else {
    //   alert("form is invalid");
    // }
    emailjs
      .sendForm(
        "gmail",
        "template_zo1q2mh",
        e.target,
        "user_vvQtVRIgqRETJC2JHOJz9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("form is valid");
        },
        (error) => {
          console.log(error.text);
          alert("form is invalid");
        }
      );
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.submitHandler.bind(this)} className='form_class'>
        <div className='row'>
          <div className='col-lg-6'>
            <input
              type='text'
              id='name'
              name='name'
              className='form-control'
              placeholder='שם'
              onChange={this.handleChange}
            />
            <p>{errors.name}</p>
          </div>
          {/* <div className='col-lg-6'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Your Email*'
              onChange={this.handleChange}
            />
            <p>{errors.email}</p>
          </div> */}
          {/* <div className='col-lg-6'>
            <input
              type='text'
              id='subject'
              name='subject'
              className='form-control'
              placeholder='Subject*'
              onChange={this.handleChange}
            />
            <p>{errors.subject}</p>
          </div> */}
          <div className='col-lg-6'>
            <input
              type='text'
              className='form-control'
              id='phone'
              name='phone'
              placeholder='טלפון'
              onChange={this.handleChange}
            />
            <p>{errors.phone}</p>
          </div>
          <div className='col-lg-12'>
            <div className='ques1'>
              <h3 className='text-center'>איפה הייתם רוצים לגור ?</h3>
              <div className='row'>
                <label className='col-lg-6'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  רמת גן – מרכז העיר, מרום נווה, נווה יהושוע, הבילויים, נחלת
                  גנים, קריית בורוכוב, קריית קריניצי, רמת אפעל, רמת חן, רמת
                  יצחק, רמת עמידר, רמת שקמה, ש/יכון ותיקים, שכונת הגפן, שכונת
                  הלל, שכונת חרוזים, שכונת ראשונים, תל בנימין, תל גנים, שיכון
                  מזרחי.
                </label>
                <label className='col-lg-6'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  גבעתיים – בורוכוב, ארלוזרוב, הל"ה, פועלי הרכבת, שינקין, גבעת
                  רמב"ם, גבעת קוזלובסקי, קריית יוסף,
                </label>
              </div>
            </div>
            <br />
            <div className='ques2 '>
              <h3 className='text-center'>כמה חדרים ?</h3>
              <div className='d-flex justify-content-center '>
                <label className='col-lg-6 '>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  1 עד 7
                </label>
                <label className='col-lg-6 ms'>
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
            <div className='ques2'>
              <h3 className='text-center '>גודל הדירה ?</h3>
              <div className='row float-center'>
                <label className='col-lg-3'>
                  <input
                    name='isGoing'
                    type='checkbox'
                    checked={this.state.isGoing}
                    onChange={this.handleInputChange}
                  />
                  עד 50 מ"ר
                </label>
                <label className='col-lg-3 '>
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
            <p>{errors.phone}</p>
          </div>
        </div>

        {/* <textarea
          name='message'
          id='message'
          className='form-control'
          rows='6'
          placeholder='Your Message ...'
          onChange={this.handleChange}
        ></textarea> */}
        <button type='submit' className='btn send_btn theme_btn rtl'>
          שלח
        </button>
      </form>
    );
  }
}

export default Form;
