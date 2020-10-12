import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { Number } from './Number'
import { UpIcon, DownIcon } from '../../assets/icons'

export const Stepper = ({
   id,
   name,
   value,
   hasError,
   placeholder,
   onChange
}) => {
   const increment = () => onChange(value + 1)
   const decrement = () => value > 0 && onChange(value - 1)

   return (
      <Styles.Stepper hasError={hasError}>
         <Number
            id={id}
            name={name}
            type='number'
            value={value}
            placeholder={placeholder}
            onChange={e => onChange(e.target.value)}
         />
         <div>
            <button onClick={increment}>
               <UpIcon />
            </button>
            <button onClick={decrement}>
               <DownIcon />
            </button>
         </div>
      </Styles.Stepper>
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
