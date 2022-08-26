import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './carusel.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default function Carusel() {
	return (
		<div className='container'>
			<div className='carusel'>
				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					modules={[Pagination]}
					className='mySwiper'>
					<SwiperSlide>
						<div className='slide'>
							<h2 className='slide-text'>Temuriylar davri adabiyoti</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='carusel-img'
							src='https://picsum.photos/1262/347'
							width={1261}
							height={347}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='carusel-img'
							src='https://picsum.photos/1262/347'
							width={1261}
							height={347}
							alt=''
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className='carusel-img'
							src='https://picsum.photos/1262/347'
							width={1261}
							height={347}
							alt=''
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
