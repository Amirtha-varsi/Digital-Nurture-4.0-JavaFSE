import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
  const cohort = props.cohort;

  return (
    <div className={styles.box}>
      <h3 style={{ color: cohort.status === 'ongoing' ? 'green' : 'blue' }}>
        {cohort.name}
      </h3>
      <dl>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Mentor:</dt>
        <dd>{cohort.mentor}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
