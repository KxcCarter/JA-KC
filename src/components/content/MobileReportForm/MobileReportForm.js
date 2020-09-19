import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Spring } from 'react-spring/renderprops';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class MobileReportForm extends Component {
  state = {

    size: '',

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
      <div className="submitClassDiv">
        <div className="overlay">
          <Card className="submitClassCard" onSubmit={this.onSaveClick}>
            <Spring
              from={{ opacity: 0, marginTop: -600 }}
              to={{ opacity: 1, marginTop: 0 }}
            >
              {props => (
                <div style={props}>
                  <Container
                    className="submitClassContainer"
                    component="main"
                    maxWidth="xs"
                  >
                    <CssBaseline />
                    <div className="submitClassPaper">


                      <form className="submitClassForm" noValidate>


                        <TextField
                          margin="normal"
                          fullWidth
                          label="How Many Students Attended?"
                          autoFocus
                          type="text"
                          name="size"
                          value={this.state.size}
                          required
                          onChange={this.onInputChange('size')}
                        />


                        {/* <ImageUploader />
            <Button onClick={this.onSavePic}>Save Pic</Button> */}

                        {/* <Button
                          className="submitClassButton"
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          name="submit"
                          value="Submit"
                        >
                          Submit
                </Button> */}
                      </form>
                    </div>
                  </Container>
                </div>
              )}
            </Spring>
          </Card>
        </div>
      </div>
    );
  }
}





export default connect(mapStoreToProps)(withRouter(MobileReportForm));
