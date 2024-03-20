import React from "react";
import Spinner from "../img/Spinner.gif"
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`

function Loading (){
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요</LoadingText>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

export default Loading;