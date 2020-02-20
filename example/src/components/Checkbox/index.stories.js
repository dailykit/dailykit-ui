import React from 'react'
import { Checkbox } from '@dailykit/ui'

export default {
   title: 'Checkbox'
}

export const CheckboxField = () => {
   const [checked, setChecked] = React.useState(true)
   return (
      <React.Fragment>
         <Checkbox
            checked={ checked }
            onChange={ (e) => setChecked(e.target.checked) }
         >
         Yes! I love DailyKit!
         </Checkbox> 
      </React.Fragment>
   )
}
