import { UserContext } from "../contexts/User.js";
import { useContext } from "react";

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="header">
          <h5 id="github-link">Created by: <a href="https://github.com/Jordan96L">Jordan96L</a></h5>
          {user.username && (

<button
className="logout-button"
disabled={!user.username}
 onClick={() => {
   setUser({});
 }}
>
 Log Out
</button>
)}
            <h1 className="Header">NC Games</h1>
            {(user.username && <><h4>Welcome {user.username}</h4><img src={user.avatar_url} alt={user.username} className="user-avatar-header" /></>
            ) || (
        <h3>Please Log in</h3>
      )}  
      
        </div>
    )
}