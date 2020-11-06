import React from 'react'

import { Styles } from './styles'
import { LockIcon } from '../../assets/icons'

export const TextButton = ({ children, ...props }) => {
   const title =
      props?.hasAccess === false
         ? props?.fallBackMessage || "You don't have access to this action"
         : props?.title || ''
   return (
      <Styles.TextButton
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         disabled={props?.hasAccess === false || props?.disabled}
      >
         {children}
         {props?.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.TextButton>
   )
}

export const IconButton = ({ children, ...props }) => {
   const title =
      props?.hasAccess === false
         ? props?.fallBackMessage || "You don't have access to this action"
         : props?.title || ''
   return (
      <Styles.IconButton
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         disabled={props?.hasAccess === false || props?.disabled}
      >
         {children}
         {props?.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.IconButton>
   )
}

export const ComboButton = ({ children, ...props }) => {
   const position = typeof children[0] === 'string' ? 'right' : 'left'
   const title =
      props?.hasAccess === false
         ? props?.fallBackMessage || "You don't have access to this action"
         : props?.title || ''
   if (position === 'left') {
      return (
         <Styles.ComboButton
            position={position}
            {...props}
            title={props?.disabled ? 'Disabled' : title}
            disabled={props?.hasAccess === false || props?.disabled}
         >
            <span>{children[0]}</span>
            {children[1]}
            {props?.hasAccess === false && (
               <span className='locked'>
                  <LockIcon />
               </span>
            )}
         </Styles.ComboButton>
      )
   }
   return (
      <Styles.ComboButton
         position={position}
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         disabled={props?.hasAccess === false || props?.disabled}
      >
         {children[0]}
         <span>{children[1]}</span>
         {props?.hasAccess === false && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.ComboButton>
   )
}

export const ButtonGroup = ({ children, ...props }) => (
   <Styles.ButtonGroup {...props}>{children}</Styles.ButtonGroup>
)
