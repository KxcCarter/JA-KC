import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import VolunteerClassesPage from '../VolunteerClassesPage/VolunteerClassesPage';
import AdminRegisterPage from '../AdminRegisterPage/AdminRegisterPage';
import AdminVolunteers from '../content/AdminVolunteers';
import AdminClasses from '../content/AdminClasses';
import AdminReports from '../content/AdminReports';
import AdminLoginPage from '../AdminLoginPage/AdminLoginPage';
import VolunteerDashboardPage from '../VolunteerDashboardPage/VolunteerDashboardPage';
import VolunteerRegisterPage from '../VolunteerRegisterPage/VolunteerRegisterPage';
import MainVolunteerHomePage from '../MainVolunteerHomePage/MainVolunteerHomePage';

import './App.css';
import AppDashboard from '../../AppDashboard';
import AdminAdministrators from '../content/AdminAdministrators';
class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />

            {/* <Route exact path="/admin" component={AppDashboard} /> */}
            <Route exact path="/adminvolunteers" component={AdminVolunteers} />
            <Route exact path="/adminclasses" component={AdminClasses} />
            <Route exact path="/adminreports" component={AdminReports} />
            <Route exact path="/adminlogin" component={AdminLoginPage} />
            <Route exact path="/adminhome" component={AdminRegisterPage} />
            <Route
              exact
              path="/volunteerhome"
              component={MainVolunteerHomePage}
            />
            <Route
              exact
              path="/volunteerregister"
              component={VolunteerRegisterPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <Route
              // logged in shows UserPage else shows LoginPage
              exact
              path="/volunteerclasses"
              component={VolunteerClassesPage}
            />

            {/* <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            /> */}
            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/adminlogin"
              component={AdminLoginPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/adminregistration"
              component={AdminRegisterPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRout              authRedirect="/admin"
e
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/volunteerregistration"
              component={VolunteerRegisterPage}
              authRedirect="/user"
            /> */}
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={RegisterPage}
              authRedirect="/user"
            /> */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/volunteer"
              component={VolunteerDashboardPage}
              authRedirect="/volunteerdashboard"
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default connect()(App);
