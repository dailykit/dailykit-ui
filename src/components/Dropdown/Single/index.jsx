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
} from '../../../assets/icons'

import { useOnClickOutside } from '../../../hooks'
import QuickCreate from './QuickCreate'

const SingleSelect = ({
   options = [],
   placeholder,
   selectedOption,
   searchedOption,
   defaultOption = null, //default option with object
   defaultValue = null, //default value with index
   defaultName = '',
   typeName,
   addOption,
   variant,
   disabled,
   readOnly,
   handleClick = null,
   isLoading = false
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [stateDefaultName, setStateDefaultName] = React.useState('')
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [selected, setSelected] = React.useState(null)

   React.useEffect(() => {
      setStateDefaultName(defaultName)
      if (options.length > 0) {
         if (
            defaultOption === null &&
            defaultValue === null &&
            defaultName === ''
         ) {
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
   }, [defaultValue, defaultOption, options, defaultName])

   const matchedOptions = options.filter(o =>
      o.title.toLowerCase().includes(keyword)
   )
   const quickCreateRender = options.filter(
      o => o.title.toLowerCase() === keyword
   )
   console.log(quickCreateRender, 'quickCreateRender')
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
   const onDropdownSelcted = () => {
      if (!isOptionsVisible) {
         handleClick?.()
      }
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
               ) : stateDefaultName !== '' && selected === null ? (
                  <span
                     data-type='text'
                     title={stateDefaultName}
                     onClick={() => {
                        if (!readOnly) {
                           setKeyword('')
                           setSelected(null)
                           setStateDefaultName('')
                           setIsOptionsVisible(true)
                           if (!isOptionsVisible) {
                              handleClick?.()
                           }
                        }
                     }}
                  >
                     {stateDefaultName}
                  </span>
               ) : (
                  <>
                     <span data-type='icon'>
                        <SearchIcon  size='12px' />
                     </span>

                     <input
                        type='text'
                        value={keyword}
                        disabled={readOnly || disabled}
                        placeholder={
                           typeName
                              ? `${
                                   isOptionsVisible ? 'search' : 'search'
                                } ${typeName}`
                              : `${placeholder}`
                        }
                        onChange={e =>
                           searchedOption(e.target.value) ||
                           setKeyword(e.target.value.toLowerCase())
                        }
                        onFocus={() => {
                           if (!isOptionsVisible) {
                              handleClick?.()
                           }
                           setIsOptionsVisible(true)
                        }}
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
               {isLoading ? (
                  <center>
                     <StyledOption>
                        <div>
                           <span data-type='spinner'>
                              <Spinner variant='secondary' />
                           </span>
                        </div>
                     </StyledOption>
                  </center>
               ) : (
                  <>
                     {matchedOptions.map(
                        (option, index) =>
                           matchedOptions.length && (
                              <StyledOption
                                 key={option.id}
                                 title={option.title}
                                 isSelected={selected === index}
                                 onClick={() => handleOptionClick(option)}
                                 description={option?.description || ''}
                              >
                                 <div>
                                    <span>{option.title}</span>
                                    {option?.description && (
                                       <p>{option.description}</p>
                                    )}
                                 </div>
                              </StyledOption>
                           )
                     )}
                     {!matchedOptions.length && (
                        <center>
                           <StyledOption>
                              <p>
                                 {' '}
                                 {typeName
                                    ? `no ${typeName} found`
                                    : 'not found'}{' '}
                              </p>
                           </StyledOption>
                        </center>
                     )}
                     {!quickCreateRender.length && keyword !== '' && (
                        <QuickCreate
                           addOption={addOption}
                           keyword={keyword}
                           typeName={typeName}
                        />
                     )}
                  </>
               )}
            </StyledOptions>
         )}
      </StyledSelect>
   )
}

export default SingleSelect
