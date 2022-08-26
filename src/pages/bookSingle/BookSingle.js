import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Routes, Route, useParams, Link } from 'react-router-dom';
import { UseAuth } from '../../hook/useAuth';
import './bookSingle.css';
import Vector from '../../assets/images/pastga.svg';
import { ReactComponent as Book } from '../../assets/images/book.svg';
import { ReactComponent as El } from '../../assets/images/el.svg';
import { ReactComponent as AU } from '../../assets/images/au.svg';
import { Textes } from '../../components/texts/Texts';
import UserPhoto from '../../assets/images/de.png';
import SingleCaru from '../../components/singleCarusel/single';

export const BookSingle = () => {
	const { id } = useParams();
	const { token } = UseAuth();
	const [book, setBook] = useState({});
	const [information, setInformation] = useState(true);

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/book/bookId/${id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setBook(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div className='single-page-book'>
			<div className='container'>
				<div className='img-book'>
					<div className='single-page-img'>
						<img
							width={510}
							height='810'
							src={'https://book-service-layer.herokuapp.com/' + book?.image}
							onError={(e) => {
								if (e.nativeEvent.type !== true) {
									e.target.src = UserPhoto;
								}
							}}
							alt={book?.title}
						/>
					</div>
					<div className='book-content'>
						<h2 className='book-title'>{book?.title}</h2>

						<span className='pages'>
							Sahifalar soni: <span>{book?.page} </span>{' '}
						</span>
						<span className='pages'>
							Chop etilgan: <span> {book?.year}</span>{' '}
						</span>
						<span className='pages'>
							Janri: <span>{book?.genre_id}</span>
						</span>
						<span className='pages'>
							Nashriyot: <span>Nihol nashr</span>
						</span>
						<div>
							<div
								onClick={() => setInformation(!information)}
								className='information'>
								<span className='information-text'>To’liq ma’lumot</span>
								<img height={18} width='8' src={Vector} alt='' />
								<span className='border'></span>
							</div>

							{information && (
								<div>
									<p className='book-bio'>{book?.description}</p>
									<div className='prise'>
										<div className='prise-iteam'>
											<Book className='icon' />
											<p className='icon-text'>Qog’oz kitob</p>
											<span className='price'>{book.price * 1100} so’m</span>
										</div>
										<div className='prise-iteam'>
											<AU className='icon' />
											<p className='icon-text'>Audiokitob</p>
											<span className='price'>6:23 soat</span>
										</div>
										<div className='prise-iteam'>
											<El className='icon' />
											<p className='icon-text'>Elektron</p>
											<span className='price'>pdf, epub</span>
										</div>

										<button className='order'>Javonga qo’shish </button>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
				<div className='links-box'>
					<div>
						<NavLink className={'links'} to={'Muallifhaqida'}>
							Muallif haqida
						</NavLink>
						<NavLink className={'links'} to={''}>
							Kitobdan iqtiboslar
						</NavLink>
						<NavLink className={'links'} to={'taqrizi'}>
							Kitobxonlar taqrizi
						</NavLink>
					</div>
				</div>
				<div>
					<Routes>
						<Route index element={<Textes />} />
						<Route path='Muallifhaqida' />
						<Route path='taqrizi' />
					</Routes>
				</div>
				<div>
					<div className='flex'>
						{' '}
						<h2 className='flex-text'>Sizga yoqishi mumkin</h2>
						<Link className='flex-link' to={'/Nasr'}>
							{' '}
							Barchasini ko’rish
						</Link>
					</div>
					<SingleCaru />
				</div>
			</div>
		</div>
	);
};
