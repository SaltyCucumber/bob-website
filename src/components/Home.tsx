import { memo } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../constants';

const Home = () => {
  return (
    <>
      <div><Link to={routes.build}>Path of a builder</Link></div>
      <div><Link to={routes.donate}>Path of a donor</Link></div>
    </>
  );
};

export default memo(Home);
