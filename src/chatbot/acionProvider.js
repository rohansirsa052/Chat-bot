import React, {useState} from 'react';
import Page3 from './componants/Page_3';
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [complete, setComplete] = useState(false);
  const handleComplete = () => {
    setComplete(true);
  };
  const handleHello = () => {
    const botMessages = [
      createChatBotMessage('Got it'),
      createChatBotMessage('Pick a slot:', {
        widget: 'calendar',
      }),
      
    ];

    setState((prev) => ({
      ...prev,       
      messages: [...prev.messages, ...botMessages],
    }));
  
  };
  const handleTime = () => {
    const botMessage = createChatBotMessage('Please select a time slot:', {
      widget: 'Time Slot',
    });
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleName = () => {
    const botMessage = createChatBotMessage("Enter Your Name");
  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge = (nameInput) => {
    setName(nameInput);
    console.log(nameInput);
    const botMessage = createChatBotMessage("Enter Age between 18 to 47");  
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
 
  const initiateCountdownAndExit = (ageInput) => {
    setAge(ageInput);
    //console.log(ageInput);
    const countdownDuration = 5;

    const botMessage = createChatBotMessage(`Thank you. In 5 seconds, the bot will exit.`);

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    let countdown = countdownDuration;
    const countdownInterval = setInterval(() => {
      countdown--;

      if (countdown <= 0) {
        clearInterval(countdownInterval); 
        handleComplete(); 
      } else {
  
        const countdownMessage = createChatBotMessage(countdown.toString());
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, countdownMessage],
        }));
      }
    }, 1000); 
  };
  return (
    <React.Fragment>
    {complete ? (
      <Page3 name={name} age={age} /> 
    ) : (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleHello,
              handleTime,
              handleName,
              handleAge, 
              initiateCountdownAndExit
            },
          });
        })}
      </div>
    )}
  </React.Fragment>
    
  );
};

export default ActionProvider;

