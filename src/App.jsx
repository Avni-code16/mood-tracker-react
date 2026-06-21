import { useState } from 'react';
import styles from '/App.module.css';

function App(){
  const[selectedMood, setSelectedMood] = useState('');
  const[note, setNote] = useState('');
  return(
    <div className="app-container">
    <h1> How are you feeling today? </h1>
    <p> Current Selection :{selectedMood} </p>
    <div className="mood-buttons">
      <button onClick={()=> setSelectedMood('😊')}> 😊 Happy</button>
      <button onClick ={() => setSelectedMood('😐')}> 😐 Neutral </button>
      <button onClick ={() => setSelectedMood('😢')}> 😢 Sad </button>
      <button onClick ={() => setSelectedMood('😡')}> 😡 Angry </button>
      <button onClick ={() => setSelectedMood('🤯')}> 🤯 Anxious</button>
      <button onClick ={() => setSelectedMood('😒')}>😒 Bored </button>
      <button onClick ={() => setSelectedMood('🤔')}> 🤔 Curious / Wanting to try something new </button>
      <button onClick ={() => setSelectedMood('💡')}> 💡 Inspired (having new ideas)</button>
      <button onClick ={() => setSelectedMood('🌀')}>🌀 Stuck / Not following through (thinking but not acting) </button>
      <button onClick ={() => setSelectedMood('😶‍🌫️')}>😶‍🌫️ Distracted / Daydreaming</button>
      <button onClick ={() => setSelectedMood('😍')}>😍 Motivated (but not yet started)</button>
    </div>
    <div className="input-section">
      <input
        type="text"
        placeholder="why do you feel this way?"
      />
    </div>
    </div>
  )
}

