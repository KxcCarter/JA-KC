import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './MobileMainVolunteerHomePage.css';
import MobileTestNav from '../MobileNav/MobileTestNav';

class MobileMainVolunteerHomePage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <div>
        <MobileTestNav />
        <Container>
          <Paper className="WelcomeVolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              <h3 id="welcome">Hi, Johanna D!</h3>
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="VolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              {/* <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1> */}
              <h3>JA Career Speakers Series</h3>
              <h4>Park Hill High School</h4>
              <h4>October 14th, 2020 - 1PM</h4>
              {/* <p>
                In JA Career Speakers Series, a volunteer guest speaker visits
                the classroom and shares information about his or her career,
                work, and education experience. The speaker may bring props,
                samples of his or her work, or other visuals to help engage
                students. Activities and implementation design will vary based
                on grade level. This event is part of the JA Work and Career
                Readiness Pathway and can be placed in grades K–12, in-school or
                after-school/out-of-school.
              </p> */}
            </Box>
          </Paper>
        </Container>
        <Container>
          <Paper className="VolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              <h3 id="welcome">View Program Information</h3>
              <h5>{item.title}</h5>
              <h5>{item.name}</h5>
              <h5>Number of Sessions: {item.sessions}</h5>
            </Box>
          </Paper>
        );
      }
    );
    return (
      <div>
        <TestNav />
        <Container>{scheduled_classes}</Container>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MobileMainVolunteerHomePage);
