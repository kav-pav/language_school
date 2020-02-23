import styled, { keyframes } from "styled-components";

export const Spinner = () => (
  <Outer>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Outer>
);

const ldsEllipsis1 = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;

const ldsEllipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
`;

const ldsEllipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Outer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100px;
  width: 100px;
  margin-left: -50px;
  margin-top: -50px;

  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #118ddc;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: ${ldsEllipsis1} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 46px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(5) {
    left: 46px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(6) {
    left: 66px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(7) {
    left: 66px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(8) {
    left: 86px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(9) {
    left: 86px;
    animation: ${ldsEllipsis2} 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(10) {
    left: 105px;
    animation: ${ldsEllipsis3} 0.6s infinite;
  }
`;
