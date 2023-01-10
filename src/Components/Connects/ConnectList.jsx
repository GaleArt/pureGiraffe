import React, { useState } from 'react';
import SweetPagination from 'sweetpagination';
import Connect from './Connect';

const ConnectList = ({ connectList, searchTerm }) => {
	const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());

	return (
		<div>
			{connectList.map((connect, index) => {
				return (
					<Connect key={index} name={connect.name} rabVV={connect.rabVV} />
				);
			})}
		</div>
	);
};

export default ConnectList;
