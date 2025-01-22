import React from 'react';
import App from '../../App';
import ContactList from '../ContactList/ContactList'
import './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;