import { createSlice } from '@reduxjs/toolkit'






export const postsSlice = createSlice({
    name: 'posts',
    initialState:{ postitems: localStorage.getItem("postitems")
        ? JSON.parse(localStorage.getItem("postitems"))
        : []},
    reducers: {
        addPost: (state , action) => {
            state.postitems=[]
            const findCart = state.postitems.find((product) => product.id === action.payload.id)
console.log(findCart)
            if (findCart) {
console.log(state.id)

            } else {
                const cloneCart = { ...action.payload }
console.log(cloneCart)
state.postitems.push(cloneCart)
            }
            localStorage.setItem("postitems", JSON.stringify(state.postitems));
        }
       
    },
})

// Action creators are generated for each case reducer function
export const { addPost  } = postsSlice.actions

export default postsSlice.reducer