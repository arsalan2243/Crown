import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './cart.types';


export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
});


export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item
})