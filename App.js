import React from 'react';
import './App.css';
import PromptList from './components/PromptList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Prompts Database</h1>
      </header>
      <PromptList />
    </div>
  );
}

export default App;
