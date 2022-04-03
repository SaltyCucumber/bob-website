import { FormEvent, memo, useState } from 'react';
import styled from 'styled-components';
import { ButtonStyles, Network, PolkadonConfig, supportedNetworks } from 'react-polkadon';

import { styleSettings } from '../constants';
import HomeLink from './HomeLink';
import Code from './Code';

const SBuild = styled.div`
  color: ${styleSettings.colors.builder};
`;

const STitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${styleSettings.colors.builder};
`;

const SStep = styled.div`
  margin-bottom: 30px;
`;

const SStepTitle = styled.div`
  margin-bottom: 10px;
`;

const SFormInput = styled.div`
  margin-bottom: 10px;

  label {
    width: 170px;
    margin-right: 30px;
    text-align: right;
  }
`;

const SNetwork = styled(SFormInput)`
  input {
    width: 500px;
  }
`;

const SForm = styled.form`
  margin-bottom: 30px;
`;

const SAlert = styled.div`
  color: red;
`;

const SButton = styled.button`
  width: 300px;
  height: 50px;
  color: ${styleSettings.colors.white};
  background-color: ${styleSettings.colors.builder};
  font-size: 20px;
  border-radius: 10px;
  border: 0;
`;

const Build = () => {
  const [missingNetwork, setMissingNetwork] = useState(false);
  const [configValues, setConfigValues] = useState<PolkadonConfig | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setMissingNetwork(false);
    const form = event.target as HTMLFormElement;

    event.preventDefault();
    event.stopPropagation();

    const data = new FormData(form);
    const formProps = Object.fromEntries(data);

    const networkValid = Object.entries(formProps).some(([key, value]) => key.startsWith('address.') && value.toString().trim() !== '');

    if (!networkValid) {
      setMissingNetwork(true);
      return;
    }

    const config = {};
    const networks: Network[] = [];
    const buttonStyles: ButtonStyles = {};
    Object.entries(formProps).forEach(([key, value]) => {
      if (key.startsWith('address.') && value) {
        const networkName = key.split('.')[1];

        networks.push({ networkName, recipientAddress: value.toString().trim() });
      } else if (key.startsWith('buttonStyles.') && value) {
        const styleProp = key.split('.')[1];

        Object.assign(buttonStyles, { [styleProp]: value });
      } else if (!key.startsWith('address.') && !key.startsWith('buttonStyles.')) {
        Object.assign(config, { [key]: value.toString().trim() });
      }
    });

    Object.assign(config, { networks }, { buttonStyles });

    setConfigValues(config as PolkadonConfig);
  };

  return (
    <>
      <HomeLink />
      <SBuild>
        <STitle>
          <h1>Generate config and button styles</h1>
        </STitle>

        <SForm onSubmit={handleSubmit}>
          <SStep>
            <SStepTitle>1. Enter title for donation popup window</SStepTitle>
            <SFormInput>
              <label>Modal title</label>
              <input name='modalTitle' type='text' required />
            </SFormInput>
          </SStep>
          <SStep>
            <SStepTitle>2. Add a wallet address for networks you'd like to receive donations in (at least one is required)</SStepTitle>
            {supportedNetworks.map(({ networkName }) => (
              <SNetwork key={networkName}>
                <label>{networkName}</label>
                <input name={`address.${networkName}`} type='text' />
              </SNetwork>
            ))}
            {missingNetwork && <SAlert>Please please provide at least one address</SAlert>}
          </SStep>
          <SStep>
            <SStepTitle>3. Button styles (skippable, default values will be applied for each missing style)</SStepTitle>
            <SFormInput>
              <label>width</label>
              <input name='buttonStyles.width' type='number' placeholder='150' />
              px
            </SFormInput>
            <SFormInput>
              <label>height</label>
              <input name='buttonStyles.height' type='number' placeholder='40' />
              px
            </SFormInput>
            <SFormInput>
              <label>color</label>
              <input name='buttonStyles.color' type='text' placeholder='#000000' pattern='#[A-Fa-f0-9]{6}' title='use color hex code, example: #fc8c04' />
            </SFormInput>
            <SFormInput>
              <label>background color</label>
              <input
                name='buttonStyles.backgroundColor'
                type='text'
                placeholder='#fc8c04'
                pattern='#[A-Fa-f0-9]{6}'
                title='use color hex code, example: #fc8c04'
              />
            </SFormInput>
            <SFormInput>
              <label>font size</label>
              <input name='buttonStyles.fontSize' type='number' placeholder='16' />
              px
            </SFormInput>
            <SFormInput>
              <label>border radius</label>
              <input name='buttonStyles.borderRadius' type='number' placeholder='10' />
              px
            </SFormInput>
            <SFormInput>
              <label>box shadow color</label>
              <input
                name='buttonStyles.boxShadowColor'
                type='text'
                placeholder='#fc8c04'
                pattern='#[A-Fa-f0-9]{6}'
                title='use color hex code, example: #fc8c04'
              />
            </SFormInput>
          </SStep>

          <SButton type='submit'>Generate config</SButton>
        </SForm>

        <SStep>
          <SStepTitle>4. Generated code and button will be displayed below</SStepTitle>
          {configValues && <Code configValues={configValues} />}
        </SStep>
      </SBuild>
    </>
  );
};

export default memo(Build);
