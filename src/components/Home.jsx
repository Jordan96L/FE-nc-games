import { UserContext } from "../contexts/User.js";
import { useContext } from "react";
import ChangeUser from "./ChangeUser";
import ReviewList from "./ReviewList";
import { Link } from "react-router-dom";

export default function Home() {
    const {user} = useContext(UserContext)
return (
    <div>
        <h2>Welcome to NC games</h2>
        <p>{!user.username && <Link to="/login">Login</Link>}</p>
        <p><Link to="/reviews">Reviews</Link></p>    
    </div>
)}