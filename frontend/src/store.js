
import {createStore,combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productDetailsReducer,productListReducer} from './reducers/productReducers';
import cartReducers from './reducers/cartReducers';
import Cookie from "js-cookie";

const cartItems=Cookie.getJSON("cartItems") ||  [];

const initialState= {cart:{cartItems}};
const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducers
})
const composeEnhancer=window.__REDUXD_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;