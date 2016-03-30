import mongoose from 'mongoose';

export const User = mongoose.model('User', {
    email: String,
    password: String,
    data: Object
});

export const AdminUser = mongoose.model('AdminUser', {
    email: String,
    password: String
});
