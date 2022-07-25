export default function ReviewCard({review_id, title, category, owner, votes}) {
    return (
        <div className="review_card">
            <h3>{title}</h3>
            <p>Owner: {owner}</p>
            <p>Review ID: {review_id}</p>
            <p>Category: {category}</p>
            <p>Votes: {votes}</p>
        </div>
    )
}