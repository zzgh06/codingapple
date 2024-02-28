// import logo from './logo.svg';
import './App.css';

function App() {

  // 서버에서 가져온 실제 데이터로 가정
  let post = '강남 우동 맛집';

  return (
    <div className="App">
      {/* JSX 문법 1. class 선언은 className  */}
      <div className="black-nav">
        {/* JSX 문법 3. style 넣을 땐 style={{스타일명 : '값'}} */}
        <h4 style={ {color : 'red', fontSize : '20px'} }>블로그임</h4>
      </div>
      {/* JSX 문법 2. 변수를 넣을 땐 {중괄호} */}

      {/* 블로그 글 제목을 만들고 싶은데 */}
      {/* 실제 서비스면 서버 이런데서 블로그 글 가져와서 보여줄 듯 */}
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
