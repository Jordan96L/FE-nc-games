

export default function CommentCard({body, review_id, author, err}) {
    return (
        <div className="comment-card">
          {err ? (<p>{err}</p>) : (
            <p>{author}: {body}</p>
          ) 
          }
        </div>
    )
    }