import React from 'react';
import styles from './Internship.module.css'; // Import the corresponding CSS file

const Internship = () => {
  return (
    <div className={styles.internshipContainer}>
         {/* <h1>INTERNSHIP DETAILS</h1> */}
      <div className={styles.internshipBox}>
        <h2>Welcome to the Internship Program</h2>
        <p>
          Gain hands-on experience and enhance your skills with our industry-focused internship
          programs.
        </p>
        <div className={styles.programDetails}>
          <h3>Why Choose Our Internship Program?</h3>
          <ul>
            <li>Real-world projects guided by industry professionals.</li>
            <li>Workshops and training sessions for skill development.</li>
            <li>Certificate of completion to showcase your expertise.</li>
            <li>Opportunities for full-time positions based on performance.</li>
          </ul>
        </div>

        <div className={styles.callToAction}>
          <h3>Apply Now!</h3>
          <p>Take the first step towards a successful career.</p>
          <button className={styles.applyButton} onClick={() => alert('Redirecting to application form...')}>
            Apply for Internship
          </button>
        </div>
      </div>
    </div>
  );
};

export default Internship;
