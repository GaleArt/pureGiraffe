import React, { useState } from 'react';
import SweetPagination from 'sweetpagination';

const Todo = () => {
	const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
	const items = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	];

	return (
		<div className='todo-wrapper'>
			<div className='flex flex-col'>
				{currentPageData.map((item) => (
					<div>
						<h3>Item #{item}</h3>
					</div>
				))}
			</div>
			<SweetPagination
				currentPageData={setCurrentPageData}
				getData={items}
				dataPerPage={18}
				getStyle={'style-2'}
			/>
		</div>
	);
};

export default Todo;
