import React from 'react'

import { StyledCheckbox } from './styles'
import { TickIcon, MinusIcon } from '../../assets/icons'

const Checkbox = ({ id, checked, children, onChange, isAllSelected }) => {
   return (
      <StyledCheckbox isChecked={checked}>
         <input type='checkbox' id={id} />
         <span onClick={() => onChange(!checked)}>
            {checked ? (
               <TickIcon />
            ) : isAllSelected ? (
               <TickIcon />
            ) : isAllSelected === false ? (
               <MinusIcon />
            ) : null}
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
