import axios from 'axios';
import { useEffect, useState } from 'react';
import { IteamBook } from '../IteamBook/IteamBook';

const Jadid = () => {
	const [autors, setAutor] = useState([]);

	useEffect(() => {
		axios
			.get('https://book-service-layer.herokuapp.com/book/genreId/2')
			.then((res) => setAutor(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<ul className='list'>
				{autors?.map((e) => (
					<IteamBook key={e.id} data={e} />
				))}
			</ul>
		</div>
	);
};

export default Jadid;
