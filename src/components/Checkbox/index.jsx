import React from 'react';

import { StyledCheckbox } from './styles';
import { TickIcon } from '../../assets/icons';

const Checkbox = ({ checked, onChange }) => {
    
    const [value, setValue] = React.useState(checked); 
    
    const clicked = () => {
        setValue(!value);
        onChange(value);
    }

    return (
        <StyledCheckbox checked={ value } onClick={ clicked }>
            <TickIcon hidden={ !value }/>
        </StyledCheckbox>
    );
}

export default Checkbox;