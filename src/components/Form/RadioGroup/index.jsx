import React from 'react';

import { RadioButton } from '../styles';

const RadioGroup = ({ options, active, onChange }) => {

    const [selected, setSelected] = React.useState(active);

    const select = (option) => {
        setSelected(option.id);
        onChange(option);
    }

    return (
        <React.Fragment>
            {
                options.map(
                    option => 
                        <RadioButton 
                            key={ option.id }
                            onClick={ () => select(option) }
                            active={ selected === option.id }>
                                { option.title }
                        </RadioButton>
                    )
            }
        </React.Fragment>
    )
}

export default RadioGroup;