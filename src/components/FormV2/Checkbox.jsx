import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { CheckIcon } from '../../assets/icons'

export const Checkbox = ({ name, children, ...props }) => {
   return (
      <Styles.Checkbox>
         <input
            readOnly
            name={name}
            id='checkbox'
            type='checkbox'
            checked={props.value}
            onChange={props.onChange}
         />
         <label htmlFor='checkbox' tabIndex='-1'>
            <CheckIcon size='16' color='#fff' />
         </label>
         <span onClick={props.onChange}>{children}</span>
      </Styles.Checkbox>
   )
}

Checkbox.propTypes = {
   name: PropTypes.string,
   checked: PropTypes.bool.isRequired,
   setChecked: PropTypes.func.isRequired,
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
   ]).isRequired
}
