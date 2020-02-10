import React from 'react';

import { StyledCheckbox } from './styles';
import { TickIcon } from '../../assets/icons';

const Checkbox = ({ checked, onChange }) => {
    
    const [value, setValue] = React.useState(checked);

    const changeValue = (e) => {
        e.stopPropagation();
        setValue(!value);
    }
    
    React.useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <StyledCheckbox checked={ value } onClick={ changeValue }>
            <TickIcon hidden={ !value }/>
        </StyledCheckbox>
    );
}

export default Checkbox;