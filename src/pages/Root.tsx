import Featured from '../components/sections/Featured';
import Hero from '../components/sections/Hero';
import NavBar from '../components/sections/NavBar';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQs';
import CTA from '../components/sections/CTA';
import Footer from '../components/sections/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// import Header from "./components/ui/header";

function Root() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<NavBar />
			<Hero />
			<Featured />
			<Testimonials />
			<FAQ />
			<CTA />
			<Footer />
		</>
	);
}

export default Root;
