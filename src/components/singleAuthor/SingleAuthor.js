import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './singleAuthor.css';
import { UseAuth } from '../../hook/useAuth';
import SingleCarusel from '../singleCarusel/SingleCarusel';
import UserPhoto from '../../assets/images/on.png';

const SingleAuthor = () => {
	const [autors, setAutor] = useState();
	const { token } = UseAuth();
	const { id } = useParams();
	const loaction = useNavigate();

	useEffect(() => {
		if (token) {
			axios
				.get(`https://book-service-layer.herokuapp.com/author/authorId/${id}`, {
					headers: {
						Authorization: token,
					},
				})
				.then((res) => {
					console.log(res.data);
					setAutor(res.data);
				})
				.catch((err) => console.log(err));
		} else {
			loaction('/sigin');
		}
	}, [id]);

	return (
		<div className='author'>
			<div className='author-box-img'>
				<img
					className='author-img'
					src={'https://book-service-layer.herokuapp.com/' + autors?.image}
					width='582'
					height='780'
					onError={(e) => {
						if (e.nativeEvent.type !== true) {
							e.target.src = UserPhoto;
						}
					}}
					alt={autors?.first_name}
				/>
				<div className='author-data'>
					<div className='box-data'>
						<span className='birth'>Tavallud sanasi</span>
						<p className='birth-data'>{autors?.date_of_birth}</p>
					</div>
					<span className='minus'>-</span>
					<div>
						<span className='death'>Tavallud sanasi</span>
						<p className='birth-data'>{autors?.date_of_death}</p>
					</div>
				</div>
			</div>

			<div className='author-bio'>
				<h2 className='author-name'>
					{autors?.first_name} {autors?.last_name}
				</h2>
				<p className='author-bio-text'>{autors?.bio}</p>

				<div>
					<p className='Creativity'>Ijodi</p>
					<span className='Creativity-text'>
						Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida
						ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga
						muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor
						qaytmaydi“ qissasi boʻldi.
					</span>
				</div>

				<div>
					<div className='sigle-carusel'>
						<h3 className='sigle-carusel-tittle'>Asarlari</h3>
						<Link className='sigle-carusel-link' to={'/Nasr'}>
							Barchasini ko’rish
						</Link>
					</div>
					<div>
						<SingleCarusel />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleAuthor;
