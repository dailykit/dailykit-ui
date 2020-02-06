import React from 'react';

import { StyledCheckbox } from './styles';
import { Tick } from '../../assets/icons';

const Checkbox = ({ checked, onChange }) => {
    
    const [value, setValue] = React.useState(checked); 
    
    const clicked = () => {
        setValue(!value);
        onChange(value);
    }

    return (
        <StyledCheckbox checked={ value } onClick={ clicked }>
            <Tick hidden={ !value }/>
        </StyledCheckbox>
    );
}

export default Checkbox;