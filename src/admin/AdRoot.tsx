import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/authContext';
import NavBar from '@/components/sections/NavBar';
import AddProperties from './AddProperties';
import { useNavigate } from 'react-router-dom';

const AdminRoot: React.FC = () => {
	const { user, loading, isAdmin } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (!loading) {
			if (!user) {
				navigate('/login');
			} else if (!isAdmin) {
				navigate('/');
			}
		}
	}, [user, loading, isAdmin, navigate]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!user || !isAdmin) {
		return null;
	}

	return (
		<div>
			<NavBar />
			<AddProperties />
		</div>
	);
};

export default AdminRoot;
