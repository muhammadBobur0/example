import './header.css';
import Logo from '../../assets/images/Badiiyat.svg';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { text } from '../../context/useleang';
import { UseLeang } from '../../hook/useLeang';
import UserPhoto from '../../assets/images/user.png';
import Vector from '../../assets/images/Vector.svg';
import { UseAuth } from '../../hook/useAuth';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Header = () => {
	const { leng } = UseLeang();
	const { token } = UseAuth();
	const [sigin, setSigin] = useState('none');
	const local = useNavigate();
	const [user, setuser] = useState({});

	const AuthRegister = () => {
		if (!token) {
			local('/sigin');
		} else {
			if (sigin === 'block') {
				setSigin('none');
			} else {
				setSigin('block');
			}
		}
	};

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/user/me', {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setuser(res.data))
			.catch((err) => console.log(err));
	}, [token]);

	return (
		<header className='header'>
			<div className='container iner'>
				<a href='/'>
					<img src={Logo} alt='site-logo' />
				</a>
				<nav className='nav'>
					<ul className='header-list'>
						<li>
							<NavLink className={'header-link'} to={'/'}>
								{text[leng].Boshsahifa}
							</NavLink>
						</li>
						<li>
							<NavLink className={'header-link'} to={'/Nasr'}>
								{text[leng].Nasr}
							</NavLink>
						</li>
						<li>
							<NavLink className={'header-link'} to={'/Nazm'}>
								{text[leng].Nazm}
							</NavLink>
						</li>
						<li>
							<NavLink className={'header-link'} to={'/Maqolalar'}>
								{text[leng].Maqolalar}
							</NavLink>
						</li>
						<li>
							<NavLink className={'header-link'} to={'/Forum'}>
								{text[leng].Forum}
							</NavLink>
						</li>
					</ul>
				</nav>
				<button onClick={() => AuthRegister()} className='sigin-button'>
					<img
						width={50}
						height={50}
						className='photo'
						src={
							user.image
								? 'https://book-service-layer.herokuapp.com/' + user.image
								: UserPhoto
						}
						onError={(e) => {
							if (e.nativeEvent.type !== true) {
								e.target.src = UserPhoto;
							}
						}}
						alt=''
					/>
					<img src={Vector} width='12' height={6} alt='' />
				</button>

				{token ? (
					<div className={'logins ' + sigin}>
						<Link className={'user-page-link'} to={'/book'}>
							Add book
						</Link>
						<Link className={'user-page-link'} to={'/author'}>
							Add author
						</Link>
						<Link className={'user-page-link'} to={'/user'}>
							Settings
						</Link>
					</div>
				) : (
					<div></div>
				)}
			</div>
		</header>
	);
};

export default Header;
