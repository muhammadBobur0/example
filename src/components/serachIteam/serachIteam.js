import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Iteam from '../iteam/Iteam';

const SerachItm = () => {
	const [autors, setAutor] = useState([]);
	const [err, serErr] = useState(false);
	const { id } = useParams();

	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/search?author=${id
					.toLowerCase()
					.trim()}`,
			)
			.then((res) => setAutor(res.data))
			.catch(() => serErr(true));
	}, [id]);

	return (
		<div>
			<ul className='list'>
				{err ? (
					<li>
						{' '}
						<h2 className='error'> Adiblar, audiolar, maqolalar topilmadi </h2>
					</li>
				) : (
					autors?.map((e) => <Iteam key={e.id} data={e} />)
				)}
			</ul>
		</div>
	);
};

export default SerachItm;
