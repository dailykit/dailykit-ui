import React from 'react'

import Password from './Password'
import Text from './Text'
import TextArea from './TextArea'
import RadioGroup from './RadioGroup'
import HelperText from './HelperText'
import SearchBox from './SearchBox'

const Input = props => {
   switch (props.type) {
      case 'text':
         return <Text {...props} />
      case 'password':
         return <Password {...props} />
      case 'textarea':
         return <TextArea {...props} />
      default:
         return <Text {...props} />
   }
}

export { Input, RadioGroup, HelperText, SearchBox }
