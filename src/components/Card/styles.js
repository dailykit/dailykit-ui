import styled from "styled-components";

export const StyledCard = styled.div`
  background: #fff;
  padding: 12px 16px 16px 16px;
  min-width: 298px;
  max-width: 350px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #555B6E;
  text-align: left;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 163px;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const Text = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #555B6E;
  margin-bottom: 16px;
  text-align: left;
`;

export const Stat = styled.div`
  display: flex;
  justify-content: space-between;

  > div, > span {
    flex: 1;
    text-align: left;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
