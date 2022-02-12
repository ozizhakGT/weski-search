import Select from 'react-select'
import styled from "styled-components";

const StyledDropdown = styled.div`
  .dropdown {
    width: 22rem;
    font-size: 1.6rem;
    
    &__control {
      border: 0.5px solid #D1D0D0;
      border-radius: 5px;
    }
  }
`

export default function Dropdown({ options, placeholder, onChange, defaultOption }) {

    const onSelectChange = option => {
        onChange(option.value);
    }

    return (
        <StyledDropdown>
            <Select
                className='dropdown'
                options={options}
                placeholder={placeholder}
                onChange={onSelectChange}
                defaultValue={defaultOption}
            />
        </StyledDropdown>
    );
}

Dropdown.defaultProps = {
    placeholder: "Select an option"
}