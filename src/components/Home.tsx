import { memo } from 'react';
import { Polkadon } from 'react-polkadon';

const Home = () => {
  return (
    <>
      <h1>Bob's website</h1>
      <Polkadon receiver="receiverAddy" />
    </>
  );
};

export default memo(Home);
