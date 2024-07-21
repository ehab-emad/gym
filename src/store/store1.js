import { configureStore } from "@reduxjs/toolkit";
import authslic1 from "./authslic1";
import cartSlice from "./cartslic1";
import productSlice from "./createslic1";
import productSlices from "./fetchslic1";
import categoryslic from "./gategoryslic1";
import postsSlice from "./postslic1";


export const store=configureStore({
    reducer:{  auth: authslic1,
    // createe:productcreate,
        posts : postsSlice,
        // ord : orderdetailslic,
    productss:productSlice,
    products:productSlices,
    // posts : postsSlice,
    carts :cartSlice,
    catogeryy:categoryslic,
    // fil : filterSlice
    
    
    }
    
    })