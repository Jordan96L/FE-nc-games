import { UserContext } from "../contexts/User.js";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Nav from "./Nav.jsx";
import Home from "./Home.jsx";
import { useNavigate } from "react-router-dom";


export default function ChangeUser() {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)

const { user, setUser } = useContext(UserContext);

const copyOfUsers = [...users]

let navigate = useNavigate()

useEffect(() => {
    setIsLoading(true)
    axios.get('https://my-games-app1.herokuapp.com/api/users').then((res)=>{
        setUsers(res.data.users)
        setIsLoading(false)
    })
}, [])

return (
    <div>
      
      <Nav />
        <h3>Choose your profile:</h3>
      {isLoading ? "Loading..." : (
        <ul>
            {users.map((profile) => {
                const isMe = profile.username === user.username;
                return (
                    <li key={user.username} className="user-card">
            <h3>{profile.username}</h3>
            <img src={profile.avatar_url} alt={profile.username} className="user-avatar-home"/>
            <p><button
            disabled={user.username}
                  onClick={() => {
                    setUser(profile);
                    navigate("../reviews")
                  }}
                >
                  Select
                </button></p>
                    </li>
                )
            })}
        </ul>
      )}
    </div>
)
}