import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.heading}>Welcome to the Math of wonder!</h1>
        <p className={styles.paragraph}>
          The point of using Lorem Ipsum is that it has a
          more or less normal distribution of letters as opposed to using
          Content here content here making it look like readable English
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their
          default model text and a search for will uncover many web sites still in their infancy
        </p>
      </div>
    </>
  );
}

export default Home;
