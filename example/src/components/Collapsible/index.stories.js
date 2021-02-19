import React from 'react'
import { Collapsible, Flex, Text } from '@dailykit/ui'

export default {
   title: 'Collapsible'
}

export const CollapsibleCards = () => {
   return (
      <>
         {[1, 2, 3].map(i => (
            <Collapsible
               key={i}
               title={i !== 2 ? 'Title' : ''}
               isHeadClickable={i !== 1}
               head={
                  <Flex
                     margin='10px 0'
                     container
                     alignItems='center'
                     justifyContent='space-between'
                     width='100%'
                  >
                     <Text as='title'> Head </Text>
                     <Text as='p'> Actions </Text>
                  </Flex>
               }
               body={
                  <Flex
                     margin='10px 0'
                     container
                     alignItems='center'
                     justifyContent='space-between'
                  >
                     <Text as='title'> Body </Text>
                     <Text as='p'> Actions </Text>
                  </Flex>
               }
               defaultOpen={i === 1}
               isDraggable={i !== 1}
            />
         ))}
      </>
   )
}
