// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import icon from "@/assets/icons/icon.png";
import PropertyCard from '@/components/PropertyCard';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';
import Header from '@/components/ui/header';
import PropertySearch from '@/components/ui/propertysearch';
import { PropertyData } from '@/constants/data';
import { Link } from 'react-router-dom';

// import { PropertyData } from "@/constants/data";
// import Card from "@/components/card";

// const getIcon = () => {
//   return L.icon({
//     iconUrl: icon, // Replace with your marker image path
//     iconSize: [25, 21],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
//   });
// };

const Properties = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<section className=" py-12">
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
				</section>
				<CTA />
				<Footer />
			</div>
		</div>
	);
};

export default Properties;

{
	/* <MapContainer
          center={[5.1035, 7.3655]}
          zoom={13}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {PropertyData.map((property) => (
            <Marker
              key={property.id}
              position={[property.latitude, property.longitude]}
              icon={getIcon()}
            >
              <Popup closeButton={false} className="">
                <Card
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  images={property.image}
                  description={property.description}
                />
              </Popup>
            </Marker>
          ))}
        </MapContainer> */
}
