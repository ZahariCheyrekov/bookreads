import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    shelves: {
        read: [],
        currentlyReading: [],
        toRead: []
    }
});

const UserSchema = mongoose.model('UserSchema', userSchema);
export default UserSchema;