import { useState } from 'react';
import Main from './components/main/Main';
import ProductsList from './components/products-list/ProductsList';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [cart, setCart] = useState([]);
	return (
		<>
			<GlobalStyles />
			<h1>VIDEOGAMES</h1>
			<Main>
				<ProductsList cart={cart} setCart={setCart} />
				<div>
					<h2>Shopping Cart</h2>
					<ShoppingCart cart={cart} setCart={setCart} />
				</div>
			</Main>
		</>
	);
};

export default App;
