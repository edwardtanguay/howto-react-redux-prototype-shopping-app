import { useDispatch } from 'react-redux';
import { removeItem, addItem } from '../../features/cart/cartSlice';

export const ShopArea = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_shopArea">
			<h2>Shop Area</h2>
			<button onClick={() => dispatch(removeItem())}>-</button>
			<button onClick={() => dispatch({type: 'cart/addItem', payload: 'milk'})}>Milk</button>
			<button onClick={() => dispatch({type: 'cart/addItem', payload: 'sugar'})}>Sugar</button>
		</div>
	);
};