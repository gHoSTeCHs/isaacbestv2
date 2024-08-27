import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Error from './pages/Error.tsx';
import Properties from './pages/Properties.tsx';
import Property from './pages/Property.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Contact from './pages/Contact.tsx';
import LoginPage from './pages/Login.tsx';
import SignupPage from './pages/Signup.tsx';
import AdminRoot from './admin/AdRoot.tsx';
import { AuthProvider } from './hooks/authContext.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <Error />,
	},
	{
		path: '/properties',
		element: <Properties />,
		errorElement: <Error />,
	},
	{
		path: '/property/:title',
		element: <Property />,
		errorElement: <Error />,
	},
	{
		path: '/about',
		element: <About />,
		errorElement: <Error />,
	},
	{
		path: '/services',
		element: <Services />,
		errorElement: <Error />,
	},
	{
		path: '/contact',
		element: <Contact />,
		errorElement: <Error />,
	},
	{
		path: '/login',
		element: <LoginPage />,
		errorElement: <Error />,
	},
	{
		path: '/signup',
		element: <SignupPage />,
		errorElement: <Error />,
	},
	{
		path: '/admin',
		element: <AdminRoot />,
		errorElement: <Error />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
