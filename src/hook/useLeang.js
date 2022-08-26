import { useContext } from 'react';
import { AuthLean } from '../context/useleang';

export const UseLeang = () => {
	const { leng, setleng } = useContext(AuthLean);

	return { leng, setleng };
};
