import mongoose from 'mongoose';
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/best-act-prep');

const App = mongoose.model('App', {
    id: Number,
    showLogin: Boolean
});

module.exports = {
    App
};
