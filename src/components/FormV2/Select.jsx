import React from 'react'

import PropTypes from 'prop-types'

import Styles from './styles'
import { LockIcon } from '../../assets/icons'

export const Select = ({
   id,
   name,
   options = [],
   placeholder,
   hasReadAccess = true,
   hasWriteAccess = true,
   fallBackMessage = "You don't have access to this field",
   ...props
}) => {
   const title =
      hasWriteAccess === false || hasReadAccess === false
         ? fallBackMessage
         : null
   return (
      <Styles.Field
         title={title}
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
      >
         <Styles.Select id={id} name={name} {...props}>
            {options.map(option => (
               <option
                  key={option.id}
                  value={Boolean(option?.value) ? option.value : option.title}
               >
                  {option.title}
               </option>
            ))}
         </Styles.Select>
         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </Styles.Field>
   )
}

Select.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   options: PropTypes.array.isRequired,
   placeholder: PropTypes.string.isRequired
}
