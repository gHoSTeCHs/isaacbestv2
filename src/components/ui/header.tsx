import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps {
	title: string;
	description: string;
	showAbstract: boolean;
}

const Header: React.FC<HeaderProps> = ({
	title,
	description,
	showAbstract,
}) => {
	const headerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const element = headerRef.current;

		if (element) {
			gsap.fromTo(
				element,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1,
					scrollTrigger: {
						trigger: element,
						start: 'top 80%', // Start the animation when the top of the element is 80% from the top of the viewport
						toggleActions: 'play none none reverse', // Play on enter, reverse on leave
					},
				}
			);
		}

		// Cleanup function to kill ScrollTrigger on unmount
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div className="flex flex-col gap-1 max-w-[960px] header" ref={headerRef}>
			<svg
				className={`abstract ${showAbstract ? 'block' : 'hidden'}`}
				width="55"
				height="24"
				viewBox="0 0 55 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g clipPath="url(#clip0_4_250)">
					<path
						d="M12 24.0134C18.6274 24.0134 24 18.6408 24 12.0134C24 5.38595 18.6274 0.0134277 12 0.0134277C5.37258 0.0134277 0 5.38595 0 12.0134C0 18.6408 5.37258 24.0134 12 24.0134Z"
						fill="#666666"
					/>
					<path
						d="M9.53674e-07 36C6.62742 36 12 30.6274 12 24C12 17.3726 6.62742 12 9.53674e-07 12C-6.62742 12 -12 17.3726 -12 24C-12 30.6274 -6.62742 36 9.53674e-07 36Z"
						fill="#141414"
					/>
					<path
						d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"
						fill="#141414"
					/>
					<path
						d="M9.53674e-07 12C6.62742 12 12 6.62742 12 9.53674e-07C12 -6.62742 6.62742 -12 9.53674e-07 -12C-6.62742 -12 -12 -6.62742 -12 9.53674e-07C-12 6.62742 -6.62742 12 9.53674e-07 12Z"
						fill="#141414"
					/>
					<path
						d="M24 12C30.6274 12 36 6.62742 36 9.53674e-07C36 -6.62742 30.6274 -12 24 -12C17.3726 -12 12 -6.62742 12 9.53674e-07C12 6.62742 17.3726 12 24 12Z"
						fill="#141414"
					/>
				</g>
				<g clipPath="url(#clip1_4_250)">
					<path
						d="M35.9998 19.2081C39.9763 19.2081 43.1998 15.9845 43.1998 12.0081C43.1998 8.03162 39.9763 4.80811 35.9998 4.80811C32.0234 4.80811 28.7998 8.03162 28.7998 12.0081C28.7998 15.9845 32.0234 19.2081 35.9998 19.2081Z"
						fill="#333333"
					/>
					<path
						d="M28.7996 26.4C32.7761 26.4 35.9996 23.1764 35.9996 19.2C35.9996 15.2235 32.7761 12 28.7996 12C24.8232 12 21.5996 15.2235 21.5996 19.2C21.5996 23.1764 24.8232 26.4 28.7996 26.4Z"
						fill="#141414"
					/>
					<path
						d="M43.1995 26.4C47.176 26.4 50.3995 23.1764 50.3995 19.2C50.3995 15.2235 47.176 12 43.1995 12C39.2231 12 35.9995 15.2235 35.9995 19.2C35.9995 23.1764 39.2231 26.4 43.1995 26.4Z"
						fill="#141414"
					/>
					<path
						d="M28.7996 12.0001C32.7761 12.0001 35.9996 8.77655 35.9996 4.8001C35.9996 0.823647 32.7761 -2.3999 28.7996 -2.3999C24.8232 -2.3999 21.5996 0.823647 21.5996 4.8001C21.5996 8.77655 24.8232 12.0001 28.7996 12.0001Z"
						fill="#141414"
					/>
					<path
						d="M43.1995 12.0001C47.176 12.0001 50.3995 8.77655 50.3995 4.8001C50.3995 0.823647 47.176 -2.3999 43.1995 -2.3999C39.2231 -2.3999 35.9995 0.823647 35.9995 4.8001C35.9995 8.77655 39.2231 12.0001 43.1995 12.0001Z"
						fill="#141414"
					/>
				</g>
				<g clipPath="url(#clip2_4_250)">
					<path
						d="M51.36 15.3635C53.2157 15.3635 54.72 13.8592 54.72 12.0035C54.72 10.1479 53.2157 8.64355 51.36 8.64355C49.5043 8.64355 48 10.1479 48 12.0035C48 13.8592 49.5043 15.3635 51.36 15.3635Z"
						fill="#333333"
					/>
					<path
						d="M48.0001 18.7198C49.8558 18.7198 51.3601 17.2154 51.3601 15.3598C51.3601 13.5041 49.8558 11.9998 48.0001 11.9998C46.1445 11.9998 44.6401 13.5041 44.6401 15.3598C44.6401 17.2154 46.1445 18.7198 48.0001 18.7198Z"
						fill="#141414"
					/>
					<path
						d="M54.7204 18.7198C56.576 18.7198 58.0804 17.2154 58.0804 15.3598C58.0804 13.5041 56.576 11.9998 54.7204 11.9998C52.8647 11.9998 51.3604 13.5041 51.3604 15.3598C51.3604 17.2154 52.8647 18.7198 54.7204 18.7198Z"
						fill="#141414"
					/>
					<path
						d="M48.0001 11.9998C49.8558 11.9998 51.3601 10.4955 51.3601 8.63979C51.3601 6.78411 49.8558 5.27979 48.0001 5.27979C46.1445 5.27979 44.6401 6.78411 44.6401 8.63979C44.6401 10.4955 46.1445 11.9998 48.0001 11.9998Z"
						fill="#141414"
					/>
					<path
						d="M54.7204 11.9998C56.576 11.9998 58.0804 10.4955 58.0804 8.63979C58.0804 6.78411 56.576 5.27979 54.7204 5.27979C52.8647 5.27979 51.3604 6.78411 51.3604 8.63979C51.3604 10.4955 52.8647 11.9998 54.7204 11.9998Z"
						fill="#141414"
					/>
				</g>
				<defs>
					<clipPath id="clip0_4_250">
						<rect width="24" height="24" fill="white" />
					</clipPath>
					<clipPath id="clip1_4_250">
						<rect
							width="14.4"
							height="14.4"
							fill="white"
							transform="translate(28.7998 4.80005)"
						/>
					</clipPath>
					<clipPath id="clip2_4_250">
						<rect
							width="6.72"
							height="6.72"
							fill="white"
							transform="translate(48 8.63989)"
						/>
					</clipPath>
				</defs>
			</svg>
			<h2 className="text-3xl md:text-4xl font-bold mb-1">{title}</h2>
			<p className="text-txt text-sm md:text-base">{description}</p>
		</div>
	);
};

export default Header;
