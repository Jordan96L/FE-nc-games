
export default function CommentCard({body, review_id, author}) {
    return (
        <div className="comment-card">
            <p>{author}: {body}</p>
        </div>
    )
    }