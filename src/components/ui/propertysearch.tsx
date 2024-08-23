import { Search } from 'lucide-react';
import Button from './button';
import SelectBox from './select';

const PropertySearch = () => {
	return (
		<>
			<div className="bg-background-secondary rounded-md relative p-1">
				<input
					type="search"
					placeholder="Search Properties"
					className="block w-full p-3 pr-16 rounded-md border border-border focus:outline-none bg-background-primary"
				/>
				<Button
					variant="secondary"
					className="flex items-center py-[5px] gap-2 justify-center absolute top-1/2 right-3 transform -translate-y-1/2">
					<span className="hidden md:block">Search</span>
					<Search className="w-4 h-6 md:w-6 md:h-6" />
				</Button>
			</div>

			<div className="flex flex-col gap-5 p-5 mt-5 bg-background-secondary rounded-md relative ">
				<SelectBox
					title="Property Type"
					values={['Lands', 'Building', 'Apartments', 'Duplex']}
				/>
				<SelectBox
					title="Price Range"
					values={[
						'Less than 10 million',
						'Less than 30 million',
						'Less than 70 million',
						'Above 100 million',
					]}
				/>
			</div>
		</>
	);
};

export default PropertySearch;
