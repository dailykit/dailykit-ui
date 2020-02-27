import styled, { css } from 'styled-components';

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

            svg {
                transform: translateY(1px);
                margin-left: 3px;
            }
        }
    }

    &:hover {
        background: #efefef;
        cursor: pointer;
    }
`;

const extendedButtonTileStyle = (type = "primary", size = "sm") => {
    switch (type) {
        case "primary":
        switch (size) {
            case "lg":
            return css`
                padding: 36px;
                font-weight: 500;
                line-height: 14px;
                > div {
                    margin-top: 16px;
                    &.helper {
                        margin-top: 12px;
                        font-style: italic;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #888d9d;
                    }
                }
            `;
            case "sm":
            return css`
                max-width: 350px;
                padding: 16px;
                font-weight: 500;
                line-height: 19px;
                > div {
                    margin-top: 12px;
                    &.helper {
                        margin-top: 12px;
                        font-style: italic;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 14px;
                        color: #888d9d;
                    }
                }
            `;
            default:
            return extendedButtonTileStyle();
        }
        case "secondary":
        return css`
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            > div {
                margin-left: 11px;
            }
        `;
        default:
            extendedButtonTileStyle();
    }
};

export const StyledButtonTile = styled.button`
    margin: 20px 0;
    background: #ffffff;
    border: 1px solid #f3f3f3;
    box-sizing: border-box;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.13);
    color: #555b6e;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    ${props => extendedButtonTileStyle(props.type, props.size)};
`;