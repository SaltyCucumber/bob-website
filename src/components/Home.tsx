import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../constants';
import Bob from '../assets/bob.svg';
import Alice from '../assets/alice.svg';
import { styleSettings } from '../constants';

const SHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SRouteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 100px;
  font-size: 24px;

  a {
    text-decoration: none;
    align-self: flex-end;
  }

  a:hover {
    text-decoration: underline;
  }

  > div {
    display: flex;
  }
`;

const SBuilerPath = styled.div`
  a {
    color: ${styleSettings.colors.builder};
  }
`;

const SDonorPath = styled.div`
  a {
    color: ${styleSettings.colors.donor};
  }
`;

const SIcon = styled.div`
  width: 50px;
  margin: 0 15px 7px 0;
`;

const Home = () => {
  return (
    <SHome>
      <SRouteContainer>
        <SBuilerPath>
          <SIcon>
            <Bob />
          </SIcon>
          <Link to={routes.build}>Bob the Builder</Link>
        </SBuilerPath>
        <SDonorPath>
          <SIcon>
            <Alice />
          </SIcon>
          <Link to={routes.donate}>Alice the Donor</Link>
        </SDonorPath>
      </SRouteContainer>
    </SHome>
  );
};

export default memo(Home);
