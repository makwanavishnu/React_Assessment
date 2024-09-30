import React from 'react';
import Checklist from './Checklist';
import DisplaySelected from './DisplaySelected';
import { ChecklistProvider } from './ChecklistContext';

const App = () => {
  return (
    <ChecklistProvider>
      <div className="App">
        <h1>React Checklist with Context</h1>
        <Checklist />
        <DisplaySelected />
      </div>
    </ChecklistProvider>
  );
};

export default App;
