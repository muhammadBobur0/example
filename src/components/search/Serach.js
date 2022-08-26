import './serach.css';
import { text } from '../../context/useleang';
import { UseLeang } from '../../hook/useLeang';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
	const { leng } = UseLeang();
	const serach = useRef();
	const navigete = useNavigate();

	const handleFormSubmit = (evt) => {
		evt.preventDefault();
		navigete(`serach/${serach.current.value}`);
	};

	return (
		<div className='container'>
			<div className='serach-box'>
				<h2 className='text-serach'>{text[leng].Qidirish}</h2>
				<form
					onSubmit={(evt) => {
						handleFormSubmit(evt);
					}}
					className='form-serach'>
					<input
						className='search'
						ref={serach}
						placeholder='Adiblar, kitoblar, audiolar, maqolalar...'
						type='text'
						name=''
						id=''
					/>
					<button className='btn-serach' type='submit'>
						{text[leng].Izlash}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
