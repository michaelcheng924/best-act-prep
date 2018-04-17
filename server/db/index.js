const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_zc0m11vw:jeqc82moetis50isqpjs0d6gu2@ds255797.mlab.com:55797/heroku_zc0m11vw');
