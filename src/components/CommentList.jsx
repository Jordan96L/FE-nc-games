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
const { user } = useContext(UserContext);

const handleSubmit = (e) => {
  e.preventDefault()
  setIsLoading(true)
  axios.post(`https://my-games-app1.herokuapp.com/api/reviews/${review_id}/comments`, {
      username: user.username,
      body: addComment
  }).then(() => {
      setAddComment('')
      setIsLoading(false)
  })
}

useEffect(() => {
  axios.get(`https://my-games-app1.herokuapp.com/api/reviews/${review_id}/comments`).then((res) => {
    setComments(res.data.comments)
})
},[review_id, addComment])

return (
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
        <ul>
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <CommentCard body={comment.body} review_id={review_id} author={comment.author}/>
                    </li>
                )
            })}
        </ul>
        <div className="add-comment-form">
        <p className="loading-message">
          {isLoading ? "Posting comment" : null}
        </p>
        <form onSubmit={handleSubmit}>
        <textarea 
        value={addComment}
        onChange={(e) => {
            setAddComment(e.target.value)
        }}
        />
        <p><button 
        disabled={!user.username}
        type="submit">Submit</button></p>
        </form>
      
        </div>
        </div>
      )}
        
    </div>
)
}