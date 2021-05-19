import React from 'react'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected
} from './styles'

import { SearchIcon, ArrowDownIcon, ArrowUpIcon } from '../../../assets/icons'

import { useOnClickOutside } from '../../../hooks'
import NoItemFound from './NoItemFound'

const SingleSelect = ({
   options = [],
   placeholder,
   selectedOption,
   searchedOption,
   defaultOption = null, //default option with object
   defaultValue = null, //default value with index
   typeName,
   addOption,
   variant,
   disabled,
   readOnly
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [selected, setSelected] = React.useState(null)

   React.useEffect(() => {
      if (options.length > 0) {
         if (defaultOption === null && defaultValue === null) {
            setSelected(null)
         } else if (
            defaultValue !== null &&
            defaultValue >= 0 &&
            defaultValue < options.length
         ) {
            setSelected(defaultValue - 1)
         } else if (defaultOption !== null) {
            const index = options.findIndex(
               item => item.id === defaultOption.id
            )
            if (index >= 0) {
               setSelected(index)
            }
         }
      }
   }, [defaultValue, defaultOption, options])

   const matchedOptions = options.filter(o =>
      o.title.toLowerCase().includes(keyword)
   )

   useOnClickOutside(ref, () => {
      setKeyword('')
      setIsOptionsVisible(false)
   })

   const handleOptionClick = option => {
      const index = options.findIndex(op => op.id === option.id)
      setKeyword('')
      setSelected(index)
      selectedOption(option)
      setIsOptionsVisible(!isOptionsVisible)
   }

   return (
      <StyledSelect
         ref={ref}
         variant={variant}
         isOptionsVisible={isOptionsVisible}
      >
         <StyledSelected
            disabled={disabled}
            selected={selected}
            isOptionsVisible={isOptionsVisible}
            variant={variant}
         >
            <div>
               {selected !== null ? (
                  <span
                     data-type='text'
                     title={options[selected].title}
                     onClick={() => {
                        if (!readOnly) {
                           setKeyword('')
                           setSelected(null)
                           setIsOptionsVisible(true)
                        }
                     }}
                  >
                     {options[selected].title}
                  </span>
               ) : (
                  <>
                     <span data-type='icon'>
                        <SearchIcon color='#919699' size='12px' />
                     </span>
                     <input
                        type='text'
                        value={keyword}
                        disabled={readOnly || disabled}
                        placeholder={
                           typeName ? `select ${typeName}` : `${placeholder}`
                        }
                        onChange={e =>
                           searchedOption(e.target.value) ||
                           setKeyword(e.target.value.toLowerCase())
                        }
                        onFocus={() => setIsOptionsVisible(true)}
                     />
                  </>
               )}
            </div>
            {!readOnly && (
               <button
                  disabled={disabled}
                  onClick={() => {
                     setKeyword('')
                     setSelected(null)
                     setIsOptionsVisible(!isOptionsVisible)
                  }}
               >
                  {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
               </button>
            )}
         </StyledSelected>
         {!readOnly && isOptionsVisible && (
            <StyledOptions variant={variant}>
               {matchedOptions.map((option, index) => (
                  <StyledOption
                     key={option.id}
                     title={option.title}
                     isSelected={selected === index}
                     onClick={() => handleOptionClick(option)}
                     description={option?.description || ''}
                  >
                     <div>
                        <span>{option.title}</span>
                        {option?.description && <p>{option.description}</p>}
                     </div>
                  </StyledOption>
               ))}
               {!matchedOptions.length && (
                  <NoItemFound
                     addOption={addOption}
                     keyword={keyword}
                     typeName={typeName}
                  />
               )}
            </StyledOptions>
         )}
      </StyledSelect>
   )
}

export default SingleSelect
