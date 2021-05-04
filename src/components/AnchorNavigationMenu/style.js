import styled from 'styled-components'

const Styles = {
   AnchorNav: styled.div`
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #202020;
      border-bottom: 1px solid #ebf1f4;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      > a {
         padding: 4px 20px;
      }

      .active {
         color: #367bf5;
         border-bottom: 2px solid #367bf5;
      }
   `
}

export default Styles
