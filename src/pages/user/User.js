import './user.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Accaunt from '../../components/userAccaunt/Accaount';
import Security from '../../components/accauntSetting/Security';
import Settings from '../../components/accauntSetting/Settings';
import { text } from '../../context/useleang';
import { UseLeang } from '../../hook/useLeang';

const User = () => {
	const { leng } = UseLeang();
	return (
		<div className='user-page'>
			<div>
				<div className='div-flex'>
					<NavLink className={'user-page-link'} to='/user'>
						{' '}
						<span className='user-span'>1</span> {text[leng].myprofil}
					</NavLink>
					<NavLink className={'user-page-link'} to='Security'>
						{' '}
						<span className='user-span'>2</span> {text[leng].Security}
					</NavLink>
					<NavLink className={'user-page-link'} to='Settings'>
						{' '}
						<span className='user-span'>3</span> {text[leng].Settings}
					</NavLink>
				</div>
			</div>
			<div className='user-content'>
				<div className='boxses'>
					<Routes>
						<Route index element={<Accaunt />} />
						<Route path='Security' element={<Security />} />
						<Route path='Settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default User;
