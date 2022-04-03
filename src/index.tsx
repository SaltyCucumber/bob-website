import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { styleSettings } from './constants';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'PT Mono', monospace;
    background-color: ${styleSettings.colors.charlestonGreen};
  }

  #app {
    padding: 10px;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('app'),
);
