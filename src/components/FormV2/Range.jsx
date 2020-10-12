import React from 'react'
import PropTypes from 'prop-types'

import Styles from './styles'

export const Range = ({ children }) => {
   return <Styles.Range>{children}</Styles.Range>
}

Range.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
