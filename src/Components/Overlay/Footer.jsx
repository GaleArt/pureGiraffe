import React from 'react';
import Git from '../../assets/icons/github2.svg';

const Footer = () => {
	return (
		<footer className='mt-auto'>
			<div className='max-w-screen-xl px-2 mx-auto space-y-6 overflow-hidden sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center'>
					<a
						href='https://github.com/GaleArt/pureGiraffe'
						className='text-gray-400 hover:text-gray-900'
						target='_blank'
					>
						<img src={Git} alt='GitHub Logo' className='w-16' />
					</a>
					<p className='text-base leading-6 text-center'>© 2023</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
