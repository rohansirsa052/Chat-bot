// Page1.js
import React from 'react';
import "./Page1.css";

const Page1 = ({ onClickEnroll }) => {
  return (
    <div>
      <h1>Enter into Student Info System</h1>
      <button className='btn' onClick={onClickEnroll}>Enroll Now</button>
    </div>
  );
};

export default Page1;
