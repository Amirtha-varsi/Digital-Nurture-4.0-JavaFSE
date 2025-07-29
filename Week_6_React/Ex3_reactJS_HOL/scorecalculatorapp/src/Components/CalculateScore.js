// src/Components/CalculateScore.js
import React from 'react';
import '../Stylesheets/Style.css';

function CalculateScore(props) {
  const { name, school, total, goal } = props;

  // Calculate average percentage
  const average = ((total / goal) * 100).toFixed(2); // rounded to 2 decimals

  return (
    <div className="score-card">
      <h2>Student Score Details</h2>
      <p><strong>Student Name:</strong> {name}</p>
      <p><strong>School Name:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Goal:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}%</p>
    </div>
  );
}

export default CalculateScore;
