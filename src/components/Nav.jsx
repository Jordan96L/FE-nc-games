import userEvent from "@testing-library/user-event"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/User"
import { useContext } from "react"

export default function Nav() {
    const {user} = useContext(UserContext)
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <p>{!user.username && <Link to="/login">Login</Link>}</p>
            <p><Link to="/reviews">Reviews</Link></p>
            
        </div>
    )
}