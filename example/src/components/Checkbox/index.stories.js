import React from 'react'
import { Checkbox } from '@dailykit/ui'

export default {
   title: 'Checkbox'
}

export const CheckboxField = () => {
   const [checked, setChecked] = React.useState(true)
   return (
      <React.Fragment>
         <Checkbox id='label' checked={checked} onChange={setChecked}>
            Yo, this is a label!
         </Checkbox>
      </React.Fragment>
   )
}
