// AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { account } from '@/hooks/appwrite';
import { Models } from 'appwrite';

interface AuthContextType {
	user: Models.User<Models.Preferences> | null;
	loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({
	children,
}) => {
	const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
		null
	);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await account.get();
				setUser(userData);
			} catch (error) {
				console.error('Error fetching user:', error);
				setUser(null);
			} finally {
				setLoading(false);
			}
		};
		fetchUser();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
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
