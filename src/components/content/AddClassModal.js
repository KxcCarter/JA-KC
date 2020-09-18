// import React, { useState, useEffect } from 'react';
// import { connect, useDispatch } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';
// import swal from 'sweetalert';
// import AddClassModalTable from './AddClassModalTable';
// // Basic functional component structure for React with default state
// // value setup. When making a new component be sure to replace the
// // component name TemplateFunction with the name for the new component.
// function AddClassModal(props) {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch({
//       type: 'FETCH_PROGRAMS',
//     });
//   }, [dispatch]);
//   // const programData = props.store.programsReducer.map((item, index) => {
//   //     return { title: item.title, sesssion: item.sessions, program_id: item.id };
//   // });
//   const [heading, setHeading] = useState('Functional Component');
//   const addClass = () => {
//     swal({
//       title: <AddClassModalTable />,
//       buttons: true,
//       dangerMode: true,
//     }).then((willAssign) => {
//       if (willAssign) {
//         return <h1>ASSIGNED YEAH BOY</h1>;
//         swal('Great!  Class has been assigned', {
//           icon: 'success',
//         });
//       } else {
//         swal('No Class has been assigned');
//       }
//     });
//   };
//   return (
//     <div>
//       <button onClick={addClass}>{alert}ADD</button>
//     </div>
//   );
// }
// export default connect(mapStoreToProps)(AddClassModal);

import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Modal, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddClassModalTable from './AddClassModalTable';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    height: '90%',
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
  root: {
    backgroundColor: theme.palette.success.main,
  },
}));

function AddClassModal(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState('');

  useEffect(() => {
    dispatch({
      type: 'FETCH_PROGRAMS',
    });
    dispatch({
      type: 'GET_SCHOOL_LIST',
    });
  }, [dispatch]);

  const programData = props.store.programsReducer.map((item, index) => {
    return { title: item.title, sesssion: item.sessions, program_id: item.id };
  });

  //   const {
  //     store: { projectDetails },
  //   } = props;

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box p={3} display="inline" overflow="hidden">
        <Typography
          variant="h5"
          id="simple-modal-title"
          align="center"
          color="primary"
        >
          Select a School and Class to assign to Volunteer
        </Typography>

        <AddClassModalTable programs={props.store.programsReducer} {...props} />
      </Box>

      <Box p={3} display="inline">
        <Button variant="outlined" size="small" onClick={handleClose}>
          cancel
        </Button>
      </Box>
    </div>
  );

  return (
    <>
      <Button
        size="small"
        className={classes.root}
        onClick={open ? handleClose : handleOpen}
      >
        <AddIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
      >
        {body}
        {/* <AddClassModalTable programs={props.store.programsReducer} /> */}
      </Modal>
    </>
  );
}

export default connect(mapStoreToProps)(AddClassModal);
