import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './MainVolunteerClassesPage.css';
import TestNav from '../MobileNav/TestNav';

class MainVolunteerClassesPage extends Component {
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
          <Paper className="VolunteerPageBubbleStyle" key={item.index}>
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
export default connect(mapStoreToProps)(MainVolunteerClassesPage);
