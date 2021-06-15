import React from 'react'
import Styled from './styled'
import { ArrowDownIcon, ArrowUpIcon, ThreeDots } from '../../assets/icons'
import { IconButton } from '../Button'
import { useOnClickOutside } from '../../hooks'
//import { useOnClickOutside } from '../../hooks'

export const ContextualMenu = ({ children }) => {
   const [isMenuOpen, setOpenMenu] = React.useState(false)
   const ref = React.useRef()
   useOnClickOutside(ref, () => {
      console.log('Clicked outside!')
      setOpenMenu(false)
   })
   
   return (
      <Styled.Wrapper ref={ref} >
         <IconButton
            type='ghost'
            size='sm'
            onClick={() => {
               console.log('ref')
               setOpenMenu(!isMenuOpen)
            }}
         >
            <ThreeDots color={isMenuOpen ? '#367BF5' : '#919699'} />
         </IconButton>
         {isMenuOpen && <Styled.Contexts>{children}</Styled.Contexts>}
      </Styled.Wrapper>
   )
}

export const Context = ({ children, title, handleClick }) => {
   const [open, setOpen] = React.useState(false)

   return (
      <Styled.Context>
         <Styled.ContextTitle
            onClick={() => {
               console.log('ref')
               children ? setOpen(!open) : handleClick()
            }}
         >
            <div>{title}</div>
            {children && <>{open ? <ArrowUpIcon /> : <ArrowDownIcon />}</>}
         </Styled.ContextTitle>
         {open && (
            <Styled.ContextOptions>
               {children && children}
            </Styled.ContextOptions>
         )}
      </Styled.Context>
   )
}
