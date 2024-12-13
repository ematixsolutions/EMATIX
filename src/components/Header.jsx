import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'; // Import the CSS file
import logo from '../assets/image/New _logo.jpg';

const Header = () => {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to simulate login (you would replace this with your actual login logic)
  const handleLogin = () => {
    // After successful login, set the login status to true
    setIsLoggedIn(true);
  };

  // Function to simulate logout
  const handleLogout = () => {
    // Reset login status to false when user logs out
    setIsLoggedIn(false);
  };

  return (
    <div className={styles.nav}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <img src={logo} alt="EmatixSolutions " />
      </div>

      {/* Navigation Links */}
      <div className={styles.text}>
        <Link to="/">Home</Link> {/* Link to Home */}
        <div className={styles.train_dropdown}>
          <a href="/Training">Training</a>
          <div className={styles.dropdownContent}>
            <div className={styles.subDropdown}>
              <a href="Courses">Courses</a>
              <div className={styles.subDropdownContent}>
                <Link to="/courses/embedded">Embedded Systems</Link> {/* New Page for Embedded */}
                <Link to="/courses/automation">Internet of Things</Link>
              </div>
            </div>
            <Link to="/Internship">Internship</Link>
            <Link to="/Inplanttraining">Inplant Training</Link>
            <Link to="/Virtualtraining">Virtual Training</Link>
          </div>
        </div>
        <div className={styles.dropdown}>
          <a href="/solution">Solutions</a>
          <div className={styles.dropdownContent}>
            <Link to="/solutions/home-automation">Home Automation</Link>
            <Link to="/solutions/industrial-IOT">Industrial IOT</Link>
            <Link to="/solutions/micro-credentials">Micro-Credentials</Link>
            <Link to="/solutions/digital-assessment">Digital Assessment</Link>
            <Link to="/solutions/learning-content">Learning Content</Link>
            <Link to="/solutions/document-management">Digital Health Records</Link>
          </div>
        </div>
        <a href="/mentorship">Mentorship</a>
        <a href="/franchise">Franchise</a>
        <a href="/careers">Careers</a>
        <a href="/Contactus">Contact Us</a>
      </div>

      {/* Login and Register Buttons (only show when not logged in) */}
      {!isLoggedIn && (
        <div className={styles.authButtons}>
          <Link to="/login" className={styles.loginButton}>Login</Link>
          <Link to="/register" className={styles.registerButton}>Register</Link>
        </div>
      )}

      {/* Show Logout button when logged in */}
      {isLoggedIn && (
        <div className={styles.authButtons}>
          <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Header;
