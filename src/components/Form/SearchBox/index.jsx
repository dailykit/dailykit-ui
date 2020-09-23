import React from 'react'

import { SearchIcon, LockIcon } from '../../../assets/icons'
import { StyledSearchBox, StyledIconWrapper, StyledInput } from '../styles'

const SearchBox = ({
   label,
   name,
   hasReadAccess,
   hasWriteAccess,
   fallBackMessage,
   ...props
}) => {
   const title =
      hasWriteAccess === false || hasReadAccess === false
         ? fallBackMessage || "You don't have access to this field"
         : null

   return (
      <StyledSearchBox
         title={title}
         hasValue={props.value}
         hasReadAccess={hasReadAccess}
         hasWriteAccess={hasWriteAccess}
      >
         <StyledIconWrapper>
            <SearchIcon color='#888D9D' />
         </StyledIconWrapper>
         <StyledInput {...props} />

         {(hasWriteAccess === false || hasReadAccess === false) && (
            <span className='locked'>
               <LockIcon />
            </span>
         )}
      </StyledSearchBox>
   )
}

export default SearchBox
