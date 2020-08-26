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

const SingleSelect = ({
   options = [],
   placeholder,
   selectedOption,
   searchedOption,
   defaultValue = null
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [selected, setSelected] = React.useState(null)

   React.useEffect(() => {
      if (defaultValue !== null) {
         setSelected(defaultValue - 1)
      }
   }, [defaultValue])

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
                        value={keyword}
                        placeholder={placeholder}
                        onChange={e =>
                           searchedOption(e.target.value) ||
                           setKeyword(e.target.value.toLowerCase())
                        }
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
