import React from 'react'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledAddOption
} from './styles'

import { RemoveIcon, PlusIcon } from '../../assets/icons'

const Select = ({ option, options, placeholder, addOption, removeOption }) => {
   return option ? (
      <StyledSelect>
         <StyledOptions>
            {Object.keys(option).length > 0 && (
               <StyledOption key={option.id}>
                  <span>{option.title}</span>
                  <span onClick={() => removeOption(option)}>
                     <RemoveIcon />
                  </span>
               </StyledOption>
            )}
         </StyledOptions>
         {Object.keys(option).length === 0 && (
            <StyledAddOption onClick={() => addOption()}>
               <PlusIcon color='#555B6E' />
               <span>{placeholder}</span>
            </StyledAddOption>
         )}
      </StyledSelect>
   ) : (
      <StyledSelect>
         <StyledOptions>
            {options.map(option => (
               <StyledOption key={option.id}>
                  <span>{option.title}</span>
                  <span onClick={() => removeOption(option)}>
                     <RemoveIcon />
                  </span>
               </StyledOption>
            ))}
         </StyledOptions>
         <StyledAddOption onClick={() => addOption()}>
            <PlusIcon color='#555B6E' />
            {options.length === 0 && <span>{placeholder}</span>}
         </StyledAddOption>
      </StyledSelect>
   )
}

export default Select
