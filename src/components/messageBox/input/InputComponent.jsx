import React, { useState } from "react";

function InputComponent({ selectedContact, addMessage }) {
  const [text, setText] = useState("");

  const sendMessage = () => {
    const newMessage = {
      id: Math.random(),
      senderId: 7000,
      recieverId: selectedContact.id,
      text: text,
    };

    fetch("http://localhost:3333/create-message", {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setText("");

    addMessage(newMessage);
  };

  return (
    <div className="send-inputs">
      <input
        className="message-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Ввидите текст"
      />
      <button className="send-message" onClick={sendMessage}>
        <img className="send-icon" src="./send.svg" alt="" />
      </button>
    </div>
  );
}
export default InputComponent;
