import React from 'react';

import { Container, StyledPopup } from './styles';

const Popup = ({ show, children }) => {
    
    return (
        <Container show={ show }>
            <StyledPopup>
                { children }
            </StyledPopup>
        </Container>
    )
}

export default Popup;