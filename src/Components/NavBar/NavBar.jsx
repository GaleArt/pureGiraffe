import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
	return (
		<>
			<nav className='h-10 bg-orange-200'>
				<ul className='flex items-center justify-around h-full p-1.5'>
					<Link
						className='bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-2xl'
						to='/'
					>
						Потребители
					</Link>
					<Link
						className='bg-gradient-to-r from-cyan-500 to-blue-500'
						to='/calcriz'
					>
						Калькулятор Rиз
					</Link>
					<Link
						className='bg-gradient-to-r from-cyan-500 to-blue-500'
						to='/calcut'
					>
						Суточная утечка
					</Link>
					<Link
						className='bg-gradient-to-r from-cyan-500 to-blue-500'
						to='/todo'
					>
						Напоминалка
					</Link>
				</ul>
			</nav>

			<Outlet />

			<footer>2023</footer>
		</>
	);
};

export { NavBar };
