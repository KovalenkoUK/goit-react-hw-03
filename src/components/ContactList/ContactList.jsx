import React from 'react';
import Contact from '../Contact/Contact'
import './ContactList.module.css';

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
            ))}
        </ul>
    );
};



export default ContactList;