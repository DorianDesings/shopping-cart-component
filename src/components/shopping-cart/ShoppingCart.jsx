const ShoppingCart = ({ cart, setCart }) => {
	const totalPrice = calculateTotalPrice(cart);

	if (cart.length === 0) return <p>No products</p>;

	return (
		<div>
			{cart.map(product => (
				<div key={product.id}>
					<p>
						{product.name} {product.platform}{' '}
						{product.amount > 1 && `(${product.amount})`}
					</p>
					<p>{(product.price * product.amount).toFixed(2)}</p>
					<button onClick={() => deleteOneProduct(cart, setCart, product.id)}>
						Remove One
					</button>
					<button onClick={() => deleteAllProducts(cart, setCart, product.id)}>
						Remove All
					</button>
				</div>
			))}

			{totalPrice !== 0 && <p>Total: {totalPrice.toFixed(2)} €</p>}
		</div>
	);
};

const calculateTotalPrice = cart => {
	return cart.reduce((acc, game) => game.price * game.amount + acc, 0);
};

const deleteAllProducts = (cart, setCart, id) => {
	const updatedCart = cart.filter(cartProduct => cartProduct.id !== id);

	setCart(updatedCart);
};

const deleteOneProduct = (cart, setCart, id) => {
	const productToDelete = cart.find(cartProduct => cartProduct.id === id);

	if (productToDelete.amount === 1) {
		deleteAllProducts(cart, setCart, id);
		return;
	}

	const updatedCart = cart.map(cartProduct => {
		console.log(cartProduct);
		if (cartProduct.id === id) cartProduct.amount--;
		console.log(cartProduct);
		return cartProduct;
	});

	setCart(updatedCart);
};

export default ShoppingCart;
