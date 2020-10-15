import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'

export const Toggle = ({ name, children, ...props }) => {
   return (
      <Styles.Toggle>
         <span onClick={props.onChange}>{children}</span>
         <input
            readOnly
            id={name}
            name={name}
            type='checkbox'
            checked={props.value}
            onChange={props.onChange}
         />
         <label htmlFor={name} />
      </Styles.Toggle>
   )
}

Toggle.propTypes = {
   name: PropTypes.string,
   value: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
