import React from 'react'

import { CameraIcon, PlusIcon } from '../../assets/icons'
import { StyledButtonTile } from './styles'

const ButtonTile = ({ type, size, text, helper, noIcon, ...props }) => (
   <StyledButtonTile type={type} size={size} {...props}>
      {!noIcon && type !== 'uploadImage' && (
         <PlusIcon size={type === 'primary' ? 32 : 20} color={type==='ghost'?'#367BF5':'#919699'} />
      )}
      {type === 'uploadImage' && <CameraIcon />}
      {text && <div> {text} </div>}
      {helper && <div className='helper'> {helper} </div>}
   </StyledButtonTile>
)

export default ButtonTile
