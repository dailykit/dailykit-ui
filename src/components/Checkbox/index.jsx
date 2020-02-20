import React from 'react';

import { StyledCheckbox, HiddenCheckbox } from './styles';
import { CheckIcon } from '../../assets/icons';

const Checkbox = ({ checked, label, ...props }) => {
    return (
        <label>
          <HiddenCheckbox checked={checked} {...props} />
          <StyledCheckbox checked={checked}>
            <CheckIcon color="#fff" size="12" />
          </StyledCheckbox>
          {label}
        </label>
      );
}

export default Checkbox;