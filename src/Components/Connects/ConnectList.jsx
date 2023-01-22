import React from 'react';
import { Link } from 'react-router-dom';

const ConnectList = ({ connectList, searchTerm }) => {
	return (
		<div className='flex flex-col'>
			{connectList.map((connect, index) => {
				return (
					<>
						<Link to={connect.index}>{connect.name}</Link>
					</>
				);
			})}
		</div>
	);
};

export default ConnectList;
