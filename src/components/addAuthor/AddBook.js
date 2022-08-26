import { useRef, useState } from 'react';
import Siginup from '../../assets/images/avloniy.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addauthor.css';
import { UseAuth } from '../../hook/useAuth';

export const AddBook = () => {
	const { token } = UseAuth();
	const [uploadImg, setuploadImg] = useState(null);
	const Title = useRef();
	const Pages = useRef();
	const Year = useRef();
	const Price = useRef();
	const genryId = useRef();
	const caountr = useRef();
	const Description = useRef();
	const img = useRef();
	const navigete = useNavigate();

	const Handleformsubmit = (evt) => {
		evt.preventDefault();
		const Data = new FormData();

		Data.append('first_name', Title.current.value);
		Data.append('last_name', Pages.current.value);
		Data.append('date_of_birth', Year.current.value);
		Data.append('date_of_death', Price.current.value);
		Data.append('country', caountr.current.value);
		Data.append('genre_id', genryId.current.value);
		Data.append('bio', Description.current.value);
		Data.append('image', img.current.files[0]);

		axios
			.post('https://book-service-layer.herokuapp.com/author', Data, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => {
				if (res.data) {
					navigete('/');
				}
			})
			.catch((err) => console.log(err));
	};

	function previewFile() {
		const preview = document.querySelector('.add-book-iteam');
		const file = document.querySelector('input[type=file]').files[0];
		const reader = new FileReader();

		reader.addEventListener(
			'load',
			() => {
				preview.src = reader.result;
			},
			false,
		);

		if (file) {
			reader.readAsDataURL(file);
			setuploadImg(reader);
		}
	}

	return (
		<div>
			<div className='sigin'>
				<div className='add-author-img'>
					<label htmlFor='file' className='add-author-label'>
						<img
							className='add-book-iteam'
							height={267}
							width={351}
							src={uploadImg ? uploadImg : Siginup}
							alt='img-book'
						/>
						<span className='book-tittle'>Ulugbek hazinasi</span>
						<span className='btn-book'>Upload image</span>
						<input
							id='file'
							onChange={() => {
								previewFile();
							}}
							className='input-files'
							ref={img}
							type='file'
							placeholder='Title'
						/>
					</label>
				</div>
				<div className='Add-form'>
					<div className='Add-form-box'>
						<h2 className='tittle'>Add author</h2>
						<form
							onSubmit={(evt) => {
								Handleformsubmit(evt);
							}}>
							<input
								id='file'
								ref={Title}
								className='input'
								type='text'
								placeholder='first name '
							/>
							<input
								className='input'
								type='text'
								ref={Pages}
								placeholder='Last name'
							/>
							<input
								className='input'
								type='number'
								ref={Year}
								placeholder='Date of birth'
							/>
							<input
								className='input'
								type='number'
								ref={Price}
								placeholder='Date of death'
							/>

							<input
								className='input'
								type='text'
								ref={caountr}
								placeholder='Country'
							/>

							<select ref={genryId} className='input'>
								<option value='1'>Temuriylar davri </option>
								<option value='2'>Jadid adabiyoti </option>
								<option value='3'>Sovet davri </option>
								<option value='4'> Mustaqillik davri </option>
							</select>

							<textarea ref={Description} className='textarea'></textarea>

							<button type='submit' className='send'>
								Create
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
