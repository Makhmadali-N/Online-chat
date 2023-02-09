import './App.css';
import ContactsComponent from './components/Contacts/ContactsComponent';
import MessageBoxComponent from  './components/messageBox/MessageBoxComponent';
import {useState} from 'react'


function App() {
  const [selectedContact, setSelectedContact] = useState({})
  

  const selectContact = (contact) => {
    setSelectedContact(contact)
  }

  return (
    <div className="App">
      <ContactsComponent selectContact={selectContact}/>
      <MessageBoxComponent selectedContact={selectedContact}/>
    </div>
  );
}

export default App;
