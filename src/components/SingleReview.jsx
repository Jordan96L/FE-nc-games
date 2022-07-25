import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav";


export default function SingleReview() {
const {review_id} = useParams()
const [review, setReview] = useState({})

useEffect(() => {
    axios.get(`https://my-games-app1.herokuapp.com/api/reviews/${+review_id}`)
    .then((res) => {
        setReview(res.data.review)
    })
}, [review_id])

return (
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
        <h5>
            Created By: {review.owner} - {Date(review.created_at)}
        </h5>
    </div>
)
}