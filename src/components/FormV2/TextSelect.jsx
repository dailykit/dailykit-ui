import React from 'react'
import PropTypes from 'prop-types'

import Styles from './styles'

export const TextSelect = ({ children }) => {
   return <Styles.TextSelect>{children}</Styles.TextSelect>
}

TextSelect.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
