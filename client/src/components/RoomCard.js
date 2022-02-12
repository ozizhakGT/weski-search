import styled from "styled-components";
import { FaBed, FaStar } from 'react-icons/fa'
import Button, {StyledButton} from "./Button";

const StyledRoomCard = styled.div`
  width: 100%;
  height: 256px;
  border-radius: 7px;
  box-shadow: -2px 0px 8px #00000021;
  overflow: hidden;
  font-size: 1.6rem;
  
  display: flex;
  
  figure {
    flex: .35;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .room {
    &__details {
      flex: .65;
      display: flex;
      background: white;

      .title {
        font-weight: bold;
        font-size: 2rem;
      }
      
      &--desc {
        padding: 1.5rem;
        flex: .6;
        
        .property {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 5px;
          
          &[theme='star'] {
            svg {
              fill: #F39527;
            }
          }
          
          &[theme='bed'] {
            color: gray;
            svg {
              width: 2rem;
              fill: grey;
            }
          }
        }
      }
      
      &--purchase {
        padding: 1.5rem;
        background: #F5F5F5;
        flex: .4;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        
        .title {color: red;}
        
        ${StyledButton} {
          align-self: center;
          margin-top: 1rem;
        }
      }
    }
  }
`;

export default function RoomCard({ HotelDescriptiveContent, HotelName, HotelInfo, PricesInfo }) {
    const hotelPic = HotelDescriptiveContent.Images[0].URL;
    const { Beds, Rating } = HotelInfo;

    return (
        <StyledRoomCard>
            <figure>
                <img src={hotelPic} alt="hotel image" />
            </figure>

            <div className='room__details'>
                <div className='room__details--desc'>
                    <p className='title'>{HotelName}</p>
                    <p theme='star' className='property'>{Array.from({length: Number(Rating)}).map(() => <span>{FaStar()}</span>)}</p>
                    <p theme='bed' className='property'><span>{FaBed()}</span> <span>{Beds}</span></p>
                </div>

                <div className='room__details--purchase'>
                    <p className='title'>&euro;{PricesInfo.AmountAfterTax}</p>
                    <small>Total price per person</small>
                    <Button>View Details</Button>
                </div>
            </div>
        </StyledRoomCard>
    )
}