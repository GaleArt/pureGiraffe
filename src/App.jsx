import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { NavBar } from './Components/NavBar/NavBar';
import ConnectList from './Components/Connects/ConnectList';
import CalcRiz from './Components/Calcs/CalcRiz';
import CalcUt from './Components/Calcs/CalcUt';
import Todo from './Components/TodoList/Todo/Todo';


import CONNECT_DATA from './db/base.json';

const filterConnects = (searchText, listOfConnects) => {
	if (!searchText) {
		return listOfConnects;
	}
	return listOfConnects.filter(({ name }) =>
		name.toLowerCase().includes(searchText.toLowerCase())
	);
};

const data = CONNECT_DATA;

function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const [connectList, setConnectList] = useState(data);

	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredConnects = filterConnects(searchTerm, data);
			setConnectList(filteredConnects);
		}, 300);

		return () => clearTimeout(Debounce);
	}, [searchTerm]);

	return (
		<>
		
		<Routes>
			<Route path='/' element={<NavBar />}>
			<Route index element={
				<div className='container'>
					<div>
						<input onChange={(e) => setSearchTerm(e.target.value)} />
						<ConnectList connectList={connectList} />
					</div>
				</div>
			} />
			<Route path='calcriz' element={<CalcRiz />} />
			<Route path='calcut' element={<CalcUt />} />
			<Route path='todo' element={<Todo />} />
			</Route>
		</Routes>
		</>
	);
}

export default App;
