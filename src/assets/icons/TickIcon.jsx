import React from 'react'

const TickIcon = ({ size = 16, color = '#ffffff' }) => (
   <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth='2.5'
      strokeLinecap='round'
      strokeLinejoin='round'
   >
      <polyline points='20 6 9 17 4 12'></polyline>
   </svg>
)

export default TickIcon
