import { useEffect, useState } from 'react';
import { authLinks, navLinks } from '@/constants/data';
import logo from '../../assets/icons/logo.svg';
import Button from '../ui/button';
import { Link } from 'react-router-dom';
import { account } from '@/hooks/appwrite';
import { Models } from 'appwrite';
import { redirect } from 'react-router-dom';

const useAuth = () => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);
	// const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await account.get();
				setUser(userData);
			} catch (error) {
				console.error('Error fetching user:', error);
			} finally {
				// setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return { user };
};

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { user } = useAuth();

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const logOut = async () => {
		await account.deleteSession('current');
		redirect('/login');
	};

	return (
		<div className="bg-background-secondary py-4 border border-border border-l-0 border-r-0">
			<nav className="container md:flex items-center justify-between">
				<div className="flex justify-between items-center">
					<Link to="/">
						<img
							src={logo}
							alt="Logo"
							className="w-[93px] h-[35px] md:w-[114px] md:h-[35px]"
						/>
					</Link>

					<svg
						width="22"
						height="14"
						viewBox="0 0 22 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="burger md:hidden cursor-pointer"
						onClick={toggleMenu}
						// aria-expanded={isMenuOpen} // Accessibility feature
					>
						<path
							fillRule="evenodd" // Correct camelCase
							clipRule="evenodd" // Correct camelCase
							d="M0.5 0.875C0.5 0.391751 0.891751 0 1.375 0H20.625C21.1082 0 21.5 0.391751 21.5 0.875C21.5 1.35825 21.1082 1.75 20.625 1.75H1.375C0.891751 1.75 0.5 1.35825 0.5 0.875ZM0.5 7C0.5 6.51675 0.891751 6.125 1.375 6.125H20.625C21.1082 6.125 21.5 6.51675 21.5 7C21.5 7.48325 21.1082 7.875 20.625 7.875H1.375C0.891751 7.875 0.5 7.48325 0.5 7ZM10.125 13.125C10.125 12.6418 10.5168 12.25 11 12.25H20.625C21.1082 12.25 21.5 12.6418 21.5 13.125C21.5 13.6082 21.1082 14 20.625 14H11C10.5168 14 10.125 13.6082 10.125 13.125Z"
							fill="white"
						/>
					</svg>
				</div>

				<div className="hidden md:flex gap-4">
					{navLinks.map((link) => (
						<a href={link.href} key={link.title}>
							{link.title}
						</a>
					))}
				</div>

				<Button className="hidden lg:block" variant="primary">
					Contact Us
				</Button>

				{/* Conditional rendering based on menu state */}
				<div
					className={`menu ${
						isMenuOpen ? 'block' : 'hidden'
					} md:hidden transition-all duration-300 ease-in-out`}>
					<div className="flex flex-col items-center mt-3">
						{navLinks.map((link) => (
							<Link
								to={link.href}
								key={link.title}
								className="p-4 rounded-md hover:bg-background-primary hover:text-txt">
								{link.title}
							</Link>
						))}

						{!user ? (
							<>
								{authLinks.map((link) => (
									<Link
										to={link.href}
										key={link.title}
										className="p-4 rounded-md hover:bg-background-primary hover:text-txt">
										{link.title}
									</Link>
								))}
							</>
						) : (
							<>
								<Link
									className="p-4 rounded-md hover:bg-background-primary hover:text-txt"
									to="/login"
									onClick={logOut}>
									Logout
								</Link>
							</>
						)}

						<Button variant="primary">
							<Link to="/contact">Contact Us</Link>
						</Button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
