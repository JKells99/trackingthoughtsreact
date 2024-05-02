import React from "react";
import { Typography, Link, makeStyles } from "@mui/material";
import "./home/home.css"



// Define styles for the component


const Home = () => {
 

  return (
    <div className="homeWrapper">
    <img
      src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Add your nature image URL here
      alt="Nature"
    />
    <div className="textContainer">
      <Typography variant="h4">
        Welcome to the Thought Tracker App!
      </Typography>
      <Typography variant="body1">
        This app is designed to help you track your thoughts for therapeutic
        purposes. I've personally found great success using this tool, and I'm
        building it for my own use. Hopefully, it will be useful for you too!
      </Typography>
      <Typography variant="body1">
        Here are some useful mental health resources:
        <ul>
          <li>
            <Link href="https://www.mentalhealth.gov/">MentalHealth.gov</Link>
          </li>
          <li>
            <Link href="https://www.nami.org/">National Alliance on Mental Illness (NAMI)</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      </Typography>
    </div>
  </div>
  );
};

export default Home;