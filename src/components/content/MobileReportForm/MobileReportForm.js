import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import S3Page from '../../S3ImageUploader/S3Page';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MobileReportForm extends Component {
  state = {
    class_size: '',
    scheduled_class_id: this.props.classId,

  };


  onCancelClick = (event) => {
    this.props.history.push(`/`); //NEED TO DECIDE
  };

  onSaveClick = (event) => {
    event.preventDefault();
    const dataForServer = this.state;
    console.log(dataForServer);
    this.props.dispatch({
      type: 'SUBMIT_CLASS_DETAILS',
      payload: dataForServer,
    });
    this.props.history.push(`/`); //NEED TO DECIDE
  };

  onSavePic = (event) => {
    event.preventDefault();

    //KENNY WILL NEED TO HELP ME WITH THIS
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  render() {

    return (
      <div>
        <form className="formPanel">
          <h1>Submit Class Details!</h1>
          <div>
            <label htmlFor="size">
              Class size:
              <input

                type="text"
                name="class_size"
                value={this.state.class_size}
                onChange={this.onInputChange('class_size')}
              />

            </label>
            <button onClick={this.onSaveClick}>Save</button>
          </div>
          <div>

          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(MobileReportForm));
