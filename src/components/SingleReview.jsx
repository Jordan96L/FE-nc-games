import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";
import CommentList from "./CommentList"
import userEvent from "@testing-library/user-event";
import { UserContext } from "../contexts/User";



export default function SingleReview() {
const {review_id} = useParams()
const [review, setReview] = useState({})
const [voteStatus, setVoteStatus] = useState(0);
const [err, setErr] = useState(null);
const {user} = useContext(UserContext)


useEffect(() => {

function showReview(){
    axios.get(`https://my-games-app1.herokuapp.com/api/reviews/${+review_id}`)
    .then((res) => {
        setReview(res.data.review)
    }).catch((err) => {
      setErr('404: Review not found')
    })
}
    showReview()
}, [review_id])

return (
  <div>
  {err ? (
    <><p>{err}</p><p><Link to="/reviews" id="review-link">Back to reviews</Link></p></>
  ) : (
    <div className="single-review">
        <Nav />
        <h3>{review.title}</h3>
        <img src={review.review_img_url} alt={review.title} className="single-review-image"/>
        <p>
        Votes: {review.votes}
        </p>
        Category: {review.category}
        <p>
        Designer: {review.designer}
        </p>
        {review.review_body}
        <p>
        <button className="upvote-button"
        disabled={voteStatus || !user.username}
        onClick={(e) => {
          setVoteStatus(1);
          const upvotedReview = { ...review };
          upvotedReview.votes = upvotedReview.votes + 1;
          setReview(upvotedReview);
          setErr(null);
          axios
            .patch(
              `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
              { inc_votes: 1 }
            )
            .catch((err) => {
              setReview(review);
              setErr("Something went wrong, please try again");
            });
        }}
      >
       👍
      </button>
      <button className="downvote-button"
        disabled={voteStatus || !user.username}
        onClick={(e) => {
          setVoteStatus(-1);
          const upvotedReview = { ...review };
          upvotedReview.votes = upvotedReview.votes - 1;
          setReview(upvotedReview);
          axios
            .patch(
              `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
              { inc_votes: -1 }
            )
            .catch((err) => {
              setReview(review);
              setErr("Something went wrong, please try again");
            });
        }}
      >
        👎
      </button>
      <button className="reset-button"
        disabled={!voteStatus || !user.username}
        onClick={(e) => {
          setVoteStatus(0);
          const upvotedReview = { ...review };
          upvotedReview.votes = upvotedReview.votes - voteStatus;
          setReview(upvotedReview);
          axios
            .patch(
              `https://tr-games-api.herokuapp.com/api/reviews/${review_id}`,
              { inc_votes: -voteStatus }
            )
            .catch((err) => {
              setReview(review);
              setErr("Something went wrong, please try again");
            });
        }}
      >
        Reset
      </button>
      
        </p>
        <p><CommentList /></p>
        <h5>
            Created By: {review.owner} - {Date(review.created_at)}
        </h5>
        </div>
        )}
    </div>
)
}