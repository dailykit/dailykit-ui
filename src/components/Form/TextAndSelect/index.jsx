import React from 'react'

import { Text } from '../'
import { DropDown, TextAndSelectStyle } from '../styles'
import { ArrowDownIcon, ArrowUpIcon } from '../../../assets/icons'

const TextAndSelect = ({ label, name, value, options, onChange }) => {
   const [unit, setUnit] = React.useState(options[0])
   const [field, setField] = React.useState({ name, value })
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)

   const handleTextChange = e => {
      setField({ name: e.target.name, value: e.target.value })
   }

   const handleOptionChange = option => {
      setUnit(option)
      setIsOptionsVisible(false)
   }

   React.useEffect(() => {
      onChange({ field, unit })
   }, [field, unit])

   return (
      <TextAndSelectStyle>
         <Text
            label={label}
            name={field.name}
            value={field.value}
            onChange={handleTextChange}
         />
         <DropDown>
            <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               <span>{unit.title}</span>
               <span>
                  {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
               </span>
            </div>
            <div hidden={!isOptionsVisible}>
               {options.map(option => {
                  if (option.id !== unit.id)
                     return (
                        <div
                           key={option.id}
                           onClick={() => handleOptionChange(option)}
                        >
                           {option.title}
                        </div>
                     )
               })}
            </div>
         </DropDown>
      </TextAndSelectStyle>
   )
}

export default TextAndSelect
