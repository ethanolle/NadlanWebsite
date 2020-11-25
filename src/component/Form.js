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
          <div className='col-lg-6 '>
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
              <h3 className='text-center d-flex justify-content-center'>
                איפה הייתם רוצים לגור ?
              </h3>
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
            <p>{errors.phone}</p>
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
