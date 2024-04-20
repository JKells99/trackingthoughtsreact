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
        <Card>
          <CardContent>
            <Typography>ID: {thought.id}</Typography>

            <Typography>Time of Day: {thought.timeOfDay}</Typography>

            <Typography>
              Current Situation: {thought.currentSituation}
            </Typography>

            <Typography>Mood:{thought.mood}</Typography>

            <Typography> Mood Intensity:{thought.moodIntensity}</Typography>

            <Typography>
              Thinking Error Type:{thought.thinkingErrorType}
            </Typography>

            <Typography>
              Automatic Thought:{thought.automaticThought}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>


  );
};

export default Thoughts;
