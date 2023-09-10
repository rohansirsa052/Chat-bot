import React, {useState} from "react";
import "./App.css";
import config from "./chatbot/config";
import ChatBot from "react-chatbot-kit";
import MessageParser from "./chatbot/messageParser";
import ActionProvider from "./chatbot/acionProvider";
import 'react-chatbot-kit/build/main.css';
import Page1 from "./chatbot/componants/Page_1";


function App() {

  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollClick = () => {
    setEnrolled(true);
  };



  return (
    <React.Fragment>
      {!enrolled ? (
        <Page1 onClickEnroll={handleEnrollClick} />
      ) : (
        <div className="chatbot">
          <ChatBot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </React.Fragment>
  );
}



export default App;
