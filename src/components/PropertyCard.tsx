import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Button from './ui/button';

interface PropertyProps {
	title: string;
	location: string;
	price: string;
	images: string[];
	description: string;
}

const PropertyCard: React.FC<PropertyProps> = ({
	title,
	location,
	price,
	images,
	description,
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
	useEffect(() => {
		if (emblaApi) {
			// console.log(emblaApi.slideNodes()) // Access API
		}
	}, [emblaApi]);
	return (
		<div className="flex flex-col gap-6 border border-border max-w-[413px] py-5 px-4 rounded-lg lg:p-5">
			<div className="embla" ref={emblaRef}>
				<div className="embla__container">
					{images.map((image, index) => (
						<img
							src={image}
							alt=""
							key={index}
							className="embla__slide w-full max-h-[250px] object-cover rounded-md"
						/>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="inline-block bg-background-secondary border border-border rounded-full p-1 px-3">
					<p className="text-sm md:text-base">{location}</p>
				</div>
				<div className="flex flex-col gap-1">
					<h2 className="text-lg md:text-xl font-semibold">{title}</h2>
					<p className="text-txt text-sm md:text-base">{description}</p>
				</div>
				<div className="grid grid-cols-3 gap-4 mt-1">
					<div>
						<p className="text-txt text-sm">Price</p>
						<h2 className="text-lg md:text-xl font-semibold">#{price}</h2>
					</div>
					<Button variant="secondary" className="col-span-2">
						View Details
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
