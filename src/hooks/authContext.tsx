import React, { createContext, useContext, useState, useEffect } from 'react';
import { account, database } from '@/hooks/appwrite';
import { Models, Query } from 'appwrite';

interface AuthContextType {
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
	isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [isAdmin, setAdmin] = useState(false);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await account.get();
				setUser(userData);
				if (userData) {
					const userRole = await database.listDocuments(
						'66c73f49002e7b7365a3',
						'66c73f6000380bbb7a9d',
						[
							Query.equal('user_id', userData.$id),
							Query.equal('user_role', 'admin'),
						]
					);

					setAdmin(userRole.total > 0);
				}
			} catch (error) {
				console.error('Failed to fetch user data:', error);
				setUser(null);
				setAdmin(false);
			} finally {
				setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading, isAdmin }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
