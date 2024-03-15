import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { Nav } from 'react-bootstrap';

import { Context1 } from './../App'
import { useDispatch, useSelector } from "react-redux";
import { appendItem } from "../store/cartsSlice";
// let Btn = styled.button`
//   background : ${ props => props.bg };
//   // 프로그래밍 문법 사용 가능
//   color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px
// `
// // 기존의 스타일 복사가능
// let NewBtn = styled.button(Btn)``


// 컴포넌트의 Lifecycle
// 페이지에 장착되기도 하고(mount)
// 가끔 업데이트도 되고(update)
// 필요없으면 제거되고(unmount)

// 컴포넌트가 mount, update, unmount 시 코드를 실행시키는 방법(갈고리 다는 법)
// 예전 방법
// class Detail2 extends React.Component {
//   componentDidMount(){
//     // 컴포넌트 mount시 여기 코드 실행됨
//   }
//   componentDidUpdate(){
//     // 컴포넌트 update시 여기 코드 실행됨
//   }
//   componentWillUnmount(){
//     // 컴포넌트 unmount시 여기 코드 실행됨

//   }
// }


function Detail(props){

  let {재고, shoes} = useContext(Context1)

  // useParams() : 유저가 URL 파라미터에 입력한거 가져오려면
  let {id} =  useParams();
  let findProduct = props.shoes.find((x) => x.id == id)
  let intId = parseInt(id)
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true)
  let [num, setNum] = useState('')
  let [tab, setTab] = useState(0)

  let [fade2, setFade2] = useState('');

  // console.log(state.carts)
  let dispatch = useDispatch()

  useEffect(()=>{
      let a2 =setTimeout(()=> { setFade2('end') })
    return () => {
      clearTimeout(a2)
      setFade2('')
    }
  }, [])


  // 컴포넌트가 mount, update, unmount 시 코드를 실행시키는 방법(갈고리 다는 법)
  // 1. useEffect : mount, update시 여기 코드 실행
  // useEffect 안에 있는 코드는 html 렌더링 후에 동작
  // js 코드와 같이 위에서 아래로 읽는 코드 중 복잡한 연산을 하는 코드를 기다려줄 필요 없이 
  // html를 먼저 렌더링해주고 복잡한 연간을 해줄 수 있기 때문에 효율적으로 동작함
  useEffect(() => {
    // mount, update시 여기 코드 실행
    // 어려운 연산
    // 서버에서 데이터가져오는 작업
    // 타이머 장착 등의 어렵거나 복잡한 작업을 useEffect 훅 안에 코드를 작성
    let a = setTimeout(() => { setAlert(false) }, 2000)
    return () => {
      clearTimeout(a)
    }
  }, [])

  // useEffect(()=>{
  //   // isNaN() : isNaN() 함수는 어떤 값이 NaN(Not-A-Number(숫자가 아님))인지 판별합니다
  //   if (isNaN(num) == true){
  //     window.alert("그러지마세요")
  //   }
  // }, [num])

  // 1. 재렌더링마다 코드실행 : useEffect(() => { })
  // 2. mount시 1회 코드실행 : useEffect(() => { }, [])
  // 3. unmount시 1회 코드실행 : useEffect(() => { return () => {} }, [])
  // 4. useEffect 실행 전에 뭔가 실행하려면 return () => {}
  // 5. 특정 state 변경시에만 실행하려면 [state명]

  return (
    <div className={'container start ' + fade2}>
      {/* <Btn bg="blue">버튼</Btn>
      <Btn bg="orange">버튼</Btn> */}

      
      
      {/* <input onChange={(e)=>{ setNum(e.target.value) }} /> */}

      {
        alert == true
        ? <div className="alert alert-warning"><span id="num">2</span>초이내 구매시 할인</div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ (intId+1) +'.jpg'} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          <button className="btn btn-danger" onClick={()=>{
            console.log(findProduct)
            dispatch(appendItem(findProduct))
          }}>주문하기</button> 
        </div>
      </div>


      {/* defaultActiveKey : 기본으로 눌려있을 버튼 */}
      <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
      </Nav>

      <TabContent tab={tab} />
    </div> 
  )
}

// function TabContent(props){
//   if (props.tab == 0){
//     return <div>내용0</div>
//   } else if (props.tab == 1) {
//     return <div>내용1</div>
//   } else if (props.tab == 2) {
//     return <div>내용2</div>
//   }
// }

// 팁1. props를 쓰기 귀찮을 경우, 받아올 state 명을 
// function TabContent({ tab }) 이런식으로 작성해도됨

// 팁2. 센스 좋으면 if 필요없을 수도
// array안에 자료를 넣고 tab 상태에 따라 내용을 보여줌
// [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]
function TabContent({tab}){

  let {재고, shoes} = useContext(Context1)
  let [fade, setFade] = useState('');

  useEffect(()=>{
    let a = setTimeout(()=>{
      setFade('end')
    }, 100)
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={'start ' + fade}>
    { [<div>내용0 {재고}</div>, <div>내용1</div>, <div>내용2</div>][tab] }
  </div>)
}


export default Detail