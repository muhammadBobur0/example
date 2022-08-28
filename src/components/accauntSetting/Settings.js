import { UseLeang } from '../../hook/useLeang';
import { Themcontect } from '../../context/thema';
import { useContext } from 'react';
import { text } from '../../context/useleang';

const Settings = () => {
	const { leng, setleng } = UseLeang();
	const { thema, setthema } = useContext(Themcontect);

	return (
		<div className='accaunt-box'>
			<div>
				<div className='number '>
					<h2 className='Settings-texts'>{text[leng].Settings}</h2>
					<span className='label'>{text[leng].Language}</span>
					<select
						defaultValue={leng}
						onChange={(evt) => setleng(evt.target.value)}
						className='Language'>
						<option value='uz'>UZ</option>
						<option value='en'>EN</option>
						<option value='ru'>RU</option>
					</select>
					<span className='user-change-span'>Please enter your lenguale.</span>

					<div className='thema-box'>
						<span className='label'>{text[leng].Theme}</span>
						<label>
							<input
								onChange={() => {
									if (thema === 'ligt') {
										setthema('black');
									} else {
										setthema('ligt');
									}
								}}
								className='radio input-files'
								type='checkbox'
							/>
							<span className='thema'>
								<span className='thema-input'></span>
							</span>
						</label>
					</div>
				</div>

				<button className='Changes'>Save Changes</button>
			</div>
		</div>
	);
};

export default Settings;
