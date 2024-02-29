/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 가져온 실제 데이터로 가정
  let post = '강남 우동 맛집';

  // useState : 변수 같이 자료를 잠깐 저장하기 위한 방법
  // 1. import { useState } from 'react';
  // 2. let [작명(변수명), 작명(state 변경용 함수)] = useState { 보관할 자료 };

  // Q. 왜 state 써야함?
  // A. state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줍니다

  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      {/* JSX 문법 1. class 선언은 className  */}
      <div className="black-nav">
        {/* JSX 문법 3. style 넣을 땐 style={{스타일명 : '값'}} */}
        <h4 style={ {color : 'white', fontSize : '20px'} }>ReactBlog</h4>
      </div>
      {/* JSX 문법 2. 변수를 넣을 땐 {중괄호} */}

      {/* 블로그 글 제목을 만들고 싶은데 */}
      {/* 실제 서비스면 서버 이런데서 블로그 글 가져와서 보여줄 듯 */}
      {/* <h4>{ post }</h4> */}
      <button onClick={ () => {
          let titleCopy = [...글제목];
          titleCopy.sort((a, b) => {
            return ( a < b ) ? -1 : ( a == b ) ? 0 : 1; 
          })
          제목변경(titleCopy);
        }}>제목순 정렬</button>  
      <div className='list'>
        {/* state 변경하는 법 : 등호로 변경금지, state변경함수(새로운 state) */}
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요+1) }}>👍</span> { 좋아요 } </h4>
        <button onClick={ () => { 
          // array/object 다룰 때는 원본은 보존하는게 좋음
          // state 변경함수 특징 : 기존 state == 신규 state 의 경우 변경안해줌.
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          제목변경(copy); 
          }}>수정</button>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] } </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
