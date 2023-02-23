import React from 'react';
import styles from '../styles/Quote.module.css';

function Quote() {
  return (
    <>
      <p className={styles.qText}>
        Mathematics as an expression of the human mind reflects
        the active will, the contemplative reason,
        and the desire for aesthetic perfection.
        Its basic elements are logic and intuition,
        analysis and construction, generality and individuality.
        <br />
        <p className={styles.qOwner}>~ — Richard Courant, German-American mathematician</p>
      </p>
    </>
  );
}

export default Quote;
