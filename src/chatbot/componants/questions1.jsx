import React from 'react';
import "./Enroll.css";

const Gotit = (props) => {
  const handleEnrollNow = () => {
    
    props.actionProvider.handleHello();
  };

  return (
    <div className="Gotit-container">
      <button onClick={handleEnrollNow} className="option-button">
        Got it
      </button>
    </div>
  );
};

export default Gotit;



