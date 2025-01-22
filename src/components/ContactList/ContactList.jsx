import React from 'react';
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