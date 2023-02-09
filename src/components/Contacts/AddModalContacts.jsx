import React, { useState } from "react";
import { FcPlus } from "react-icons/fc";

function AddModalContacts({ contacts, setContacts }) {
  const [newName, setNewName] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newImg, setNewImg] = useState("");

  const addContact = () => {
    const newContact = {
      // id: Math.random(),
      name: newName,
      lastname: newLastname,
      img: newImg,
    };
    setContacts([...contacts, newContact]);

    fetch("http://localhost:3333/create/contact", {
      method: "POST",
      body: JSON.stringify(newContact),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <input
            onChange={(e) => setNewName(e.target.value)}
            className="name-lastname"
            type="text"
            placeholder="Name"
          />

          <input
            onChange={(e) => setNewLastname(e.target.value)}
            className="name-lastname"
            type="text"
            placeholder="LastName"
          />

          <input
            onChange={(e) => setNewImg(e.target.value)}
            className="name-lastname"
            type="text"
            placeholder="URL Photo"
          />

          <button className="contact-add" onClick={addContact}>
            <FcPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddModalContacts;
