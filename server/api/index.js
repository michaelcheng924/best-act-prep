const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');

const { User, AdminUser } = require('../db/schemas');

function api(app) {
  app.post('/api/login', function (req, res) {
    const { email, password } = req.body;

    User.findOne({ email }, function(err, result) {
      if (!result) {
        res.send({
          message: 'Email not found. Have you purchased the course?'
        });
        return;
      }

      bcrypt.compare(password, result.password, function(err, isMatch) {
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
}

module.exports = {
  api
};
