import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/sections/NavBar';
import { v4 as uuidv4 } from 'uuid';
import { account, database } from '@/hooks/appwrite';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

const formSchema = z.object({
	name: z.string().min(3, 'Name must be at least 3 characters long'),
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const SignupPage = () => {
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		setLoading(true);
		try {
			const req = await account.create(
				uuidv4(),
				data.email,
				data.password,
				data.name
			);
			await database.createDocument(
				'66c73f49002e7b7365a3',
				'66c73f6000380bbb7a9d',
				req.$id,
				{
					Name: req.name,
					user_id: req.$id,
					email: req.email,
				}
			);
			redirect('/login');
			console.log(req);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<NavBar />
			<div className="cntForm container">
				<form
					className="border p-4 rounded-md border-border flex flex-col gap-4 w-[350px]"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col gap-2">
						<label htmlFor="name" className="text-base font-semibold">
							Name
						</label>
						<input
							id="name"
							type="text"
							{...register('name')}
							className={`bg-background-secondary w-full border ${
								errors.email ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Enter Your Name"
						/>
						{errors.name && (
							<span className="text-red-500">{errors.name.message}</span>
						)}
					</div>
					<div className="flex flex-col gap-2">
						<label htmlFor="email" className="text-base font-semibold">
							Email
						</label>
						<input
							id="email"
							type="email"
							{...register('email')}
							className={`bg-background-secondary w-full border ${
								errors.email ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Enter Email"
						/>
						{errors.email && (
							<span className="text-red-500">{errors.email.message}</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<label htmlFor="password" className="text-base font-semibold">
							Password
						</label>
						<input
							id="password"
							type="password"
							{...register('password')}
							className={`bg-background-secondary w-full border ${
								errors.password ? 'border-red-500' : 'border-border'
							} rounded-md p-3`}
							placeholder="Enter Password"
						/>
						{errors.password && (
							<span className="text-red-500">{errors.password.message}</span>
						)}
					</div>

					<div className="flex flex-col gap-2">
						<Button variant="secondary" className="mt-5">
							{loading ? 'Loading...' : 'Signup'}
						</Button>
						<div className="text-center text-sm">
							<p>
								Already a member?{' '}
								<Link
									to="/login"
									className="ml-1 italic underline text-primary/50">
									Login
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default SignupPage;
