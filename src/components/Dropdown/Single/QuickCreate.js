import React from 'react'
import styled, { css } from 'styled-components'
import { PlusIcon } from '../../../assets/icons'
import { StyledButton } from './styles'



const QuickCreate = ({ typeName, keyword, addOption }) => {
   return (
      <>
        
         {addOption && (
            <StyledButton onClick={addOption}>
               <PlusIcon color='#367BF5' />{' '}
               <span>
                  add {keyword} {typeName && `as ${typeName}`}
               </span>
            </StyledButton>
         )}
      </>
   )
}

export default QuickCreate
