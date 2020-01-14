import React from 'react'

const Tunnel = ({ children: panels }) => {
   return (
      <div>
         {Array.isArray(panels) &&
            panels.map(panel => panel.props.visibility !== 'hidden' && panel)}
         {panels.hasOwnProperty('props') &&
            panels.props.visibility !== 'hidden' &&
            panels}
      </div>
   )
}

export default Tunnel
