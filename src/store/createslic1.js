import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// import db from '../../public/json/db.json'
export const getData = createAsyncThunk('ecommerce/getData', async (_, thunkAPI) => {

    const res = await fetch('https://json-server-6-yt8p.onrender.com/products');
    const data = await res.json()
  
    return (data)

})


 
export const productSlice = createSlice({
    name: 'ecommerce',
    initialState: { product: []
        ,  counterItems: localStorage.getItem("counterItems") ? JSON.parse(localStorage.getItem("counterItems"))
        : [], loading:false
    },
   
    reducers: { 
    //      addPost: (state , action) => {
         
    //     const findCart = state.product.find((product) => product.id === action.payload.id)

    //     state.pr.push(findCart)
    //     console.log(state.pr)

    //     if (findCart) {
    //         findCart.quantity += 1;
    //     } else {
    //         const cloneCart = { ...action.payload, quantity: 1 }
    //         console.log(cloneCart)
     
    //     }
    
    // },

//         addCart: (state, action) => {

//             const findCart = state.product.find((product) => product.id === action.payload.id)
// state.p.push(findCart)
// console.log(state.pr)
//             if (findCart) {
//                 findCart.quantity += 1;
//                 swal("Good job!", "Now You updated the quantity of product in the cart!", "success")
//             } else {
//                 const cloneCart = { ...action.payload, quantity: 1 }
//                 state.pr.push(cloneCart)
//                 swal("Excellent Work!", "You add the product in the cart!", "success")
//             }
//         },
//         deleteCart: (state, action) => {

//             swal("Good Job!", "You are deleted the product from the cart!", "success")
// return state.p.filter((cart) => cart.id !== action.payload.id)

//         },
//         clearCart: (state, action) => {

//             swal("Good Job!", "You are cleared the cart!", "success")
//     // return   state.pr
//         },
//         increase: (state, action) => {

//             const findCart = state.pr.find((product) => product.id === action.payload.id)

//             if (findCart) {
//                 findCart.quantity += 1;
//             } else {
//                 const cloneCart = { ...action.payload, quantity: 1 }
//                 state.push(cloneCart)
//             }
        
//         },
//         decrease: (state, action) => {

//             const findCart = state.pr.find((product) => product.id === action.payload.id)

//             if (findCart.quantity > 1) {
//                 findCart.quantity--;
//             }
//              else if(findCart.quantity = 1) {
//                 const cloneCart = { ...action.payload, quantity: 1 }
//                 state.push(cloneCart)
//                 return state.pr.filter((cart) => cart.id !== action.payload.id)
//             }
        
//         }
// addproduct:(state,action)=>{

// state.product.push(action.payload)
// console.log(state.product)



// },
    
        filter: (state, action) => {
            // swal("Good Job!", `You are filtered only ${action.payload} product!`, "success")
           const fliter = state.product.filter( (product)=>product.category ===action.payload)
          
           state.counterItems=fliter
           console.log(fliter)
           localStorage.setItem("counterItems", JSON.stringify(state.counterItems));
        },  
       
    },

    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.product = action.payload;

            state.loading = false;
        })
    }
})

// Action creators are generated for each case reducer function
export const { loading, filter ,addPost,increase,decrease,clearCart,deleteCart,addCart,addproduct} = productSlice.actions

export default productSlice.reducer