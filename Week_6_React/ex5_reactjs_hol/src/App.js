import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const myCohort = {
    name: 'React Bootcamp',
    startDate: '2025-07-01',
    status: 'ongoing', // try changing to 'completed'
    mentor: 'Dheekshit'
  };

  return (
    <div>
      <h1>Cohort Info</h1>
      <CohortDetails cohort={myCohort} />
    </div>
  );
}

export default App;
