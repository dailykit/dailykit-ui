import React from 'react'

import { StyledCheckbox } from './styles'
import { TickIcon } from '../../assets/icons'

const Checkbox = ({ id, checked, children, onChange }) => {
   console.log('TCL: Checkbox -> children', children)
   return (
      <StyledCheckbox isChecked={checked}>
         <input type='checkbox' id={id} />
         <span onClick={() => onChange(!checked)}>
            {checked && <TickIcon />}
         </span>
         {typeof children === 'string' && (
            <label htmlFor={id} onClick={() => onChange(!checked)}>
               {children}
            </label>
         )}
      </StyledCheckbox>
   )
}

export default Checkbox
