import PropertyCard from '../PropertyCard';
import 'react-multi-carousel/lib/styles.css';
import Header from '../ui/header';
import Button from '../ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { database, storage } from '@/hooks/appwrite';
import { Loader } from 'lucide-react';

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

const Featured = () => {
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState<Files[]>([]);
	const [error, setError] = useState<string | null>(null);

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

	return (
		<section className="py-20">
			<div className="container">
				<div>
					<div className="mb-6">
						<Header
							title="Featured Properties"
							description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click 'View Details' for more information."
							showAbstract={true}
						/>
					</div>
					<div
						className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 
          place-items-center">
						{loading && <Loader className="w-8 h-8" />}
						{files.map((item, index) => {
							return (
								<Link
									className="w-full"
									to={`/property/${encodeURIComponent(item.title)}`}
									key={index}>
									<PropertyCard
										title={item.title}
										location={item.location}
										price={item.price}
										images={item.imgUrls}
										description={item.description}
									/>
								</Link>
							);
						})}
						{error && <p>{`Error loading featured properties:${error}`}</p>}
					</div>
					<div className="w-full">
						<Button
							variant="primary"
							className="bg-background-secondary w-full mt-5">
							<a href={'/properties'}> View All Properties </a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
