import React from 'react'

import {
   Tunnels,
   Tunnel,
   InfoIcon,
   useTunnel,
   TextButton,
   TunnelHeader,
   ButtonGroup
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
            <Tunnel size='full' layer={1}>
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
export const TunnelPositions = () => {
   const [topTunnel, openTopTunnel, closeTopTunnel] = useTunnel(1)
   const [rightTunnel, openRightTunnel, closeRightTunnel] = useTunnel(1)
   const [bottomTunnel, openBottomTunnel, closeBottomTunnel] = useTunnel(1)
   const [leftTunnel, openLeftTunnel, closeLeftTunnel] = useTunnel(1)

   return (
      <>
         <ButtonGroup align='left'>
            <TextButton type='solid' onClick={() => openTopTunnel(1)}>
               Top
            </TextButton>
            <TextButton type='solid' onClick={() => openBottomTunnel(1)}>
               Bottom
            </TextButton>
            <TextButton type='solid' onClick={() => openLeftTunnel(1)}>
               Left
            </TextButton>
            <TextButton type='solid' onClick={() => openRightTunnel(1)}>
               Right
            </TextButton>
         </ButtonGroup>
         <Tunnels tunnels={topTunnel}>
            <Tunnel layer={1} direction='top'>
               <TunnelHeader
                  position='bottom'
                  title='Tunnel 1'
                  close={() => closeTopTunnel(1)}
                  description='This is a description'
                  tooltip={<InfoIcon color='#a4a4a4' />}
                  right={{
                     title: 'CLOSE',
                     action: () => closeTopTunnel(1)
                  }}
               />
            </Tunnel>
         </Tunnels>

         <Tunnels tunnels={bottomTunnel}>
            <Tunnel layer={1} direction='bottom'>
               <TunnelHeader
                  title='Tunnel 1'
                  close={() => closeBottomTunnel(1)}
                  description='This is a description'
                  tooltip={<InfoIcon color='#a4a4a4' />}
                  right={{
                     title: 'CLOSE',
                     action: () => closeBottomTunnel(1)
                  }}
               />
            </Tunnel>
         </Tunnels>
         <Tunnels tunnels={rightTunnel}>
            <Tunnel layer={1} direction='right'>
               <TunnelHeader
                  title='Tunnel 1'
                  close={() => closeRightTunnel(1)}
                  description='This is a description'
                  tooltip={<InfoIcon color='#a4a4a4' />}
                  right={{
                     title: 'CLOSE',
                     action: () => closeRightTunnel(1)
                  }}
               />
            </Tunnel>
         </Tunnels>
         <Tunnels tunnels={leftTunnel}>
            <Tunnel layer={1} direction='left'>
               <TunnelHeader
                  title='Tunnel 1'
                  close={() => closeLeftTunnel(1)}
                  description='This is a description'
                  tooltip={<InfoIcon color='#a4a4a4' />}
                  right={{
                     title: 'CLOSE',
                     action: () => closeLeftTunnel(1)
                  }}
               />
            </Tunnel>
         </Tunnels>
      </>
   )
}
