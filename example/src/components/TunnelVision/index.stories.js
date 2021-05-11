import React from 'react'

import {
   Tunnels,
   Tunnel,
   InfoIcon,
   useTunnel,
   TextButton,
   TunnelHeader
} from '@dailykit/ui'

export default {
   title: 'Tunnel'
}

export const TunnelVision = () => {
   const [tunnels, openTunnel, closeTunnel, visible] = useTunnel(4)

   return (
      <>
         <TextButton type='solid' onClick={() => openTunnel(1)}>
            Open Tunnel 1
         </TextButton>
         <Tunnels tunnels={tunnels}>
            <Tunnel layer={1} visible={visible}>
               <TunnelHeader
                  title='Tunnel 1'
                  close={() => closeTunnel(1)}
                  description='This is a description'
                  tooltip={<InfoIcon color='#a4a4a4' />}
                  right={{
                     title: 'Next',
                     action: () => openTunnel(2)
                  }}
               />
            </Tunnel>

            <Tunnel layer={2} size='lg'>
               <TunnelHeader
                  title='Tunnel 2'
                  right={{ action: () => openTunnel(3), title: 'Next' }}
                  close={() => closeTunnel(2)}
               />
            </Tunnel>

            <Tunnel layer={3} size='md'>
               <TunnelHeader
                  title='Tunnel 3'
                  right={{
                     title: 'Next',
                     action: () => openTunnel(4)
                  }}
                  close={() => closeTunnel(3)}
               />
            </Tunnel>

            <Tunnel layer={4} size='sm'>
               <TunnelHeader
                  title='Tunnel 4'
                  right={{
                     title: 'Close',
                     action: () => closeTunnel(4)
                  }}
                  close={() => closeTunnel(4)}
                  nextAction='Done'
               />
            </Tunnel>
         </Tunnels>
      </>
   )
}
