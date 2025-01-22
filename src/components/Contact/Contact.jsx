import React from 'react';
import './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className="contact">
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)} className="delete-button">Delete</button>
    </li>
  );
};

export default Contact;