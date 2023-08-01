import NavHeader from './NavHeader';
import CardIa from './CardIa';
import RightAngleLogo from './Logos/RightAngleLogo';
import { useState } from 'react';

const MainCard = () => {
	const [onMouseEnter, setOnMouseEnter] = useState(false);

	return (
		<div className="background-submain hover:shadow-sm transition-shadow duration-300 w-[96%] h-[94%] rounded-lg shadow-2xl">
			<NavHeader />
			{/* main content */}
			<div className="w-[85%] animationWelcome sm:w-[80%] sm:ml-[100px] ml-[30px] my-4 sm:my-16 flex flex-col justify-between h-[70%] sm:h-[76%]">
				<div className="inter flex flex-col gap-2 sm:gap-6">
					<h1 className="font-bold text-5xl sm:text-7xl sm:w-[460px]">
						Make it awesome.
					</h1>
					<p className="text-[#88888C]">
						AI trained to generate realistic 3D objects.
					</p>
					<button
						onMouseEnter={() => setOnMouseEnter(true)}
						onMouseLeave={() => setOnMouseEnter(false)}
						className="bg-[#3D5CFF] shadow-lg hover:shadow-sm hover:translate-y-1 transition-all duration-300 flex justify-center items-center gap-3 text-white w-fit py-3 px-4 rounded-full"
					>
						<h1>Get started</h1>
						<div
							className={`${
								onMouseEnter ? 'rotate-180' : ''
							} duration-200 transition-transform`}
						>
							<RightAngleLogo size={18} />
						</div>
					</button>
				</div>
				<CardIa />
			</div>
		</div>
	);
};

export default MainCard;
