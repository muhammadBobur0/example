import { useEffect, useRef, useState } from 'react';
import './acount.css';
import axios from 'axios';
import Userfoto from '../../assets/images/use.png';
import Foto from '../../assets/images/foto.svg';
import { UseAuth } from '../../hook/useAuth';
import { UseLeang } from '../../hook/useLeang';
import { text } from '../../context/useleang';

const Accaunt = () => {
	const { leng } = UseLeang();
	const [data, setData] = useState({});
	const { token } = UseAuth();

	useEffect(() => {
		if (token) {
			axios
				.get('https://book-service-layer.herokuapp.com/user/me', {
					headers: {
						Authorization: token,
					},
				})
				.then((res) => setData(res.data))
				.catch((err) => console.log(err));
		}
	}, [token]);

	const regname = useRef();
	const reglastname = useRef();
	const regnumber = useRef();
	const img = useRef();

	const Handleformsubmit = (evt) => {
		const Put = new FormData();
		evt.preventDefault();
		Put.append('first_name', regname.current.value);
		Put.append('last_name', reglastname.current.value);
		Put.append('phone', regnumber.current.value);
		Put.append('image', img.current.files[0]);

		axios
			.put('https://book-service-layer.herokuapp.com/user/account', Put, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.data) {
					window.location.reload(false);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='accaunt-box'>
			<div className='img'>
				<label>
					<img
						className='user-acaunt-img'
						src={
							data.image
								? 'https://book-service-layer.herokuapp.com/' + data.image
								: Userfoto
						}
						alt=''
					/>

					<span className='foto-change'>
						<img className='' src={Foto} alt='Foto' />
					</span>

					<input className='file-input' ref={img} type='file' />
				</label>
			</div>
			<div className='content'>
				<h2 className='put-text'>{text[leng].myprofil}</h2>
				<form
					onSubmit={(evt) => {
						Handleformsubmit(evt);
					}}>
					<label className='label'>
						First Name
						<input
							ref={regname}
							className='user-input'
							type='text'
							defaultValue={data.first_name}
							placeholder='First name'
						/>
						<span className='user-change-span'>
							Please enter your first name.
						</span>
					</label>

					<label className='label'>
						Last Name
						<input
							ref={reglastname}
							className='user-input'
							defaultValue={data.last_name}
							type='text'
							placeholder='Last name'
						/>
						<span className='user-change-span'>
							Please enter your last name.
						</span>
					</label>

					<label className='label number'>
						Phone
						<input
							className='user-input'
							ref={regnumber}
							defaultValue={data.phone}
							type='number'
							placeholder='Phone'
						/>
						<span className='user-change-span'>
							Please enter your phone number.
						</span>
					</label>

					<button type='submit' className='Save-Changes'>
						Save Changes
					</button>
				</form>
			</div>
		</div>
	);
};

export default Accaunt;
