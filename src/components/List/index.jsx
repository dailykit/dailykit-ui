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
import QuickCreate from './QuickCreate'

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

export const ListOptions = ({
   search = '',
   children,
   handleOnCreate,
   ...props
}) => {
   
   const renderedOptions = children.map(child =>
      child.props.title?.toLowerCase()
   )
   const [isQuickCreateRendered, setIsQuickCreateRendered] = React.useState(
      false
   )
   React.useEffect(() => {
      const typedWord = search.trim()
      if (typedWord) {
         const found = renderedOptions.includes(typedWord)
         if (found) {
            setIsQuickCreateRendered(false)
         } else {
            setIsQuickCreateRendered(true)
         }
      } else {
         setIsQuickCreateRendered(false)
      }
   }, [search])

   return (
      <StyledOptions {...props}>
         {isQuickCreateRendered && (
            <QuickCreate keyword={search} addOption={handleOnCreate} />
         )}
         {!children.length ? (
            <p> {search.trim() ? `no ${search.trim()} found` : 'not found'} </p>
         ) : (
            children
         )}
      </StyledOptions>
   )
}
