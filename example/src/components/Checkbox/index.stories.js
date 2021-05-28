import React from 'react'
import { Checkbox } from '@dailykit/ui'

export default {
   title: 'Checkbox'
}

export const Normal = () => {
   const [checked, setChecked] = React.useState(false)
   return (
      <React.Fragment>
         <Checkbox id='label' checked={checked} onChange={setChecked}>
            Yo, this is a label!
         </Checkbox>
      </React.Fragment>
   )
}

export const WithMinusIcon = () => {
   const [checked, setChecked] = React.useState(false)
   return (
      <React.Fragment>
         <Checkbox
            id='label'
            checked={checked}
            onChange={setChecked}
            isAllSelected={false}
         >
            Checkbox with 3 states
         </Checkbox>
      </React.Fragment>
   )
}
