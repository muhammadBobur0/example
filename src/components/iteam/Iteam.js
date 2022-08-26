import './iteam.css';
import { NavLink } from 'react-router-dom';
import UserPhoto from '../../assets/images/if.png';

const Iteam = ({ data }) => {
	return (
		<li className='iteam'>
			<NavLink to={`/single/${data.id}`}>
				<img
					className='iteam-img'
					src={'https://book-service-layer.herokuapp.com/' + data.image}
					onError={(e) => {
						if (e.nativeEvent.type !== true) {
							e.target.src = UserPhoto;
						}
					}}
					alt=''
				/>
				<div className='iteam-content'>
					<h3 className='iteam-tittle'>
						{data.first_name} {data.last_name}
					</h3>
					<span className='data'>
						{data.date_of_birth} - {data.date_of_death}{' '}
					</span>
				</div>
			</NavLink>
		</li>
	);
};

export default Iteam;
