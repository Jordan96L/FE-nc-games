import { UserContext } from "../contexts/User.js";
import { useContext } from "react";
import ChangeUser from "./ChangeUser";
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";

export default function Home() {
    const {user} = useContext(UserContext)
return (
    <div className="homepage">
        <div className="home-header">
        <h2>Welcome to NC games</h2>
        <p>{!user.username && <Link to="/login" id="homepage-link">Login</Link>}</p>
        <p><Link to="/reviews" id="homepage-link">Reviews</Link></p>  
        </div>  
    </div>
)}