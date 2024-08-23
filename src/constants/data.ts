import images from './images';

export const navLinks = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'About Us',
		href: '/about',
	},
	{
		title: 'Properties',
		href: '/properties',
	},
	{
		title: 'Services',
		href: '/services',
	},
];

export const authLinks = [
	{
		title: 'Login',
		href: '/login',
	},
	{
		title: 'Signup',
		href: '/signup',
	},
];

export const statistics = [
	{
		numbers: '200+',
		description: 'Happy Customers',
	},
	{
		numbers: '10k+',
		description: 'Properties for customers',
	},
	{
		numbers: '16+',
		description: 'Years of Experience',
	},
];

export const PropertyData = [
	{
		id: 1,
		title: 'Seaside Serenity Villa',
		location: 'Lekki, Lagos State',
		price: '23008004',
		image: [images.img2, images.img2, images.img3],
		latitude: 5.104,
		longitude: 7.366,
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur doloremque ullam quasi',
		amenities: [
			'Expansive oceanfront terrace for outdoor entertaining',
			'Gourmet kitchen with top-of-the-line appliances',
			'Private beach access for morning strolls and sunset views',
			'Master suite with a spa-inspired bathroom and ocean-facing balcony',
			'Private garage and ample storage space',
		],
	},
	{
		id: 2,
		title: 'Seaside Serenity Villa',
		location: 'Umuahia, Abia State',
		price: '23008004',
		image: [images.img2, images.img3, images.img1],
		latitude: 5.1052,
		longitude: 7.3673,
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur doloremque ullam quasi',
		amenities: [
			'Expansive oceanfront terrace for outdoor entertaining',
			'Gourmet kitchen with top-of-the-line appliances',
			'Private beach access for morning strolls and sunset views',
			'Master suite with a spa-inspired bathroom and ocean-facing balcony',
			'Private garage and ample storage space',
		],
	},
	{
		id: 3,
		title: 'Seaside Serenity Villa',
		location: 'Owerrinta, Imo State',
		price: '23008004',
		image: [images.img3, images.img2, images.img1],
		latitude: 5.106,
		longitude: 7.368,
		description:
			' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur doloremque ullam quasi',
		amenities: [
			'Expansive oceanfront terrace for outdoor entertaining',
			'Gourmet kitchen with top-of-the-line appliances',
			'Private beach access for morning strolls and sunset views',
			'Master suite with a spa-inspired bathroom and ocean-facing balcony',
			'Private garage and ample storage space',
		],
	},
];

export const userTestimonials = [
	{
		name: 'Wade Warren',
		location: 'USA, California',
		title: 'Exceptional Service!',
		description:
			"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
		rating: 4,
		image: images.user1,
	},
	{
		name: 'Emma Johnson',
		location: 'USA, New York',
		title: 'A Seamless Experience!',
		description:
			"Estatein made the home-buying process seamless and stress-free. Their expertise and support were invaluable. I couldn't be happier with my new home!",
		rating: 5,
		image: images.user2,
	},
	{
		name: 'Liam Smith',
		location: 'USA, Texas',
		title: 'Highly Professional Team!',
		description:
			'The team at Estatein was highly professional and attentive. They listened to our needs and found us the perfect property. Thank you very much!',
		rating: 4,
		image: images.user3,
	},
	{
		name: 'Sophia Brown',
		location: 'USA, Florida',
		title: 'Above and Beyond!',
		description:
			'Estatein went above and beyond to help us find our dream home. Their commitment to customer satisfaction is truly commendable!',
		rating: 5,
		image: images.user4,
	},
	{
		name: 'James Davis',
		location: 'USA, Illinois',
		title: 'Fantastic Service!',
		description:
			'I had a fantastic experience working with Estatein. They were always available to answer my questions and guided me every step of the way.',
		rating: 4,
		image: images.user5,
	},
	{
		name: 'Olivia Wilson',
		location: 'USA, Washington',
		title: 'Incredible Support!',
		description:
			'The support from Estatein was incredible. They helped us navigate the market and find a home that fit our budget and needs perfectly.',
		rating: 5,
		image: images.user6,
	},
];

