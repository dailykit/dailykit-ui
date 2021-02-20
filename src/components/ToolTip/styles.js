import styled, { css } from 'styled-components'

// export const ToastHeading = styled.span`
//   font-size: 14px;
//   font-weight: bold;
//   color: #ffffff;
//   margin-bottom: 10px;
// `;

// export const ToastSub = styled.span`
//   font-size: 12px;
//   color: #ffffff;
//   display: block;
// `;

// export const StyledTooltipText = styled.div`
//   background: rgba(28, 56, 151, 0.9);
//   color: #fff;
//   width: 200px;
//   text-align: center;
//   line-height: 44px;
//   border-radius: 3px;
//   cursor: pointer;
// `;
// export const StyledTooltipBox = styled.div`
//    color: #fff;
//    background-color: rgba(0, 0, 0, 0.8);
//    width: 230px;
//    padding: 8px 8px;
//    border-radius: 4px;
// `;
//  export const StyledTooltipCard = styled.div`
//    margin: 16px;
// `;

// const defaultTooltipStyles = css`
//    min-width: 200px;
//    max-width: 440px;
//    text-align: center;
//    padding: 8px;
//    background: #555B6E;
//    border-radius: 2px;
//    color: #fff;
//    width: 200px;
//    text-align: center;
//    line-height: 44px;
//    cursor: pointer;



// `

// export const Root = styled.span`
//    position: relative;
// `

// export const ToolTipWrapper = styled.div`
//    ${defaultTooltipStyles};
//    position: absolute;
//    transform: translateX(-50%);
//    left: 50%;
//    bottom: 100%;
//    transition: opacity ${props => props.duration || 0}s ease;
//    transition-delay: ${props => props.delay || 0}s;
//    opacity: ${props => (props.isVisible ? 1 : 0)};

//    &:before {
//       content: "";
//       width: 0;
//       height: 0;
//       left: 40px;
//       top: -10px;
//       position: absolute;
//       border: 10px solid transparent;
//       transform: rotate(135deg);
//       transition: border 0.4s ease-in-out;
//    }


//    `


export const TooltipText = styled.div`
  background: rgba(28, 56, 151, 0.9);
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  border-radius: 3px;
  cursor: pointer;
`;
export const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: transparent;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 4px;
    top: -2px;
    position: absolute;
    border: 100px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
export const TooltipCard = styled.div`
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: #555B6E;
    width: 200px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent #555B6E;
      #555B6E;
        
    }
  }
`;