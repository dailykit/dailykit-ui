import React from 'react'

export const LockIcon = ({ size = 24, color = '#fff' }) => (
   <svg
      width={size}
      height={size}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
   >
      <path
         fillRule='evenodd'
         clipRule='evenodd'
         d='M7.333 10.5h9.334c.736 0 1.333.733 1.333 1.636v5.728c0 .903-.597 1.636-1.333 1.636H7.333C6.597 19.5 6 18.767 6 17.864v-5.728c0-.903.597-1.636 1.333-1.636zm4.667 8a3 3 0 100-6 3 3 0 000 6z'
         fill={color}
      />
      <path
         d='M16.667 9.75H7.333v1.5h9.334v-1.5zm2.083 2.386c0-1.167-.797-2.386-2.083-2.386v1.5c.186 0 .583.246.583.886h1.5zm0 5.728v-5.728h-1.5v5.728h1.5zm-2.083 2.386c1.286 0 2.083-1.22 2.083-2.386h-1.5c0 .64-.397.886-.583.886v1.5zm-9.334 0h9.334v-1.5H7.333v1.5zM5.25 17.864c0 1.167.796 2.386 2.083 2.386v-1.5c-.186 0-.583-.246-.583-.886h-1.5zm0-5.728v5.728h1.5v-5.728h-1.5zM7.333 9.75c-1.287 0-2.083 1.22-2.083 2.386h1.5c0-.64.397-.886.583-.886v-1.5zm6.917 5.75A2.25 2.25 0 0112 17.75v1.5a3.75 3.75 0 003.75-3.75h-1.5zM12 13.25a2.25 2.25 0 012.25 2.25h1.5A3.75 3.75 0 0012 11.75v1.5zM9.75 15.5A2.25 2.25 0 0112 13.25v-1.5a3.75 3.75 0 00-3.75 3.75h1.5zM12 17.75a2.25 2.25 0 01-2.25-2.25h-1.5A3.75 3.75 0 0012 19.25v-1.5z'
         fill={color}
      />
      <path
         d='M8.25 10.75v-3a3.75 3.75 0 017.5 0v3'
         stroke={color}
         strokeWidth='1.5'
         strokeLinecap='round'
         strokeLinejoin='round'
      />
   </svg>
)
