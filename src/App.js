import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import SingleAuthor from './components/singleAuthor/SingleAuthor';
import { BookSingle } from './pages/bookSingle/BookSingle';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/single/:id' element={<SingleAuthor />} />
				<Route path='/booksingle/:id/*' element={<BookSingle />} />
			</Routes>
		</>
	);
}

export default App;
