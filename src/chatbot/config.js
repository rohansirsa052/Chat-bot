import { createChatBotMessage } from 'react-chatbot-kit';
import Questions from "./componants/questions1";
import "../chatbot/componants/Enroll.css";
import CalendarWidget from './componants/Calender';
import TimeSlot from './componants/TimeSlot';


const config = {

  initialMessages: [
    createChatBotMessage(

     'Enter into Student Info System!',
      {
        widget: 'Got it',
      } 
    ),
  ],
  
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    }, 
  },
  widgets: [
    {
      widgetName: 'Got it',
      widgetFunc: (props) => <Questions {...props} />,
    },
    {
      widgetName: 'calendar',
      widgetFunc: (props) => <CalendarWidget {...props}/>,
    },
    {
      widgetName: 'Time Slot',
      widgetFunc: (props) => <TimeSlot {...props} />,
    },
    
  ],
};

export default config;
