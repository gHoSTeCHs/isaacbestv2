import PropertyCard from '@/components/PropertyCard';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';
import Header from '@/components/ui/header';
import PropertySearch from '@/components/ui/propertysearch';
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
}

const Properties = () => {
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
		<div>
			<NavBar />
			<div className="container">
				<section className="py-12">
					<div className="cta flex flex-col justify-center gap-7 md:flex-row lg:justify-between lg:items-center">
						<div className="max-w-[960px] pb-10">
							<Header
								title={'Find Your Dream Property'}
								description={
									'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey '
								}
								showAbstract={false}
							/>
						</div>
					</div>
					<div>
						<PropertySearch />
					</div>
					<div className="py-10">
						<Header
							title="Discover a World of Possibilities"
							description="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
							showAbstract={true}
						/>
					</div>

					{loading ? (
						<p>Loading..</p>
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : (
						<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
							{files.map((doc) => (
								<Link
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
