import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './VolunteerClassesPage.css';
import TestNav from '../MobileNav/TestNav';
import { Button } from '@material-ui/core';
import VolunteerClassesModal from './VolunteerClassesModal';

class VolunteerClassesPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    let scheduled_classes = this.props.store.volunteerScheduledClasses.map(
      (item, index) => {
        return (
          <div key={item.index}>
            <Container>
              <Paper>
                <Box>
                  <ul>
                    <li>
                      <h3 id="welcome">View Program Information</h3>
                      <h5>{item.title}</h5>
                      <h5>{item.name}</h5>
                      <h5>Number of Sessions: {item.sessions}</h5>
                    </li>
                  </ul>
                </Box>
              </Paper>
            </Container>
          </div>
        );
      }
    );
    return (
      <div>
        <TestNav />
        <Container>
          <Paper className="VolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              {scheduled_classes}
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              {/* <p>Your scheduled classes are: {this.props.store.user.id}</p> */}
              <Button
                type="button"
                className="link-button"
                onClick={() => {
                  this.props.history.push('/');
                }}
              >
                Program Resources
              </Button>
              <VolunteerClassesModal />
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="ProgramResourcesBubbleStyle">
            <Box p={1} m={1}>
              <Button
                type="button"
                className="link-button"
                onClick={() => {
                  this.props.history.push('/');
                }}
              >
                Submit Class details
              </Button>
              <VolunteerClassesModal />
            </Box>
          </Paper>
        </Container>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(VolunteerClassesPage);
