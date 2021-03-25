import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { ErrorIcon } from '../../assets/icons'

export const Error = ({ children, ...props }) => {
   return (
      <Styles.Error {...props}>
         <span>
            <ErrorIcon size={16} color='#c82727' />
         </span>
         <p>{children}</p>
      </Styles.Error>
   )
}

Error.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
