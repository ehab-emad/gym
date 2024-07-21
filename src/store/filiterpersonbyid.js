import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import p2 from '../json/db.json'
export const getData2 = createAsyncThunk('ecommercem/getData2', async (_, thunkAPI) => {

    const res = await fetch('https://json-server-6-yt8p.onrender.com/informationpreson');
        const data = await res.json()
       
        return (data)
    })




export const personinfo = createSlice({
    name: 'ecommercem',
    initialState: { person: [] },
    reducers: {

        // fetchCatigories :(state , action)=>{
        //     state.categories.push(action.payload)
        //    }
    },

    extraReducers: (builder) => {
        builder.addCase(getData2.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getData2.fulfilled, (state, action) => {
            state.ll = action.payload;

            state.loading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { loading ,fetchCatigories} = personinfo.actions

export default personinfo.reducer