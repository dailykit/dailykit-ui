import React from 'react'

import { RadioButton } from '../styles'

const RadioGroup = ({ options, active, onChange }) => {
   const [selected, setSelected] = React.useState(null)

   const select = option => {
      if (selected === option.id) {
         setSelected(null)
         onChange(null)
         return
      }
      setSelected(option.id)
      onChange(option)
   }

   React.useEffect(() => {
      setSelected(active)
   }, [active])

   return (
      <React.Fragment>
         {options.map(option => (
            <RadioButton
               key={option.id}
               onClick={() => select(option)}
               active={selected === option.id}
            >
               {option.title}
            </RadioButton>
         ))}
      </React.Fragment>
   )
}

export default RadioGroup
