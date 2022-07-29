import axios from "axios"
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import FilterReviews from "./FilterReviews";
import { Link, useLocation } from 'react-router-dom';
import SortBy from "./SortBy";


export default function ReviewList() {
const [reviews, setReviews] = useState([])

const search = useLocation().search;
const category = new URLSearchParams(search).get('category')

const [sortColumn, setSortColumn] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [err, setErr] = useState(null)


useEffect(() => {
    axios
    .get(`https://my-games-app1.herokuapp.com/api/reviews`, {
      params: {
        category: category,
        sort_by: sortColumn,
        order: sortOrder,
      },
    })
    .then((res) => {
      setReviews(res.data.reviews);
    }).catch((err) => {
      setErr('Oops, Something went wrong')
    })
}, [category, sortColumn, sortOrder]);
  

    return (
      <div>
{err ? (
  <p>{err}</p>
) : (
        <><div className="reviews">
              <div className="home-link-background">
                <Link to="/" className="home-link">Home</Link>
              </div>
              <h2>Reviews</h2>
              <FilterReviews />
              <p><SortBy setSortColumn={setSortColumn} setSortOrder={setSortOrder} /></p>
            </div><div>
                <ul>
                  {reviews.map((review) => {
                    return (
                      <li key={review.review_id}>
                        <ReviewCard review_id={review.review_id} title={review.title} category={review.category} owner={review.owner} votes={review.votes} />
                      </li>
                    );
                  })}
                </ul>
              </div></>
)}
        </div>
    )
}