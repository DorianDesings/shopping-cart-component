import { PLATFORMS } from '../../constants/platforms';

const Filters = ({ filters, setFilters, resetFilters }) => {
	return (
		<div>
			{PLATFORMS.map(platform => {
				return (
					<div key={platform.id}>
						<label htmlFor={platform.name}>{platform.name}</label>
						<input
							type='checkbox'
							id={platform.name}
							checked={filters[platform.name]}
							onChange={event =>
								setFilters({
									...filters,
									[platform.name]: event.target.checked
								})
							}
						/>
					</div>
				);
			})}
			<button onClick={resetFilters}>Reset Filters</button>
		</div>
	);
};

export default Filters;
