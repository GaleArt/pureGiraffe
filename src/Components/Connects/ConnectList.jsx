import Connect from './Connect';

const ConnectList = ({ connectList, searchTerm }) => {
	return (
		<div className='container-lg mx-auto grid-cols-3'>
			{connectList.map((connect, index) => {
				return (
					<Connect key={index} name={connect.name} rabVV={connect.rabVV} />
				);
			})}
		</div>
	);
};

export default ConnectList;
