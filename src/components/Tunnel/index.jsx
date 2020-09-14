import React from 'react'

import {
   StyledTunnel,
   StyledTunnelPanel,
   TunnelHeaderContainer
} from './styled'

import { TextButton, IconButton } from '../Button/index'
import Text from '../Text'

import { CloseIcon } from '../../assets/icons'

const useTunnel = count => {
   const [tunnels, setTunnels] = React.useState([])

   React.useEffect(() => {
      setTunnels([...Array(count).fill('hidden')])
   }, [count])

   const openTunnel = React.useCallback(
      layer => {
         tunnels[layer - 1] = 'visible'
         setTunnels([...tunnels])
      },
      [tunnels, setTunnels]
   )

   const closeTunnel = React.useCallback(
      layer => {
         tunnels[layer - 1] = 'hidden'
         setTunnels([...tunnels])
      },
      [tunnels, setTunnels]
   )

   return [tunnels, openTunnel, closeTunnel]
}

const Tunnels = ({ mt = 40, tunnels, children }) => {
   return (
      <div>
         {Array.isArray(children) &&
            children.map(
               (tunnel, index) =>
                  tunnels[index] === 'visible' && {
                     ...tunnel,
                     props: {
                        mt,
                        ...tunnel.props,
                        ...(tunnels[index + 1] === 'visible' && {
                           partial: true
                        })
                     }
                  }
            )}
         {children.hasOwnProperty('props') &&
            tunnels[0] === 'visible' && {
               ...children,
               props: { ...children.props, mt }
            }}
      </div>
   )
}

const Tunnel = ({ mt, children, ...props }) => {
   return (
      <StyledTunnel mt={mt}>
         <StyledTunnelPanel {...props}>{children}</StyledTunnelPanel>
      </StyledTunnel>
   )
}

const TunnelHeader = ({ title, close, right }) => (
   <TunnelHeaderContainer>
      <div>
         <IconButton
            style={{ marginRight: '5px' }}
            onClick={() => close()}
            type='ghost'
         >
            <CloseIcon color='#888D9D' size='24' />
         </IconButton>
         <Text noMargin as='h2'>
            {title}
         </Text>
      </div>

      {right && right.title && right.action && (
         <TextButton type='solid' onClick={() => right.action()}>
            {right.title}
         </TextButton>
      )}
   </TunnelHeaderContainer>
)

export { Tunnels, Tunnel, useTunnel, TunnelHeader }
