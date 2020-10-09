import React from 'react'
import {
   TextButton,
   Filler,
   Tunnel,
   Tunnels,
   useTunnel,
   TunnelHeader
} from '@dailykit/ui'

import { CustomIllustration } from './customIllustration'

export default {
   title: 'Filler'
}

export const TunnelExample = () => {
   const [tunnels, openTunnel, closeTunnel] = useTunnel(1)

   return (
      <React.Fragment>
         <Tunnels tunnels={tunnels}>
            <Tunnel layer={1}>
               <TunnelHeader
                  title='Tunnel 1'
                  right={{ action: () => closeTunnel(1), title: 'Close' }}
                  close={() => closeTunnel(1)}
               />
               <Filler height='500px' />
            </Tunnel>
         </Tunnels>
         <TextButton type='solid' onClick={() => openTunnel(1)}>
            see empty state in tunnel
         </TextButton>
      </React.Fragment>
   )
}

export const VariableWidths = () => {
   return (
      <>
         <Filler message='full width example (empty state message)' />

         <div
            style={{
               display: 'flex',
               justifyContent: 'center',
               marginTop: '4rem'
            }}
         >
            <Filler
               message='custom height and width'
               width='200px'
               height='200px'
            />
         </div>
      </>
   )
}

export const WithCustomIllustration = () => {
   return (
      <Filler
         message='with custom illustration'
         illustration={<CustomIllustration width='400px' height='400px' />}
      />
   )
}
