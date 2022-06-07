import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
	const { items, customerName, coupon } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className="page_shoppingCart">
			<h2>Shopping Cart</h2>
			<button onClick={() => dispatch({ type: 'cart/addCustomerName', payload: 'Henri' })}>Add Customer Name</button> {customerName}
			<button onClick={() => dispatch({ type: 'cart/addCoupon'})}>Add Coupon</button> {coupon ? 'COUPON IS ACTIVE' : '(no coupon)'}
			<div>items in cart: {items.length}</div>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
