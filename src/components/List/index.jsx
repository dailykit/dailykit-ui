import React from 'react'

import { StyledList, StyledSearch, StyledOptions } from './styled'

import { SearchIcon } from '../../assets/icons'

export const List = ({ children, ...props }) => (
   <StyledList {...props}>{children}</StyledList>
)

export const ListSearch = ({ placeholder, onChange, children, ...props }) => {
   const [input, setInput] = React.useState('')
   const handleChange = value => {
      setInput(value)
      onChange(value.toLowerCase())
   }
   return (
      <StyledSearch {...props}>
         <span>
            <SearchIcon size={18} />
         </span>
         <input
            type='text'
            value={input}
            onChange={e => handleChange(e.target.value)}
            placeholder={placeholder}
         />
         {children}
      </StyledSearch>
   )
}

export const ListOptions = ({ children, ...props }) => (
   <StyledOptions {...props}>{children}</StyledOptions>
)
