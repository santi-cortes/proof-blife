import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useMainContext() {
	return useContext(MainContext);
}

// eslint-disable-next-line react/prop-types
export function MainContextProvider({ children }) {
	const [data, setData] = useState(false);

	return (
		<MainContext.Provider value={{ data, setData }}>
			{children}
		</MainContext.Provider>
	);
}
