import React from 'react'

import SingleSelect from './Single'
import MultiSelect from './Multi'

const ComboBox = ({ type, ...props }) =>
   type === 'single' ? <SingleSelect {...props} /> : <MultiSelect {...props} />

export default ComboBox
