import React from 'react'

// Styles
import { StyledHelper } from './styled'

// Svgs
import { BulbIcon } from '../../../assets/svgs'

const Hint = props => (
   <StyledHelper type='hint' {...props}>
      <span>
         <BulbIcon />
      </span>
      {props.message}
   </StyledHelper>
)
const Error = props => (
   <StyledHelper type='error' {...props}>
      {props.message}
   </StyledHelper>
)

const HelperText = ({ type, ...props }) => {
   switch (type) {
      case 'hint':
         return <Hint {...props} />
      case 'error':
         return <Error {...props} />
      default:
         return <Hint {...props} />
   }
}
export default HelperText
