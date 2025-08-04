import React from 'react';
import './App.css';
import EventExamples from './components/EventExamples';
import CurrencyConvertor from './components/Currencyconvertor';

function App() {
  return (
    <div className="App">
      <EventExamples />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
