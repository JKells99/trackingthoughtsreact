import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import axios from "axios";
import Thoughts from "./components/Thoughts";
import AddNew from "./components/AddNew";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";

function App() {
  const baseUrl = "http://localhost:8080/allthoughts";

  const [thoughts, setThoughts] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 

  const fetchThoughts = async () => {
    try {
      const response = await axios.get(baseUrl);
      setThoughts(response.data);
    } catch (error) {
      
      console.error("Error fetching thoughts:", error);
    }
  };

  const  handleLogin = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    fetchThoughts();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated && (
          <Route
            path="/thoughts"
            element={<Thoughts thoughts={thoughts} />}
          />
        )}

        {/* Route for adding new thought (protected by authentication) */}
        {isAuthenticated && (
          <Route
            path="/addNew"
            element={<AddNew />}
          />
        )}
        {/* <ProtectedRoute
          path="/addNew"
          element={<AddNew />}
          isAuthenticated={isAuthenticated}
        />
        <ProtectedRoute
          path="/thoughts"
          element={<Thoughts />}
          isAuthenticated={isAuthenticated}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
