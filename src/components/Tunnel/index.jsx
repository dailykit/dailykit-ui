import React from 'react'
import {
   StyledTunnel,
   StyledTunnelPanel,
   StyledText,
   StyledTunnelHeader
} from './styled'
import { Flex } from '../Flex'
import { Spacer } from '../Spacer'
import { TextButton, IconButton } from '../Button'
import { RoundedCloseIcon } from '../../assets/icons'

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

const Tunnels = ({ mt = 108, tunnels, children }) => {
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

const Tunnel = ({ mt, closed, children, ...props }) => {
   return (
      <StyledTunnel mt={mt} {...props}>
         <StyledTunnelPanel {...props} mt={mt}>
            {children}
         </StyledTunnelPanel>
      </StyledTunnel>
   )
}

const TunnelHeader = ({
   title,
   close,
   right,
   tooltip = null,
   description = null,
   position = 'top'
}) => (
   <StyledTunnelHeader position={position}>
      <Flex container alignItems='center'>
         <IconButton type='ghost' onClick={() => close()} round>
            <RoundedCloseIcon />
         </IconButton>
         <Spacer size='16px' xAxis />
         <Flex>
            <StyledText as='h1'>{title}</StyledText>
         </Flex>
      </Flex>

      {right && right.title && right.action && (
         <TextButton
            size='sm'
            type='solid'
            onClick={right.action}
            {...(right?.disabled && { disabled: right.disabled })}
            {...(right?.isLoading && { isLoading: right.isLoading })}
         >
            {right.title}
         </TextButton>
      )}
   </StyledTunnelHeader>
)

export { Tunnels, Tunnel, useTunnel, TunnelHeader }
