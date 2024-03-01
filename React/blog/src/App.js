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
  let [modal, setModal] = useState(false);

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
          titleCopy.sort()
          제목변경(titleCopy);
        }}>제목순 정렬</button>  
      <div className='list'>
        {/* state 변경하는 법 : 등호로 변경금지, state변경함수(새로운 state) */}
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요+1) }}>👍</span> { 좋아요 } </h4>
        <button onClick ={ () => { 
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
        <h4 onClick={ () => { setModal(!modal) } }>{ 글제목[2] } </h4>
        {
          modal == true ? <Modal/> : null
        }
        <p>2월 17일 발행</p>
      </div>
      
      {/* 컴포넌트 만드는 법 */}
      {/* 1. function 만들고 */}
      {/* 2. return() 안에 html 담기 */}
      {/* <함수명></함수명> 쓰기 */}
      {/* 참고 : <함수명></함수명> 대신 <함수명/> 형식도 가능 */}

      {/* 어떤걸 컴포넌트로 만들면 좋은가 */}
      {/* 1. 반복적인 html 축약할 때 */}
      {/* 2. 큰 페이지들 */}
      {/* 3. 자주 변경 되는 것들 */}


      {/* html 중간에 조건문 쓰려면 "삼항연산자" 사용 */}
      {/* 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드 */}
      {
        modal == true ? <Modal/> : null
      }


    </div>
  );
}

// (참고1)
// return() 안에 html 병렬 기입하려면
// 의미없는 <div> 대신 <></> 사용가능
function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

// 컴포넌트 만드는 문법 2
// let Modal = () => {
//   return (
//     <div className='modal'>
//       <h4>제목</h4>
//       <p>날짜</p>
//       <p>상세내용</p>
//     </div>
//   )
// }

// 동적인 UI 만드는 step
// 1. html css로 미리 디자인 완성
// 2. UI의 현재 상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

export default App;
