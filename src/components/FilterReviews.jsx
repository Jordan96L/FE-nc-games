import { Link } from "react-router-dom";

export default function FilterReviews() {

return (
    <div className="filter-links">
        <h3>Filter Reviews By Category:</h3>
        <nav className="filter-links">
        <p><Link to="/">All</Link></p>
        <p><Link to="/reviews/dexterity">Dexterity</Link></p>
        <p><Link to="/reviews/hidden-roles">Hidden Roles</Link></p>
        <p><Link to="/reviews/strategy">Strategy</Link></p>
        <p><Link to="/reviews/deck-building">Deck Building</Link></p>
        <p><Link to="/reviews/engine-building">Engine Building</Link></p>
        <p><Link to="/reviews/push-your-luck">Push Your Luck</Link></p>
        <p><Link to="/reviews/roll-and-write">Roll and Write</Link></p>
        </nav>
    </div>
)
}