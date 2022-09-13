import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    bookCoverUrl: {
        type: String,
        required: true
    },
    datePublished: {
        type: Date,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const BookSchema = mongoose.model('BookSchema', bookSchema);
export default BookSchema;