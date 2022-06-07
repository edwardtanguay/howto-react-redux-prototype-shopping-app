import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state) => {
			const _items = state.items;
			_items.push('nnn');
			state.items = _items;
			console.log(state.items);
		},
		removeItem: (state) => {
			state.items.pop();
		}
	},
});

export const { addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;