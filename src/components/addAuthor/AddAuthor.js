import { useEffect, useRef, useState } from 'react';
import Siginup from '../../assets/images/ulu.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './addauthor.css';
import { UseAuth } from '../../hook/useAuth';

export const AddAuthor = () => {
	const [autor, setautor] = useState([]);
	const [state, setstate] = useState('');

	const { token } = UseAuth();
	const Title = useRef();
	const Pages = useRef();
	const Year = useRef();
	const Price = useRef();
	const genryId = useRef();
	const Author = useRef();
	const Description = useRef();
	const img = useRef();
	const navigete = useNavigate();
	const [uploadImg, setuploadImg] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/genreId/${genryId.current.value}`,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) => {
				setautor(res.data);
			})
			.catch((err) => console.log(err));
	}, [state]);

	const Handleformsubmit = (evt) => {
		evt.preventDefault();
		const Data = new FormData();
		Data.append('title', Title.current.value);
		Data.append('page', Pages.current.value);
		Data.append('year', Year.current.value);
		Data.append('price', Price.current.value);
		Data.append('genre_id', genryId.current.value);
		Data.append('author_id', Author.current.value);
		Data.append('description', Description.current.value);
		Data.append('image', img.current.files[0]);

		axios
			.post('https://book-service-layer.herokuapp.com/book', Data, {
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
		const preview = document.querySelector('.add-author-iteam');
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
							className='add-author-iteam'
							src={uploadImg ? uploadImg : Siginup}
							alt='img-book'
						/>
						<span className='book-tittle'>Ulugbek hazinasi</span>
						<span className='btn-book'>Upload cover</span>
						<input
							id='file'
							className='input-files'
							ref={img}
							onChange={() => previewFile()}
							type='file'
							placeholder='Title'
						/>
					</label>
				</div>
				<div className='Add-form'>
					<div className='Add-form-box'>
						<h2 className='tittle'>Add book</h2>
						<form
							onSubmit={(evt) => {
								Handleformsubmit(evt);
							}}>
							<input
								id='file'
								ref={Title}
								className='input'
								type='text'
								placeholder='Title'
							/>
							<input
								className='input'
								type='text'
								ref={Pages}
								placeholder='Pages'
							/>
							<input
								className='input'
								type='text'
								ref={Year}
								placeholder='Year'
							/>
							<input
								className='input'
								type='text'
								ref={Price}
								placeholder='Price'
							/>

							<select
								onChange={(evt) => setstate(evt.target.value)}
								ref={genryId}
								className='input'>
								<option value='1'>Temuriylar davri </option>
								<option value='2'>Jadid adabiyoti </option>
								<option value='3'>Sovet davri </option>
								<option value='4'> Mustaqillik davri </option>
							</select>

							<select ref={Author} defaultValue={'Author'} className='input'>
								{autor?.map((e) => {
									return (
										<option key={e.id} value={e.id}>
											{e.first_name}
										</option>
									);
								})}
							</select>

							<textarea ref={Description} className='textarea'></textarea>

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
