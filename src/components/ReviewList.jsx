import axios from "axios"
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { useParams } from 'react-router-dom'
import FilterReviews from "./FilterReviews";

export default function ReviewList() {
const [reviews, setReviews] = useState([])
const { category } = useParams()

useEffect(() => {

    let URL_String = "https://my-games-app1.herokuapp.com/api/reviews"
    if (category) {
        URL_String += `?category=${category}`;
      }

      axios.get(URL_String).then((response) => {
          setReviews(response.data.reviews)
      })
    }, [category])
    console.log(category)

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            <FilterReviews />
            <ul>
                {reviews.map((review) =>{
                return (
                    <li key={reviews.review_id}>
                        <ReviewCard review_id={review.review_id} title={review.title} category={review.category} owner={review.owner} votes={review.votes} />
                    </li>
                )
                })}
            </ul>
        </div>
    )
}