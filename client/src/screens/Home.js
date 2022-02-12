import styled from "styled-components";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../store";
import RoomCard from "../components/RoomCard";
import useSortRooms from "../hooks/useSortRooms";
import Dropdown from "../components/Dropdown";

const StyledHome = styled.div`
  max-width: 779px;
  min-width: 250px;
  margin: 0 auto;
  
  display: flex;
  gap: 4rem;
  flex-direction: column;
  align-items: center;
  
  .sort {
    font-size: 1.8rem;
    align-self: flex-start;
  }
`;

export default function Home() {
    const [sortType, setSortType] = useState('asc');
    const {rooms: [rooms]} = useContext(GlobalContext);
    const {sortRooms, sortOptions} = useSortRooms(rooms, sortType);

    useEffect(() => {
        !sortRooms.length && setSortType('asc');
    }, [sortRooms])

    return (
        <StyledHome>
            {!!sortRooms.length && <div className='sort'>
                <Dropdown
                    options={sortOptions}
                    defaultOption={sortOptions[0]}
                    onChange={(sortSelected) => setSortType(sortSelected)}
                    placeholder='Sort by ..'
                />
            </div>}
            {sortRooms?.length ?
                sortRooms.map(room => <RoomCard { ...room } />)
                :
                <div>Waiting for Rooms search :)</div>
            }
        </StyledHome>
    )
}