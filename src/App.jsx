import './App.scss';
import { ShopArea } from './components/ShopArea';
import { ShoppingCart } from './components/ShoppingCart';

function App() {

	return (
		<div className="App">
			<h1>Shopping App</h1>
			<ShopArea/>
			<ShoppingCart/>
		</div>
	);
}

export default App;
