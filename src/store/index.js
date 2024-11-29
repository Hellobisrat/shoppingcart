

import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice'



const store = configureStore({
  resucer:{
    cart:cartReducer
  }
})

export default store

