import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState(0);

  const exercises = [
    "squat", 
    "bench press", 
    "deadlift",
    "lunges",
  ];


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise", exercise);
    console.log("Weight", weight);
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select value={exercise} onChange={(e) => setExercise(e.target.value)}>
          <option value=""> Select an exercise </option>
          {exercises.map((ex) => (
            <option key={ex} value={ex}>{ex}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter weight in kgs"
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
        />
      </form>
    </div>
  );
}

export default App;
