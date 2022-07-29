import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FilterReviews() {
  const navigate = useNavigate()
const [isOpen, setIsOpen] = useState(false)

function handleChange(event) {
if (event.target.value === "") {
  navigate("/reviews")
} else {
  navigate(`/reviews?category=${event.target.value}`)
}
}

return (
    <div className="filter-links">
   
         <label htmlFor="filter-category">Category:</label>

      <select onChange={handleChange} id="filter-category">
        <option value="">All</option>
        <option value="dexterity">Dexterity</option>
        <option value="hidden-roles">Hidden Roles</option>
        <option value="strategy">Strategy</option>
        <option value="deck-building">Deck Building</option>
        <option value="engine-building">Engine Building</option>
        <option value="push-your-luck">Push Your Luck</option>
        <option value="roll-and-write">Roll and Write</option>
        </select>
    </div>
)
}