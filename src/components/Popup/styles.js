import styled from 'styled-components';

export const Container = styled.div`
    display: ${ props => props.show ? 'flex' : 'none' };
    transition: 0.2s ease;
    justify-content: center;
    align-items: center;
    background: rgba(217, 233, 241, 0.38);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

export const StyledPopup = styled.div`
    background: #fff;
    min-height: 150px;
    min-width: 350px;
    padding: 28px;
    1px solid #FF8484;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
`