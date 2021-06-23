import React from 'react'
const EditIcon = ({ size = 16, color = '#000000' }) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
   >
      <polygon points='14 2 18 6 7 17 3 17 3 13 14 2'></polygon>
      <line x1='3' y1='22' x2='21' y2='22'></line>
   </svg>
)
export default EditIcon
