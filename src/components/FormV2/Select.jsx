import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const Select = ({ id, name, options = [], placeholder, ...rest }) => {
   return (
      <Styles.Select id={id} name={name} type='text' {...rest}>
         {options.map(option => (
            <option key={option.id} value={option.title}>
               {option.title}
            </option>
         ))}
      </Styles.Select>
   )
}

Select.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string.isRequired
}
