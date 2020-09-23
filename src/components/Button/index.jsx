import React from 'react'

import {
   StyledTextButton,
   StyledIconButton,
   StyledComboButton,
   StyledButtonGroup
} from './styles'
import { LockIcon } from '../../assets/icons'

export const TextButton = ({ children, ...props }) => {
   const title =
      props.hasAccess === false
         ? props.fallBackMessage || "You don't have access to this action"
         : children
   return (
      <StyledTextButton
         {...props}
         disabled={props.hasAccess === false}
         title={title}
      >
         {children}
         {props.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </StyledTextButton>
   )
}

export const IconButton = ({ children, ...props }) => {
   const title =
      props.hasAccess === false
         ? props.fallBackMessage || "You don't have access to this action"
         : null
   return (
      <StyledIconButton
         {...props}
         disabled={props.hasAccess === false}
         title={title}
      >
         {children}
         {props.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </StyledIconButton>
   )
}

export const ComboButton = ({ children, ...props }) => {
   const position = typeof children[0] === 'string' ? 'right' : 'left'
   const title =
      props.hasAccess === false
         ? props.fallBackMessage || "You don't have access to this action"
         : position === 'left'
         ? children[1]
         : children[0]
   if (position === 'left') {
      return (
         <StyledComboButton
            position={position}
            {...props}
            title={title}
            disabled={props.hasAccess === false}
         >
            <span>{children[0]}</span>
            {children[1]}
            {props.hasAccess === false && (
               <span className='locked'>
                  <LockIcon />
               </span>
            )}
         </StyledComboButton>
      )
   }
   return (
      <StyledComboButton
         position={position}
         {...props}
         title={title}
         disabled={props.hasAccess === false}
      >
         {children[0]}
         <span>{children[1]}</span>
         {props.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </StyledComboButton>
   )
}

export const ButtonGroup = ({ children, ...props }) => (
   <StyledButtonGroup {...props}>{children}</StyledButtonGroup>
)
