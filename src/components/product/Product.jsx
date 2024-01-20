import { useState } from 'react';
import Platforms from '../plattforms/Platforms';
import { StyledImage, StyledProduct } from './styles';

const Product = ({ product, cart, setCart }) => {
	const [activePlatform, setActivePlatform] = useState(0);
	return (
		<StyledProduct>
			<StyledImage src={product.image} alt='' />
			<p>{product.name}</p>
			<div>
				<Platforms
					platforms={product.platforms}
					activePlatform={activePlatform}
					setActivePlatform={setActivePlatform}
					changeActivePlatform={changeActivePlatform}
				/>
			</div>
			<p>{product.platforms[activePlatform].price} €</p>
			<button
				onClick={() => addProductToCart(cart, setCart, product, activePlatform)}
			>
				ADD TO CART
			</button>
		</StyledProduct>
	);
};

const changeActivePlatform = (index, setActivePlatform) => {
	setActivePlatform(index);
};

const addProductToCart = (cart, setCart, product, activePlatform) => {
	const newCart = [...cart];
	const existsProduct = cart.some(
		cartProduct => product.platforms[activePlatform].id === cartProduct.id
	);

	if (existsProduct) {
		const existingProduct = cart.find(
			cartProduct => product.platforms[activePlatform].id === cartProduct.id
		);
		existingProduct.amount++;
	} else {
		newCart.push({
			id: product.platforms[activePlatform].id,
			name: product.name,
			price: product.platforms[activePlatform].price,
			platform: product.platforms[activePlatform].name,
			amount: 1
		});
	}
	setCart(newCart);
};

export default Product;
