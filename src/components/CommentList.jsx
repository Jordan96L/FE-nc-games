import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import CommentCard from "./CommentCard";
import { UserContext } from "../contexts/User.js";
import { useContext } from "react";

export default function CommentList() {
const [comments, setComments] = useState([])
const {review_id} = useParams()
const [isOpen, setIsOpen] = useState(false)
const [addComment, setAddComment] = useState('')
const [isLoading, setIsLoading] = useState(false)
const [err, setErr] = useState(null)
const [isCommentDeleted, setIsCommentDeleted] = useState(false)
const { user } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault()
  setIsLoading(true)
  axios.post(`https://nc-games-lt7s.onrender.com/api/reviews/${review_id}/comments`, {
      username: user.username,
      body: addComment
  }).then(() => {
      setAddComment('')
      setIsLoading(false)
  }).catch((err) => {
    setErr('Sorry something went wrong, could not delete comment')
  })
}

const showComments = () => {
  axios.get(`https://nc-games-lt7s.onrender.com/api/reviews/${review_id}/comments`).then((res) => {
    setComments(res.data.comments)
}).catch((err) => {
  setErr('Oops, Sorry something went wrong')
})

 }
useEffect(() => {
  showComments()
},[review_id, addComment])

return (
  <div className="comments">
      {err ? (<p>{err}</p>) : (

    <div className="comment-list">
         <button className="comment-button"
        onClick={() => {
          setIsOpen((currentOpenness) => !currentOpenness);
        }}
      >
        Show Comments
      </button>
      {isOpen && (
        <div>
            
<h3>Comments</h3>
{isCommentDeleted && <p>Comment was deleted</p>}
        <ul>
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <CommentCard body={comment.body} review_id={review_id} author={comment.author} showComments={showComments} comments={comments} setIsCommentDeleted={setIsCommentDeleted} comment_id={comment.comment_id} err={err}/>
                    </li>
                )
            })}
        </ul>
        <div className="add-comment-form">
        <p className="loading-message">
          {isLoading ? "Posting comment" : null}
        </p>
        <form onSubmit={handleSubmit}>
        <input 
        placeholder="Type comment here..."
        value={addComment}
        onChange={(e) => {
            setAddComment(e.target.value)
        }}
        />
        <p>{!user.username && <h4 className="login-message">Please login to post comment</h4>}<button 
        disabled={!user.username}
        type="submit">Submit</button></p>
        </form>
      
        </div>
        </div>
      )}
        </div>
        )}
    </div>
)
}