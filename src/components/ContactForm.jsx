import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  telInputId = nanoid();

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const { name, number } = this.state;
    this.props.onSubmit({
      name: name.trim(),
      number: number.trim(),
      form: form.reset(),
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <Label htmlFor={this.nameInputId && this.telInputId}>
          Name
          <input
            id={this.nameInputId}
            placeholder="Enter name"
            type="text"
            name="name"
            value={name}
            onChange={this.inputHandler}
            required
          />
          Number
          <input
            id={this.telInputId}
            placeholder="Enter phone number"
            type="tel"
            name="number"
            value={number}
            onChange={this.inputHandler}
            required
          />
          <Button type="submit" disabled={!(name && number)}>
            Add contact
          </Button>
        </Label>
      </form>
    );
  }
}

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
