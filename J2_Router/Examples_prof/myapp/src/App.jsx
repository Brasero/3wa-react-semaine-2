import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Log from "./Log";
import Nav from "./Nav";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="log" element={<Log />} />
        <Route path="post/:id" element={<Post />} />
        <Route path="/posts/*" element={<p>Je suis une sous route</p>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
