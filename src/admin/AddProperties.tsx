import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { ChevronDown } from 'lucide-react';
import Button from '@/components/ui/button';
import { useState } from 'react';
import { database, storage } from '@/hooks/appwrite';
import { ID } from 'appwrite';

const MAX_FILE_SIZE = 5242880;
const ALLOWED_FILE_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];

const formSchema = z.object({
	title: z.string().min(2, { message: 'Title must be at least 2 characters' }),
	description: z
		.string()
		.min(2, { message: 'Description must be at least 2 characters' }),
	location: z
		.string()
		.min(2, { message: 'Location must be at least 2 characters' }),
	price: z.string().min(1, { message: 'Price is required' }),
	amenities: z
		.array(
			z.object({
				value: z.string().min(1, 'Amenity cannot be empty'),
			})
		)
		.min(1, 'At least one amenity is required.'),
	propertyType: z.string().min(1, 'Select property type'),
	bedrooms: z.string(),
	bathrooms: z.string(),
	youtubelink: z.string().min(10, 'YouTube link is required'),
	image: z
		.array(z.instanceof(File))
		.refine((files) => files.length >= 1 && files.length <= 10, {
			message: 'You can upload between 1 and 10 images.',
		})
		.refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
			message: 'Max file size is 5MB.',
		})
		.refine(
			(files) => files.every((file) => ALLOWED_FILE_TYPES.includes(file.type)),
			{
				message: 'Only .jpg and .png formats are supported.',
			}
		),
});

type FormData = z.infer<typeof formSchema>;

type FormDataWithAmenitiesArray = Omit<FormData, 'amenities'> & {
	amenities: { value: string }[];
};

