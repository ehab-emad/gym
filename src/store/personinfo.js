import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'





export const createperson = createSlice({
    name: 'product',
    initialState:[],
    reducers: {
        addperson: (state , action) => {

         const clone={...action.payload}
         state.push(clone)
        
    }
}})

// Action creators are generated for each case reducer function
export const { addperson  } = createperson.actions

export default createperson.reducer