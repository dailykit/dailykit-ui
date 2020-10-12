import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const Password = ({ id, name, hasError, placeholder, ...rest }) => {
   return (
      <Styles.Text
         id={id}
         name={name}
         type='password'
         hasError={hasError}
         placeholder={placeholder}
         {...rest}
      />
   )
}

Password.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   placeholder: PropTypes.string.isRequired
}
