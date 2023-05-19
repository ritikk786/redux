import {  createSlice } from '@reduxjs/toolkit'

const initialCounterstate = {
    counter : 0,
    showtoggle : true,
}
const counterSlice = createSlice({
    name : 'count',
    initialState : initialCounterstate,
    reducers : {
        increment(state, action) {
         state.counter = state.counter + action.payload
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload
        },
        showtoggle(state){
            state.showtoggle = !state.showtoggle
        }
    }
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;