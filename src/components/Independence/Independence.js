import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Iteam from '../iteam/Iteam';

const Independence = () => {
	const [autors, setAutor] = useState([]);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/author/genreId/4')
			.then((res) => setAutor(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ul className='list'>
				{autors?.map((e) => (
					<Iteam key={e.id} data={e} />
				))}
			</ul>
		</div>
	);
};

export default Independence;
