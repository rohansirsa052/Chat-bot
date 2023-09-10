import React from 'react';
import "./Page3.css";
const Page3 = (props) => {
//  console.log(props.name);
//  console.log(props.age);
  
  return (
    <div className='box'>
      <h1 >Your name <span className='primary'>{props.name}</span> and age <span className='primary'>{props.age}</span> has been added to the student system.</h1>
      <h2 className='secondary'>You may now exit.</h2>
    </div>
  );
};

export default Page3;
