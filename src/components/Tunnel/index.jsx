import React from 'react'

import { StyledTunnel, StyledTunnelPanel, StyledText } from './styled'
import { Flex } from '../Flex'
import { Spacer } from '../Spacer'
import { TextButton, IconButton } from '../Button'

import { RoundedCloseIcon } from '../../assets/icons'

const useTunnel = count => {
   const [tunnels, setTunnels] = React.useState([])

   const [visible, setVisible] = React.useState(false)

   React.useEffect(() => {
      setTunnels([...Array(count).fill('hidden')])
   }, [count])

   const openTunnel = React.useCallback(
      layer => {
         tunnels[layer - 1] = 'visible'
         setTunnels([...tunnels])
         setVisible(true)
      },
      [tunnels, setTunnels, visible, setVisible]
   )

   const closeTunnel = React.useCallback(
      layer => {
         tunnels[layer - 1] = 'hidden'
         setTunnels([...tunnels])
         setVisible(false)
      },
      [tunnels, setTunnels, visible, setVisible]
   )

   return [tunnels, openTunnel, closeTunnel, visible]
}

const Tunnels = ({ mt = 114, tunnels, children }) => {
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

const Tunnel = ({ mt, visible, closed, children, ...props }) => {
   let drawerClasses = 'side-tunnelclosed'
   if (visible) {
      drawerClasses = 'side-tunnelopen'
   }

   return (
      <StyledTunnel mt={mt}>
         <StyledTunnelPanel
            className={drawerClasses}
            visible={visible}
            {...props}
         >
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
   description = null
}) => (
   <Flex
      container
      height='80px'
      padding='16px'
      justifyContent='space-between'
      alignItems='flex-start'
      style={{ borderBottom: '1px solid #e4e4e4' }}
   >
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
   </Flex>
)

export { Tunnels, Tunnel, useTunnel, TunnelHeader }
