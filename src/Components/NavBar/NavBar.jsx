import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import Footer from '../Footer';
import GiraffeLogo from '../../assets/icons/Grf1.png';

const NavBar = () => {
	return (
		<div className='overflow-hidden flex flex-col min-h-screen'>
			<header className='navi font-vtoroi'>
				<div class='mx-auto flex max-w-7xl items-center justify-between p-1'>
					<div className='font-bold flex items-center pl-2'>
						<img src={GiraffeLogo} alt='Logo' />G
						<span className='text-slate-500 font-extralight'>
							iraffe scream
						</span>
					</div>
					<nav class='hidden items-center text-gray-800 md:flex'>
						<Link className='flex justify-around rounded my-btn' to='/'>
							Потребители
						</Link>
						<Link className='flex justify-around rounded my-btn' to='/calcriz'>
							Калькулятор Rиз
						</Link>

						<Link className='flex justify-around rounded my-btn' to='/calcut'>
							Суточная утечка
						</Link>
					</nav>

					<button class='flex appearance-none p-1 text-gray-500 md:hidden'>
						<svg class='h-6 w-6' fill='currentColor' viewBox='0 0 256 256'>
							<line
								x1='40'
								y1='128'
								x2='216'
								y2='128'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></line>
							<line
								x1='40'
								y1='64'
								x2='216'
								y2='64'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></line>
							<line
								x1='40'
								y1='192'
								x2='216'
								y2='192'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></line>
						</svg>
					</button>
				</div>
			</header>

			<Outlet />

			<Footer />
		</div>
	);
};

export { NavBar };
