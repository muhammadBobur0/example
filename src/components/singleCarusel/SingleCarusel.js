import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import axios from 'axios';
import { UseAuth } from '../../hook/useAuth';
import { useParams } from 'react-router-dom';

const SingleCarusel = () => {
	const [book, setBook] = useState([]);
	const { token } = UseAuth();
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(`https://book-service-layer.herokuapp.com/author/books/${id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setBook(res.data))
			.catch((err) => console.log(err));
	}, [id]);

	return (
		<div className='single-carusel'>
			<Swiper
				slidesPerView={4}
				spaceBetween={30}
				pagination={{
					clickable: false,
				}}
				modules={[Pagination]}
				className='mySwiper'>
				{book?.map((e) => {
					return (
						<SwiperSlide key={e.id}>
							<div className='books'>
								<img
									className='books-img'
									width={165}
									height={247}
									src={'https://book-service-layer.herokuapp.com/' + e.image}
									alt=''
								/>
								<h3 className='books-tittle'>{e.title}</h3>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default SingleCarusel;
