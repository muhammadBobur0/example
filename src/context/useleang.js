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
		temuriy: 'Temuriylar davri',
		Jadid: 'Jadid adabiyoti ',
		sovet: 'Sovet davri',
		mustqali: 'Mustaqillik davr',
		input: 'Adiblar, kitoblar,  audiolar, maqolalar...',
		myprofil: 'Mening profilim',
		Password: "Parolingizni o'zgartiring yoki tiklang:",
		Settings: 'Sozlamalar',
		Language: 'Til',
		Theme: 'Tema',
		Security: 'Xavfsizlik',
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
		temuriy: 'Temuriylar period',
		Jadid: 'Jadid literature ',
		sovet: 'Sovet period',
		mustqali: 'Mustaqillik period',
		input: 'Writers, books, audios, articles...',
		myprofil: 'My profile',
		Password: 'Change Or Recover Your Password:',
		Settings: 'Settings',
		Language: 'Language',
		Theme: 'Theme',
		Security: 'Security',
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
		temuriy: 'Temuriylar период',
		Jadid: 'Jadid литература',
		sovet: 'Sovet период',
		mustqali: 'Mustaqillik период',
		input: 'Писатели, аудио, статьи...',
		myprofil: 'Мой профиль',
		Password: 'Изменить или восстановить свой пароль:',
		Settings: 'Настройки',
		Language: 'Язык',
		Theme: 'Тема',
		Security: 'Безопасность',
	},
};
