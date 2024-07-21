import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getData1 = createAsyncThunk('ecommercem/getData1', async (_, thunkAPI) => {

    const res = await fetch('https://json-server-6-yt8p.onrender.com/allcatogray');
        const data = await res.json()
       
        return (data)
    })




export const categoryslic = createSlice({
    name: 'ecommercem',
    initialState: { ll: [] },
    reducers: {

        // fetchCatigories :(state , action)=>{
        //     state.categories.push(action.payload)
        //    }
    },

    extraReducers: (builder) => {
        builder.addCase(getData1.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getData1.fulfilled, (state, action) => {
            state.ll = action.payload;

            state.loading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { loading ,fetchCatigories} = categoryslic.actions

export default categoryslic.reducer