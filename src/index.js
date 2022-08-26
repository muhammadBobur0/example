import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LeangProvider } from './context/useleang';
import { TokenProvider } from './context/usetoken';
import { Routes, Route } from 'react-router-dom';
import { Sigin } from './pages/sigin/Sigin';
import User from './pages/user/User';
import { AddAuthor } from './components/addAuthor/AddAuthor';
import { AddBook } from './components/addAuthor/AddBook';
import Eror from './assets/images/eror.png';
import { ThemaProvayder } from './context/thema';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<TokenProvider>
				<LeangProvider>
					<ThemaProvayder>
						<Routes>
							<Route path='/*' element={<App />} />
							<Route path='/sigin' element={<Sigin />} />
							<Route path='/user/*' element={<User />} />
							<Route path='/book' element={<AddAuthor />} />
							<Route path='/author' element={<AddBook />} />
							<Route
								path='*'
								element={<img src={Eror} width='1140' height={400} alt='' />}
							/>
						</Routes>
					</ThemaProvayder>
				</LeangProvider>
			</TokenProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
