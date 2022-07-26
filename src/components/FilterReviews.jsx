import { Link } from "react-router-dom";
import { useState } from "react";

export default function FilterReviews() {
const [isOpen, setIsOpen] = useState(false)
return (
    <div className="filter-links">
        <button className="category-button"
        onClick={() => {
          setIsOpen((currentOpenness) => !currentOpenness);
        }}
      >
        <h3>Filter Reviews By Category:</h3>
      </button>
      {isOpen && (
        <div>
<nav className="filter-links">
        <p><Link to="/">All</Link></p>
        <p><Link to="/reviews?category=dexterity">Dexterity</Link></p>
        <p><Link to="/reviews?category=hidden-roles">Hidden Roles</Link></p>
        <p><Link to="/reviews?category=strategy">Strategy</Link></p>
        <p><Link to="/reviews?category=deck-building">Deck Building</Link></p>
        <p><Link to="/reviews?category=engine-building">Engine Building</Link></p>
        <p><Link to="/reviews?category=push-your-luck">Push Your Luck</Link></p>
        <p><Link to="/reviews?category=roll-and-write">Roll and Write</Link></p>
        </nav>
        </div>
      )}
       
    </div>
)
}