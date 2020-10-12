import React from 'react'
import PropTypes from 'prop-types'

import Styles from './styles'

export const Number = ({ id, name, hasError, placeholder, ...props }) => {
   return (
      <Styles.Number
         id={id}
         name={name}
         type='number'
         hasError={hasError}
         placeholder={placeholder}
         pattern='/^(([0-9]*)|(([0-9]*)\.([0-9]*)))$/'
         {...props}
      />
   )
}

Number.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.number.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
