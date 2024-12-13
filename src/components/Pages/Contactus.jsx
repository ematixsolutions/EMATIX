import React from 'react';
import styles from '../Pages/Contactus.module.css';

const Contactus = () => {
  return (
    <div className={styles.container}>
      <div>
      <h1 className={styles.heading}>Contact Ematix Solutions</h1>
      <p className={styles.description}>
        Get in touch with us for innovative embedded and software solutions <br />
        tailored to your business needs. We are here to help you succeed.
      </p>

      <div className={styles.contactInfo}>
        <p>
          <strong>Support:</strong> +91 6369268376
        </p>
        <p>
          <strong>Inquiry:</strong> ematixsolutions@gmail.com
        </p>
      </div>
      </div>
        <div>
        <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName" className={styles.label}>
            Your First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Your Email Address*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Your Message*
          </label>
          <textarea
            id="message"
            placeholder="Type your message here"
            required
            className={styles.textarea}
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Your Inquiry
        </button>
      </form>
    </div>
    {/* WhatsApp Button */}
    <div className={styles.whatsappButton}>
          <a href="https://wa.me/6369268376" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp Icon"
            />
          </a>
        </div>
      
    </div>
  );
};

export default Contactus;