export const FAQs = [
	{
		question: 'What should I consider when buying a home?',
		answer:
			'When buying a home, consider your budget, location preferences, the condition of the property, and the amenities available in the area. It’s also important to think about future resale value and the local real estate market trends.',
	},
	{
		question: 'How do I determine my budget for a home?',
		answer:
			'To determine your budget, evaluate your financial situation, including your income, savings, and current debts. Consider getting pre-approved for a mortgage to understand how much you can borrow and what your monthly payments will look like.',
	},
	{
		question:
			'What is the difference between a buyer’s agent and a seller’s agent?',
		answer:
			'A buyer’s agent represents the buyer in a real estate transaction, helping them find and negotiate the purchase of a property. A seller’s agent represents the seller, marketing the property and negotiating offers on their behalf.',
	},
	{
		question: 'What are closing costs, and how much should I expect to pay?',
		answer:
			'Closing costs are fees associated with finalizing a real estate transaction, typically ranging from 2% to 5% of the purchase price. These can include loan origination fees, title insurance, appraisal fees, and attorney fees.',
	},
	{
		question: 'How long does the home buying process take?',
		answer:
			'The home buying process can take anywhere from a few weeks to several months, depending on various factors such as the local market, the speed of financing approval, and the time it takes to find the right property.',
	},
	{
		question: 'What is a home inspection, and why is it important?',
		answer:
			'A home inspection is a thorough examination of a property’s condition, typically conducted by a professional inspector. It’s important because it can reveal potential issues with the home, allowing buyers to make informed decisions or negotiate repairs before finalizing the purchase.',
	},
];

export const footerLinks = [
	{
		title: 'Home',
		links: [
			{
				name: 'Hero Section',
				link: '/',
			},
			{
				name: 'Features',
				link: '/',
			},
			{
				name: 'Properties',
				link: '/',
			},
			{
				name: 'Testimonials',
				link: '/',
			},
			{
				name: 'FAQs',
				link: '/',
			},
		],
	},
	{
		title: 'About Us',
		links: [
			{
				name: 'Our Story',
				link: '/about',
			},
			{
				name: 'Our Works',
				link: '/',
			},
			{
				name: 'How It Works',
				link: '/about',
			},
			{
				name: 'Our Team',
				link: '/about',
			},
		],
	},
	{
		title: 'Properties',
		links: [
			{
				name: 'Portfolio',
				link: '/properties',
			},
			{
				name: 'Categories',
				link: '/properties',
			},
		],
	},
	{
		title: 'Services',
		links: [
			{
				name: 'Valuation Mastery',
				link: '/services',
			},
			{
				name: 'Strategic Marketing',
				link: '/services',
			},
			{
				name: 'Negotiation Wizardry',
				link: '/services',
			},
			{
				name: 'Closing Success',
				link: '/services',
			},
			{
				name: 'Property Management',
				link: '/services',
			},
		],
	},
	{
		title: 'Contact Us',
		links: [
			{
				name: 'Contact Form',
				link: '/contact',
			},
			{
				name: 'Our Offices',
				link: '/contact',
			},
		],
	},
];

export const Values = [
	{
		title: 'Trust',
		description:
			'Trust is the cornerstone of every successful real estate transaction.',
		image: images.star,
	},
	{
		title: 'Excellence',
		description:
			'We set the bar high for ourselves. From the properties we list to the services we provide.',
		image: images.excel,
	},
	{
		title: 'Client-Centric',
		description:
			'Your dreams and needs are at the center of our universe. We listen, understand.',
		image: images.client,
	},
	{
		title: 'Our Commitment',
		description:
			'We are dedicated to providing you with the highest level of service, professionalism',
		image: images.star,
	},
];

