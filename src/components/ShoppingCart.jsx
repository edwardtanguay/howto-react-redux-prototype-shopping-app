import { useSelector, useDispatch } from 'react-redux';

export const ShoppingCart = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="page_shoppingCart">
			<h2>Shopping Cart</h2>
			<div>Count: {count}</div>
		</div>
	);
};