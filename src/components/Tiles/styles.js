import styled from 'styled-components';

export const StyledDashboardTile = styled.div`
    background: #ffffff;
    border: 1px solid #d8d8d8;
    display: flex;
    width: 380px;
    padding: 64px 37px 28px 24px;

    > div {
        flex: 1;
    }

    > div:nth-child(1) {
        color: #555b6e;
        text-align: left;
        
        h2 {
            margin: 0;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
        }

        p {
            margin: 0;
            margin-top: 16px;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;

            &:nth-child(3) {
                font-style: italic;
                font-weight: normal;
            }
        }
    }
    
    > div:nth-child(2) {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;

        p {
            margin: 0;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
            color: #00a7e1;
        }
    }

    &:hover {
        background: #efefef;
        cursor: pointer;
    }
`;