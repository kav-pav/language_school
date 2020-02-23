import styled from "styled-components";
import { responsive, colors } from "ui";
export const Logo = styled.div`
  width: 50%;
  align-self: center;
  img {
    width: 300px;
    ${responsive.xs} {
      width: 200px;
    }
  }
`;

export const Outter = styled.div`
  padding: 0 50px 0 50px;
`;

export const TBar = {
  Outter: styled.div`
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  RightSection: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
  `,
  Icon: styled.div`
    img {
      margin-right: 15px;
      width: 24px;
    }
  `,
  Text: styled.p`
    margin-right: 15px;
  `
};

export const MSection = {
  Outter: styled.div`
    position: relative;
  `,
  Agata: styled.div`
    position: relative;
    img {
      right: 100px;
      top: -680px;
      position: absolute;
      width: 55%;
    }
  `,
  Container: styled.div`
    position: absolute;
    top: 150px;
    left: 300px;
  `,
  Person: styled.div`
    position: relative;
    z-index: 2;
  `,
  QuoteContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  QuoteIcon: styled.div`
    img {
      width: 60px;
    }
    margin-right: 20px;
  `,
  Quote: styled.p`
    width: 40%;
    font-size: 24px;
    line-height: 30px;
    color: ${colors.white};
  `,
  Header: styled.h1`
    width: 55%;
    color: ${colors.white};
    font-size: 74px;
    font-weight: 900;
    span {
      font-weight: 300;
    }
  `,
  BackgroundImage: styled.div`
    position: relative;
    max-width: 1920px;
    height: 100%;
    margin: auto;
    z-index: 0;
    img {
      width: 100%;
      margin: 0 auto;
    }
  `,
  Layer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99.5%;
    background-color: ${colors.darkBlue};
    opacity: 0.7;
  `
};
