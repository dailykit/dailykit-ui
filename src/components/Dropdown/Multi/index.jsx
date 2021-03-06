import React from 'react'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected,
   SelectedOptions,
   HiddenOptions,
   QuickCreateWrappper,
   NoItemFoundWrapper
} from './styles'

import {
   ClearIcon,
   SearchIcon,
   ArrowDownIcon,
   ArrowUpIcon,
   CloseIcon
} from '../../../assets/icons'

import { useOnClickOutside } from '../../../hooks'
import QuickCreate from '../Single/QuickCreate'

const optionExists = (options, item) => {
   for (let option of options) {
      if (option.id === item) {
         return true
      }
   }
   return false
}

const MultiSelect = ({
   options,
   placeholder,
   selectedOption,
   searchedOption,
   defaultOptions = [],
   defaultIds = [],
   addOption,
   typeName
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [selectedOptions, setSelectedOptions] = React.useState([])
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [hiddenOptions, setHiddenOptions] = React.useState(false)

   useOnClickOutside(ref, () => {
      setIsOptionsVisible(false)
      setHiddenOptions(false)
   })

   const selectOption = option => {
      setKeyword('')

      const exists = optionExists(selectedOptions, option.id)
      const withRemoved = selectedOptions.filter(opt => opt.id !== option.id)
      const withAdded = [...selectedOptions, option]

      // Pass to parent
      selectedOption(exists ? withRemoved : withAdded)

      // Update selected options
      setSelectedOptions(() => (exists ? withRemoved : withAdded))
   }

   const removeOption = option => {
      let withRemoved = selectedOptions.filter(opt => opt.id !== option.id)

      // Pass to parent
      selectedOption(withRemoved)

      // Update selected options
      setSelectedOptions([...withRemoved])
   }

   React.useEffect(() => {
      if (defaultOptions.length) {
         setSelectedOptions(defaultOptions)
      }
   }, [defaultOptions])

   React.useEffect(() => {
      if (defaultIds.length) {
         const result = options.filter(option =>
            defaultIds.includes(option?.id)
         )
         setSelectedOptions(result)
      }
   }, [defaultIds])

   const matchedOptions = options.filter(option =>
      option.title.toLowerCase().includes(keyword)
   )

   const quickCreateRender = options.filter(
      o => o.title.toLowerCase() === keyword
   )

   return (
      <StyledSelect ref={ref}>
         <StyledSelected>
            <div onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               <span>
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
            </div>
            <aside>
               {selectedOptions.length > 0 && (
                  <span
                     onClick={() => {
                        setSelectedOptions([])
                        selectedOption([])
                     }}
                  >
                     <CloseIcon />
                  </span>
               )}
               <span onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
                  {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
               </span>
            </aside>
         </StyledSelected>
         {selectedOptions.length > 0 && (
            <SelectedOptions>
               {selectedOptions.slice(0, 2).map(option => (
                  <li key={option.id}>
                     <span title={option.title}>{option.title}</span>
                     <span onClick={() => removeOption(option)}>
                        <ClearIcon />
                     </span>
                  </li>
               ))}
               {selectedOptions.length > 2 && (
                  <button onClick={() => setHiddenOptions(!hiddenOptions)}>
                     +{selectedOptions.length - 2}
                  </button>
               )}
               {hiddenOptions && (
                  <HiddenOptions>
                     {selectedOptions.slice(2).map(option => (
                        <li key={option.id}>
                           <span title={option.title}>{option.title}</span>
                           <span onClick={() => removeOption(option)}>
                              <ClearIcon />
                           </span>
                        </li>
                     ))}
                  </HiddenOptions>
               )}
            </SelectedOptions>
         )}
         {isOptionsVisible && (
            <>
               <StyledOptions moveDown={selectedOptions.length > 0}>
                  {matchedOptions.map(option => (
                     <StyledOption
                        key={option.id}
                        title={option.title}
                        onClick={() => selectOption(option)}
                        isSelected={optionExists(selectedOptions, option.id)}
                     >
                        <div>
                           <input
                              type='checkbox'
                              readOnly
                              checked={optionExists(selectedOptions, option.id)}
                           />
                           <span>{option.title}</span>
                        </div>
                        {option.description && <p>{option.description}</p>}
                     </StyledOption>
                  ))}
                  {!matchedOptions.length && (
                     <NoItemFoundWrapper >
                        <StyledOption >
                           <span>
                              {' '}
                              {typeName
                                 ? `no ${typeName} found`
                                 : 'not found'}{' '}
                           </span>
                        </StyledOption>
                     </NoItemFoundWrapper>
                  )}
               </StyledOptions>
               {!quickCreateRender.length && keyword !== '' && (
                  <QuickCreateWrappper matchedOptionsLength={matchedOptions.length} >
                     <QuickCreate
                        addOption={addOption}
                        keyword={keyword}
                        typeName={typeName}
                     />
                  </QuickCreateWrappper>
               )}
            </>
         )}
      </StyledSelect>
   )
}

export default MultiSelect
