import { UserContext } from "../contexts/User";
import { useEffect, useState, useContext } from "react";
import axios from "axios";


export default function ChangeUser() {
const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)

const { user, setUser } = useContext(UserContext);



useEffect(() => {
    setIsLoading(true)
    axios.get('https://my-games-app1.herokuapp.com/api/users').then((res)=>{
        setUsers(res.data.users)
        setIsLoading(false)
    })
}, [])

return (
    <div>
        <h3>Choose your profile:</h3>
      {isLoading ? "Loading..." : (
        <ul>
            {users.map((profile) => {
                return (
                    <li key={profile.username}>
            <h3>{profile.username}</h3>
            <img src={profile.avatar_url} alt={profile.username} className="user-avatar-home"/>
            <p><button
            disabled={user.username}
                  onClick={() => {
                    setUser(profile);
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