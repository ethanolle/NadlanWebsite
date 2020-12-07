import React from "react";
import emailjs from "emailjs-com";
import { Button, Modal, Image } from "react-bootstrap";
import {
  ramatGanOption,
  givatayimOption,
  rooms,
  size,
  whatElse,
} from "./FormData";
import Select from "react-select";

const Checkbox = ({ type = "checkbox", name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

class Form extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSizeCheckbox = this.handleSizeCheckbox.bind(this);
    this.handleWhatElseCheckbox = this.handleWhatElseCheckbox.bind(this);
    this.state = {
      show: false,
      loading: false,
      checkedItems: new Map(),
      checkedSize: new Map(),
      checkedWhatElse: new Map(),
      ramatGan: {
        value: ramatGanOption[0], // "One" as initial value for react-select
        ramatGanOption, // all available options
      },
      givatayim: {
        value: givatayimOption[0], // "One" as initial value for react-select
        givatayimOption, // all available options
      },
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
    sellHome: "",
    whatElse: ["test"],
    show: false,
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const {
      phone,
      sellHome,
      whatElse,
      name,
      ramatGan,
      givatayim,
      checkedItems,
      checkedSize,
      checkedWhatElse,
    } = this.state;
    let ramatGanList, givatayimList;
    if (ramatGan.value.constructor === Array) {
      ramatGanList = ramatGan.value.map(({ value }) => value);
    }
    if (givatayim.value.constructor === Array) {
      givatayimList = givatayim.value.map(({ value }) => value);
    }
    let checkedValidation = Array.from(checkedItems.entries())
      .filter(([key, value]) => value)
      .map(([key]) => key);

    let checkedSizeValidation = Array.from(checkedSize.entries())
      .filter(([key, value]) => value)
      .map(([key]) => key);

    let checkedWhatElseValidation = Array.from(checkedWhatElse.entries())
      .filter(([key, value]) => value)
      .map(([key]) => key);

    let templateParams = {
      phone: phone,
      name: name,
      whatElse: whatElse,
      to_name: "Home@re-friendly.com",
      sellHome: sellHome,
      ramatGanOption: ramatGanList,
      givatayimOption: givatayimList,
      checkedItems: checkedValidation,
      checkedSize: checkedSizeValidation,
      checkedWhatElse: checkedWhatElseValidation,
    };
    console.log(checkedItems);
    console.log(checkedSize);
    console.log(checkedWhatElse);

    //=======================
    // Use your own API key
    //=======================

    emailjs
      .send(
        "NadlanMail",
        "NadlanTemplate",
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
    window.location.reload(false);
  }

  handleRadioButton(value) {
    this.setState({
      sellHome: value,
    });
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  handleRamatGanChange = (value) => {
    this.setRamatGanValue(value);
  };
  handleGivatayimChange = (value) => {
    this.setGivatayimValue(value);
  };

  setRamatGanValue = (value) => {
    this.setState((prevState) => ({
      ramatGan: {
        ...prevState.ramatGan,
        value,
      },
    }));
  };
  setGivatayimValue = (value) => {
    this.setState((prevState) => ({
      givatayim: {
        ...prevState.givatayim,
        value,
      },
    }));
  };

  handleClick = () => {
    this.setValue(null); // here we reset value
  };
  handleCheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }
  handleSizeCheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedSize: prevState.checkedSize.set(item, isChecked),
    }));
  }
  handleWhatElseCheckbox(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({
      checkedWhatElse: prevState.checkedWhatElse.set(item, isChecked),
    }));
  }

  render() {
    const { ramatGan, givatayim } = this.state;
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
            <div className='ques2 '>
              <h3 className='text-center'>רמת גן</h3>
              <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                hideSelectedOptions={true}
                backspaceRemovesValue={true}
                isMulti
                onChange={this.handleRamatGanChange}
                options={ramatGan.ramatGanOption}
              />
              <h3 className='text-center'>גבעתיים</h3>
              <Select
                closeMenuOnSelect={false}
                blurInputOnSelect={false}
                hideSelectedOptions={true}
                backspaceRemovesValue={true}
                isMulti
                onChange={this.handleGivatayimChange}
                options={givatayim.givatayimOption}
              />
            </div>
            <br />
            <div className='ques2 '>
              <h3 className='text-center'>כמה חדרים ?</h3>
              <div className=' row float-center d-flex justify-content-center '>
                {rooms.map((item) => (
                  <label key={item.key} className='m-3'>
                    <Checkbox
                      name={item.name}
                      checked={this.state.checkedItems.get(item.name)}
                      onChange={this.handleCheckbox}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
            <br />
            <div className='ques3'>
              <h3 className='text-center '>גודל הדירה ?</h3>
              <div className='row float-center d-flex justify-content-center'>
                {size.map((item) => (
                  <label key={item.key} className='col-lg-2'>
                    <Checkbox
                      name={item.name}
                      checked={this.state.checkedSize.get(item.name)}
                      onChange={this.handleSizeCheckbox}
                    />
                    {item.name}
                  </label>
                ))}
              </div>
            </div>
            <div className='ques4'>
              <h3 className='text-center '>מה עוד?</h3>
              <div className='row float-center d-flex justify-content-center'>
                {whatElse.map((item) => (
                  <label key={item.key} className='col-lg-2'>
                    <Checkbox
                      name={item.name}
                      checked={this.state.checkedWhatElse.get(item.name)}
                      onChange={this.handleWhatElseCheckbox}
                    />
                    {item.name}
                  </label>
                ))}
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
                    onChange={() => this.handleRadioButton("כן")}
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
                    onChange={() => this.handleRadioButton("לא")}
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
        <Modal
          size='md'
          aria-labelledby='contained-modal-title-vcenter'
          show={this.state.show}
          onHide={this.handleClose}
          centered
          className='modalBox'
        >
          <Modal.Body className='contact_success_modal_body modalBox'>
            <Image
              className='contact_success_modal_img'
              src='https://icon-library.net/images/success-icon/success-icon-5.jpg'
            />
            <h1>בינגו !</h1>
            <h3>נדאג לשלוח לכם נכסים שיענו על כל הצרכים !</h3>
            <br />
            <Button
              size='lg'
              onClick={this.handleClose}
              className='contact-email-text-btn'
              variant='warning'
            >
              סגור
            </Button>
          </Modal.Body>
        </Modal>
      </form>
    );
  }
}

export default Form;
