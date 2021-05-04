import React from 'react'
import { AnchorNav, AnchorNavItem } from '@dailykit/ui'
import { Element } from 'react-scroll'

export default {
   title: 'Anchor Navigation Menu'
}

export const Default = () => (
   <>
      <AnchorNav>
         <AnchorNavItem
            targetElement='element-1'
            label='item-1'
            containerId='containerElement'
         />
         <AnchorNavItem
            targetElement='element-2'
            label='item-2'
            containerId='containerElement'
         />
      </AnchorNav>

      <Element
         id='containerElement'
         style={{
            position: 'relative',
            height: '600px',
            overflowY: 'auto',
            overflowX: 'hidden',
            width: '100%'
         }}
      >
         <Element
            name='element-1'
            style={{
               background: 'wheat',
               height: '1000px'
            }}
         >
            <h1>Element -1 </h1>
         </Element>

         <Element
            name='element-2'
            style={{
               background: 'wheat',
               height: '1000px'
            }}
         >
            <h1>Element -2 </h1>
         </Element>
      </Element>
   </>
)
