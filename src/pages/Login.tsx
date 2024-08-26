import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/ui/button';
import { Link } from 'react-router-dom';
import NavBar from '@/components/sections/NavBar';
import { account, database } from '@/hooks/appwrite';
import { Query } from 'appwrite';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const formSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const LoginPage = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (data: z.infer<typeof formSchema>) => {
		try {
			setLoading(true);
			const res = await account.createEmailPasswordSession(
				data.email,
				data.password
			);

			if (res) {
				const userRole = await database.listDocuments(
					'66c73f49002e7b7365a3',
					'66c73f6000380bbb7a9d',
					[
						Query.equal('user_id', res.userId),
						Query.equal('user_role', 'admin'),
					]
				);

				if (userRole.total > 0) {
					navigate('/admin');
				} else {
					navigate('/');
				}
			}
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
							{loading ? 'Loading...' : 'Login'}
						</Button>
						<div className="text-center text-sm">
							<p>
								Not a member?{' '}
								<Link
									to="/signup"
									className="ml-1 italic underline text-primary/50">
									{' '}
									Signup{' '}
								</Link>
							</p>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
