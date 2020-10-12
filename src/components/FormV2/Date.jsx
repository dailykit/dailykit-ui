import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const Date = ({ id, name, hasError, ...props }) => {
   return (
      <Styles.Date
         id={id}
         name={name}
         type='date'
         hasError={hasError}
         {...props}
      />
   )
}

Date.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
}
