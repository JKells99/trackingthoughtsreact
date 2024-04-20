import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import {  useState } from "react";

import React from "react";


const AddNew = () => {

    const [formData, setFormData] = useState({
        timeOfDay: '',
        currentSituation: '',
        mood: '',
        moodIntensity: '',
        thinkingErrorType: '',
       


      });
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          await axios.post("http://localhost:8080/allthoughts/post", formData);
          setFormData({
            timeOfDay: '',
            currentSituation: '',
            mood: '',
            moodIntensity: '',
            thinkingErrorType: '',
          })
          console.log('Form data submitted:', formData);
          // Optionally, you can perform additional actions after successful form submission
        } catch (error) {
          console.error('Error submitting form data:', error);
          // Optionally, you can handle errors here
        }
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    
  return (
    <form onSubmit={handleSubmit}>
      <TextField label="timeOfDay" variant="outlined" fullWidth margin="normal" name='timeOfDay' value={formData.timeOfDay} required   onChange={handleChange}/>

      <TextField label="currentSituation" variant="outlined" fullWidth margin="normal" name='currentSituation' value={formData.currentSituation} required  onChange={handleChange}/>

      <TextField label="mood" variant="outlined" fullWidth margin="normal" name='mood' value={formData.mood}  required  onChange={handleChange}/>

      <TextField label="moodIntensity" variant="outlined" fullWidth margin="normal" name='moodIntensity' value={formData.moodIntensity} required  onChange={handleChange}/>

      <TextField label="thinkingErrorType" variant="outlined" fullWidth margin="normal" name='thinkingErrorType' value={formData.thinkingErrorType}  required  onChange={handleChange}/>

      <TextField label="automaticThought" variant="outlined" fullWidth margin="normal" name='automaticThought' value={formData.automaticThought}  required  onChange={handleChange}/>


      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddNew;
