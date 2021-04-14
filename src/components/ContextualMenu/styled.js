import styled from 'styled-components'

const Styled = {
   Wrapper: styled.div`
      font-weight: 500;
      letter-spacing: 0.44px;
      color: #202020;
      position: relative;
   `,

   Contexts: styled.div`
      background: #ffffff;
      box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      padding: 8px;
      position: absolute;
      :first-child {
         margin-top: 12px;
      }
   `,
   Context: styled.div`
      background: #f7f7f7;
      border-radius: 4px;
      padding: 6px;
      margin-bottom: 4px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
   `,
   ContextTitle: styled.div`
      display: flex;
      align-items: center;
      cursor: pointer;
      > div {
         margin-right: auto;
      }
   `,
   ContextOptions: styled.div`
      padding: 8px 0px;
   `
}
export default Styled
