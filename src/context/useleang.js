import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const AuthLean = createContext();

export const LeangProvider = ({ children }) => {
	const local = window.localStorage.getItem('leng');
	const [leng, setleng] = useState(local || 'uz');

	useEffect(() => {
		window.localStorage.setItem('leng', leng);
	}, [leng]);

	return (
		<AuthLean.Provider value={{ leng, setleng }}>{children}</AuthLean.Provider>
	);
};

export const text = {
	uz: {
		Boshsahifa: 'Bosh sahifa',
		Nasr: 'Nasr',
		Nazm: 'Nazm',
		Maqolalar: 'Maqolalar',
		Forum: 'Forum',
		Qidirish: 'Qidirish',
		Izlash: 'Izlash',
		Asosiy: 'Asosiy kategoriyalar',
	},
	en: {
		Boshsahifa: 'Homepage',
		Nasr: 'Prose',
		Nazm: 'Poem',
		Maqolalar: 'Articles',
		Forum: 'Forum',
		Qidirish: 'search',
		Izlash: 'Search',
		Asosiy: 'Main categories',
	},
	ru: {
		Boshsahifa: 'Домашняя страница',
		Nasr: 'Проза',
		Nazm: 'Стих',
		Maqolalar: 'Статьи',
		Forum: 'Форум',
		Qidirish: 'поиск',
		Izlash: 'Поиск',
		Asosiy: 'Основные категории',
	},
};
