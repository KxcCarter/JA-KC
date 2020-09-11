import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './MobileNavStyle.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const MobileNav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <body>
      <div className="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Info Page</a>
                </li>
                <li>
                  <a href="#">Volunteer</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="content">
          <h2></h2>
          <p></p>
          <a href="#" className="btn">
            Hello, Johanna D!
          </a>
        </div>
      </div>
    </body>
  );

  {
    /* // <div className="nav">
    //   <Link to="/home">
    //     <h2 className="nav-title">Junior Achievement</h2>
    //   </Link>
    //   <div className="nav-right">
    //     <Link className="nav-link" to={loginLinkData.path}>
    //       {/* Show this link if they are logged in or not,
    //       but call this link 'Home' if they are logged in,
    //       and call this link 'Login / Register' if they are not */
  }
  {
    /* //       {loginLinkData.text} */
  }
  {
    /* //     </Link> */
  }
  //     {/* Show the link to the info page and the logout button if the user is logged in */}
  //     {props.store.user.id && (
  //       <> */}
  //         <Link className="nav-link" to="/info">
  //           Info Page
  //         </Link>
  //         <LogOutButton className="nav-link" />
  //       </>
  //     )}
  //     {/* Always show this link since the about page is not protected */}
  //     <Link className="nav-link" to="/about">
  //       About
  //     </Link>
  //     <Link className="nav-link" to="/volunteer">
  //       Volunteer
  //     </Link>
  //   </div>
  // </div>
  // );
};

export default connect(mapStoreToProps)(MobileNav);
