import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Thoughts = ({ thoughts }) => {
  if (!thoughts || thoughts.length === 0) {
    return <div>No thoughts to display</div>;
  }
  return (
    <div>
      <h1>List Of Thoughts:</h1>
      {thoughts.map((thought, index) => (
         <Card key={index} variant="outlined" className="thought-card">
         <CardContent>
           <Typography variant="h4" className="thought-item">
           <strong>Time Of Day:</strong> {thought.timeOfDay}
           </Typography>

           <Typography variant="h6" className="thought-item">
           <strong>Current Situation:</strong> {thought.currentSituation}
           </Typography>

           <Typography variant="h6" className="thought-item">
             <strong>Mood:</strong> {thought.mood}
           </Typography>

           <Typography variant="h6" className="thought-item">
           <strong>Mood Intensity:</strong> {thought.moodIntensity}
           </Typography>

           <Typography variant="h6" className="thought-item">
           <strong>Thinking Error Type:</strong> {thought.thinkingErrorType}
           </Typography>

           <Typography variant="h6" className="thought-item">
           <strong>Automatic Thought:</strong> {thought.automaticThought}
           </Typography>
         </CardContent>
       </Card>
      ))}
    </div>


  );
};

export default Thoughts;
