import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  background: lightgrey;
  padding: 1rem;
  transition: all 150ms;
  font-size: 1.6rem;
  color: #adaaaa;

  &:focus {
    color: black;
    outline: none;
    background: white;
  }
  
`;

export default function Input({ type, setVal, ...rest }) {
    const onChange = ({ target }) => {
        setVal(target.value);
    }

    return (
        <StyledInput
            type={type}
            onChange={onChange}
            { ...rest }
        />
    )
};

Input.defaultProps = {
    type: 'text',
    defaultVal: ''
};