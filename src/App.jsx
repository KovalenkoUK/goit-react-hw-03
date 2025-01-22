import React, { useState } from 'react';
import { Formik } from 'formik';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { nanoid } from 'nanoid';
import './App.module.css';


const App = () => {
    const [contacts, setContacts] = useState([
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]);
    
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleAddContact = (name, number) => {
      const newContact = { id: nanoid(), name, number };
      setContacts([...contacts, newContact]);
    };
  
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <h1>Contact List</h1>
        <SearchBox value={searchTerm} onChange={handleSearchChange} />
        <ContactForm onAddContact={handleAddContact} />
        <ContactList contacts={filteredContacts} />
      </div>
    );
  };
  
  export default App;