import PropertyCard from '@/components/PropertyCard';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';
import Button from '@/components/ui/button';
import Header from '@/components/ui/header';
import PropertySearch, {
	PropertyFilters,
} from '@/components/ui/propertysearch';
import { images } from '@/constants';
import { database, storage } from '@/hooks/appwrite';
import { ArrowLeftIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

interface PropertyType {
	name: string;
	image: string;
	description: string;
}

interface Files {
	imgUrls: string[];
	$id: string;
	title: string;
	description: string;
	location: string;
	price: string;
	images: string[];
	video?: string;
	propertyType?: string;
}

const propertyTypes: PropertyType[] = [
	{
		name: 'Building',
		image: images.buildings,
		description:
			'Explore our diverse range of buildings, perfect for residential or commercial use. These structures offer spacious layouts and modern amenities, designed to meet the needs of families and businesses alike. Whether you’re looking for a cozy home or a vibrant workspace, our buildings provide the ideal setting.',
	},
	{
		name: 'Lands',
		image: images.land,
		description:
			'Discover prime land opportunities that offer endless possibilities for development. Whether you envision a private retreat, agricultural use, or a new construction project, our land listings provide the perfect canvas for your dreams. Enjoy the freedom to create your ideal space in a location that suits your lifestyle.',
	},
	{
		name: 'Flat',
		image: images.flats,
		description:
			'Our selection of flats combines convenience and comfort, making them ideal for urban living. With modern designs and easy access to local amenities, these homes are perfect for young professionals and families seeking a vibrant lifestyle. Experience the best of city living in a stylish flat that feels like home.',
	},
	{
		name: 'Building Construction',
		image: images.buildingconstruction,
		description:
			'Partner with us for your building construction needs. We specialize in creating high-quality structures tailored to your specifications. Our experienced team ensures that every project is completed on time and within budget, delivering results that exceed expectations. Let us help you bring your vision to life.',
	},
	{
		name: 'Estate',
		image: images.estate,
		description:
			'Invest in an estate that offers both luxury and space. These expansive properties provide a unique lifestyle with ample room for entertaining, gardening, or simply enjoying nature. Experience the tranquility of estate living while being close to essential amenities and services.',
	},
	{
		name: 'Apartment',
		image: images.apartment,
		description:
			'Our apartments offer a perfect blend of comfort and convenience. With modern layouts and a range of amenities, these homes are designed for those who appreciate a hassle-free lifestyle. Enjoy community living with easy access to shopping, dining, and recreational activities.',
	},
	{
		name: 'Office Buildings',
		image: images.officebuilding,
		description:
			'Discover our portfolio of office buildings that cater to businesses of all sizes. These properties are strategically located to provide easy access for employees and clients alike. Equipped with modern facilities, our office spaces are designed to foster productivity and collaboration.',
	},
	{
		name: 'Shopping Centers/Malls',
		image: images.shoppingcenters,
		description:
			'Explore our shopping centers and malls, designed to attract foot traffic and provide a vibrant shopping experience. These properties feature a diverse mix of retail outlets, dining options, and entertainment venues, making them ideal for investors looking to capitalize on commercial opportunities.',
	},
	{
		name: 'Restaurants',
		image: images.resturants,
		description:
			'Invest in prime restaurant locations that promise high visibility and customer engagement. Our listings feature properties with established clientele and modern facilities, perfect for aspiring restaurateurs or seasoned operators looking to expand their portfolio.',
	},
	{
		name: 'Hotels',
		image: images.hotels,
		description:
			'Our hotel properties offer exceptional investment opportunities in the hospitality sector. With prime locations, luxurious amenities, and a proven track record of success, these hotels are ideal for investors looking to tap into the thriving tourism market.',
	},
	{
		name: 'Warehouses',
		image: images.warehouse,
		description:
			'Explore our warehouse listings that provide ample space for storage and distribution. These properties are strategically located to facilitate logistics and supply chain operations, making them ideal for businesses looking to optimize their operations.',
	},
	{
		name: 'Penthouses',
		image: images.penthouse,
		description:
			'Experience luxury living in our exquisite penthouses, featuring stunning views and high-end finishes. These exclusive properties offer spacious layouts and premium amenities, providing a lifestyle of comfort and elegance in the heart of the city.',
	},
];
const Properties = () => {
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState<Files[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [filteredFiles, setFilteredFiles] = useState<Files[]>([]);
	const [filters, setFilters] = useState<PropertyFilters>({
		priceRange: '',
	});
	const [selectedType, setSelectedType] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await database.listDocuments(
					'66c73f49002e7b7365a3',
					'66c869070039e48ddbaf'
				);
				const docs = response.documents as unknown as Files[];

				const docsWithImageUrls = await Promise.all(
					docs.map(async (doc) => {
						const imageUrls = await Promise.all(
							doc.images.map(async (fileId) => {
								const imageUrl = await storage.getFileView(
									'66c75d710025bfd53abe',
									fileId
								);
								return imageUrl.href;
							})
						);

						return { ...doc, imgUrls: imageUrls };
					})
				);

				setFiles(docsWithImageUrls);
			} catch (error) {
				console.error(error);
				setError('Failed to load properties. Please try again later.');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const applyFilters = () => {
			let filtered = files;

			if (selectedType) {
				filtered = filtered.filter(
					(file) => file.propertyType === selectedType
				);
			}

			if (filters.priceRange) {
				const priceRanges = {
					'Less than 10 million': (price: number) => price < 10000000,
					'Less than 30 million': (price: number) => price < 30000000,
					'Less than 70 million': (price: number) => price < 70000000,
					'Above 100 million': (price: number) => price >= 100000000,
				};

				filtered = filtered.filter((file) => {
					const price = parseFloat(file.price);
					return priceRanges[filters.priceRange as keyof typeof priceRanges](
						price
					);
				});
			}

			setFilteredFiles(filtered);
		};

		applyFilters();
	}, [files, filters, selectedType]);

	const handleFilterChange = (newFilters: PropertyFilters) => {
		setFilters(newFilters);
	};

	const handleTypeClick = (type: string) => {
		setSelectedType(type);
	};

	const handleBack = () => {
		setSelectedType(null);
		setFilters({ priceRange: '' });
	};

	return (
		<div>
			<NavBar />
			<div className="container">
				<section className="py-12">
					{!selectedType ? (
						<>
							<Header
								title="Choose a Property Type"
								description="Select a property type to explore the available options."
								showAbstract={true}
							/>
							<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mt-10">
								{propertyTypes.map((type) => (
									<div
										key={type.name}
										className="flex flex-col gap-2 justify-center p-4 max-w-[300px] h-[428px] border border-border rounded-xl hover:scale-105 hover:bg-background-secondary/30 transition-all"
										onClick={() => handleTypeClick(type.name)}>
										<img
											loading="lazy"
											src={type.image}
											alt={type.name}
											className="w-full h-[200px] object-cover rounded-xl"
										/>
										<div className="flex flex-col gap-2">
											<h1 className="text-xl font-semibold">{type.name}</h1>
											<p className="text-sm text-txt">{type.description}</p>
										</div>
									</div>
								))}
							</div>
						</>
					) : (
						<>
							<Button
								onClick={handleBack}
								className="flex items-center gap-2 mb-4 text-blue-500 hover:underline">
								<ArrowLeftIcon /> <span>Back to Property Types</span>
							</Button>
							<PropertySearch onFilterChange={handleFilterChange} />
							{loading ? (
								<div className="flex items-center justify-center w-full h-screen">
									<div className="flex items-center gap-3">
										<SkeletonTheme baseColor="#191919">
											{Array.from({ length: 3 }).map((_, index) => (
												<div
													key={index}
													className="w-full border border-border py-5 px-4 rounded-lg lg:p-5 hover:scale-105 hover:bg-background-secondary/30 transition-all">
													<Skeleton height={200} />
													<Skeleton height={20} style={{ marginTop: '10px' }} />
													<Skeleton height={20} style={{ marginTop: '5px' }} />
													<Skeleton height={20} style={{ marginTop: '5px' }} />
												</div>
											))}
										</SkeletonTheme>
									</div>
								</div>
							) : error ? (
								<p className="text-red-500">{error}</p>
							) : filteredFiles.length < 1 ? (
								<div className="flex items-center justify-center w-full h-screen">
									<h3 className="text-xl font-semibold">
										No properties found for {selectedType}.
									</h3>
								</div>
							) : (
								<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center mt-10">
									{filteredFiles.map((doc) => (
										<Link
											className="w-full"
											to={`/property/${encodeURIComponent(doc.title)}`}
											key={doc.$id}>
											<PropertyCard
												key={doc.$id}
												title={doc.title}
												location={doc.location}
												price={doc.price}
												images={doc.imgUrls}
												description={doc.description}
											/>
										</Link>
									))}
								</div>
							)}
						</>
					)}
				</section>
				<CTA />
				<Footer />
			</div>
		</div>
	);
};

export default Properties;
