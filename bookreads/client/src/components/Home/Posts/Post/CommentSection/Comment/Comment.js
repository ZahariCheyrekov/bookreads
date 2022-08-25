const Comment = ({ comment }) => {
    return (
        <>
            <h5>
                {comment.creatorName}
            </h5>
            {comment.comment.map((paragraph, index) =>
                <p key={index}>
                    {paragraph}
                </p>
            )}
        </>
    );
}

export default Comment;