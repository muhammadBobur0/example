import { UseLeang } from '../../hook/useLeang';
import './category.css';
import { text } from '../../context/useleang';
import { NavLink, Routes, Route } from 'react-router-dom';
import Timurid from '../authors/Tauthor';
import Jadid from '../Jadid/Jadid';
import Sovet from '../Sovet/Sovet';
import Independence from '../Independence/Independence';
import SerachItm from '../serachIteam/serachIteam';

const Category = () => {
	const { leng } = UseLeang();

	return (
		<div className='container'>
			<h2 className='category-text'>{text[leng].Asosiy}</h2>
			<div className='category'>
				<NavLink className={'category-link'} to={'/'}>
					{text[leng].temuriy}{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Jadid'}>
					{text[leng].Jadid}{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Sovet'}>
					{text[leng].sovet}{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Mustaqillik'}>
					{text[leng].mustqali}{' '}
				</NavLink>
			</div>
			<div className='catogory-content'>
				<Routes>
					<Route index element={<Timurid />} />
					<Route path='Jadid' element={<Jadid />} />
					<Route path='Sovet' element={<Sovet />} />
					<Route path='Mustaqillik' element={<Independence />} />
					<Route path='serach/:id' element={<SerachItm />} />
				</Routes>
			</div>
		</div>
	);
};

export default Category;
