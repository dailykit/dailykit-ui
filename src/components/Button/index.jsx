import React from 'react'

import { Styles, StyledOptions, StyledOption } from './styles'

import {
   LockIcon,
   ArrowDownIcon,
   SearchIcon,
   ArrowUpIcon
} from '../../assets/icons'
import { useOnClickOutside } from '../../hooks'
import { Spacer } from '../Spacer'

export const TextButton = ({ children, ...props }) => {
   const title =
      props?.hasAccess === false
         ? props?.fallBackMessage || "You don't have access to this action"
         : props?.title || ''

   return (
      <Styles.TextButton
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         disabled={
            props?.hasAccess === false || props?.disabled || props?.isLoading
         }
      >
         {props?.isLoading ? (
            <>
               <span data-type='spinner'>
                  <Spinner type={props?.type} variant={props?.variant} />
               </span>
               {children}
            </>
         ) : (
            <>
               {children}
               {props?.hasAccess === false && (
                  <span className='locked'>
                     <LockIcon />
                  </span>
               )}
            </>
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
         disabled={
            props?.hasAccess === false || props?.disabled || props?.isLoading
         }
      >
         {props?.isLoading ? (
            <Spinner type={props?.type} variant={props?.variant} />
         ) : (
            <>
               {children}
               {props?.hasAccess === false && (
                  <span className='locked'>
                     <LockIcon />
                  </span>
               )}
            </>
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
            disabled={
               props?.hasAccess === false || props?.disabled || props?.isLoading
            }
         >
            {props?.isLoading ? (
               <Spinner type={props?.type} variant={props?.variant} />
            ) : (
               <>
                  <span>{children[0]}</span>
                  {children[1]}
                  {props?.hasAccess === false && (
                     <span className='locked'>
                        <LockIcon />
                     </span>
                  )}
               </>
            )}
         </Styles.ComboButton>
      )
   }
   return (
      <Styles.ComboButton
         position={position}
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         disabled={
            props?.hasAccess === false || props?.disabled || props?.isLoading
         }
      >
         {props?.isLoading ? (
            <Spinner type={props?.type} variant={props?.variant} />
         ) : (
            <>
               {children[0]}
               <span>{children[1]}</span>
               {props?.hasAccess === false && (
                  <span className='locked'>
                     <LockIcon />
                  </span>
               )}
            </>
         )}
      </Styles.ComboButton>
   )
}

export const DropdownButton = ({ children, options, ...props }) => {
   const ref = React.useRef(null)
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)

   const title =
      props?.hasAccess === false
         ? props?.fallBackMessage || "You don't have access to this action"
         : props?.title || ''

   useOnClickOutside(ref, () => {
      setIsOptionsVisible(false)
   })

   return (
      <Styles.TextButton
         ref={ref}
         {...props}
         title={props?.disabled ? 'Disabled' : title}
         onClick={() => setIsOptionsVisible(!isOptionsVisible)}
         disabled={
            props?.hasAccess === false || props?.disabled || props?.isLoading
         }
      >
         {props?.isLoading ? (
            <>
               <span data-type='spinner'>
                  <Spinner type={props?.type} variant={props?.variant} />
               </span>
               {children}
            </>
         ) : (
            <>
               {children}
               {props?.hasAccess === false && (
                  <span className='locked'>
                     <LockIcon />
                  </span>
               )}
            </>
         )}
         <Spacer xAxis size='10px' />
         {isOptionsVisible ? (
            <ArrowUpIcon color='#fff' />
         ) : (
            <ArrowDownIcon color='#fff' />
         )}

         {isOptionsVisible && (
            <StyledOptions options={options}>
               {options.map(option => (
                  <StyledOption
                     key={option.id}
                     title={option.title}
                     onClick={() => option.handleOnClick()}
                  >
                     <TextButton type='ghost' variant='primary'>
                        {option.title}
                     </TextButton>
                  </StyledOption>
               ))}
            </StyledOptions>
         )}
      </Styles.TextButton>
   )
}

export const ButtonGroup = ({ children, ...props }) => (
   <Styles.ButtonGroup {...props}>{children}</Styles.ButtonGroup>
)

const Loader = props => {
   return (
      <Styles.Loader {...props}>
         <div className='loader__divs' />
         <div className='loader__divs' />
         <div className='loader__divs' />
         <div className='loader__divs' />
      </Styles.Loader>
   )
}

const Spinner = props => {
   return (
      <Styles.Spinner {...props}>
         <div className='spinner__divs' />
         <div className='spinner__divs' />
         <div className='spinner__divs' />
         <div className='spinner__divs' />
      </Styles.Spinner>
   )
}
