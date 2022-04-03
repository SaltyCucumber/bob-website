import { memo } from 'react';
import { Polkadon, PolkadonConfig } from 'react-polkadon';
import styled from 'styled-components';

import { styleSettings } from '../constants';
import HomeLink from './HomeLink';

const SDonate = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${styleSettings.colors.donor};
`;

const Donate = () => {
  const config: PolkadonConfig = {
    modalTitle: 'Donate to Bob',
    networks: [
      { networkName: 'westend', recipientAddress: '5CK3fkziX4aEJTfbnwUek53obhpKi56CsNC19PfTNqrQ6EWz' },
      { networkName: 'rococo', recipientAddress: '5DtgWQZ23z4ccL32cr3guMVU3jTMF8225V4vXyMRbttZMeqs' },
      { networkName: 'polkadot', recipientAddress: '121qkLCCYTmX7KEaxmmToNFoaSecr3BgJDgDS7WrSU2NFX1i' },
      { networkName: 'kusama', recipientAddress: '1gYdVAwAwLyQfr2h24r765gGjJaHigCF5QTs3caKuhwJ2UX' },
    ],
    buttonStyles: {
      width: '270',
      height: '50',
      fontSize: '20',
      borderRadius: '15',
    },
  };

  return (
    <>
      <HomeLink />
      <SDonate>
        <h1>Donate to Bob</h1>
        <Polkadon config={config} />
      </SDonate>
    </>
  );
};

export default memo(Donate);
