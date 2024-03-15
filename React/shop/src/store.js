import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'
import carts from './store/cartsSlice'


let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})


export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    carts : carts.reducer,
  }
}) 