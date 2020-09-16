import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// CUSTOM COMPONENTS
import VolunteerRegisterForm from '../VolunteerRegisterPage/VolunteerRegisterForm';

class VolunteerRegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    phone: '',
    social_media_link: '',
    account_type_id: '2',
  };

  render() {
    return (
      <div className="mainRegisterDiv">
        <VolunteerRegisterForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VolunteerRegisterPage);
