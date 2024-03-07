import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
// html에서 src 폴더의 이미지 넣을 땐
// import 작명 from '이미지경로'
import bg from './img/bg.png';
import data from './data';
// import 여러개 하려면 import {변수1, 변수2} from '경로'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage : `url(${bg})` }}></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width='80%'/>
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width='80%'/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className='col-md-4'>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%'/>
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
