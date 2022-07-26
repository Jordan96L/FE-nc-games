import axios from "axios";
import { UserContext } from "../contexts/User";
import { useContext } from "react";


export default function CommentCard({body, review_id, author, showComments, setIsCommentDeleted, comment_id, err}) {
const { user } = useContext(UserContext);

    const loggedIn = user.username === author;


    return (
        <div className="comment-card">
          {err ? (<p>{err}</p>) : (
            <p>{author}: {body}</p>
          ) 
          }
           {loggedIn && (<button
        onClick={() => {
          setIsCommentDeleted(true);
          axios
            .delete(
              `https://my-games-app1.herokuapp.com/api/comments/${comment_id}`
            )
            .then(() => {
              showComments();
            });
        }}
      >
        Remove Comment
      </button>)
}
        </div>
    )}
    