// eslint-disable-next-line react/prop-types
const ScanLogo = ({ size }) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox="0 0 21 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4.5H3C1.89543 4.5 1 5.39543 1 6.5V12.5C1 13.6046 1.89543 14.5 3 14.5H12"
				stroke="#3D5CFF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.5 18H15M17.5 18H15M15 18V3C15 1.89543 14.1046 1 13 1H12.5H17.5"
				stroke="#3D5CFF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 5H18C19.1046 5 20 5.89543 20 7V12C20 13.1046 19.1046 14 18 14H15"
				stroke="#3D5CFF"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ScanLogo;
