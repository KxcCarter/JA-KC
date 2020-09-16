const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juniorachievement.kc@gmail.com',
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

router.post('/inviteAdmin', async (req, res) => {
  const mailer = req.body;

  const mailOptions = {
    from: `"Junior Achievement Admin" juniorachievement.kc@gmail.com`,
    to: mailer.toEmail,
    subject: mailer.subject,
    text: mailer.message,
    html: '<b>' + mailer.message + '</b>',
  };
  try {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
      res.sendStatus(200);
    });
  } catch (err) {
    console.log('There was an error. ', err);
    res.sendStatus(500);
  }
});

module.exports = router;
