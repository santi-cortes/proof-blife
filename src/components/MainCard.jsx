/* eslint-disable react/no-unknown-property */
import NavHeader from './NavHeader';
import CardIa from './CardIa';
import RightAngleLogo from './Logos/RightAngleLogo';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
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
					<div className="model absolute hidden sm:flex sm:bottom-[200px] sm:right-[-100px] md:right-[-25px] md:bottom-[220px] lg:right-[15px] lg:top-24">
						<Canvas
							camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 7] }}
						>
							<directionalLight intensity={0.8} position={[5, 20, 10]} />
							<ambientLight intensity={0.4} />
							<Model />
						</Canvas>
					</div>
				</div>
				<CardIa />
			</div>
		</div>
	);
};

export default MainCard;
