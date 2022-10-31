import './App.css';
import React from 'react';
import Flashcards from './components/Flashcards';

function App() {
  return (
    <>
      <Flashcards queryParams = {{
        amount:10,
        category:22,
        difficulty: 'medium',
        type: 'boolean'
      }}/>

      <Flashcards queryParams = {{
        amount:5,
        category:10,
        difficulty: 'easy',
        type: 'boolean'
      }}/>
    </>
  );
}

export default App;

