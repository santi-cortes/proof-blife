import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Typewriter = ({ text, speed }) => {
	const [currentText, setCurrentText] = useState('');

	useEffect(() => {
		let currentIndex = 0;

		const interval = setInterval(() => {
			if (currentIndex < text.length - 1) {
				setCurrentText((prevText) => prevText + text[currentIndex]);
				currentIndex++;
			} else {
				clearInterval(interval);
			}
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	return <div className="typewriter w-full">{currentText}</div>;
};

export default Typewriter;
