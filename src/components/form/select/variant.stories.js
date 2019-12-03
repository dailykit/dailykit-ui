import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Select from './select';

export default {
    title: 'FORM | Select'
};

const sample = [
    {
        id : 1,
        image : 'https://source.unsplash.com/random/100x100',
        value : 'Dog'
    },
    {
        id : 2,
        image : 'https://source.unsplash.com/random/100x100',
        value : 'Cat'
    },
    {
        id : 3,
        image : 'https://source.unsplash.com/random/100x100',
        value : 'Cow'
    }
];

export const Variants = () => {
    return (
        <SelectWrapper>
            <Select variant="normal" title="Select Animal" optional={ true } options={ sample }></Select>
            <Select variant="template" title="Select Animal" optional={ false } options={ sample }></Select>
        </SelectWrapper>
    );
};

const SelectWrapper = styled.div`
    width: 200px;    

    select {
        margin-bottom: 16px;    
    }
`