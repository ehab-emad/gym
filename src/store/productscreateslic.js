import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'





export const productcreate = createSlice({
    name: 'product',
    initialState:[],
    reducers: {
        AddProduct: (state , action) => {

         const clone={...action.payload}
         state.push(clone)
        
    }
}})

// Action creators are generated for each case reducer function
export const { AddProduct  } = productcreate.actions

export default productcreate.reducer