import React from 'react';
import './calculator.css';

export default function calculator() {
  return (
    <>
      <div className="wrapper">
        <input type="number" value="0" />
        <div className="list">
          <li>AC</li>
          <li>+/-</li>
          <li>%</li>
          <li className="operations-btn">&divide;</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li className="operations-btn">x</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li className="operations-btn">-</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="operations-btn">+</li>
          <li className="no-btn"> </li>
          <li className="zero-btn">0</li>
          <li>.</li>
          <li className="operations-btn">=</li>
        </div>
      </div>
    </>
  );
}
