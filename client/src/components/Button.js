import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent linear-gradient(270deg, #0D65F9 0%, #1A27F8 100%) 0% 0% no-repeat padding-box;
  border-radius: 5px;
  padding: 1rem 2rem;
  border: none;
  cursor: pointer;
  transition: all .1s;
  color: white;
  
  &:active {
    transform: scale(.98);
  }
  
  &:disabled { opacity: .7 }
`;

export default function Button({ children, disabled }) {

    return (
        <StyledButton
           type='submit' disabled={disabled} >
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    type: 'button'
}