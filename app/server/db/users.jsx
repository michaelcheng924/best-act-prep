import mongoose from 'mongoose';

export const User = mongoose.model('User', {
    email: String,
    password: String,
    data: Object,
    passwordResetHash: String
});

export const AdminUser = mongoose.model('AdminUser', {
    email: String,
    password: String
});

export const LogEntry = mongoose.model('LogEntry', {
    date: { type: Date, default: Date.now },
    type: String,
    message: String,
    user: String
});
