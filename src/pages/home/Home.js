import { Route, Routes } from 'react-router-dom';
import BookCategory from '../../components/bookCategory/Category';
import Carusel from '../../components/carusel/Carusel';
import Category from '../../components/category/Category';
import Search from '../../components/search/Serach';

const Home = () => {
	return (
		<div>
			<div className='posion'>
				<Carusel />
				<Search />
			</div>

			<Routes>
				<Route path='/*' element={<Category />} />
				<Route path='Nasr/*' element={<BookCategory />} />
			</Routes>
		</div>
	);
};

export default Home;
