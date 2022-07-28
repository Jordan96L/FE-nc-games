import "./App.css";
import Header from "./components/Header";
import ReviewList from "./components/ReviewList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleReview from "./components/SingleReview";
import CommentList from "./components/CommentList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<ReviewList />} />
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<SingleReview />} />
          <Route
            path="/reviews/:review_id/comments"
            element={<CommentList />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
