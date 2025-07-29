// src/App.js
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Jacob" school="St. Joseph's School" total={480} goal={600} />
    </div>
  );
}

export default App;
