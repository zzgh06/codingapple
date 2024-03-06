/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // 서버에서 가져온 실제 데이터로 가정
  let post = '강남 우동 맛집';
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  // useState : 변수 같이 자료를 잠깐 저장하기 위한 방법
  // 1. import { useState } from 'react';
  // 2. let [작명(변수명), 작명(state 변경용 함수)] = useState { 보관할 자료 };

  // Q. 왜 state 써야함?
  // A. state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링해줍니다

  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState('');

  // map() 사용법
  // 1. array 자료 갯수만큼 함수안의 코드 실행해줌
  // 2. 함수의 파리미터(a, i)는 array 안에 있던 자료임
  // 3. return에 뭐 적으면 array로 담아줌  
  [1, 2, 3].map(function(a){
    return '123456'
  })

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
      {/* <div className='list'>
        state 변경하는 법 : 등호로 변경금지, state변경함수(새로운 state)
        <h4>{ 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요+1) }}>👍</span> { 좋아요 } </h4>
        <button onClick ={ () => { 
          array/object 다룰 때는 원본은 보존하는게 좋음
          state 변경함수 특징 : 기존 state == 신규 state 의 경우 변경안해줌.
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          제목변경(copy); 
          }}>수정</button>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(data, i){
          return (
          // 참고 : 반복문으로 html 생성하면 key={html 마다 다른 숫자} 추가해야함
          <div className='list' key={i}>

            <h4 onClick={ () => { setModal(!modal); setTitle(i)}}>{ 글제목[i] } 
            <span onClick={ (e) => { 
              e.stopPropagation()
              let copyLike = [...좋아요];
              copyLike[i] = copyLike[i] + 1;
              좋아요변경(copyLike)
            }}>👍
            </span> { 좋아요[i] }</h4>
            <p>작성일 : {formattedDate}</p>
            <button onClick={()=> {
              let deleteTitle = [...글제목];
              // splice(start[, deleteCount[, item1[, item2[, ...]]]])
              // start: 배열의 변경을 시작할 인덱스
              // deleteCount: 배열에서 제거할 요소의 수.
              // item1, item2, ... : 배열에 추가할 요소.
              deleteTitle.splice(i, 1);
              제목변경(deleteTitle);
            }}>삭제</button>
          </div>
          )       
        })        
      }

      {
        modal == true ? <Modal title={title} color={'skyblue'} 글제목={글제목} 제목변경={제목변경}/> : null
      }

      {/* <div className='list'>
        <h4 onClick={ () => { setModal(!modal) } }>{ 글제목[2] } </h4>
        {
          modal == true ? <Modal/> : null
        }
        <p>2월 17일 발행</p>
      </div> */}
      
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
      {/* {
        modal == true ? <Modal/> : null
      } */}

      {/* onChange / onInput : <input>에 뭔가 입력시 코드실행하고 싶으면? */}
      {/* <input>에 입력한 값 가져오는 방법 : e.target.value  */}
      {/* <input>에 입력한 값 저장하려면 보통 변수/state에 저장 */}
      <input onChange={(e) => 
        { setInput(e.target.value); }} />
      <button onClick={(e) => {
        // input 값을 빌행버튼으로 눌렀을때, input useState에 있는 값을
        // 기존의 글제목 useState 값과 input 값을 변수에 담아서
        // 글제목 state 변경함수에 담는다.
        // let newPost = [...글제목, input]
        // 또는 unshift 활용
        // unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
        let newPost = [...글제목];
        let newLike = [...좋아요];
        {
          input == 0 ? alert(`값을 입력해주세요`) : newPost.unshift(input), newLike.unshift(0);
        }
        제목변경(newPost)
        좋아요변경(newLike)
      }}>글발행</button>

    </div>
  );
}

// (참고1)
// return() 안에 html 병렬 기입하려면
// 의미없는 <div> 대신 <></> 사용가능

// props : 자식이 부모의 state 가져다쓰고 싶을 때
// 부모 -> 자식 state 전송하는 방법
// 1. <자식컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용
function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ () => {
        let copyTitle = [...props.글제목];
        copyTitle[0] = '여자 코트 추천';
        props.제목변경(copyTitle);
      } }>글수정</button>
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
