import styled from "styled-components";
import { responsive } from "ui";
export const Contact = {
  Outter: styled.div`
    padding: 100px 350px;
    background-color: #118ddc;
    ${responsive.sm} {
      padding: 0;
      margin: 0 auto;
    }
    ${responsive.xxs} {
      padding: 0px;
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    ${responsive.sm} {
      flex-direction: column;
    }
    ${responsive.xxs} {
      flex-direction: column;
    }
  `,
  FormSection: styled.div`
    width: 60%;
    ${responsive.sm} {
      width: 100%;
    }
  `,
  Header: styled.h2`
    color: #ffffff;
    font-size: 52px;
    ${responsive.sm} {
      margin-right: auto;
      margin-left: auto;
    }
  `,
  TeacherSection: styled.div``,
  Teachers: styled.div`
    display: flex;
    flex-direction: column;
    ${responsive.sm} {
      justify-content: space-around;

      flex-direction: row;
    }
  `,
  Teacher: styled.div`
    padding: 0px 0px 50px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  `,
  Wrapper: styled.div`
    display: flex;
    margin-top: 10px;
    flex-direction: column;
  `,
  Image: styled.div`
    img {
      object-fit: cover;
      object-position: 35% 25%;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  `,
  Title: styled.p`
    font-size: 18px;
    opacity: 0.6;
    margin: 0px;
    font-style: italic;
    color: #ffffff;
  `,
  Name: styled.p`
    margin-top: 16px;
    font-weight: bold;
    font-size: 26px;
    color: #ffffff;
  `,
  Data: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;
    ${responsive.sm} {
      margin-left: 100px;
    }
  `,
  Street: styled.p`
    color: #ffffff;
  `,
  Phone: styled.div`
    display: flex;
  `,
  Icon: styled.div`
    margin-right: 10px;
    margin-top: 5px;
    img {
      width: 30px;
      background-color: "#118DDC";
    }
  `,
  Number: styled.p`
    color: #ffffff;
  `
};
