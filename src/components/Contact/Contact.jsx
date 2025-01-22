import React from 'react';
import './Contact.module.css';

const Contact = ({ contact }) => {
    return (
        <li>
            <p>{contact.name}: {contact.number}</p>
        </li>
    );
};



export default Contact;