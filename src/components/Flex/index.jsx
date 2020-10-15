import styled, { css } from 'styled-components'

export const Flex = styled.div(
   props =>
      css`
         display: ${props.container ? 'flex' : 'block'};
         ${props.flex && `flex: ${props.flex}`};
         ${props.width && `width: ${props.width}`};
         ${props.margin && `margin: ${props.margin}`};
         ${props.height && `height: ${props.height}`};
         ${props.padding && `padding: ${props.padding}`};
         ${props.flexGrow && `flex-grow: ${props.flexGrow}`};
         ${props.minWidth && `min-width: ${props.minWidth}`};
         ${props.maxWidth && `max-width: ${props.maxWidth}`};
         ${props.flexWrap && `flex-wrap: ${props.flexWrap}`};
         ${props.flexBasis && `flex-basis: ${props.flexBasis}`};
         ${props.minHeight && `min-height: ${props.minHeight}`};
         ${props.maxHeight && `max-height: ${props.maxHeight}`};
         ${props.overflowY && `overflow-y: ${props.overflowY}`};
         ${props.flexShrink && `flex-shrink: ${props.flexShrink}`};
         ${props.alignItems && `align-items: ${props.alignItems}`};
         ${props.flexDirection && `flex-direction: ${props.flexDirection}`};
         ${props.justifyContent && `justify-content: ${props.justifyContent}`};
      `
)
