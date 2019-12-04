import React from 'react';
import styled, { css } from 'styled-components';

const Toggle = ({ label, checked, ...props }) => {

    const [value, setValue] = React.useState(checked);

    return (
        <Container>
            <Label>{ label }</Label>
            <StyledToggle onClick={ () => setValue(!value) } value={ value } { ...props }/>
        </ Container>
    );
}

export default Toggle;

const Container = styled.span`
    position: relative;
`

const Label = styled.label(
    ({ theme }) => css`
        line-height: 14px;
        margin-right: 16px;
        font-weight: 500;
        font-size: 14px;
        color: ${ theme.color }
    `
)

Label.defaultProps = {
    theme : {
        color : '#555B6E'
    }
}
    
const StyledToggle = styled.div(
    ({ theme }) => css`
        position: relative;
        display: inline-block;
        height: 9px;
        width: 25px;
        background: ${ ({ value }) =>  value ? theme.backgroundSlideTrue : theme.backgroundSlideFalse };
        border-radius: 30px;

        &::before {
            content: '';
            height: 16px;
            width: 16px;
            background: ${ ({ value }) =>  value ? theme.backgroundButtonTrue : theme.backgroundButtonFalse };
            position: absolute;
            border-radius: 100%;
            top: -40%;
            transition: 0.2s ease;
            left: ${ ({ value }) => value ? '50%' : '0' };
        }

        &:hover {
            cursor: pointer;
        }
    `
)

StyledToggle.defaultProps = {
    theme : {
        backgroundSlideFalse : 'linear-gradient(270deg, rgba(173, 173, 173, 0.8) 26.67%, rgba(228, 228, 228, 0.8) 100%)',
        backgroundButtonFalse : 'linear-gradient(180deg, #DADADA -4.17%, #A3A3A3 100%)',
        backgroundSlideTrue : 'linear-gradient(270deg, rgba(40, 193, 247, 0.8) 26.67%, rgba(0, 167, 225, 0.8) 100%)',
        backgroundButtonTrue : 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)'
    }
}
