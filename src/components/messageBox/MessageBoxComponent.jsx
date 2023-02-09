import React, { useEffect, useState } from "react";
import HeaderComponent from "./Header/HeaderComponent";
import InputComponent from "./input/InputComponent";
import MessageComponent from "./message-list/MessageComponent";

function MessageBoxComponent({ selectedContact }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/messages")
      .then((response) => response.json())
      .then((json) => setMessages(json));
  }, []);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="container">
      <HeaderComponent selectedContact={selectedContact} />
      <MessageComponent
        selectedContact={selectedContact}
        messages={messages}
        setMessages={setMessages}
      />
      <InputComponent
        selectedContact={selectedContact}
        addMessage={addMessage}
      />
    </div>
  );
}

export default MessageBoxComponent;
