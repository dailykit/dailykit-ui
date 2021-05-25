import React from 'react'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected,
   StyledButton,
   Spinner
} from './styles'

import {
   SearchIcon,
   ArrowDownIcon,
   ArrowUpIcon,
   PlusIcon
} from '../../assets/icons'

import { useOnClickOutside } from '../../hooks'
import NoItemFound from './NoItemFound'

const LazyDropdown = ({
   options = [],
   placeholder,
   selectedOption,
   searchedOption,
   defaultOption = null, //default option with object
   defaultValue = null, //default value with index
   defaultName = null,
   typeName,
   addOption,
   variant,
   disabled,
   readOnly,
   handleClick,
   isLoading
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [selected, setSelected] = React.useState(null)
   const [optionsState, setOptionsState] = React.useState([])

   React.useEffect(() => {
      if (optionsState.length > 0) {
         if (defaultOption === null && defaultValue === null) {
            setSelected(null)
         } else if (
            defaultValue !== null &&
            defaultValue >= 0 &&
            defaultValue < optionsState.length
         ) {
            setSelected(defaultValue - 1)
         } else if (defaultOption !== null) {
            const index = optionsState.findIndex(
               item => item.id === defaultOption.id
            )
            if (index >= 0) {
               setSelected(index)
            }
         }
      }
   }, [defaultValue, defaultOption, optionsState])

   const matchedOptions = optionsState.filter(o =>
      o.title.toLowerCase().includes(keyword)
   )

   useOnClickOutside(ref, () => {
      setKeyword('')
      setIsOptionsVisible(false)
   })

   const handleOptionClick = option => {
      const index = optionsState.findIndex(op => op.id === option.id)
      setKeyword('')
      setSelected(index)
      selectedOption(option)
      setIsOptionsVisible(!isOptionsVisible)
   }
   const onDropdownSelcted = () => {
      setIsOptionsVisible(!isOptionsVisible)
      setOptionsState(options)
      handleClick()
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
                     title={optionsState[selected].title}
                     onClick={() => {
                        if (!readOnly) {
                           setKeyword('')
                           setSelected(null)
                           setIsOptionsVisible(true)
                        }
                     }}
                  >
                     {optionsState[selected].title}
                  </span>
               ) : defaultName !== null ? (
                  <span
                     data-type='text'
                     title={defaultName}
                     onClick={() => {
                        if (!readOnly) {
                           setKeyword('')
                           setSelected(null)
                           setIsOptionsVisible(true)
                        }
                     }}
                  >
                     {defaultName}
                  </span>
               ) : (
                  <>
                     {isOptionsVisible && (
                        <span data-type='icon'>
                           <SearchIcon color='#919699' size='12px' />
                        </span>
                     )}
                     <input
                        type='text'
                        value={keyword}
                        disabled={readOnly || disabled}
                        placeholder={
                           typeName
                              ? `${
                                   isOptionsVisible ? 'search' : 'select'
                                } ${typeName}`
                              : `${placeholder}`
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
               <button disabled={disabled} onClick={onDropdownSelcted}>
                  {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
               </button>
            )}
         </StyledSelected>
         {!readOnly && isOptionsVisible && (
            <StyledOptions variant={variant} matchedOptions={matchedOptions}>
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
               {isLoading && (
                  <span data-type='spinner'>
                     <Spinner variant='secondary' />
                  </span>
               )}
            </StyledOptions>
         )}
      </StyledSelect>
   )
}

export default LazyDropdown