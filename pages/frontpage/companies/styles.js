import styled from "styled-components";

export const Compa = {
  Outter: styled.div``,
  Inner: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 50px;
  `,
  Image: styled.div`
    &.geo {
      margin: 50px;
      margin-right: 100px;

      img {
        width: 400px;
      }
    }
    &.teddy {
      margin: 50px;
      margin-left: 100px;

      img {
        width: 350px;
      }
    }
  `
};
