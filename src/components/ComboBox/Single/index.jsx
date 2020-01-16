import React from 'react'
import { useClickAway } from 'react-use'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected
} from './styles'

import {
   ClearIcon,
   SearchIcon,
   ArrowDownIcon,
   ArrowUpIcon
} from '../../../assets/icons'

const SingleSelect = ({ options, placeholder, selectedOption }) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [selected, setSelected] = React.useState(null)
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)

   useClickAway(ref, () => {
      setIsOptionsVisible(false)
   })

   return (
      <StyledSelect ref={ref}>
         <StyledSelected selected={selected}>
            <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               {selected !== null ? (
                  <>
                     <span data-type='text' title={options[selected].title}>
                        {options[selected].title}
                     </span>
                     <span data-type='icon' onClick={() => setSelected(null)}>
                        <ClearIcon />
                     </span>
                  </>
               ) : (
                  <>
                     <span data-type='icon'>
                        <SearchIcon />
                     </span>
                     <input
                        type='text'
                        placeholder={placeholder}
                        value={keyword}
                        onChange={e => setKeyword(e.target.value.toLowerCase())}
                        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
                     />
                  </>
               )}
            </div>
            <span onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
         </StyledSelected>
         {isOptionsVisible && (
            <StyledOptions>
               {options
                  .filter(option =>
                     option.title.toLowerCase().includes(keyword)
                  )
                  .map((option, index) => (
                     <StyledOption
                        key={option.id}
                        title={option.title}
                        isSelected={selected === index}
                        onClick={() => {
                           setKeyword('')
                           setSelected(index)
                           selectedOption(option)
                           setIsOptionsVisible(!isOptionsVisible)
                        }}
                     >
                        <span>{option.title}</span>
                        {option.description && <p>{option.description}</p>}
                     </StyledOption>
                  ))}
            </StyledOptions>
         )}
      </StyledSelect>
   )
}

export default SingleSelect
