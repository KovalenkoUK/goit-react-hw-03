import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import Contact from './components/Contact/Contact';
import ContactList from './ContactList';
import SearchBox from './SearchBox';
import ContactForm from './ContactForm';
import './App.module.css';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });
  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Contact List</h1>
      <SearchBox value={searchTerm} onChange={handleSearchChange} />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
