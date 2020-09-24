import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
//
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box } from '@material-ui/core';
import plus_icon from '../S3ImageUploader/plus_icon.png';

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
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

const dropStyle = {
  width: '80px',
  height: '80px',

  marginLeft: '15px !important',
  border: '1px solid black',
  borderRadius: '3px',
  backgroundColor: '#dddddd',
};

function S3ImageUploader(props) {
  const dispatch = useDispatch();

  const [uploadFinished, setUploadFinished] = useState(false);
  const [filename, setFilename] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const [image, setClearImage] = useState();

  // const confirmUpload = () => {
  //   dispatch({
  //     type: 'POST_IMG_URL',
  //     payload: {
  //       imageUrl: fileUrl,
  //       program_id: props.programId,
  //       class_id: props.classId,
  //     },
  //   });
  // };

  // const cancelUpload = () => {
  //   dispatch({
  //     type: 'DELETE_S3_IMAGE',
  //     payload: { key: filename },
  //   });
  //   setClearImage('');
  // };

  const uploadOptions = {
    server: 'http://localhost:5000',
    // replace with Heroku app URL for depplyment
  };

  const handleFinishedUpload = (info) => {
    console.log('File uploaded with filename', info.filename);
    console.log('Access it on s3 at', info.fileUrl);
    setFilename(info.filename);
    setFileUrl(info.fileUrl);

    // Comment out the code below and uncomment setUploadFinished(true) in order to disable automatic saving to database.

    // setUploadFinished(true);

    dispatch({
      type: 'POST_IMG_URL',
      payload: {
        imageUrl: info.fileUrl,
        s3_key: info.filename,
        program_id: props.programId,
        class_id: props.classId,
      },
    });
  };

  const s3Url = 'https://operisstorage.s3.amazonaws.com';

  return (
    <Box p={1}>
      <AddAPhotoIcon fontSize="small" />
      <DropzoneS3Uploader
        position="center"
        onFinish={handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
        style={dropStyle}
        canCancel={true}
      />
    </Box>
  );
}

export default connect(mapStoreToProps)(S3ImageUploader);
