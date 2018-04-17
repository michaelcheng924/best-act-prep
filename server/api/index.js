const { User, AdminUser } = require('../db/schemas');

function api(app) {
    app.get('/api', function (req, res) {
      res.set('Content-Type', 'application/json');

      User.find({}, function(err, results) {
        res.send({ results });
      });
    });
}

module.exports = {
    api
};
