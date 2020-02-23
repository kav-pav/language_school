import styled from "styled-components";
import is from "styled-is";
import { responsive } from "ui";

export const Photo = {
  Outter: styled.div``,
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 400px 400px;
    grid-gap: 10px 10px;
    ${responsive.sm} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 400px 400px 400px;
    }
    ${responsive.xxs} {
      grid-template-columns: 1fr;
      grid-template: 200px;
    }
  `,
  Header: styled.h2`
    font-size: 52px;
  `,
  BigPhoto: styled.div`
    position: relative;
    grid-area: 1 / 1 / 2 / 3;
    /* grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2; */
    img.photo-a {
      object-fit: cover;
      width: 100%;
      max-height: 400px;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        filter: blur(1px);
        filter: grayscale(1);
      }
    }
    ${responsive.xxs} {
      grid-area: 1/1/1/1;
    }
  `,
  SmallCell: styled.div`
    position: relative;
    img.photo-a {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        filter: blur(1px);
        filter: grayscale(1);
      }
    }
    ${is("notgallery")`
    align-self: center;
    img{
      object-fit:unset;
      height:unset;
    }
    ${responsive.sm} {
      grid-area: 3;
    }
    `},
    ${responsive.xxs} {
    }
  `,
  Hover: styled.div`
    position: relative;
  `,
  Container: styled.div`
    margin: auto 350px;
    ${responsive.sm} {
      margin: auto 0px;
    }
    ${responsive.xxs} {
      margin: auto 0px;
    }
  `
};

export const Why = {
  Outter: styled.div`
    margin-top: 25px;
    margin-left: 25px;
  `,
  Element: styled.div`
    display: flex;
    flex-direction: row;
    ${is("first")`
     margin-top: 0px;
    `};
  `,
  Icon: styled.div`
    width: 75px;
    height: 75px;
    margin: auto 0;
    border-radius: 5px;
    position: relative;
    img {
      position: absolute;
      left: 20px;
      top: 18px;
      width: 35px;
    }
    ${is("piggy")`
     background-color: #FA9046;
    `};
    ${is("support")`
     background-color: #465DD1;
    `};
    ${is("results")`
     background-color: #3FCD6F;
     img {
      top:22px;
     }
    `};
  `,
  Title: styled.h4`
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 2px;
  `,
  Description: styled.p`
    font-size: 18px;
    margin-top: 2px;
    width: 200px;
  `,
  Container: styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  `
};

export const Outter = styled.div`
  background-color: white;
  padding: 100px 0px;
`;

export const Price = {
  Outter: styled.div`
    padding: 30px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
  `,
  List: styled.ul`
    list-style: none;
    padding: 0px;
    li {
      font-size: 16px;
      margin: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  Ele: styled.span``
};
