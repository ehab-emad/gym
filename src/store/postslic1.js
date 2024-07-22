import { createSlice } from '@reduxjs/toolkit'






export const postsSlice = createSlice({
    name: 'posts',
    initialState:{postItems: localStorage.getItem("postItems")
        ? JSON.parse(localStorage.getItem("postItems"))
        : []},
    reducers: {
        addPost: (state , action) => {
            // state.postItems=[]
            const findCart = state.postItems.find((product) => product.id === action.payload.id)
console.log(findCart)
            if (findCart) {
console.log(state.id)
// findCart.quantity += 1;
            } else {
                const cloneCart = { ...action.payload }
console.log(cloneCart)
state.postItems.push(cloneCart)
            }
            localStorage.setItem("postItems", JSON.stringify(state.postItems));
            
        }
       
    },
})

// Action creators are generated for each case reducer function
export const { addPost  } = postsSlice.actions

export default postsSlice.reducer