import Product from '../product/Product';
import { StyledProducts } from './styles';

const Products = ({ products, cart, setCart }) => {
	return (
		<StyledProducts>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					cart={cart}
					setCart={setCart}
				/>
			))}
		</StyledProducts>
	);
};

export default Products;
