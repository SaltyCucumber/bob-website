import { memo, useEffect, useState } from 'react';
import { Polkadon, PolkadonConfig } from 'react-polkadon';
import styled from 'styled-components';
import { styleSettings } from '../constants';

const SCodeContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const SCode = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${styleSettings.colors.mediumJungeGreen};
`;

const SButton = styled.button`
  width: 250px;
  height: 60px;
  color: ${styleSettings.colors.white};
  background-color: ${styleSettings.colors.builder};
  border: 10px solid ${styleSettings.colors.mediumJungeGreen};
  border-bottom: 0;
`;

const SNotice = styled.div`
  margin-bottom: 20px;
`;

interface CodeProps {
  configValues: PolkadonConfig;
}

const Code = ({ configValues }: CodeProps) => {
  const [buttonStyles, setButtonStyles] = useState<string | null>(null);
  const copyButtonText = 'Copy code to clipboard';

  useEffect(() => {
    let styles = '';

    if (configValues.buttonStyles) {
      if (configValues.buttonStyles?.width) {
        styles += `\n       width: '${configValues.buttonStyles?.width}',`;
      }
      if (configValues.buttonStyles?.height) {
        styles += `\n       height: '${configValues.buttonStyles?.height}',`;
      }
      if (configValues.buttonStyles?.color) {
        styles += `\n       color: '${configValues.buttonStyles?.color}',`;
      }
      if (configValues.buttonStyles?.backgroundColor) {
        styles += `\n       backgroundColor: '${configValues.buttonStyles?.backgroundColor}',`;
      }
      if (configValues.buttonStyles?.fontSize) {
        styles += `\n       fontSize: '${configValues.buttonStyles?.fontSize}',`;
      }
      if (configValues.buttonStyles?.borderRadius) {
        styles += `\n       borderRadius: '${configValues.buttonStyles?.borderRadius}',`;
      }
      if (configValues.buttonStyles?.boxShadowColor) {
        styles += `\n       boxShadowColor: '0 0 3px 0 ${configValues.buttonStyles?.boxShadowColor}',`;
      }
      if (Object.keys(configValues.buttonStyles).length > 0) {
        styles += '\n    ';
      }
    }

    setButtonStyles(styles);
  }, [configValues.buttonStyles]);

  const copyToClipboard = (id: string) => {
    if (document) {
      const codeBlock = document.getElementById(`code-block${id}`);
      const copyButton = document.getElementById(`copy-button${id}`);
      if (codeBlock && copyButton) {
        navigator.clipboard.writeText(codeBlock.textContent || '');
        copyButton.innerText = 'Copied!';
        setTimeout(() => {
          copyButton.innerText = copyButtonText;
        }, 1000);
      }
    }
  };

  if (buttonStyles === null) {
    return null;
  }

  return (
    <>
      <SCodeContainer>
        <div>
          <p>Variant A: This is a React ready to use component, if you are building a React app, use this code</p>
          <SButton id='copy-button1' onClick={() => copyToClipboard('1')}>
            {copyButtonText}
          </SButton>
          <SCode>
            <pre>
              <code id='code-block1'>
                {`import { Polkadon, PolkadonConfig } from 'react-polkadon';

const DonationButton = () => {
  const config: PolkadonConfig = {
    modalTitle: '${configValues.modalTitle}',
    networks: [
      ${configValues.networks.map(
        ({ networkName, recipientAddress }, index) =>
          `${index > 0 ? '\n      ' : ''}{\n        networkName: '${networkName}',\n        recipientAddress: '${recipientAddress}'\n      }`,
      )}
    ],
    buttonStyles: {${buttonStyles}}
  };

  return (
    <Polkadon config={config} />
  );
};

export default DonationButton;
`}
              </code>
            </pre>
          </SCode>
        </div>
        <div>
          <p>Variant B: this is a pure JS bundle, you can copy and paste it in a simple HTML file to use</p>
          <SButton id='copy-button2' onClick={() => copyToClipboard('2')}>
            {copyButtonText}
          </SButton>
          <SCode>
            <pre>
              <code id='code-block2'>
                {`<div id="polkadon"></div>
<script src="https://cdn.jsdelivr.net/gh/VadimSaveljev/polkadon-demo/blob/polkadon.js"></script>
<script>
  window.initPolkadon({
    modalTitle: '${configValues.modalTitle}',
    networks: [
      ${configValues.networks.map(
        ({ networkName, recipientAddress }, index) =>
          `${index > 0 ? '\n      ' : ''}{\n        networkName: '${networkName}',\n        recipientAddress: '${recipientAddress}'\n      }`,
      )}
    ],
    buttonStyles: {${buttonStyles}}
  });
</script>
`}
              </code>
            </pre>
          </SCode>
        </div>
      </SCodeContainer>

      <SNotice>This is how the button looks like with current config</SNotice>
      <Polkadon config={configValues} />
    </>
  );
};

export default memo(Code);
