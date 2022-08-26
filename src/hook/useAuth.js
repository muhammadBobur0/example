import { useContext } from 'react';
import { AuthToken } from '../context/usetoken';

export const UseAuth = () => {
	const { token, setToken } = useContext(AuthToken);

	return { token, setToken };
};
