// import React from 'react';
// import { connect } from 'react-redux';
// // import LogOutButton from '../LogOutButton/LogOutButton';
// import mapStoreToProps from '../../redux/mapStoreToProps';
// import { Component } from 'react';
// // import Grow from '@material-ui/core/Grow';
// // import Paper from '@material-ui/core/Paper';
// import DayPicker from './DayPicker';
// import moment from 'moment';
// import { Paper, Box, Container, Button } from '@material-ui/core';
// // import Popper from '@material-ui/core/Popper';
// // import MenuItem from '@material-ui/core/MenuItem';
// // import MenuList from '@material-ui/core/MenuList';

// class VolunteerDashboardPage extends Component {
//   state = {};
//   componentDidMount() {

//     this.props.dispatch({
//       type: 'GET_USER_',
//       payload: { id: this.props.store.user.id },
//     });
//   }
// //   selectDay = (day) => {
// //     console.log(day);
// //     if (day !== 'null') {
// //       this.setState({
// //         dayPicked: day,
// //         pickday: true,
// //       });
// //     } else {
// //       this.setState({
// //         dayPicked: '',
// //         pickday: false,
// //       });
// //     }
// //   };
// //   setDay = (event) => {
// //     event.preventDefault();
// //     this.props.dispatch({
// //       type: 'SET_',
// //       payload: { day: this.state., id: this.props.user.id },
// //     });
// //   };

//   get___(___) {

//   }
//   render() {
//     const ___ =
//       this.props.store.___Reducer.length > 0
//         ? this.___(this.props.store.___Reducer.___)
//         : 0;

//     }
//     return (
//     //   <Container>
//     //     <Paper square>
//     //       <Box p={2}>
//             <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>

//             {this.props.store.__Reducer.length > 0 ? (
//               <div>
//                 <p>{___textHere}</p>
//               </div>
//             ) : (
//             //   <div>
//             //     {/* <h2>Select Collection Day:</h2>
//             //     <DayPicker selectDay={this.____} />
//             //     <div style={{ marginTop: '15px' }}>
//             //       <Button disabled={!this.state.___} onClick={this.___}>
//             //         Confirm Day
//             //       </Button> */}
//             //     </div>
//               </div>
//             )}
//           {/* </Box>
//         </Paper>
//       </Container> */}
//     );
//   }
// }
// // this allows us to use <App /> in index.js

import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
// import mapStateToProps from '../../redux/mapRedux/mapStateToProps';
import { Paper, Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MobileNav from '../MobileNav/MobileNav';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function VolunteerDashboardPage() {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <MobileNav />

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <p> Hello</p>
            {/* <h1 id="welcome">Welcome, {props.store.user.username}!</h1> */}
          </Typography>
          <Typography variant="h5" component="h2">
            {/* <p>Your ID is: {props.store.user.id}</p> */}
            <h1> Hello</h1>
          </Typography>
          <Typography
            className={classes.pos}
            color="textSecondary"
          ></Typography>
          <Typography variant="body2" component="p">
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">PROGRAMS!!!!</Button>
        </CardActions>
      </Card>
    </div>
  );
}
// const VolunteerDashboardPage = () => {
//   return (
//     <Container>
//       <Paper square>
//         <Box p={2}>
//           <div>
//             <h1 id="welcome">Welcome, {props.store.user.username}!</h1>
//             <p>Your ID is: {props.store.user.id}</p>
//             <LogOutButton className="log-in" />
//           </div>
//         </Box>
//       </Paper>
//     </Container>
//   );
// };
// export default connect()(VolunteerDashboardPage);
