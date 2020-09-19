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
import InfoIcon from '@material-ui/icons/Info';
import { Spring } from 'react-spring/renderprops';


class MobileVolunteerClassesPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    let matchedClass = this.props.store.volunteerScheduledClasses.filter(
      (item) => {
        return item.id === parseInt(this.props.match.params.id);
      }
    );
    let scheduled_classes = matchedClass.map((item, index) => {
      return (
        <div key={item.index}>
          <h3 id="welcome">View Program Information</h3>
          <h5>{item.title}</h5>
          <h5>{item.name}</h5>
          <h5>Number of Sessions: {item.sessions}</h5>
        </div>
      );
    });

    const matchedProgramId =
      matchedClass.length === 0 ? null : matchedClass[0].program_id;
    console.log('matachedProgramId:', matchedProgramId);

    const matchedScheduledClassId =
    matchedClass.length === 0 ? null : matchedClass[0].id;
  console.log('matchedScheduledClassId:', matchedScheduledClassId);


  const matchedUserId =
  matchedClass.length === 0 ? null : matchedClass[0].user_id;
console.log('matchedUserId:', matchedUserId);

    return (
      <div className="MobileVolunteerClassPage">
        <MobileTestNav />
        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1}}
          >
            {(props) => (
              <div style={props}>
        <Container>
          <Paper className="VolunteerPageBubbleStyle">
            <Box p={1} m={1}>
              {scheduled_classes}
            </Box>
          </Paper>
        </Container>
        <Container className="ClickButtonsContainer">
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
              <MobileVolunteerClassesModal programId={matchedProgramId} />
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
                
                Submit Class Details
               
              </Button>
              <MobileSubmitReportModal classId={matchedScheduledClassId} />
            </Box>
          </Paper>
        </Container>
        </div>
            )}
          </Spring>
        {/* <LogOutButton className="log-in" /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MobileVolunteerClassesPage);
