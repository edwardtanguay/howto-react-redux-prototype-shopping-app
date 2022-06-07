import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';
import './App.scss';
import { ShopArea } from './components/ShopArea';
import { ShoppingCart } from './components/ShoppingCart';

function App() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div className="App">
			<h1>Shopping App</h1>
			<ShopArea/>
			<ShoppingCart/>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
			<hr />
			<div>Count: {count}</div>
		</div>
	);
}

export default App;
