import React from 'react'
import { Flex, Text, TextButton } from '@dailykit/ui'

export default {
   title: 'Flex'
}

export const CheckboxField = () => {
   return (
      <React.Fragment>
         <Flex
            container
            width='480px'
            alignItems='center'
            justifyContent='space-between'
         >
            <Text as='h3'>Page Title</Text>
            <TextButton type='outline' size='sm'>
               Action
            </TextButton>
         </Flex>
      </React.Fragment>
   )
}
