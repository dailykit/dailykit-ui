import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { Number } from './Number'
import { UpIcon, DownIcon, LockIcon } from '../../assets/icons'

export const Stepper = ({
   id,
   name,
   value,
   hasError,
   placeholder,
   onChange,
   unitText,
   hasReadAccess = true,
   hasWriteAccess = true,
   fallBackMessage = "You don't have access to this field",
   ...rest
}) => {
   const increment = () => onChange(value ? value + 1 : 1)
   const decrement = () => value > 0 && onChange(value - 1)
   const title =
      hasWriteAccess === false || hasReadAccess === false
         ? fallBackMessage
         : null
   return (
      <Styles.Field
         title={title}
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
      >
         <Styles.Stepper hasError={hasError} {...rest}>
            <Number
               id={id}
               name={name}
               type='number'
               value={value}
               placeholder={placeholder}
               onChange={e => onChange(e.target.value)}
            />
            <div>
               <div>
                  <button onClick={increment}>
                     <UpIcon />
                  </button>
                  <button onClick={decrement}>
                     <DownIcon />
                  </button>
               </div>

               <span>{unitText && unitText}</span>
            </div>
         </Styles.Stepper>
         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.Field>
   )
}

Stepper.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
