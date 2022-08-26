import { UseLeang } from '../../hook/useLeang';
import { text } from '../../context/useleang';
import { NavLink, Routes, Route } from 'react-router-dom';
import Timurid from './Tauthor';
import Jadid from './Jadid';
import Sovet from './Sovet';
import Independence from './Independence';
import SerachItm from '../serachIteam/serachIteam';

const BookCategory = () => {
	const { leng } = UseLeang();

	return (
		<div className='container'>
			<h2 className='category-text'>{text[leng].Asosiy}</h2>
			<div className='category'>
				<NavLink className={'category-link'} to={'/Nasr'}>
					Temuriylar davri{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Jadid'}>
					Jadid adabiyoti{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Sovet'}>
					Sovet davri{' '}
				</NavLink>
				<NavLink className={'category-link'} to={'Mustaqillik'}>
					Mustaqillik davri{' '}
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

export default BookCategory;
