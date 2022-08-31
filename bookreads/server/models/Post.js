import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creatorId: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    review: {
        type: Array,
    },
    rating: {
        type: Number
    },
    spoilers: {
        type: Boolean
    },
    postBookData: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        required: true
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

const PostSchema = mongoose.model('PostSchema', postSchema);
export default PostSchema;