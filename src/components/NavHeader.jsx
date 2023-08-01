import { useMainContext } from '../context/MainContext';
import NoonLogo from './Logos/NoonLogo';

const NavHeader = () => {
	const { data, setData } = useMainContext();
	const handleModal = () => {
		setData(!data);
	};
	return (
		<div className="relative flex flex-col sm:flex-row justify-between items-center px-8 my-4">
			<NoonLogo />
			<nav className="inter font-semibold text-sm flex gap-5 sm:gap-16">
				<a className="hover:underline hover:cursor-pointer hover:text-blue-500">
					Princing
				</a>
				<a className="hover:underline hover:cursor-pointer hover:text-blue-500">
					Features
				</a>
				<a className="hover:underline hover:cursor-pointer hover:text-blue-500">
					Open sources
				</a>
				<a className="hover:underline hover:cursor-pointer hover:text-blue-500">
					Contact
				</a>
			</nav>
			<div className="absolute right-1 top-2 scale-[.85] sm:scale-100 sm:relative sm:top-0 sm:right-0 sm:flex">
				<button
					onClick={handleModal}
					className="text-white shadow-lg hover:shadow-sm hover:translate-y-1 transition-all duration-300 bg-black py-2 px-6 rounded-3xl"
				>
					Sign up
				</button>
			</div>
		</div>
	);
};

export default NavHeader;
