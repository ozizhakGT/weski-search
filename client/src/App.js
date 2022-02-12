import {useNavigate, useRoutes} from 'react-router-dom';
import routes from "./routes";
import styled from "styled-components";
import device from "./styles/device";
import Navbar from "./components/Navbar";
import {useContext, useEffect} from "react";
import {GlobalContext} from "./store";
import {getMetadata} from "./api/metadata";
import {getMetadataAction} from "./reducers/metadata/actions";

const StyledApp = styled.div`
    .main {
      width: 1400px;
      margin: 15rem auto;

      @media ${device.laptop} {
        width: 1024px
      }

      @media ${device.tablet} {
        width: 700px
      }

      @media ${device.mobileL} {
        width: 500px
      }

      @media ${device.mobileM} {
        width: 320px
      }
    }
`;

export default function App() {
  const navigate = useNavigate();
  const routing = useRoutes(routes());
  const { metadata: [_, dispatch] } = useContext(GlobalContext)

  const getData = async () => {
      try {
          await getMetadata().then(res => {
              dispatch(getMetadataAction(res));
          });
      } catch (err) {
          navigate('/404');
          console.dir(err);
      }
  }

  useEffect(getData, []);

  return (
      <StyledApp>
        <Navbar />
        <div className='main'>
          {routing}
        </div>
      </StyledApp>
  );
}