import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
// html에서 src 폴더의 이미지 넣을 땐
// import 작명 from '이미지경로'
import bg from './img/bg.png';
import data from './data';
import Detail from './pages/detail';
// import 여러개 하려면 import {변수1, 변수2} from '경로'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data)
  // 1. 페이지 이동도와주는 useNavigate()
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg' style={{ backgroundImage : `url(${bg})` }}></div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map(function(a, i){
                  return (<Product shoes={shoes[i]} i={i} key={i}/>)
                })
              }
            </div>
          </div>
          <button onClick={()=>{
            // 응용3. 버튼 누르면 '로딩중 띄우기'
            // 로딩중 UI 띄우기
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{ 
              console.log(result.data) 
              let copyShoes = [...shoes, ...result.data];
              setShoes(copyShoes)
              // setShoes(shoes.concat(result.data))
              console.log(copyShoes)
              // 로딩중 UI 숨기기
            }).catch(()=>{
              console.log('실패')
              // 로딩중 UI 숨기기
            })

            // 서버로 데이터 전송하는 POST 방법
            // axios.post('/url', {name : 'kim'})

            // 동시에 ajax 요청 여러개 하려면
            // Promise.all([ axios.get('/url1'), axios.get('/url2') ])
            // .then(() => {});
            

          }}>더보기</button>
          </>
        } />
        {/* <Route path='/detail/0' element={<Detail shoes={shoes} />} />
        <Route path='/detail/1' element={<Detail shoes={shoes} />} />
        <Route path='/detail/2' element={<Detail shoes={shoes} />} /> */}
        
        {/* 페이지 여러개 만들고 싶으면 : URL파라미터 써도 됩니다 */}
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>맴버임</div>} />
          <Route path='location' element={<div>위치정보</div>} />
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<p>첫 주문시 양배추즙 서비스</p>}/>
          <Route path='two' element={<p>생일기념 쿠폰받기</p>}/>
        </Route>
        
        {/* 404페이지 */}
        {/* 유저가 이상한 경로로 접속했을 때 "없는 페이지입니다" 이런거 보여주고 싶으면 <Route path="*"> 하나 맨 밑에 만들어두면 됩니다. */}
        {/* '*' 경로는 모든 경로를 뜻해서 위에 만들어둔 /detail 이런게 아닌 이상한 페이지 접속시 * 경로로 안내해줍니다.  */}      
        <Route path='*' element={<div>없는 페이지요</div>} />
      </Routes>
        
    </div>
  );
}
function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Product(props) {
  let navigate = useNavigate();
  return (
    <div className='col-md-4'>
      <img onClick={() => { navigate('/detail/'+ (props.i))}} src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width='80%'/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
