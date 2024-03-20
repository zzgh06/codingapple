import { combineReducers  } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  user : userReducer.reducer,
  cart: cartReducer.reducer, // cartReducer.reducer가 cart reducer의 실제 reducer 함수입니다.
});

export default rootReducer;
