import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UseAuth } from '../../hook/useAuth';
import UserPhoto from '../../assets/images/if.png';

export const IteamBook = ({ data }) => {
	const { author_id } = data;
	const { token } = UseAuth();
	const [name, setName] = useState('');
	useEffect(() => {
		axios
			.get(
				`https://book-service-layer.herokuapp.com/author/authorId/${author_id}`,
				{
					headers: {
						Authorization: token,
					},
				},
			)
			.then((res) =>
				setName({ name: res.data.first_name, lname: res.data.last_name }),
			)
			.catch((err) => console.log(err));
	}, [author_id]);
	return (
		<li className='books-iteam'>
			<NavLink className={'book-itam-text'} to={`/booksingle/${data.id}`}>
				<img
					className='book-itam-img'
					width={165}
					height={265}
					src={'https://book-service-layer.herokuapp.com/' + data.image}
					onError={(e) => {
						if (e.nativeEvent.type !== true) {
							e.target.src = UserPhoto;
						}
					}}
					alt={data.title}
				/>

				<div>
					<h3 className='book-itam-text'>{data.title}</h3>
					<span className='books-span'>
						{name.name} {name.lname}{' '}
					</span>
				</div>
			</NavLink>
		</li>
	);
};
