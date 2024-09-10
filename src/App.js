import React from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <h1>JSONPlaceholder Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
