import { styled } from 'styled-components';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Buton onClick={() => onDeleteContact(contact.id)} type="button">
            Delete
          </Buton>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  border: 2px dotted black;
  background-color: aliceblue;
  border-radius: 5px;
  list-style-type: none;
  padding: 10px;
  margin-bottom: 0;
  height: 100px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    overflow: hidden;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 2px;
`;

const Buton = styled.button`
  border: 2px solid red;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;
