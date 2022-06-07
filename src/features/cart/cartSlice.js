import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	customerName: '',
	coupon: false
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state) => {
			state.items.pop();
		},
		addCustomerName: (state, action) => {
			state.customerName = action.payload;
		},
		addCoupon: (state) => {
			state.coupon = true
		}
	},
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;