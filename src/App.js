import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import CommentList from "./components/CommentList";
import { UserContext } from "./contexts/User.js";
import { useState } from "react";
import ChangeUser from "./components/ChangeUser";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState({
    username: "",
    name: "",
    avatar_url: "",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          {(!user.username && <Home />) || (
            <Routes>
              <Route path="/" element={<ReviewList />} />
              <Route path="/reviews" element={<ReviewList />} />
              <Route path="/reviews/:review_id" element={<SingleReview />} />
              <Route
                path="/reviews/:review_id/comments"
                element={<CommentList />}
              />
            </Routes>
          )}
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
