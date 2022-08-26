import { createContext } from 'react';
import { useState } from 'react';

export const AuthToken = createContext();

export const TokenProvider = ({ children }) => {
	const local = JSON.parse(localStorage.getItem('token'));
	const [token, setToken] = useState(local);

	if (token !== null) {
		localStorage.setItem('token', JSON.stringify(token));
	} else {
		localStorage.removeItem('token');
	}

	return (
		<AuthToken.Provider value={{ token, setToken }}>
			{children}
		</AuthToken.Provider>
	);
};
