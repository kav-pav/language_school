import { createGlobalStyle } from "styled-components";
import { colors } from "ui/colors";
// import styled from "styled-components";
// import is from "styled-is";

export const GlobalStyle = createGlobalStyle`
  body{
    background: ${colors.white};
    font-family: "Roboto", sans-serif;
    margin: 0px;
    ${"" /* height:100vh; */}
    ${"" /* overflow-x: hidden;   */}
    ${"" /* font-family: "Cinzel", serif; */}
  }
`;

// export const Button = styled.button`
//   background-color: ${colors.red};
//   margin-top: 25px;
//   width: 300px;
//   height: 60px;
//   font-family: "Lato", sans-serif;
//   border-radius: 35px;
//   font-size: 26px;
//   font-weight: bold;
//   border-style: none;
//   border: 5px solid ${colors.red};
//   color: white;
//   transition: 0.25s background-color;
//   &:hover {
//     background-color: white;
//     color: ${colors.red};
//     border: 5px solid ${colors.red};
//   }
