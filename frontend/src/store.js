import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools}from 'redux-devtools-extension';
import { productSReducer,productDetailReducer,newReviewReducer,
  newProductReducer,
  productReducer,
  productReviewsReducer,
  reviewReducer} from './reducers/productR';
import { userReducer,userProfileR,forgotPasswordR,
  userDetailsReducer,allUsersReducer } from './reducers/userReducer';
import {cartReducer} from './reducers/CartReducer';
import {newOrderReducer,myOrdersReducer,
  orderDetailsReducer,allOrdersReducer,orderReducer } from './reducers/orderR';



const reducer=combineReducers({
     productList:productSReducer,
     productDetail:productDetailReducer,
      user:userReducer,
      profile:userProfileR,
      forgotPassword:forgotPasswordR,
      cart:cartReducer,
      newOrder:newOrderReducer,
      myOrders: myOrdersReducer,
      orderDetails: orderDetailsReducer,
      newReview: newReviewReducer,
      newProduct: newProductReducer,
      product: productReducer,
      allOrders:allOrdersReducer,
      orders:orderReducer,
      allUsers:allUsersReducer,
      userDetails: userDetailsReducer,
      productReviews: productReviewsReducer,
      review: reviewReducer,
    
});

const initialState={cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
      shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
    },
    
    };
const middelware=[thunk];
const store=createStore(reducer,initialState,
    composeWithDevTools(applyMiddleware(...middelware)));


    export default store;