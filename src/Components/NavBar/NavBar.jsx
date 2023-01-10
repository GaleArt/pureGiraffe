import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<header>
				<Link to='/'>Потребители</Link>
				<Link to='/calcriz'>Калькулятор Rиз</Link>
				<Link to='/calcut'>Суточная утечка</Link>
				<Link to='/todo'>Напоминалка</Link>
			</header>

			<Outlet />

			<footer>2023</footer>
		</>
	);
};

export { NavBar };
