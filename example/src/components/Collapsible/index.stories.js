import React from 'react'
import { Collapsible } from '@dailykit/ui'

export default {
   title: 'Collapsible'
}

export const CollapsibleCards = () => {
   return (
      <>
         {[1, 2, 3].map(i => (
            <Collapsible
               key={i}
               head={<p style={{ margin: '10px 0' }}>Head</p>}
               body={<p style={{ margin: '10px 0' }}>Body</p>}
               defaultOpen={i === 1}
               isDraggable={i !== 1}
            />
         ))}
      </>
   )
}
