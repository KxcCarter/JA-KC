import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// CUSTOM COMPONENTS
import JALandingPageLayout from '../JALandingPageLayout/JALandingPageLayout';
//import './ProductHero.css';

const backgroundImage =
    'https://greaterkansascity.ja.org/dA/6a403e9530/banner/ja-header-bg-fullscreen-cta_reduced.jpg/2400w/jpeg/80';

const styles = (theme) => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9',
        backgroundPosition: 'center',
    },
    button: {
        backgroundColor: '#008751',
        color: 'white',
        minWidth: 200,
        fontWeight: 'lighter',
        fontFamily: 'Montserrat', 
        textTransform: 'none',
    },
    text: {
        fontWeight: 'lighter',
        fontFamily: 'Montserrat', 
        textTransform: 'none',
    },
    h5: {
        fontWeight: 'lighter',
        fontFamily: 'Montserrat', 
        textTransform: 'none',
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
    more: {
        marginTop: theme.spacing(2),
    },
});

function JALandingPage(props) {
    const { classes } = props;
    return (
        <>
            <section class="section static">
                <JALandingPageLayout backgroundClassName={classes.background}>
                    <br></br>
                    <Typography className={classes.text} color="inherit" align="center" variant="h2" >
                        Junior Achievement of Greater Kansas City
                    </Typography>
                    <Typography className={classes.text} color="inherit" align="center" variant="h5" className={classes.h5}>
                        Administrative Registration
                        
                    </Typography>
                    <Link className="landinglinks" to="/registration">
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            component="a"
                            push="/registration"
                        >
                            Register
                        </Button>
                    </Link >
                </JALandingPageLayout>
            </section>
        </>
    );
};

JALandingPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JALandingPage);