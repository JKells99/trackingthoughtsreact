import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Thoughts from "./components/Thoughts";
import AddNew from "./components/AddNew";
import Home from "./components/Home";

function App() {
  const baseUrl = "http://localhost:8080/allthoughts";

  const [thoughts, setThoughts] = useState();

  useEffect(() => {
    const fetchThoughts = async () => {
      try {
        const response = await axios.get(baseUrl);
        setThoughts(response.data);
      } catch (error) {
        // Handle error if needed
        console.error("Error fetching thoughts:", error);
      }
    };

    fetchThoughts();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>

        <Route
          path="/thoughts"
          element={<Thoughts thoughts={thoughts} />}
        ></Route>

        <Route
          path="/addNew"
          element={<AddNew />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
