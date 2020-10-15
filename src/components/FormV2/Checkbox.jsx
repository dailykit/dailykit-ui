import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { CheckIcon } from '../../assets/icons'

export const Checkbox = ({ name, children, ...props }) => {
   return (
      <Styles.Checkbox>
         <input
            readOnly
            id={name}
            name={name}
            type='checkbox'
            checked={props.value}
            onChange={props.onChange}
         />
         <label htmlFor={name} tabIndex='-1'>
            <CheckIcon size='16' color='#fff' />
         </label>
         <span onClick={props.onChange}>{children}</span>
      </Styles.Checkbox>
   )
}

Checkbox.propTypes = {
   name: PropTypes.string,
   value: PropTypes.bool.isRequired,
   onChange: PropTypes.func.isRequired,
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
