import { useSelector } from 'react-redux';

export const ShoppingCart = () => {
	const items = useSelector((state) => state.cart.items);

	return (
		<div className="page_shoppingCart">
			<h2>Shopping Cart</h2>
			<div>items in cart: {items.length}</div>
			<ul>
				{items.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
		</div>
	);
};
