const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

var corsOptions = {
    origin: "http://localhost:8081"
};
  
app.use(cors(corsOptions));

// Set up the Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ppradeveloper@gmail.com',
    pass: 'PPRAApproved12@' // Use an App password if 2FA is enabled
  }
});

// POST route to send an email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: 'ppradeveloper@gmail.com',
    to,
    subject,
    text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to terabyte 404." });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
