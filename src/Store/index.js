import { act } from 'react-dom/test-utils'


import { configureStore, createSlice } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
    reducer : {counter : counterReducer, auth : authReducer}
})


export default store;