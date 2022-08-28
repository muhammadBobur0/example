import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { UseAuth } from '../../hook/useAuth';
import { UseLeang } from '../../hook/useLeang';
import { text } from '../../context/useleang';

const Security = () => {
	const [data, setData] = useState({});
	const { token } = UseAuth();
	const { leng } = UseLeang();

	const [error, setError] = useState(false);

	useEffect(() => {
		if (token) {
			axios
				.get('https://book-service-layer.herokuapp.com/user/me', {
					headers: {
						Authorization: token,
					},
				})
				.then((res) => setData(res.data))
				.catch(() => setError(true));
		}
	}, [token]);

	const email = useRef();
	const currentPassword = useRef();
	const newpassword = useRef();
	const newpassword2 = useRef();

	const Handleformsubmit = (evt) => {
		evt.preventDefault();

		if (newpassword.current.value !== newpassword2.current.value) {
			return setError(true);
		}

		axios
			.put(
				'https://book-service-layer.herokuapp.com/user/security',
				{
					email: email.current.value,
					currentPassword: currentPassword.current.value,
					newPassword: newpassword2.current.value,
				},
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				console.log(res);
				if (res.data) {
					window.location.reload(false);
				}
			})
			.catch(() => setError(true));
	};

	return (
		<div className='accaunt-box'>
			<div className='content'>
				{error ? <h2 className='eror'>parol yoki login xato</h2> : ''}
				<h2 className='put-text'>{text[leng].Password}</h2>
				<form
					onSubmit={(evt) => {
						Handleformsubmit(evt);
					}}>
					<label className='label'>
						Email
						<input
							ref={email}
							className='user-input'
							type='text'
							defaultValue={data.email}
							placeholder='Email'
						/>
						<span className='user-change-span'>Please enter your email.</span>
					</label>

					<label className='label'>
						Current password
						<input
							ref={currentPassword}
							className='user-input'
							type='password'
							placeholder='Current password'
						/>
						<span className='user-change-span'>
							Please enter your Current password.
						</span>
					</label>

					<div className='number passowrd'>
						<label className='label '>
							New Password
							<input className='user-input' ref={newpassword} type='password' />
							<span className='user-change-span'>
								Please enter your phone number.
							</span>
						</label>

						<label className='label '>
							Confirm Password
							<input
								className='user-input'
								ref={newpassword2}
								type='password'
							/>
							<span className='user-change-span'>
								Please enter your phone number.
							</span>
						</label>
					</div>

					<button type='submit' className='Save-Changes'>
						Save Changes
					</button>
				</form>
			</div>
		</div>
	);
};

export default Security;
