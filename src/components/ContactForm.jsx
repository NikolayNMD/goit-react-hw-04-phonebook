import { useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const id = nanoid();
    const newContact = { id, name, number };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          placeholder="Enter name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        Number
        <input
          placeholder="Enter phone number"
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={!(name && number)}>
          Add contact
        </Button>
      </Label>
    </form>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  background-color: aliceblue;
  padding: 30px 10px;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 10px auto 0;
  width: 100px;
  border: 1px solid black;
  border-radius: 2px;
  background-color: lavender;
`;
