import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    bookId: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    spoilers: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    reviewContent: {
        type: Array
    },
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    }
});

const ReviewSchema = mongoose.model('ReviewSchema', reviewSchema);
export default ReviewSchema;