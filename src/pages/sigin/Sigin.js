import { useRef, useState } from 'react';
import Siginup from '../../assets/images/sigin.png';
import Siginin from '../../assets/images/Frame.png';
import './sigin.css';
import { UseAuth } from '../../hook/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Sigin = () => {
	const [login, setlogin] = useState(false);
	const { setToken } = UseAuth();
	const sigemail = useRef();
	const sigpassword = useRef();
	const regname = useRef();
	const reglastname = useRef();
	const regemail = useRef();
	const regnumber = useRef();
	const password = useRef();
	const navigete = useNavigate();

	const Handleformsubmit = (evt) => {
		evt.preventDefault();
		const Data = new FormData();

		if (login) {
			Data.append('email', sigemail.current.value);
			Data.append('password', sigpassword.current.value);
		} else {
			Data.append('first_name', regname.current.value);
			Data.append('last_name', reglastname.current.value);
			Data.append('phone', regnumber.current.value);
			Data.append('email', regemail.current.value);
			Data.append('password', password.current.value);
		}

		axios
			.post(
				login
					? 'https://book-service-layer.herokuapp.com/user/login'
					: 'https://book-service-layer.herokuapp.com/user/register',
				Data,
			)
			.then((res) => {
				console.log(res);
				if (res.data) {
					setToken(res.data.token);
					navigete('/');
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<div className='sigin'>
				<div className='foto'>
					<img className='foto-iteam' src={login ? Siginin : Siginup} alt='' />
				</div>
				<div className='form'>
					<div className='form-box'>
						<h2 className='tittle'>Sign up</h2>
						<p className='text' onClick={() => setlogin(!login)}>
							{login
								? 'Already have an account? '
								: 'Do not you have an account? '}
							<span className='sign'>{login ? 'Sign in ' : 'Sign up'} </span>{' '}
						</p>
						<form
							onSubmit={(evt) => {
								Handleformsubmit(evt);
							}}>
							{login ? (
								<>
									<input
										className='input'
										ref={sigemail}
										type='email'
										placeholder='Email'
									/>
									<input
										ref={sigpassword}
										className='input'
										type='password'
										placeholder='Password'
									/>{' '}
								</>
							) : (
								<>
									<input
										ref={regname}
										className='input'
										type='text'
										placeholder='First name'
									/>
									<input
										ref={reglastname}
										className='input'
										type='text'
										placeholder='Last name'
									/>
									<input
										className='input'
										ref={regnumber}
										type='number'
										placeholder='Phone'
									/>
									<input
										className='input'
										ref={regemail}
										type='email'
										placeholder='Email'
									/>
									<input
										ref={password}
										className='input'
										type='Password'
										placeholder='Password'
									/>
								</>
							)}
							<button type='submit' className='send'>
								Next step
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
