import styled from "styled-components";
import { responsive } from "ui";

export const Outter = styled.div`
  padding: 100px 0px;
`;
export const Photo = {
  Outter: styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin: auto 350px;
    ${responsive.sm} {
      flex-direction: column-reverse;
      margin: 0 auto;
    }
    ${responsive.xs} {
      flex-direction: column-reverse;
      margin: 0 auto;
    }
  `,
  Header: styled.h2`
    font-size: 52px;
  `,
  Container: styled.div`
    ${responsive.sm} {
      margin: 0 auto;
    }
    ${responsive.xs} {
      margin: 0 auto;
    }
  `,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 300px;
    grid-gap: 25px 15px;
    ${responsive.xs} {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  `,
  Image: styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    &:hover {
      filter: blur(1px);
      filter: grayscale(1);
    }
    img {
      border-radius: 5px;
      /* max-width: 100%;
      max-height: 100%; */
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    ${responsive.xs} {
      margin-top: 25px;
    }
  `,
  Title: styled.p`
    position: absolute;
    top: 50px;
    left: 50px;
    font-size: 35px;
    color: white;
    font-weight: bold;
  `,
  Price: styled.span`
    font-size: 20px;
    font-weight: normal;
  `
};
