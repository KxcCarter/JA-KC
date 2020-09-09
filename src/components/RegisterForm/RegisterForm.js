import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './RegisterForm.css';


class RegisterForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    email: '',
  }; // end state

  // event listener to dispatch register
  registerUser = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      },
    });
  } // end registerUser

  // capture change on all the inputs and set that value to state
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  } // end handleInputChangeFor

  render() {
    return (
      <div className="registerDiv">
        <div className="overlay">
          <Card className="registerCard" onSubmit={this.registerUser}>
            <Container className="registerContainer" component="main" maxWidth="xs">
              <CssBaseline />
              <div className="registerPaper">
                <ArrowBackIcon className="registerArrow" />
                <Avatar className="registerAvatar">
                </Avatar>
                <h4>
                  Administrative Registration
                </h4>
                {/* {this.props.errors.registrationMessage && (
                  <h3
                    className="alert"
                    role="alert"
                  >
                    {this.props.errors.registrationMessage}
                  </h3>
                )} */}
                <form className="registerForm" noValidate>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="First Name"
                    autoFocus
                    type="text"
                    name="first_name"
                    value={this.state.first_name}
                    required
                    onChange={this.handleInputChangeFor('first_name')}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Last Name"
                    autoFocus
                    type="text"
                    name="last_name"
                    value={this.state.last_name}
                    required
                    onChange={this.handleInputChangeFor('last_name')}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Username"
                    autoFocus
                    type="text"
                    name="username"
                    value={this.state.username}
                    required
                    onChange={this.handleInputChangeFor('username')}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={this.state.password}
                    required
                    onChange={this.handleInputChangeFor('password')}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Email"
                    autoFocus
                    type="text"
                    name="email"
                    id="email"
                    value={this.state.email}
                    required
                    onChange={this.handleInputChangeFor('email')}
                  />
                  <Button className="registerButton"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    name="submit"
                    value="Register"
                  >Register
                    </Button>
                  <center>
                    <Link to="/login">
                      <Button
                        type="logbutton"
                        className="loginButton"
                        color="primary"
                      >
                        Login
                      </Button>
                    </Link>
                  </center>
                </form>
              </div>
            </Container>
          </Card>
        </div >
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
