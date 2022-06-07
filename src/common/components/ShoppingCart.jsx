import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
	const { items, customerName } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className="page_shoppingCart">
			<h2>Shopping Cart</h2>
			<button onClick={() => dispatch({ type: 'cart/addCustomerName', payload: 'Henri' })}>Add Customer Name</button> {customerName}
			<div>items in cart: {items.length}</div>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
