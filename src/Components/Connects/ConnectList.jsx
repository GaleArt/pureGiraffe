import React from 'react';
import Connect from './Connect';

const ConnectList = ({ connectList, searchTerm }) => {
	return (
		<div className=''>
			{connectList.map((connect, index) => {
				return (
					<Connect key={index} name={connect.name} rabVV={connect.rabVV} />
				);
			})}
		</div>
	);
};

export default ConnectList;
