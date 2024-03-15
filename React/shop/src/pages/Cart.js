import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "../store/userSlice"
import { upCount, downCount } from "../store/cartsSlice"

function Cart (){

  let state = useSelector((state)=>{ return state })
  // console.log(state.carts)
  let dispatch = useDispatch()

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
        </tr>
      </thead>
      <tbody>
        {
          state.carts.map((a, i)=>
            <tr key={i}>
              <td>{state.carts[i].id}</td>
              <td>{state.carts[i].name}</td>
              <td>{state.carts[i].count}</td>
              <td>안녕</td>
              <td>
                <button onClick={()=>{
                  // console.log(state.carts[i].id)
                  dispatch(upCount(state.carts[i].id))
                }}>+</button>
                
                <button onClick={()=>{
                  dispatch(downCount(state.carts[i].id))
                }}>-</button>
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