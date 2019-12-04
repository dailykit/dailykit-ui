import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Toggle from './toggle';

export default {
    title: 'Toggle'
};

const theme = {
    backgroundSlideFalse : 'linear-gradient(270deg, rgba(173, 173, 173, 0.8) 26.67%, rgba(228, 228, 228, 0.8) 100%)',
        backgroundButtonFalse : 'linear-gradient(180deg, #DADADA -4.17%, #A3A3A3 100%)',
    backgroundSlideTrue : 'linear-gradient(270deg, rgba(255, 90, 82, 0.8) 26.67%, rgba(253, 157, 153, 0.8) 100%)',
    backgroundButtonTrue : 'linear-gradient(180deg, #FF5A52 -4.17%, #F4736D 100%)'
}

export const Variants = () => {
    return (
        <ToggleWrapper>
            <Toggle label="Disabled Toggle" checked={ false } />
            <Toggle label="Enabled Toggle" checked={ true } />
            <Toggle label="Enabled Toggle in negative action (suspending a user)" checked={ true } theme={ theme }/>
        </ToggleWrapper>
    )
}

const ToggleWrapper = styled.div`
    div {
        margin-right: 30px;
    }
`