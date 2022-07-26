import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import CommentCard from "./CommentCard";
import Nav from "./Nav";


export default function CommentList() {
const [comments, setComments] = useState([])
const {review_id} = useParams()
const [isOpen, setIsOpen] = useState(false)


useEffect(() => {
    axios.get(`https://my-games-app1.herokuapp.com/api/reviews/${review_id}/comments`).then((res) => {
        setComments(res.data.comments)
    })
},[review_id])

return (
    <div className="comment-list">
        <Nav />
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
                        <CommentCard body={comment.body} review_id={review_id}/>
                    </li>
                )
            })}
        </ul>
        </div>
      )}
        
    </div>
)
}
