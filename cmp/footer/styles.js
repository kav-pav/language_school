import styled from "styled-components";
import { responsive } from "ui";
export const Get = {
  Link: styled.div``,
  IconSection: styled.div``,
  Icon: styled.div``,
  Outter: styled.div``,
  Header: styled.h3``
};

export const Foot = {
  Outter: styled.div`
    margin: auto 350px;
    ${responsive.sm} {
      margin: 0 auto;
    }
    ${responsive.xxs} {
      margin: auto 0px;
    }
  `,
  Container: styled.div`
    display: flex;
    margin-top: 150px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 100px;
  `,
  Header: styled.h3``,
  PriceList: styled.div`
    width: 350px;
  `
};

export const Opin = {
  Outter: styled.div`
    width: 40%;
    ${responsive.sm} {
      width: 100%;
      margin: 0px auto;
      padding-left: 100px;
    }
    ${responsive.xxs} {
      width: 100%;
    }
  `,
  Title: styled.h3``,
  Main: styled.div``,
  Icon: styled.div`
    img {
      width: 40px;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Opinion: styled.p`
    margin-top: 0px;
    margin-left: 25px;
    font-size: 22px;
    line-height: 28px;
    width: 100%;
    color: #a1a1a1;
    ${responsive.sm} {
      width: 60%;
    }
  `,

  ArrowBack: styled.div``,
  Divider: styled.div``,
  ArrowForward: styled.div``,
  Name: styled.div`
    margin-top: 25px;
    color: black;
  `,
  Logo: styled.div`
    img {
      width: 150px;
    }
  `
};
