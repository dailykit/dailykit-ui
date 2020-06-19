import React from 'react'

import {
   Tunnels,
   Tunnel,
   useTunnel,
   TextButton,
   TunnelHeader
} from '@dailykit/ui'

export default {
   title: 'Tunnel'
}

export const TunnelVision = () => {
   const [tunnels, openTunnel, closeTunnel] = useTunnel(4)
   return (
      <>
         <TextButton type='solid' onClick={() => openTunnel(1)}>
            Open Tunnel 1
         </TextButton>
         <Tunnels tunnels={tunnels}>
            <Tunnel layer={1}>
               <TunnelHeader
                  title='Tunnel 1'
                  next={() => openTunnel(2)}
                  close={() => closeTunnel(1)}
               />
            </Tunnel>

            <Tunnel layer={2} size='lg'>
               <TunnelHeader
                  title='Tunnel 2'
                  next={() => openTunnel(3)}
                  close={() => closeTunnel(2)}
               />
            </Tunnel>

            <Tunnel layer={3} size='md'>
               <TunnelHeader
                  title='Tunnel 3'
                  next={() => openTunnel(4)}
                  close={() => closeTunnel(3)}
               />
            </Tunnel>

            <Tunnel layer={4} size='sm'>
               <TunnelHeader
                  title='Tunnel 3'
                  next={() => closeTunnel(4)}
                  close={() => closeTunnel(4)}
                  nextAction='Done'
               />
            </Tunnel>
         </Tunnels>
      </>
   )
}
