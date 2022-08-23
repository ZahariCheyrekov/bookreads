import { useState } from 'react';

const Post = ({ post }) => {
    const [user, setUser] = useState();


    console.log(post)
    return (
        <article className="post">
            <article>
                <img alt="" />
            </article>
        </article>
    );
}

// bookId: "6304d5e555229f49913ce262"
// comments: []
// createdAt: "2022-08-23T14:08:30.765Z"
// creatorId: "112740407531197558387"
// likes: []
// review: []
// status: "created a book"
// __v: 0
// _id: "6304df5e29d45ddf620844ad"

export default Post;