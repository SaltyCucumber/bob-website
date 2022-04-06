import ReactDOM from 'react-dom';
import { Polkadon, PolkadonConfig } from 'react-polkadon';

window.initPolkadon = (config: PolkadonConfig) => {
  ReactDOM.render(<Polkadon config={config} />, document.getElementById('polkadon'));
};
