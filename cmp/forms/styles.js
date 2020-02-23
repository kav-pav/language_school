import styled from "styled-components";
import { colors, responsive } from "ui";
import is from "styled-is";

export const Book = {
  Outter: styled.div`
    position: absolute;
    right: -50px;
    top: -200px;
    background: ${colors.white};
    width: 400px;
    border-radius: 5px;
    border-color: ${colors.white};
    padding: 50px;
    padding-top: 0px;
    box-shadow: 0px 2px 13px -1px rgba(128, 128, 128, 0.15);
    ${responsive.sm} {
      position: unset;
      right: unset;
      top: unset;
      margin: 0 auto;
    }
    ${responsive.xxs} {
      position: unset;
      margin: 0 auto;
      top: 0px;
      right: 0px;
      padding: 0px;
      width: 300px;
    }
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
  `,
  InputContainer: styled.div`
    display: flex;
    position: relative;
  `,
  Input: styled.input`
    width: 100%;
    margin: 15px 0 15px 0;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    border-top: 0px;
    border-bottom: solid 1px blue;
    border-radius: 5px;
    border-right: 0px;
    border-left: 0px;
    border-color: #000000;
    padding: 15px 0px 15px 50px;
    font-size: 20px;
    :focus {
      border-color: #000000;
      ::placeholder {
        color: transparent;
      }
    }
    ::placeholder {
      font-size: 20px;
      padding: 10px 0px 10px 0px;
    }
  `,
  Header: styled.h4`
    margin: 0;
    font-size: 24px;
    font-weight: 900;
  `,
  SendButton: styled.button`
    margin: 15px;
    height: 75px;
    color: ${colors.white};
    font-size: 24px;
    font-weight: 900;
    background-color: ${colors.darkBlue};
  `,
  Icon: styled.div`
    img {
      width: 40px;
    }
    ${is("input")`
      position: absolute;
      top: 30px;
      left: 12px;
      img{
          width:20px;
      }
    `};
    ${is("envelope")`
      position: absolute;
      top: 34px;
      left: 12px;
      img{
          width:20px;
      }
    `};
  `,
  HeaderContainer: styled.div`
    margin: 35px 0px 20px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `
};

export const Contact = {
  Outter: styled.div`
    width: 500px;
    background-color: #ffffff;
    padding: 50px;
    border-radius: 5px;
    ${responsive.sm} {
      margin: 0 auto;
    }
    ${responsive.xxs} {
      position: static;
      width: 250px;
      margin: 0 auto;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
  `,
  InputContainer: styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    ${is("rightcont")`
      margin-left: 35px;
      ${responsive.xxs}{
        margin-left:0px;
      }
    `};
  `,
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0px;
    ${responsive.xxs} {
      flex-direction: column;
    }
    ${is("small")`
      width: 50%;
    `};
  `,
  Icon: styled.div`
    position: absolute;
    left: 5px;
    top: 10px;
    img {
      width: 25px;
    }
    &.envelope {
      left: 7px;
      top: 15px;
    }
  `,
  Input: styled.input`
    width: 100%;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 5px;
    height: 50px;
    padding-left: 50px;
    font-size: 20px;
    border-bottom: 2px solid #118ddc;
  `,
  TextArea: styled.textarea`
    width: 100%;
    padding-bottom: 100px;
    padding-left: 50px;
    padding-top: 15px;
    border-top: 0px;
    resize: none;
    font-size: 20px;
    border-left: 0px;
    border-right: 0px;
    border-radius: 5px;
    border-bottom: 2px solid #118ddc;
    ::placeholder {
      font-size: 20px;
    }
  `,
  SendButton: styled.button`
    width: 150px;
    height: 50px;
    margin-top: 50px;
    border-width: 0px;
    background-color: #118ddc;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
  `
};

export const Message = {
  Outer: styled.div`
    width: 100%;
    height: 50px;
    margin: auto;
    text-align: center;
    opacity: 0;
    transition: opacity 0.5s ease-in;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 20px;
    border: 2px solid;
    border-color: ${p => (p.answer ? "#156822" : "#631718")};
    border-radius: 2px;
    background-color: ${p => (p.answer ? "#2ECC40" : "#FF4136")};
    ${is("show")`
      opacity: 1;
      transition: opacity 0.5s ease-in;
    `};
  `,
  Inner: styled.div`
    position: relative;
    top: 25%;
    color: ${p => (p.answer ? "#156822" : "#631718")};
  `
};
