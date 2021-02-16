import { CART_ADD_ITEM } from '../constants/cartConstants';
import { CART_REMOVE_ITEM } from '../constants/cartConstants';

function cartReducers(state = { cartItems: [] }, action) {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const product = state.cartItems.find(x => x.product === item.product);
			if (product) {
				return {
					//if new added product is exist into cart, we will add the new qty of that item
					cartItems: state.cartItems.map(x => x.product === product.product ? item : x)
				};
			}
			return { cartItems: [ ...state.cartItems, item ] };
case CART_REMOVE_ITEM:
	return{cartItems: state.cartItems.filter(x=>x.product!==action.payload)}
		default:
			return state;
	}
}

export default cartReducers
