import PropertyCard from '@/components/PropertyCard';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';
import Header from '@/components/ui/header';
import PropertySearch, {
	PropertyFilters,
} from '@/components/ui/propertysearch';
import { database, storage } from '@/hooks/appwrite';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

const Properties = () => {
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState<Files[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [filteredFiles, setFilteredFiles] = useState<Files[]>([]);
	const [filters, setFilters] = useState<PropertyFilters>({
		propertyType: '',
		priceRange: '',
	});

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

			if (filters.propertyType) {
				filtered = filtered.filter(
					(file) => file.propertyType === filters.propertyType
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
	}, [files, filters]);

	const handleFilterChange = (newFilters: PropertyFilters) => {
		setFilters(newFilters);
	};

	return (
		<div>
			<NavBar />
			<div className="container">
				<section className="py-12">
					<div className="cta flex flex-col justify-center gap-7 md:flex-row lg:justify-between lg:items-center">
						<div className="max-w-[960px] pb-10">
							<Header
								title={'Find Your Dream Property'}
								description={
									'Welcome to IsaacBestProperties, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey '
								}
								showAbstract={false}
							/>
						</div>
					</div>
					<div>
						<PropertySearch onFilterChange={handleFilterChange} />
					</div>
					<div className="py-10">
						<Header
							title="Discover a World of Possibilities"
							description="Our portfolio of properties is as diverse as your dreams. Explore the following below to find the perfect property that resonates with your vision of home"
							showAbstract={true}
						/>
					</div>

					{loading ? (
						<p>Loading..</p>
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : filteredFiles.length < 1 ? (
						<p>No properties found matching your criteria.</p>
					) : (
						<div
							className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
          place-items-center">
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
				</section>
				<CTA />
				<Footer />
			</div>
		</div>
	);
};

export default Properties;