export const Achievements = [
	{
		title: '16+ Years of Excellence',
		descrpition:
			"With over 16+ years in the industry, we've amassed a wealth of knowledge and experience.",
	},
	{
		title: 'Happy Clients',
		descrpition:
			'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
	},
	{
		title: 'Industry Recognition',
		descrpition:
			"We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
	},
];

export const OurServices = [
	{
		title: 'Unlock Property Value',
		description:
			'Selling your property should be a rewarding experience, and at Estatein, we make sure it is.',
		subservices: [
			{
				title: 'Valuation Mastery',
				description:
					'Discover the true worth of your property with our expert valuation services.',
				image: images.valuation,
			},
			{
				title: 'Strategic Marketing',
				description:
					'Selling a property requires more than just a listing; it demands a strategic marketing.',
				image: images.marketing,
			},
			{
				title: 'Negotiation Wizardry',
				description:
					'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
				image: images.negotiation,
			},
			{
				title: 'Closing Success',
				description:
					'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
				image: images.success,
			},
		],
		ctaheader: 'Unlock the Value of Your Property Today',
		ctadescription:
			'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.',
		ctalink: '#',
	},
	{
		title: 'Effortless Property Management',
		description:
			"Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership.",
		subservices: [
			{
				title: 'Tenant Harmony',
				description:
					'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
				image: images.tenant,
			},
			{
				title: 'Maintenance Ease',
				description:
					'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
				image: images.maintenance,
			},
			{
				title: 'Financial Peace of Mind',
				description:
					'Managing property finances can be complex. Our financial experts take care of rent collection',
				image: images.tenant,
			},
			{
				title: 'Legal Guardian',
				description:
					'Stay compliant with property laws and regulations effortlessly.',
				image: images.legal,
			},
		],
		ctaheader: 'Experience Effortless Property Management',
		ctadescription:
			'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
		ctalink: '#',
	},
	{
		title: 'Property Search and Due Diligence',
		description:
			'Ensure a smooth and secure property transaction with our comprehensive search and due diligence services.',
		subservices: [
			{
				title: 'Title and Ownership Verification',
				description:
					'We conduct thorough searches to verify property ownership and uncover any potential issues.',
				image: images.marketing,
			},
			{
				title: 'Legal Document Review',
				description:
					'Our team meticulously reviews all legal documents to ensure compliance and protect your interests.',
				image: images.law,
			},
			{
				title: 'Property Record Assessment',
				description:
					'We analyze property records to identify any encumbrances, liens, or disputes that could affect the transaction.',
				image: images.negotiation,
			},
			{
				title: 'Market Value Estimation',
				description:
					"Our experts provide an accurate estimation of the property's market value based on comparable sales and market trends.",
				image: images.maintenance,
			},
		],
		ctaheader: 'Secure Your Investment with Our Due Diligence Services',
		ctadescription:
			'Take the guesswork out of property transactions. Let our experts conduct thorough searches and due diligence to protect your interests.',
		ctalink: '#',
	},
	{
		title: 'Document Management and Property Registration',
		description:
			'Streamline your property transactions with our expert assistance in document management and registration.',
		subservices: [
			{
				title: 'Document Organization',
				description:
					'We help you organize and manage all necessary documents for your property transactions.',
				image: images.document,
			},
			{
				title: 'Document Digitization',
				description:
					'Convert your physical documents into digital format for easy access and storage.',
				image: images.digital,
			},
			{
				title: 'Document Compliance',
				description:
					'Our team ensures that all documents meet legal requirements and are properly executed.',
				image: images.compliance,
			},
			{
				title: 'Property Registration Guidance',
				description:
					'We guide you through the property registration process, ensuring a successful transfer of ownership.',
				image: images.guide,
			},
		],
		ctaheader: 'Simplify Your Property Transactions with Our Document Services',
		ctadescription:
			'Organize and manage all your property documents with ease. Our team ensures compliance and a successful registration process.',
		ctalink: '#',
	},
];
