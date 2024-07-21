import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';





const initialState = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    previousURL: "",
  };
export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        // addCart: (state, action) => {

        //     const findCart = state.find((product) => product.id === action.payload.id)

        //     if (findCart) {
        //         findCart.quantity += 1;
        //         swal("Good job!", "Now You updated the quantity of product in the cart!", "success")
        //     } else {
        //         const cloneCart = { ...action.payload, quantity: 1 }
        //         state.push(cloneCart)
        //         swal("Excellent Work!", "You add the product in the cart!", "success")
        //     }
        // },
        ADD_TO_CART(state, action) {
            //   console.log(action.payload);
            const productIndex = state.cartItems.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (productIndex >= 0) {
              // Item already exists in the cart
              // Increase the cartQuantity
              state.cartItems[productIndex].cartQuantity += 1;
              toast.info(`${action.payload.title} increased by one`, {
                position: "top-left",
              });
            } else {
              // Item doesn't exists in the cart
              // Add item to the cart
              const tempProduct = { ...action.payload, cartQuantity: 1 };
              state.cartItems.push(tempProduct);
              toast.success(`${action.payload.name} added to cart`, {
                position: "top-left",
              });
            }
            // save cart to LS
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          },
//         deleteCart: (state, action) => {

//             swal("Good Job!", "You are deleted the product from the cart!", "success")
// return state.filter((cart) => cart.id !== action.payload.id)
            
        
//         },
//         clearCart: (state, action) => {
//             swal("Good Job!", "You are cleared the cart!", "success")
//             return [];


//         },
INCREASE_CART: (state, action) => { 
          const productIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
      
        
            state.cartItems[productIndex].cartQuantity += 1;
            toast.info(`${action.payload.name} incresment by one`, {
              position: "top-left",
            });
          
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
// 
            // const findCart = state.cartItems.find((product) => product.id === action.payload.id)

            // if (findCart) {
            //     findCart.quantity += 1;
            // } else {
            //     const cloneCart = { ...action.payload, quantity: 1 }
            //     state.push(cloneCart)
            // }
        
        },
        SAVE_URL(state, action) {
          console.log(action.payload);
          state.previousURL = action.payload;
        },
//         decrease: (state, action) => {

//             const findCart = state.find((product) => product.id === action.payload.id)

//             if (findCart.quantity > 1) {
//                 findCart.quantity--;
//             }
//              else if(findCart.quantity = 1) {
//                 // const cloneCart = { ...action.payload, quantity: 1 }
//                 // state.push(cloneCart)
//                 return state.filter((cart) => cart.id !== action.payload.id)
//             }
        
//         }
DECREASE_CART(state, action) {
    console.log(action.payload);
    const productIndex = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );

    if (state.cartItems[productIndex].cartQuantity > 1) {
      state.cartItems[productIndex].cartQuantity -= 1;
      toast.info(`${action.payload.title} decreased by one`, {
        position: "top-left",
      });
    } else if (state.cartItems[productIndex].cartQuantity === 1) {
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItem;
      toast.success(`${action.payload.title} removed from cart`, {
        position: "top-left",
      });
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  },
  REMOVE_FROM_CART(state, action) {
    const newCartItem = state.cartItems.filter(
      (item) => item.id !== action.payload.id
    );

    state.cartItems = newCartItem;
    toast.success(`${action.payload.title} removed from cart`, {
      position: "top-left",
    });

    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  },
  CLEAR_CART(state, action) {
    state.cartItems = [];
    toast.info(`Cart cleared`, {
      position: "top-left",
    });

    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  },
  CALCULATE_SUBTOTAL(state, action) {
    const array = [];
    state.cartItems.map((item) => {
      const { price, cartQuantity } = item;
      const cartItemAmount = price * cartQuantity;
      return array.push(cartItemAmount);
    });
    const totalAmount = array.reduce((a, b) => {
      return a + b;
    }, 0);
    state.cartTotalAmount = totalAmount;
  },
    },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart,SAVE_URL, clearCart, increase , decrease ,DECREASE_CART,CALCULATE_SUBTOTAL,  ADD_TO_CART,INCREASE_CART,REMOVE_FROM_CART,CLEAR_CART} = cartSlice.actions
// export const selectPreviousURL = (state) => state.cartItems.previousURL;

export default cartSlice.reducer