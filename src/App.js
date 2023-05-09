import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState(0);
  const [repetition, setRepetition] = useState(0);
  const [sets, setSets] = useState([{
    weight: 0,
    repetition: 0,
  }]);

  const exercises = [
    "squat", 
    "bench press", 
    "deadlift",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise", exercise);
    console.log("Weight", weight);
    console.log("Repetition", repetition);
    console.log("Sets", sets);
  }

  const handleAddSet = () => {
    setSets([...sets, { weight: 0, repetition: 0 }]);
  }

  const handleWeightChange = (index, value) => {
    // create a new array iterating through the sets array
    const updatedSet = sets.map((set, idx) => {
      if (idx === index) {
        return {
          ...set, weight: value,
        };
      } else {
        return set;
      }
    });
    
    // update the sets stae with the updatedSets array
    setSets(updatedSet);
  }
  
  const handleRepsChange = (index, value) => {
    const updatedSet = sets.map((set, idx) => {
      if (idx === index) {
        return {
          ...set, repetition: value,
        };
      } else {
        return set;
      }
    });

    setSets(updatedSet);
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select 
          value={exercise} 
          onChange={(e) => setExercise(e.target.value)}>
            <option value=""> Select an exercise </option>
              {exercises.map((ex) => (
            <option key={ex} value={ex}>{ex}</option>
            ))}
        </select>
        {sets.map((set, index) => (
          <div key={index}>
            <input 
              type="number"
              placeholder='Enter weight in kgs'
              value={set.weight}
              onChange={(e) => handleWeightChange(index, e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter repetitions"
              value={set.repetition}
              onChange={(e) => handleRepsChange(index, e.target.value)}
              min="1"
              max="100"
              step="1"
            />  
          </div>
        ))}
        {/* <input
          type="number"
          placeholder="Enter weight in kgs"
          value={weight} 
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter repetitions"
          value={repetition} 
          onChange={(e) => setRepetition(e.target.value)}
          min="1"
          max="100"
          step="1"
        /> */}
        {/* add addSet button here */}
        <button 
          type="button"
          onClick={handleAddSet}
        >Add Set</button>
        <button type="button">Remove Set</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;