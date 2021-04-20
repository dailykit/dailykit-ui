import React from 'react'

const CheckCircleIcon = ({ size = 24, color = '#367BF5' }) => {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M21.0001 12.07V13C20.9975 17.4287 18.0824 21.3282 13.8354 22.5839C9.58847 23.8396 5.02145 22.1523 2.61101 18.4371C0.200573 14.7218 0.52092 9.86363 3.39833 6.49707C6.27574 3.1305 11.0248 2.05752 15.0701 3.85999"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M22 4L11 15L8 12"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}

export default CheckCircleIcon
