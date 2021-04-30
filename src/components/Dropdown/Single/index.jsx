import React from 'react'

import {
   StyledSelect,
   StyledOptions,
   StyledOption,
   StyledSelected,
   StyledButton
} from './styles'

import {
   SearchIcon,
   ArrowDownIcon,
   ArrowUpIcon,
   PlusIcon
} from '../../../assets/icons'

import { useOnClickOutside } from '../../../hooks'
import NoItemFound from './NoItemFound'

const SingleSelect = ({
   options = [],
   placeholder,
   selectedOption,
   searchedOption,
   defaultOption = null,
   defaultValue = null,
   typeName,
   addOption,
   variant
}) => {
   const ref = React.useRef(null)
   const [keyword, setKeyword] = React.useState('')
   const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)
   const [selected, setSelected] = React.useState(null)

   React.useEffect(() => {
      if (defaultValue !== null && defaultValue < options.length) {
         setSelected(defaultValue - 1)
      }
      if (defaultOption !== null) {
         setSelected(defaultOption.id - 1)
      }
   }, [defaultValue, defaultOption])

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
            selected={selected}
            isOptionsVisible={isOptionsVisible}
         >
            <div>
               {selected !== null ? (
                  <>
                     <span
                        data-type='text'
                        title={options[selected].title}
                        onClick={() => {
                           setKeyword('')
                           setSelected(null)
                           setIsOptionsVisible(true)
                        }}
                     >
                        {options[selected].title}
                     </span>
                  </>
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
                        placeholder={
                           typeName
                              ? `${
                                   isOptionsVisible ? 'search' : 'select'
                                } ${typeName} type`
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
            <span onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
               {isOptionsVisible ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </span>
         </StyledSelected>
         {isOptionsVisible && (
            <>
               <StyledOptions matchedOptions={matchedOptions}>
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
                  {!matchedOptions.length && <NoItemFound name={typeName} />}
                  {!matchedOptions.length && (
                     <StyledButton onClick={addOption}>
                        <PlusIcon color='#367BF5' />{' '}
                        <span>
                           add {keyword} {typeName && `as ${typeName}`}
                        </span>
                     </StyledButton>
                  )}
               </StyledOptions>
            </>
         )}
      </StyledSelect>
   )
}

export default SingleSelect
