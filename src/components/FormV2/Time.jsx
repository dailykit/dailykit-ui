import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const Time = ({ id, name, hasError, ...props }) => {
   return (
      <Styles.Time
         id={id}
         name={name}
         type='time'
         hasError={hasError}
         {...props}
      />
   )
}

Time.propTypes = {
   hasError: PropTypes.bool,
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
}
