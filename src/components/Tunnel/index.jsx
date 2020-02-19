import React from 'react'

import { StyledTunnel, StyledTunnelPanel } from './styled'

const useTunnel = count => {
   const [tunnels, setTunnels] = React.useState([])

   React.useEffect(() => {
      setTunnels([...Array(count).fill('hidden')])
   }, [count])

   const openTunnel = layer => {
      tunnels[layer - 1] = 'visible'
      setTunnels([...tunnels])
   }
   const closeTunnel = layer => {
      tunnels[layer - 1] = 'hidden'
      setTunnels([...tunnels])
   }

   return [tunnels, openTunnel, closeTunnel]
}

const Tunnels = ({ tunnels, children }) => {
   return (
      <div>
         {Array.isArray(children) &&
            children.map(
               (tunnel, index) =>
                  tunnels[index] === 'visible' && {
                     ...tunnel,
                     props: {
                        ...tunnel.props,
                        ...(tunnels[index + 1] === 'visible' && {
                           partial: true
                        })
                     }
                  }
            )}
         {children.hasOwnProperty('props') &&
            tunnels[0] === 'visible' &&
            children}
      </div>
   )
}

const Tunnel = ({ children, ...props }) => {
   return (
      <StyledTunnel>
         <StyledTunnelPanel {...props}>{children}</StyledTunnelPanel>
      </StyledTunnel>
   )
}

export { Tunnels, Tunnel, useTunnel }