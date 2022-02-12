import styled from "styled-components";
import {useForm, Controller} from "react-hook-form";
import Dropdown from "./Dropdown";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../store";
import Button, {StyledButton} from "./Button";
import {FaSearch} from 'react-icons/fa';
import DatePickerInput from "./DatePickerInput";
import {getRooms} from "../api/rooms";
import { resetRoomsAction, getRoomsAction } from "../reducers/rooms/actions";
import searchSocketChannel, { socket } from "../sockets/search";

const StyledSearchBar = styled.form`
  margin-left: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .inputs {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
  
  ${StyledButton} {
    svg {
      fill: white;
    }
  }
  
  .logo-container {
    color: red;
  }
`;

export default function SearchBar() {
    const {metadata: [metaData], rooms: [rooms, dispatchRooms]} = useContext(GlobalContext);
    const {handleSubmit, control, formState} = useForm( { mode: "onChange" });

    const onSubmit = async form => {
        const response = await getRooms({ query: form, subscriberId: socket.id });

        if (response !== 'ok') throw new Error('error');

        dispatchRooms(resetRoomsAction());
    }

    const updateRooms = newRooms => dispatchRooms(getRoomsAction(rooms, newRooms))

    useEffect(() => {
        searchSocketChannel(updateRooms);
    }, []);


    return (
        metaData &&
        <StyledSearchBar onSubmit={handleSubmit(onSubmit)}>
            <h3>We * Ski</h3>
            <div className='inputs'>
                <Controller
                    rules={{ required: true }}
                    render={
                        ({ field }) =>
                            <Dropdown
                            {...field}
                            options={metaData.sites}
                            placeholder='Select Site ..' />
                    }
                    control={control}
                    name="siteId"
                />
                <Controller
                    rules={{ required: true }}
                    render={
                        ({ field }) =>
                            <Dropdown
                                {...field}
                                options={metaData.groupSizes}
                                placeholder='Select Group Size ..' />
                    }
                    control={control}
                    name="groupSize"
                />
                <Controller
                    rules={{ required: true }}
                    render={
                        ({ field }) =>
                            <DatePickerInput
                                {...field}
                                placeholder='Choose Date Range ..' />
                    }
                    control={control}
                    name="dateRange"
                />
            </div>
            <Button
                disabled={!formState.isValid}
                children='Search'
                type='submit'>
                <FaSearch/>
            </Button>
        </StyledSearchBar>
    )
}