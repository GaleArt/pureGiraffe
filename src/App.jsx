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
					<Route
						index
						element={
							<div className='container'>
								<div>
									<label
										for='UserEmail'
										class='relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'
									>
										<input
											placeholder='Наименование потребителя'
											class='peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm'
											onChange={(e) => setSearchTerm(e.target.value)}
										/>

										<span class='absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs'>
											Наименование потребителя
										</span>
									</label>

									<ConnectList connectList={connectList} />
								</div>
							</div>
						}
					/>
					<Route path='calcriz' element={<CalcRiz />} />
					<Route path='calcut' element={<CalcUt />} />
					<Route path='todo' element={<Todo />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
