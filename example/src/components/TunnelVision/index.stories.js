import React from 'react'

import { Tunnels, Tunnel, useTunnel, TextButton } from '@dailykit/ui'

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
            <Tunnel layer={1} size='full'>
               <h2>Tunnel 1</h2>
               <TextButton type='solid' onClick={() => openTunnel(2)}>
                  Open Tunnel 2
               </TextButton>
               <TextButton type='outline' onClick={() => closeTunnel(1)}>
                  Close Tunnel 1
               </TextButton>
            </Tunnel>

            <Tunnel layer={2} size='lg'>
               <h2>Tunnel 2</h2>
               <TextButton type='solid' onClick={() => openTunnel(3)}>
                  Open Tunnel 3
               </TextButton>
               <TextButton type='outline' onClick={() => closeTunnel(2)}>
                  Close Tunnel 2
               </TextButton>
            </Tunnel>

            <Tunnel layer={3} size='md'>
               <h2>Tunnel 3</h2>
               <TextButton type='solid' onClick={() => openTunnel(4)}>
                  Open Tunnel 4
               </TextButton>
               <TextButton type='outline' onClick={() => closeTunnel(3)}>
                  Close Tunnel 3
               </TextButton>
            </Tunnel>

            <Tunnel layer={4} size='sm'>
               <h2>Tunnel 4</h2>
               <TextButton type='outline' onClick={() => closeTunnel(4)}>
                  Close Tunnel 4
               </TextButton>
            </Tunnel>
         </Tunnels>
      </>
   )
}
