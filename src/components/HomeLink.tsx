import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { routes, styleSettings } from '../constants';

const SHomeLink = styled.div`
  margin-bottom: 40px;

  a {
    color: ${styleSettings.colors.white};
    text-decoration: none;
  }
`;

const HomeLink = () => (
  <SHomeLink>
    <Link to={routes.homepage}>⬅ Choose a different path</Link>
  </SHomeLink>
);

export default memo(HomeLink);
