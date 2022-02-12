import styled from 'styled-components';
import { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const StyledDatePicker = styled.div`
.react-datepicker {
  &-wrapper {
    border-radius: 20px;
  }
  
  &__calendar {
    transform: scale(1.4) translateY(30px);
  }

  &__custom-input {
    border-radius: 5px;
    border-color: transparent;
    font-size: 1.5rem;
    padding: .9rem;
    transform: translateY(-3px);
    
    &:focus { 
      outline: none;
      border-color: #2684FF;
    }
    
  }
}
`;

export default function DatePickerInput({ onChange }) {
    const [dateRange, setDateRange] = useState([null, null]);

    const onDatePickerChange = dates => {
        onChange(((!dates[0] || !dates[1]) ? undefined : {from: dates[0], to: dates[1]}));

        setDateRange(dates);
    };

    return (
        <StyledDatePicker>
            <DatePicker
                selected={dateRange[0]}
                onChange={onDatePickerChange}
                startDate={dateRange[0]}
                endDate={dateRange[1]}
                selectsRange
                className="react-datepicker__custom-input"
                calendarClassName='react-datepicker__calendar'
            />
        </StyledDatePicker>
    );
}