import { UserContext } from "../contexts/User.js";
import { useContext } from "react";

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    return (
        <div className="header">
            <h1 className="Header">NC Games</h1>
            {(user.username && <><h4>Welcome {user.username}</h4><img src={user.avatar_url} alt={user.username} className="user-avatar-header" /></>
            ) || (
        <h3>Please Log in</h3>
      )}  
      
       <button
       className="logout-button"
       disabled={!user.username}
        onClick={() => {
          setUser({});
        }}
      >
        Log Out
      </button>
        </div>
    )
}