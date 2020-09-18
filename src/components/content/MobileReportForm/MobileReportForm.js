import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MobileReportForm extends Component {
  state = {
    name: '',
    energy_level: '',
    size: '',
    play_style: '',
    description: '',
    owner_id: '',
    picture: '',
  };

  onCancelClick = (event) => {
    this.props.history.push(`/`); //NEED TO DECIDE
  };

  onSaveClick = (event) => {
    event.preventDefault();
    const dataForServer = {};
    this.props.dispatch({
      type: 'UPDATE_REPORT',
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
          <h1>Editing CLASS NAME HERE!</h1>
          <div>
            <label htmlFor="size">
              Class size:
              {/* <input
                defaultValue={this.props.store.dog.name}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onInputChange('name')}
              /> */}
            </label>
          </div>
          <div>
            {/* <ImageUploader />
            <Button onClick={this.onSavePic}>Save Pic</Button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(MobileReportForm));
