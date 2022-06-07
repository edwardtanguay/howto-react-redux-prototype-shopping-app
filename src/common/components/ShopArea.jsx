import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../features/cart/cartSlice';

export const ShopArea = () => {
	const dispatch = useDispatch();

	return (
		<div className="page_shopArea">
			<h2>Shop Area</h2>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(increment())}>+</button>
		</div>
	);
};