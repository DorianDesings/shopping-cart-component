import { useState } from 'react';
import { PRODUCTS } from '../../constants/products';
import Filters from '../filters/Filters';
import Products from '../products/Products';

const ProductsList = ({ cart, setCart }) => {
	const [filters, setFilters] = useState({
		PC: true,
		PS4: true,
		PS5: true,
		Xbox: true
	});

	const filteredProducts = filterByPlatform(filters, PRODUCTS);

	return (
		<>
			<Filters
				filters={filters}
				setFilters={setFilters}
				resetFilters={() => resetFilters(setFilters)}
			/>
			<Products products={filteredProducts} cart={cart} setCart={setCart} />
		</>
	);
};

const filterByPlatform = (filters, PRODUCTS) => {
	return PRODUCTS.filter(product =>
		product.platforms.some(platform => filters[platform.name])
	);
};

const resetFilters = setFilters => {
	setFilters({
		PC: true,
		PS4: true,
		PS5: true,
		Xbox: true
	});
};

export default ProductsList;
