import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { NavBar } from './Components/NavBar/NavBar';
import Pagination from './Components/Pagination';
import ConnectList from './Components/Connects/ConnectList';
import CalcRiz from './Components/Calcs/CalcRiz';
import CalcUt from './Components/Calcs/CalcUt';

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
	const [currentPage, setCurrentPage] = useState(1);
	const [connectPerPage] = useState(14);

	useEffect(() => {
		const Debounce = setTimeout(() => {
			const filteredConnects = filterConnects(searchTerm, data);
			setConnectList(filteredConnects);
		}, 300);

		return () => clearTimeout(Debounce);
	}, [searchTerm]);

	const indexOfLastConnect = currentPage * connectPerPage;
	const indexOfFirstConnect = indexOfLastConnect - connectPerPage;
	const currentConnects = connectList.slice(
		indexOfFirstConnect,
		indexOfLastConnect
	);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<Routes>
				<Route path='/' element={<NavBar />}>
					<Route
						index
						element={
							<div className='h-full'>
								<div className='flex items-center flex-col min-h-full'>
									<input
										placeholder='Наименование потребителя'
										className='font-normal w-25 mt-3 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base outline-none focus:border-[#6A64F1] focus:shadow-md'
										onChange={(e) => setSearchTerm(e.target.value)}
									/>
									<Pagination
										connectPerPage={connectPerPage}
										totalConnects={connectList.length}
										paginate={paginate}
									/>
									<ConnectList connectList={currentConnects} />
								</div>
							</div>
						}
					/>
					<Route path='calcriz' element={<CalcRiz />} />
					<Route path='calcut' element={<CalcUt />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
