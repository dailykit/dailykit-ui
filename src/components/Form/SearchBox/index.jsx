import React from 'react'

import { SearchIcon } from '../../../assets/icons'
import { StyledSearchBox, StyledIconWrapper, StyledInput } from '../styles'

const SearchBox = ({ ...props }) => {
   return (
      <StyledSearchBox>
         <StyledIconWrapper>
            <SearchIcon color='#888D9D' />
         </StyledIconWrapper>
         <StyledInput {...props} />
      </StyledSearchBox>
   )
}

export default SearchBox
