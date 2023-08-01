import ScanLogo from './Logos/ScanLogo';
import StartsLogo from './Logos/StartsLogo';
import StartsLogo2 from './Logos/StartsLogo2';
import CubesLogo from './Logos/CubesLogo';
import TriangleLogo from './Logos/TriangleLogo';
import VentilateLogo from './Logos/VentilateLogo';
import Typewriter from './Typewriter';

const CardIa = () => {
	const textToType = 'AI trained to generate realistic 3D objects. ';
	const typingSpeed = 180;
	return (
		<div className="bg-white animationWelcome2 mt-6 sm:mt-0 rounded-xl shadow-xl w-full flex flex-col gap-2 ">
			<div className="flex gap-3 text-[#858585] p-4 py-2 items-center justify-between">
				<div className="flex gap-4 w-full sm:w-fit">
					<ScanLogo size={20} />
					<Typewriter text={textToType} speed={typingSpeed} />
				</div>
				<div className="bg-[#3D5CFF] hidden sm:flex w-fit p-2 rounded-full">
					<StartsLogo2 size={20} />
				</div>
			</div>
			<div className="flex flex-col ml-5 sm:ml-0 sm:flex-row gap-3 sm:gap-0 justify-between border-t-[1px] px-10 py-2 sm:py-4">
				<div className="flex gap-2">
					<div className="mt-1">
						<StartsLogo size={20} />
					</div>
					<div className="flex flex-col gap-0">
						<h1 className="inter font-bold text-2xl">Style</h1>
						<p className="inter font-semibold text-sm text-[#858585]">
							Choose your style
						</p>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="mt-1">
						<CubesLogo size={20} />
					</div>
					<div className="flex flex-col gap-0">
						<h1 className="inter font-bold text-2xl">Material</h1>
						<p className="inter font-semibold text-sm text-[#858585]">
							Choose your material
						</p>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="mt-1">
						<TriangleLogo size={20} />
					</div>
					<div className="flex flex-col gap-0">
						<h1 className="inter font-bold text-2xl">Creativity</h1>
						<p className="inter font-semibold text-sm text-[#858585]">
							High-level
						</p>
					</div>
				</div>
				<div className="flex gap-2">
					<div className="mt-1">
						<VentilateLogo size={20} />
					</div>
					<div className="flex flex-col gap-0">
						<h1 className="inter font-bold text-2xl">AI model</h1>
						<p className="inter font-semibold text-sm text-[#858585]">
							Midjourney 5.0
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardIa;