const AddProperties = () => {
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		control,
		formState: { errors },
	} = useForm<FormDataWithAmenitiesArray>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			description: '',
			location: '',
			price: '0',
			image: [],
			amenities: [{ value: '' }],
			bathrooms: '0',
			bedrooms: '0',
			propertyType: '',
			youtubelink: '',
		},
	});

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'amenities',
	});

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = event.target.files;
		if (fileList) {
			const fileArray = Array.from(fileList) as File[];
			setValue('image', fileArray);
		}
	};

	const reset = () => {
		setValue('title', '');
		setValue('description', '');
		setValue('location', '');
		setValue('price', '0');
		setValue('image', []);
		setValue('amenities', [{ value: '' }]);
		setValue('bathrooms', '0');
		setValue('bedrooms', '0');
		setValue('propertyType', '');
		setValue('youtubelink', '');
	};

	const onSubmit = async (data: FormData) => {
		setLoading(true);

		const transformedData = {
			...data,
			amenities: data.amenities.map((amenity) => amenity.value),
		};

		try {
			const imageFileIds = await Promise.all(
				transformedData.image.map(async (file) => {
					const image = await storage.createFile(
						'66c75d710025bfd53abe',
						ID.unique(),
						file
					);

					return image.$id;
				})
			);

			const docResult = await database.createDocument(
				'66c73f49002e7b7365a3',
				'66c869070039e48ddbaf',
				ID.unique(),
				{
					title: transformedData.title,
					description: transformedData.description,
					location: transformedData.location,
					price: transformedData.price,
					images: imageFileIds,
					amenities: transformedData.amenities,
					bedrooms: transformedData.bedrooms,
					bathroom: transformedData.bathrooms,
					propertyType: transformedData.propertyType,
					link: transformedData.youtubelink,
				}
			);
			console.log('Document created:', docResult);

			alert('Property added successfully!');
			reset();
		} catch (error) {
			console.error('Error submitting form:', error);
			alert('An error occurred while submitting the form. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<div className="container">
				<h1 className="text-xl font-semibold">Add Properties</h1>
				<form
					action=""
					className="border p-4 rounded-md border-border flex flex-col gap-4 w-full"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-2">
						<label htmlFor="title" className="text-base font-semibold">
							Title
						</label>
						<input
							id="title"
							type="text"
							{...register('title')}
							className={`bg-background-secondary w-full border ${
								errors.title ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Property Title"
						/>
						{errors.title && (
							<span className="text-red-500">{errors.title.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="propertyType">Property Type</label>
						<div className="relative h-10">
							<select
								id="propertyType"
								{...register('propertyType')}
								className="text-sm block w-full h-full border border-border rounded-md bg-background-primary text-txt appearance-none focus:outline-none p-2">
								<option value="Building">Building</option>
								<option value="Flat">Flat</option>
								<option value="Apartment">Apartment</option>
								<option value="Lands">Lands</option>
								<option value="Estate">Estate</option>
								<option value="Building Construction">
									Building Construction
								</option>
								<option value="Office Buildings">Office Buildings</option>
								<option value="Shopping Centers/Malls">
									Shopping Centers/Malls
								</option>
								<option value="Restaurants">Restaurants</option>
								<option value="Hotels">Hotels</option>
								<option value="Warehouses">Warehouses</option>
								<option value="Penthouses">Penthouses</option>
							</select>
							<div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer pointer-events-none">
								<ChevronDown className="p-1 bg-background-secondary rounded-full" />
							</div>
							{errors.propertyType && (
								<span className="text-red-500">
									{errors.propertyType.message}
								</span>
							)}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<label className="text-base font-semibold">Amenities</label>
						{fields.map((field, index) => (
							<div key={field.id} className="flex gap-2">
								<input
									{...register(`amenities.${index}.value`)}
									className={`bg-background-secondary w-full border ${
										errors.amenities?.[index]
											? 'border-red-500'
											: 'border-border'
									} rounded-md p-2`}
									placeholder="Enter an amenity"
								/>
								<button
									type="button"
									onClick={() => remove(index)}
									className="bg-red-500 text-white p-2 rounded">
									Remove
								</button>
							</div>
						))}
						{errors.amenities && (
							<span className="text-red-500">{errors.amenities.message}</span>
						)}
						<button
							type="button"
							onClick={() => append({ value: '' })}
							className="mt-2 bg-blue-500 text-white p-2 rounded">
							Add Amenity
						</button>
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="location" className="text-base font-semibold">
							Location
						</label>
						<input
							id="location"
							type="text"
							{...register('location')}
							className={`bg-background-secondary w-full border ${
								errors.location ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Location"
						/>
						{errors.location && (
							<span className="text-red-500">{errors.location.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="price" className="text-base font-semibold">
							Price
						</label>
						<input
							id="price"
							type="text"
							{...register('price')}
							className={`bg-background-secondary w-full border ${
								errors.price ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="price"
						/>
						{errors.price && (
							<span className="text-red-500">{errors.price.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="bedrooms" className="text-base font-semibold">
							Bedrooms
						</label>
						<input
							id="bedrooms"
							type="text"
							{...register('bedrooms')}
							className={`bg-background-secondary w-full border ${
								errors.bedrooms ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="bedrooms"
						/>
						{errors.bedrooms && (
							<span className="text-red-500">{errors.bedrooms.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="bathrooms" className="text-base font-semibold">
							Bathrooms
						</label>
						<input
							id="bathrooms"
							type="text"
							{...register('bathrooms')}
							className={`bg-background-secondary w-full border ${
								errors.bathrooms ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="bathrooms"
						/>
						{errors.bathrooms && (
							<span className="text-red-500">{errors.bathrooms.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="description" className="text-base font-semibold">
							Description
						</label>
						<textarea
							id="description"
							rows={5}
							{...register('description')}
							className={`bg-background-secondary w-full border ${
								errors.description ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Property Description"
						/>
						{errors.description && (
							<span className="text-red-500">{errors.description.message}</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="youtubelink" className="text-base font-semibold">
							Link
						</label>
						<input
							id="youtubelink"
							type="text"
							{...register('youtubelink')}
							className={`bg-background-secondary w-full border ${
								errors.youtubelink ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Videolink"
						/>
						{errors.youtubelink && (
							<span className="text-red-500">{errors.youtubelink.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="image" className="text-base font-semibold">
							Upload Images
						</label>
						<input
							id="image"
							type="file"
							onChange={handleImageChange}
							multiple
							className={`bg-background-secondary w-full border ${
								errors.image ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
						/>
						{errors.image && (
							<span className="text-red-500">{errors.image.message}</span>
						)}
					</div>

					<Button type="submit" variant="secondary" className="">
						{loading ? 'Loading...' : 'Add Property'}
					</Button>
				</form>
			</div>
		</>
	);
};

export default AddProperties;
