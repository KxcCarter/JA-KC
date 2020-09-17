import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './UserPage.css';
import TestNav from '../MobileNav/TestNav';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const scheduled_classes = this.props.store.volunteerScheduledClasses.map(
      (item, index) => {
        return (
          <ul>
            <li key={item.index}>
              <div>
                <Container>
                  <Paper className="VolunteerPageBubbleStyle">
                    <Box p={1} m={1}>
                      <h3 id="welcome">View Program Information</h3>
                      <h5>{item.title}</h5>
                      <h5>{item.name}</h5>
                      <h5>Number of Sessions: {item.sessions}</h5>
                    </Box>
                  </Paper>
                </Container>
              </div>
            </li>
          </ul>
        );
      }
    );
    return (
      <div>
        {scheduled_classes}

        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              {/* <p>Your scheduled classes are: {this.props.store.user.id}</p> */}
              <h2>Program Resources</h2>
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              <h2>Submit Class Details</h2>
            </Box>
          </Paper>
        </Container>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
