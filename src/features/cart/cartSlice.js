import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		increment: (state) => {
			const _items = state.items;
			_items.push('nnn');
			state.items = _items;
			console.log(state.items);
		},
		decrement: (state) => {
			state.items.pop();
		}
	},
});

export const { increment, decrement} = cartSlice.actions;
export default cartSlice.reducer;