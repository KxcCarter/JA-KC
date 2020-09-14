import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import '../RegisterForm/RegisterForm.css';

class VolunteerRegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    phone: '',
    social_media_link: '',
  };

  render() {
    return (
      <div className="mainRegisterDiv">
        <RegisterForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VolunteerRegisterPage);
