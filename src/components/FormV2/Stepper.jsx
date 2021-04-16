import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { Number } from './Number'
import { LockIcon, PlusIcon, MinusIcon } from '../../assets/icons'
import { IconButton } from '../../components/Button'

export const Stepper = ({
   id,
   name,
   value,
   hasError,
   placeholder,
   onChange,
   fieldName,
   textBefore,
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
            <span>{fieldName} : </span>
            {textBefore && (
               <span style={{ padding: '6px', fontSize: '20px' }}>
                  {textBefore}
               </span>
            )}
            <IconButton
               disabled={value <= 0}
               type='ghost'
               size='sm'
               onClick={decrement}
            >
               <MinusIcon color='#202020' />
            </IconButton>
            <Number
               id={id}
               name={name}
               type='number'
               value={value}
               placeholder={placeholder ? placeholder : 0}
               onChange={e => onChange(e.target.value)}
            />

            <IconButton type='ghost' size='sm' onClick={increment}>
               <PlusIcon color='#202020' />
            </IconButton>
            {unitText && (
               <span style={{ color: '#202020', fontSize: '20px' }}>
                  {unitText}
               </span>
            )}
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
