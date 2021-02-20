import React from 'react'
import { Root, ToolTipWrapper,TooltipText,TooltipCard,TooltipBox } from './styles'

const ToolTip = ({ content, children, delay = 0, duration = 0.1 }) => {
   const [isVisible, setVisibility] = React.useState(false)

   const handleMouseEnter = () => {
      setVisibility(true)
   }

   const handleMouseLeave = () => {
      setVisibility(false)
   }

   const renderContent = () => {
      return  content
   }

   return (
      // <Root onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      //    {children}
      //    <ToolTipWrapper
      //       delay={delay}
      //       duration={duration}
      //       isVisible={isVisible}
      //    >
      //       {renderContent()}
      //    </ToolTipWrapper>
      // </Root>
     
      <>
      <TooltipCard>
        <TooltipText>
          <h3>Hover :D</h3>
        </TooltipText>
        <TooltipBox>
          <p>First item</p>
          <p>Second item</p>
        </TooltipBox>
      </TooltipCard>
      <h4 style={{ color: "rgba(0,0,0,0.5)" }}>
        Some content that is right below Hover :D
      </h4>
    </>
     
     
   )
}

export default ToolTip
