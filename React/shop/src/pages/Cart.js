import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "../reducers/userSlice"
import { upCount, downCount, removeItem, status } from "../reducers/cartSlice"
import { memo, useState } from "react"


function Cart (){

  let state = useSelector((state)=>{ return state })
  let dispatch = useDispatch()
  let [count, setCount] = useState(0)

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      <button onClick={()=>{ dispatch(increase(100) )}}>버튼</button>

      <Table>
      <thead>
        <tr>
          <th>No.</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경하기</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {
          state.cart.map((a, i)=>
            <tr key={i}>
              <td>{state.cart[i].id}</td>
              <td>{state.cart[i].name}</td>
              <td>{state.cart[i].count}</td>
              <td>
                <button onClick={()=>{
                  // console.log(state.carts[i].id)
                  // console.log(i)
                  dispatch(upCount(state.cart[i].id))
                }}>+</button>

                <button onClick={()=>{
                  dispatch(downCount(state.cart[i].id))
                }}>-</button>
              </td>
              <td>
                <button onClick={()=>{
                  dispatch(removeItem(state.cart[i].id))
                  dispatch(status())
                }}>x</button>
              </td>
            </tr>
          )
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Cart