import React from 'react'
import { Checkbox } from '@dailykit/ui'

export default {
   title: 'Checkbox'
}

export const CheckboxField = () => {
   const [checked, setChecked] = React.useState(false)

   return (
      <React.Fragment>
         <Checkbox
            checked={ checked }
            onChange={ (checked) => setChecked(checked) }
         /> 
         <span>Yes, I love Dailykit!</span>
      </React.Fragment>
   )
}