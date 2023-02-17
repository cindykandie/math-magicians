import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.css';

export default function Calculator() {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const operateEvent = (e) => {
    const btnName = e.target.innerHTML;
    const result = calculate(state, btnName);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <>
      <div className="wrapper">
        <div id="output-field">
          {total}
          {operation}
          {next}
        </div>
        <div className="button-list">
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            AC
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            +/-
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            %
          </button>
          <button
            type="button"
            className="calc-btn operations-btn"
            onClick={operateEvent}
          >
            &divide;
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            7
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            8
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            9
          </button>
          <button
            type="button"
            className="calc-btn operations-btn"
            onClick={operateEvent}
          >
            x
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            4
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            5
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            6
          </button>
          <button
            type="button"
            className="calc-btn operations-btn"
            onClick={operateEvent}
          >
            -
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            1
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            2
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            3
          </button>
          <button
            type="button"
            className="calc-btn operations-btn"
            onClick={operateEvent}
          >
            +
          </button>
          <button
            type="button"
            className="calc-btn no-btn"
            onClick={operateEvent}
          >
            0
          </button>
          <button
            type="button"
            className="zero-btn calc-btn"
            onClick={operateEvent}
          >
            0
          </button>
          <button
            type="button"
            className="calc-btn"
            onClick={operateEvent}
          >
            .
          </button>
          <button
            type="button"
            className="calc-btn operations-btn"
            onClick={operateEvent}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
