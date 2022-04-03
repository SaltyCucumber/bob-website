import { memo } from 'react';
import styled from 'styled-components';
import { styleSettings } from '../constants';
import HomeLink from './HomeLink';

const SBuild = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${styleSettings.colors.builder};
`;

const Build = () => (
  <>
    <HomeLink />
    <SBuild>
      <h1>Build the button + config</h1>
      <div>Under construction</div>
    </SBuild>
  </>
);

export default memo(Build);
