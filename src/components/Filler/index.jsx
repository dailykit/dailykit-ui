import React from 'react'
import { Flex } from '../Flex'
import { ReactComponent as DefaultIllustration } from './defaultIllustration.svg'

/**
 *
 * @param {{message: string, illustration: React.FC | SVGElement | HTMLElement, width: string, height: string}} props
 */
export const Filler = ({ message, illustration, width, height }) => {
   return (
      <Flex
         container
         flexDirection='column'
         justifyContent='center'
         alignItems='center'
         width={width || '100%'}
         height={height || '100%'}
      >
         {illustration || (
            <DefaultIllustration
               width={width || '100%'}
               height={width || '50vh'}
            />
         )}
         <p style={{ color: '#1D2C44' }}>
            {message || 'Nothing to show here.'}
         </p>
      </Flex>
   )
}
