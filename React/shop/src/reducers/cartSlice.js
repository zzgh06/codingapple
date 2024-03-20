import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    upCount(state, action){
      let index = state.findIndex((a)=>{ return a.id === action.payload } )
      state[index].count++;
    },
    downCount(state, action){
      let index = state.findIndex((a)=>{ return a.id === action.payload })
      state[index].count--;
    },
    appendItem(state, action){
      let newItem = {id : action.payload.id, name : action.payload.title, count : 1}
      // console.log(action.payload.id)
      let index = state.findIndex((a)=>{ return a.id === action.payload.id })
      if (index === -1){
        state.push(newItem);
      } else {
        state[index].count++;
      }
    },
    removeItem(state, action){
      let index = state.findIndex((a)=>{ return a.id === action.payload })
      state.splice(index, 1)
    },
    status(state){
      // console.log(state.length)
      let cartStatus = state.length
    }
  }
})

export let { upCount, downCount, appendItem, removeItem, status } = cart.actions

export default cart