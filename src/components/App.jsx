import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import styled from 'styled-components';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
    Notiflix.Notify.success(`${newContact.name} succesfully added!`);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    Notiflix.Notify.failure('Contact succesfully deleted!');
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Wrapper>
      <Container>
        <h1 style={{ textAlign: 'center', color: 'white' }}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <h2 style={{ textAlign: 'center', color: 'white' }}>Contacts</h2>
        <Filter onChange={handleFilterChange} filter={filter} />
        <ContactList
          onDeleteContact={handleDeleteContact}
          contacts={filteredContacts}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 40px;
  margin: 10px;
  background-color: rgba(71, 176, 192, 0.7);
  border-radius: 5px;
`;
