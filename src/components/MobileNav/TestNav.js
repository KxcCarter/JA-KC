import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './TestNav.css';

import { Dehaze } from '@material-ui/icons';
import {
    Drawer,
    Divider,
    MenuItem,
    MenuList,
    IconButton
} from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const muiStyles = (theme) => createStyles({
    navDrawer: {
        width: 230

    },
    navItem: {

        color: '#efefef'
    },
    navLink: {
        textDecoration: 'none',
        color: '#F2F2F2',
    },
    divider: {

    }
});



class TestNav extends Component {
    state = {
        open: false,
    }

    handleOpen = () => {
        this.setState({ open: true });
    };
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const props = this.props;
        return (
            <>
                <div >
                    <IconButton label="dehaze drawer" onClick={this.handleOpen}>
                        <Dehaze />
                    </IconButton>
                    {/* <Link to="/home">
                        <h2 className="nav-title">Title</h2>
                    </Link> */}

                </div>

                <Drawer
                    anchor="left"
                    open={this.state.open} onClose={this.handleClose}>
                    <div className={this.props.classes.navDrawer}>
                        <MenuList>

                            {/* <MenuItem className={this.props.classes.navItem}>
                                <IconButton >
                                    <HomeOutlined />
                                </IconButton>

                                {/* <Link to="/home" className={this.props.classes.navLink}>
                                    {/* Show this link if they are logged in or not,
              but call this link 'Home' if they are logged in,
              and call this link 'Login / Register' if they are not */}
                            {/* {props.user.id ? 'Home' : 'Login / Register'}
                                </Link> */}
                            {/*</MenuItem> */}
                            <Divider />
                            {/* Show the link to the info page and the logout button if the user is logged in */}
                            {props.user.id && (
                                <>
                                    {/* <MenuItem className={this.props.classes.navItem} >
                                        <IconButton>
                                            <ThumbUpAltOutlined />
                                        </IconButton> */}

                                    {/* </MenuItem> */}
                                    <Divider />
                                    <MenuItem className={this.props.classes.navItem}>
                                        {/* <IconButton>
                                            <PersonOutline />
                                        </IconButton> */}
                                        {/* <Link to="/profile" className={this.props.classes.navLink}>
                                            Profile
                  </Link> */}
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem className={this.props.classes.navItem}>
                                        {/* <IconButton>
                                            <ExitToApp />
                                        </IconButton> */}
                                        {/* <LogOutButton asLink className={this.props.classes.navLink} /> */}
                                    </MenuItem>
                                    <Divider />
                                </>
                            )}
                            {/* Always show this link since the about page is not protected */}
                        </MenuList>
                    </div>
                </Drawer>
            </>
        )
    }
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps)(withStyles(muiStyles)(TestNav));