import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState(0);
  const [repetition, setRepetition] = useState(0);
  const [exSets, setExSets] = useState([
    {dynoweight:0,dynorep:0}
  ]);

  const exercises = [
    "squat", 
    "bench press", 
    "deadlift",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Exercise", exercise);
    // console.log("Weight", weight);
    // console.log("Repetition", repetition);
    //console.log("DynoWeight", dynoWeight);
    //console.log("DynoRep",dynoRep);
  }

  const handleAddSet = (index,event) => {
    // add the current weight and repetition values as a new set to the sets state
    let set = [...exSets];
    set[index][event.target.name] = event.target.value;
    // Reset weight and rep input to initial values
    setExSets(set);
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
        {exSets.map((input,index) => {
          return (
            <div key={index}>
              <input
                type="number"
                dynoWeight='weight'
                placeholder='Weight'
                value={input.dynoweight}
                min="0"
                onChange={event => handleAddSet(index, event)}
              />
              <input
                type="number"
                dynoRep='rep'
                placeholder='Repetition'
                value={input.dynorep}
                min="1"
                max="100"
                step="1"
                onChange={event => handleAddSet(index, event)}
              />
            </div>
          )
          })}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;