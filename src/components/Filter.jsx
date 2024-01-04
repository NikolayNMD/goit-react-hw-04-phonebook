import styled from 'styled-components';

export const Filter = ({ onChange, filter }) => {
  return (
    <label onChange={onChange} style={{ color: 'white' }}>
      Find contacts by name:
      <Input
        name="filter"
        type="text"
        placeholder="Search by name"
        filter={filter}
      />
    </label>
  );
};

const Input = styled.input`
  margin-left: 10px;
`;
