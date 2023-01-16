import React from 'react';

const Pagination = ({ connectPerPage, totalConnects, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalConnects / connectPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className='flex justify-center'>
			<ul className='flex list-style-none'>
				<li>prev</li>
				{pageNumbers.map((number) => (
					<li className='' key={number}>
						<a
							onClick={() => paginate(number)}
							href='#'
							className='flex rounded my-btn'
						>
							{number}
						</a>
					</li>
				))}
				<li>next</li>
			</ul>
		</nav>
	);
};

export default Pagination;
