import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const TextArea = ({ id, name, hasError, placeholder, ...props }) => {
   return (
      <Styles.TextArea
         id={id}
         name={name}
         hasError={hasError}
         placeholder={placeholder}
         {...props}
      />
   )
}

TextArea.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
