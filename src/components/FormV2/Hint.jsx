import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { InfoIcon } from '../../assets/icons'

export const Hint = ({ children }) => {
   return (
      <Styles.Hint>
         <span>
            <InfoIcon size={16} color='#737378' />
         </span>
         <p>{children}</p>
      </Styles.Hint>
   )
}

Hint.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
