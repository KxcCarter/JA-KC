import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Button,
  Modal,
  TextField,
  Fab,
  Box,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import MobileReportForm from '../content/MobileReportForm/MobileReportForm';
import S3ImageUploader from '../S3ImageUploader/S3ImageUploader';
import { CenterFocusStrong } from '@material-ui/icons';

function VolunteerClassesModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#008751',
    width: 300,
    height: 700,
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    overflow: 'auto',
  },
  box: {
    marginLeft: '15%',
    marginRight: '15%',
    overflow: 'auto',
    alignContent: 'center',
    backgroundColor: '#008751',

  },
  root: {
    // backgroundColor: theme.palette.success.main,
    backgroundColor: 'white',
    margin: '10px',
  },
}));

function VolunteerClassesModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(VolunteerClassesModalStyle);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('');

  const {
    store: { projectDetails },
  } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <MobileReportForm classId={props.classId} />

      <Box p={3} className={classes.box}>



        <S3ImageUploader classId={props.classId} programId={props.programId} />
        <S3ImageUploader classId={props.classId} programId={props.programId} />
        <S3ImageUploader classId={props.classId} programId={props.programId} />
      </Box>
      <Box p={3} display="inline">
        <Button
          variant="outlined"
          size="large"
          className={classes.root}
          onClick={handleSubmit}
        >
          Upload Images
        </Button>
      </Box>
      <Box p={3} display="inline">
        <Button variant="outlined" size="large" className={classes.root} onClick={handleClose}>
          Cancel
        </Button>
      </Box>
    </div>
  );

  return (
    <>
      <InfoIcon
        className="InfoIcon"
        onClick={open ? handleClose : handleOpen}
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        {body}
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(VolunteerClassesModal);
