import { createSlice } from "@reduxjs/toolkit";

let carts = createSlice({
  name : 'carts',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    upCount(state, action){
      let index = state.findIndex((a)=>{ return a.id === action.payload } )
      console.log(state)
      state[index].count++;
    },
    downCount(state, action){
      let index = state.findIndex((a)=>{ return a.id === action.payload })
      state[index].count--;
    },
    appendItem(state, action){
      let newItem = {id : action.payload.id, name : action.payload.title, count : 1}
      state.push(newItem)
    }
  }
})

export let { upCount, downCount, appendItem } = carts.actions

export default carts