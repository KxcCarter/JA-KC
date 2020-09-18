import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './MobileVolunteerClassesPage.css';
import MobileTestNav from '../MobileNav/MobileTestNav';
import { Button } from '@material-ui/core';
import MobileVolunteerClassesModal from './MobileVolunteerClassesModal';
import MobileSubmitReportModal from './MobileSubmitReportModal';

class MobileVolunteerClassesPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    let scheduled_classes = this.props.store.volunteerScheduledClasses
      .filter((item) => {
        return item.id === parseInt(this.props.match.params.id);
      })
      .map((item, index) => {
        return (
          <div key={item.index}>
            <h3 id="welcome">View Program Information</h3>
            <h5>{item.title}</h5>
            <h5>{item.name}</h5>
            <h5>Number of Sessions: {item.sessions}</h5>
          </div>
        );
      });

    let learning_materials = this.props.store.trainingReducer
      .filter((item) => {
        return item.program_id === parseInt(this.props.match.params.id);
      })
      .map((item, index) => {
        return <link>{item.content}</link>;
      });
    return (
      <div>
        <MobileTestNav />
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
              <MobileVolunteerClassesModal />
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
              <MobileSubmitReportModal />
            </Box>
          </Paper>
        </Container>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MobileVolunteerClassesPage);
