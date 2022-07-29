import { Link } from "react-router-dom";

export default function ReviewCard({review_id, title, category, owner, votes}) {
    const URL_String = `/reviews/${review_id}`;
    return (
        <div className="review-card">
            <h3>{title}</h3>
            <p>Owner: {owner}</p>
            <p>Review ID: {review_id}</p>
            <p>Category: {category}</p>
            <p>Votes: {votes}</p>
            <p><Link to={URL_String} className="view-review-link">View</Link></p>
        </div>
    )
}