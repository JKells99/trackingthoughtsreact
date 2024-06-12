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
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
 

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
    const token = localStorage.getItem("authToken");

    if (token) {
      console.log("Token found in localStorage:", token);

      // Send a request to the server to verify the token's validity
      axios.post("http://localhost:8080/auth/verify", { token })
        .then((response) => {
          console.log("Token verification response:", response);

          // If token is valid, set isAuthenticated to true
          if (response.status === 200) {
            console.log("Token is valid.");
            setIsAuthenticated(true);
          } else {
            console.log("Token verification failed with status:", response.status);
            setIsAuthenticated(false);
            localStorage.removeItem("authToken"); // Optionally remove invalid token
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          if (error.response && error.response.status === 401) {
            console.log("Token is invalid or expired.");
            setIsAuthenticated(false);
            localStorage.removeItem("authToken"); // Remove invalid token
          } else {
            // Handle other potential errors like network issues
            console.log("Unexpected error during token verification:", error);
          }
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false after verification attempt
        });
    } else {
      console.log("No token found in localStorage.");
      setIsLoading(false); // No token to verify, end loading
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchThoughts(); // Fetch thoughts only if authenticated
    }
  }, [isAuthenticated]);


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
