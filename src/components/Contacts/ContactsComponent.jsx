import React from "react";
import { useState, useEffect } from "react";
import AddModalContacts from "./AddModalContacts";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { TiUserDelete } from "react-icons/ti";
import { FcSearch } from "react-icons/fc";

function ContactsComponent({ selectContact }) {
  const [contacts, setContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3333/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, []);

  const onChangeSearchLavue = (e) => {
    setSearchValue(e.target.value);
  };

  const onDeleteContact = (id) => {
    fetch(`http://localhost:3333/delete/contact/${id}`, {
      method: "DELETE",
    });
    setContacts(
      contacts.filter((contacts) => {
        return contacts.id !== id;
      })
    );
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="wrapper-contacts">
      <div>
        <input
          className="search-input"
          value={searchValue}
          onChange={onChangeSearchLavue}
          type="text"
          placeholder="Search"
        />
        <i className="search-icon">
          <FcSearch size={25} />
        </i>
      </div>
      <div>
        <button className="add-contact" onClick={toggleModal}>
          <AiOutlineUsergroupAdd size={25} />
        </button>
      </div>
      <div>
        {showModal && (
          <AddModalContacts contacts={contacts} setContacts={setContacts} />
        )}
      </div>
      {contacts
        .filter((contact) => {
          const fullName = contact.name + contact.lastName;

          if (fullName.includes(searchValue)) {
            return true;
          }
        })
        .map((contact) => {
          return (
            <div
              key={contact.id}
              onClick={() => selectContact(contact)}
              className="contacts-list"
            >
              <div className="list">
                <div>
                  <img className="avatar-contacts" src={contact.img} alt="" />
                </div>
                <div className="contact-name">{contact.name}</div>
                <div className="contact-lastname">{contact.lastname}</div>
              </div>
              <div>
                <button
                  className="delete-contact"
                  onClick={() => onDeleteContact(contact.id)}
                >
                  <TiUserDelete size={23} />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ContactsComponent;
