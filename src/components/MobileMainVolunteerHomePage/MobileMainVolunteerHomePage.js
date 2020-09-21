import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Box, Container } from '@material-ui/core';
import './MobileMainVolunteerHomePage.css';
import MobileTestNav from '../MobileNav/MobileTestNav';
import { Spring } from 'react-spring/renderprops';
import MobileFooter from '../Footer/MobileFooter';

class MobileMainVolunteerHomePage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_SCHEDULED_CLASSES',
    });
    this.props.dispatch({
      type: 'FETCH_LEARNING_MATERIAL',
    });
  }

  clickClassDetails = (event, id) => {
    console.log('clicky click');
    this.props.history.push(`/volunteerclasses/${id}`);
  };
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const scheduled_classes = this.props.store.volunteerScheduledClasses.map(
      (item, index) => {
        return (
          <Spring
            from={{ opacity: 0, marginTop: -600 }}
            to={{ opacity: 1, marginTop: 0 }}
          >
            {(props) => (
              <div style={props}>
                <Paper
                  className="VolunteerPageBubbleStyle"
                  key={item.index}
                  onClick={(event) => this.clickClassDetails(event, item.id)}
                >
                  <Box p={1} m={1}>
                    <h3 id="welcome">{item.title}</h3>
                    {/* <h5>{item.title}</h5> */}
                    <h5>{item.name}</h5>
                    <h5>Number of Sessions: {item.sessions}</h5>
                  </Box>
                </Paper>
              </div>
            )}
          </Spring>
        );
      }
    );
    return (
      <div className="MobileVolunteerHomePage">
        <MobileTestNav />
        <Container>{scheduled_classes}</Container>
        {/* <LogOutButton className="log-in" /> */}
        {/* <MobileFooter /> */}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(MobileMainVolunteerHomePage);
