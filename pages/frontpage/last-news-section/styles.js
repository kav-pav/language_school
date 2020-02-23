import styled from "styled-components";
import { responsive } from "ui";
export const News = {
  Outter: styled.div`
    margin: 100px 350px;
    ${responsive.sm} {
      margin: auto 0px;
    }
    ${responsive.xs} {
      margin: 0 auto;
    }
  `,
  Inner: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Header: styled.h2`
    margin: 0px auto 50px;
    font-size: 52px;
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${responsive.sm} {
      flex-direction: column;
    }
    ${responsive.xs} {
      flex-direction: column;
    }
  `
};

export const Item = {
  Outter: styled.div`
    display: flex;
    flex-direction: column;
    a {
      color: unset;
      text-decoration: none;
    }
  `,
  Image: styled.div`
    ${responsive.sm} {
      margin: 0 auto;
    }
    img {
      max-width: 400px;
      object-fit: cover;
      border-radius: 5px;
    }
  `,
  Header: styled.h4`
    margin: 15px auto;
    font-size: 25px;
  `,
  Line: styled.div`
    height: 1px;
    margin: 0px auto;
    width: 50px;
    background-color: #000000;
  `,
  Date: styled.p`
    margin: 20px auto;
  `
};
