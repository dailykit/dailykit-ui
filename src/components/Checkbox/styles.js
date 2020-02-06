import styled from 'styled-components'

export const StyledCheckbox = styled.span`
    height: 17px;
    width: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${ props => props.checked ? 'none' : '1px solid #D8D8D8' };
    background: ${ props => props.checked ? 'linear-gradient(180deg, #28C1F7 -4.17%, #00A7E1 100%)' : '#FFF' };
    cursor: pointer;
`