// in MessageParser.js
import React from 'react';


const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const nameRegex = /\b[A-Z][a-z]*\b/g;
    // console.log("Message:", message);
  const names = message.match(nameRegex);
    if (message.includes(names)) {
      if (names) {
        names.forEach((name) => {
          actions.handleAge(name);
        });
      }
     
    }   

    const ageRegex = /\b(1[8-9]|[2-3][0-9]|4[0-7])\b/g;
    const ages = message.match(ageRegex);

    if (ages) {
      ages.forEach((age)=>{
          actions.initiateCountdownAndExit(age);
               //console.log(age);
      })
    }
  
  };

   return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;