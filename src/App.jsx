import { useState } from 'react';
import './App.css';  // ← Import the CSS file (NOT App.module.css!)

function App() {
  const [selectedMood, setSelectedMood] = useState('');
  const [note, setNote] = useState('');

  return (
    <div className="app-container">  {/* ← Use className, not styles.xxx */}
      <h1 className="app-title">How are you feeling today?</h1>
      
      {/* Only show if a mood is selected */}
      {selectedMood && (
        <p className="mood-display">Current Selection: {selectedMood}</p>
      )}

      <div className="mood-grid">
        <button 
          onClick={() => setSelectedMood('😊')}
          className={`mood-btn ${selectedMood === '😊' ? 'mood-btn-selected' : ''}`}
        >
          😊 Happy
        </button>
        <button 
          onClick={() => setSelectedMood('😐')}
          className={`mood-btn ${selectedMood === '😐' ? 'mood-btn-selected' : ''}`}
        >
          😐 Neutral
        </button>
        <button 
          onClick={() => setSelectedMood('😢')}
          className={`mood-btn ${selectedMood === '😢' ? 'mood-btn-selected' : ''}`}
        >
          😢 Sad
        </button>
        <button 
          onClick={() => setSelectedMood('😡')}
          className={`mood-btn ${selectedMood === '😡' ? 'mood-btn-selected' : ''}`}
        >
          😡 Angry
        </button>
        <button 
          onClick={() => setSelectedMood('🤯')}
          className={`mood-btn ${selectedMood === '🤯' ? 'mood-btn-selected' : ''}`}
        >
          🤯 Anxious
        </button>
        <button 
          onClick={() => setSelectedMood('😒')}
          className={`mood-btn ${selectedMood === '😒' ? 'mood-btn-selected' : ''}`}
        >
          😒 Bored
        </button>
        <button 
          onClick={() => setSelectedMood('🤔')}
          className={`mood-btn ${selectedMood === '🤔' ? 'mood-btn-selected' : ''}`}
        >
          🤔 Curious
        </button>
        <button 
          onClick={() => setSelectedMood('💡')}
          className={`mood-btn ${selectedMood === '💡' ? 'mood-btn-selected' : ''}`}
        >
          💡 Inspired
        </button>
        <button 
          onClick={() => setSelectedMood('🌀')}
          className={`mood-btn ${selectedMood === '🌀' ? 'mood-btn-selected' : ''}`}
        >
          🌀 Stuck
        </button>
        <button 
          onClick={() => setSelectedMood('😶‍🌫️')}
          className={`mood-btn ${selectedMood === '😶‍🌫️' ? 'mood-btn-selected' : ''}`}
        >
          😶‍🌫️ Distracted
        </button>
        <button 
          onClick={() => setSelectedMood('😍')}
          className={`mood-btn ${selectedMood === '😍' ? 'mood-btn-selected' : ''}`}
        >
          😍 Motivated
        </button>
      </div>

      {/* Only show input section if a mood is selected */}
      {selectedMood && (
        <div className="input-section">
          <h3 className="input-section-title">
            You're feeling {selectedMood}. Why?
          </h3>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Why do you feel this way?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="input-field"
            />
            <button 
              onClick={() => {
                if (note.trim()) {
                  alert(`Mood saved! 😊\nMood: ${selectedMood}\nNote: ${note}`);
                  setNote('');
                  setSelectedMood('');
                } else {
                  alert('Please tell us why you feel this way!');
                }
              }}
              className="save-btn"
            >
              Save 💾
            </button>
          </div>
        </div>
      )}

      {!selectedMood && (
        <div className="empty-message">
          <p>👆 Click a mood to share how you're feeling</p>
        </div>
      )}
    </div>
  );
}

export default App;
