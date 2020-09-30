import React from 'react'

import { StyledCheckbox, Label, Input, Checkbox } from './styles'

const Toggle = ({ isDisabled, label, checked, setChecked }) => {
   return (
      <StyledCheckbox>
         <span
            onClick={e => {
               e.stopPropagation()
               setChecked(!checked)
            }}
         >
            {label}
         </span>
         <Label>
            <Input
               type='checkbox'
               checked={checked}
               isDisabled={isDisabled}
               onChange={e => {
                  setChecked(e.target.checked)
               }}
            />
            <Checkbox />
         </Label>
      </StyledCheckbox>
   )
}

export default Toggle
