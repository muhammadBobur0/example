import { useState, createContext, useEffect } from 'react';

export const Themcontect = createContext();

export const ThemaProvayder = ({ children }) => {
	const localSto = window.localStorage.getItem('thema');
	const [thema, setthema] = useState(localSto || 'ligt');

	useEffect(() => {
		window.localStorage.setItem('thema', thema);
		document.querySelector('body').classList.add(thema);
	}, [thema]);

	const data = {
		thema,
		setthema,
	};

	return <Themcontect.Provider value={data}>{children}</Themcontect.Provider>;
};
