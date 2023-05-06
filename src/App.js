import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [exercise, setExercise] = useState('');
  
  const exercises = [
    "squat", 
    "bench press", 
    "deadlift",
    "lunges",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise", exercise);
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
      </form>
    </div>
  );
}

export default App;
