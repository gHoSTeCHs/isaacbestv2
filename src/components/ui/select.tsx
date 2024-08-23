import { ChevronDown } from 'lucide-react';
interface SelectBoxProps {
	title: string;
	values: string[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ title, values }) => {
	return (
		<div className="relative h-10">
			<select
				id="Location"
				className="text-sm block w-full h-full border border-border rounded-md bg-background-primary text-txt appearance-none focus:outline-none p-2">
				<option value={title} disabled selected>
					{title}
				</option>
				{values.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
			<div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer pointer-events-none">
				<ChevronDown className="p-1 bg-background-secondary rounded-full" />
			</div>
		</div>
	);
};

export default SelectBox;
