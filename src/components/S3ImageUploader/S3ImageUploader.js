import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
//
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import plus_icon from '../S3ImageUploader/plus_icon.png';
//
// NOTE:
// This component uploads an image to AWS S3 and then saves the URL that is returned to the database.
// This component requires props to be passed to it in order to properly save to the database.
// Please provide the following props, using the same key and value:
// {
//   user_id,
//   program_id,
//   class_id,
// }

// function getModalStyle() {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const innerElement = (
  <div>
    <p>Select an Image</p>
  </div>
);

const dropStyle = {
  width: '80px',
  height: '80px',
  border: '1px solid black',
  backgroundColor: '#dddddd',
  backgroundImage: plus_icon.png,

};

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'row',

    width: 80,
    height: 80,
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    margin: '8px',
    overflow: 'auto',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
}));

function S3ImageUploader(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [modalStyle] = useState(getModalStyle);

  const [uploadFinished, setUploadFinished] = useState(false);
  const [filename, setFilename] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [image, setClearImage] = useState();

  const confirmUpload = () => {
    dispatch({
      type: 'POST_IMG_URL',
      payload: {
        imageUrl: fileUrl,
        program_id: props.programId,
        class_id: props.classId,
      },
    });
  };

  const cancelUpload = () => {
    console.log('Here is what we want to delete: ', filename);
    dispatch({
      type: 'DELETE_S3_IMAGE',
      payload: { key: filename },
    });
    setClearImage('');
  };

  const uploadOptions = {
    server: 'http://localhost:5000',
  };

  const handleFinishedUpload = (info) => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);
    setFilename(info.filename);
    setFileUrl(info.fileUrl);

    // Uncomment the code below and remove setUploadFinished(true) in order to enable automatic saving to database.

    setUploadFinished(true);

    // dispatch({
    //   type: 'POST_IMG_URL',
    //   payload: {
    //   imageUrl: fileUrl,
    //   user_id: props.user_id,
    //   program_id: props.program_id,
    //   class_id: props.class_id,
    // },
    // });
  };

  const s3Url = 'https://operisstorage.s3.amazonaws.com';

  return (

    <div className={classes.paper}>
      <DropzoneS3Uploader
        onFinish={handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        style={dropStyle}
        canCancel={true}
      />
      {uploadFinished && (
        <Box>
          <Button onClick={confirmUpload}>done</Button>{' '}
          <Button onClick={cancelUpload}>cancel</Button>
        </Box>
      )}

    </div>
  );
}

export default connect(mapStoreToProps)(S3ImageUploader);
