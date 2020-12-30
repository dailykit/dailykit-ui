import React from 'react'

import { StyledTunnel, StyledTunnelPanel } from './styled'

import Text from '../Text'
import { Flex } from '../Flex'
import { Spacer } from '../Spacer'
import { TextButton, IconButton } from '../Button'

import { CloseIcon } from '../../assets/icons'
import { useTransition } from 'react-spring'

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
            children.map((tunnel, index) => {
               console.log(tunnel, index)

               return (
                  tunnels[index] === 'visible' && {
                     ...tunnel,
                     props: {
                        tunnels,
                        mt,
                        ...tunnel.props,
                        ...(tunnels[index + 1] === 'visible' && {
                           partial: true
                        })
                     }
                  }
               )
            })}
         {children.hasOwnProperty('props') &&
            tunnels[0] === 'visible' && {
               ...children,
               props: { ...children.props, mt }
            }}
      </div>
   )
}

const Tunnel = ({ mt, children, ...props }) => {
   const transitions = useTransition(props.layer, null, {
      from: { transform: `translateX(50px)`, opacity: 0 },
      enter: { transform: `translateX(0px)`, opacity: 1 },
      leave: { transform: `translateY(50px)`, opacity: 1 }
   })

   return (
      <>
         {transitions.map(
            ({ item, key, props }) =>
               item && (
                  <StyledTunnel mt={mt} style={props} key={key}>
                     <StyledTunnelPanel {...props}>
                        {children}
                     </StyledTunnelPanel>
                  </StyledTunnel>
               )
         )}
      </>
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
      height='64px'
      padding='0 16px'
      alignItems='center'
      justifyContent='space-between'
   >
      <Flex container alignItems='center'>
         <IconButton type='ghost' onClick={() => close()}>
            <CloseIcon color='#888D9D' size='24' />
         </IconButton>
         <Spacer size='8px' xAxis />
         <Flex>
            <Flex container alignItems='center'>
               <Text as='h2'>{title}</Text>
               {tooltip}
            </Flex>
            {description && <Text as='p'>{description}</Text>}
         </Flex>
      </Flex>

      {right && right.title && right.action && (
         <TextButton
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
