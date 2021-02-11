import React from 'react'

import { Flex } from '../Flex'
import { ComboButton } from '../Button'
import { PlusIcon, SearchIcon } from '../../assets/icons'
import {
   StyledList,
   StyledSearch,
   StyledOptions,
   StyledListLabel
} from './styled'

export const List = ({ children, ...props }) => (
   <StyledList {...props}>{children}</StyledList>
)

export const ListHeader = ({ type = 'SSL1', ...props }) => {
   switch (type) {
      case 'SSL1':
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
      case 'SSL2':
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
      case 'SSL22':
         return (
            <Flex padding='4px 14px' container justifyContent='space-between'>
               {props?.label?.left && (
                  <StyledListLabel>{props?.label?.left}</StyledListLabel>
               )}
               {props?.label?.right && (
                  <StyledListLabel>{props?.label?.right}</StyledListLabel>
               )}
            </Flex>
         )
      case 'MSL1':
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
      case 'MSL2':
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
      case 'MSL31':
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
      case 'MSL111':
         return (
            <Flex padding='4px 14px' container justifyContent='space-between'>
               {props?.label?.left && (
                  <StyledListLabel>{props?.label?.left}</StyledListLabel>
               )}
               {props?.label?.right && (
                  <StyledListLabel>{props?.label?.right}</StyledListLabel>
               )}
            </Flex>
         )
      case 'MSL1101':
         return (
            <Flex padding='4px 14px' container justifyContent='space-between'>
               {props?.label?.left && (
                  <StyledListLabel>{props?.label?.left}</StyledListLabel>
               )}
               {props?.label?.right && (
                  <StyledListLabel>{props?.label?.right}</StyledListLabel>
               )}
            </Flex>
         )
      default:
         return (
            <Flex padding='4px 14px'>
               {props?.label && (
                  <StyledListLabel>{props?.label}</StyledListLabel>
               )}
            </Flex>
         )
   }
}

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

export const ListOptions = ({ search, children, onCreate, ...props }) => {
   const text = React.useMemo(() => {
      return search
         ? `Add ${search.slice(0, 1).toUpperCase() + search.slice(1)}`
         : ''
   }, [search])

   return (
      <StyledOptions {...props}>
         {children.length ? (
            children
         ) : (
            <>
               {search && onCreate && (
                  <Flex padding='0px 0px 0px 14px'>
                     <ComboButton size='sm' type='solid' onClick={onCreate}>
                        {text}
                        <PlusIcon color='#fff' size={12} />
                     </ComboButton>
                  </Flex>
               )}
            </>
         )}
      </StyledOptions>
   )
}
