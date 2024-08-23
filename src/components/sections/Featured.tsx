import { PropertyData } from '@/constants/data';
import PropertyCard from '../PropertyCard';

import 'react-multi-carousel/lib/styles.css';
import Header from '../ui/header';
import Button from '../ui/button';
import { Link } from 'react-router-dom';

const Featured = () => {
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
						{PropertyData.map((item, index) => {
							return (
								<Link
									className="w-full"
									to={`/properties/${index + 1}`}
									key={index}>
									<PropertyCard
										title={item.title}
										location={item.location}
										price={item.price}
										images={item.image}
										description={item.description}
									/>
								</Link>
							);
						})}
					</div>
					<div className="w-full">
						<Button
							variant="primary"
							className="bg-background-secondary w-full mt-5">
							<Link to={'/properties'}> View All Properties </Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;

{
	/* <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={deviceType !== "mobile"} // Use the deviceType prop directly
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          
        </Carousel> */
}
