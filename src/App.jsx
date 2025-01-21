import React from 'react';
import { Formik } from 'formik';
import Contact from './components/Contact/Contact';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';


const App = () => {
    

    return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
    </div>
    )
}