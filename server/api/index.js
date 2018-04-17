const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const mailgun = require('mailgun-js')({ apiKey: 'key-8f4bfd53c20e48900b98c956c47ef07c', domain: 'bestactprep.co' });

const { User, AdminUser } = require('../db/schemas');
const {
    MAILGUN_WELCOME_EMAIL_SUBJECT,
    MAILGUN_WELCOME_EMAIL_TEXT
} = require('../constants');

function api(app) {
  app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (err, result) => {
      if (!result) {
        res.send({
          message: 'Email not found. Have you purchased the course?'
        });
        return;
      }

      bcrypt.compare(password, result.password, (err, isMatch) => {
        if (!isMatch) {
          res.send({
            message: 'Incorrect password. If you forgot your password, simply send an email to cheng.c.mike@gmail.com!'
          });
          return;
        } else {
          res.send({
            email,
            token: jwt.encode(email, 'secret')
          });
          return;
        }
      });
    });
  });

  app.post('/api/authenticate', (req, res) => {
      const token = req.body.token;
      const email = jwt.decode(token, 'secret');

      User.findOne({ email }, (err, user) => {
          if (user) {
              res.send({ email });
              return;
          } else {
              res.send({ authenticated: false });
              return;
          }
      });
  });

  app.post('/api/buycourse', (req, res) => {
    const email = req.body.email;

    const MAILGUN_DATA = {
        from: 'COURSE BOUGHT <dev@bestactprep.co>',
        to: 'cheng.c.mike@gmail.com',
        subject: `COURSE BOUGHT by ${email}`,
        text: `Course bought by ${email}`
    };
    
    mailgun.messages().send(MAILGUN_DATA);

    User.findOne({ email }, (err, result) => {
        bcrypt.hash('hungrykoala', null, null, (err, hash) => {
          const user = new User({
              email,
              password: hash
          });

          user.save((err, result) => {
              if (err) return handleError(res, errorMessage, err, email);

              const MAILGUN_DATA = {
                  from: 'Best ACT Prep Welcome Team <welcome@bestactprep.co>',
                  to: email,
                  subject: MAILGUN_WELCOME_EMAIL_SUBJECT,
                  text: MAILGUN_WELCOME_EMAIL_TEXT(email)
              };
              mailgun.messages().send(MAILGUN_DATA);

              // Log in the user and send token to persist login
              const token = jwt.encode(email, 'secret');

              res.send({
                  email,
                  token
              });
          });
      });
    });
  });
}

module.exports = {
  api
};
