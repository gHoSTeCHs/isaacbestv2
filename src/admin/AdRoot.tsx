import NavBar from '@/components/sections/NavBar';
import AddProperties from './AddProperties';

const AdminRoot = () => {
	return (
		<div>
			<h1>
				<NavBar />
				<AddProperties />
			</h1>
		</div>
	);
};

export default AdminRoot;
