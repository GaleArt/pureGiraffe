import React, { useState } from 'react';
import giraffeLogo from '../../assets/icons/Pure-giraffe.png';
import giraffeLogoScream from '../../assets/icons/Pure-giraffe-scream.png';

function Logo() {
	const [showGiraffe, letShowGiraffe] = useState(false);

	function setLogo(event) {
		if (event.type === 'mousedown') {
			return letShowGiraffe(!showGiraffe);
		}
		return letShowGiraffe(showGiraffe);
	}

	return (
		<>
			<button
				onMouseDown={setLogo}
				onMouseUp={setLogo}
				className='pl-2 hover:cursor-pointer'
			>
				<img src={showGiraffe ? giraffeLogoScream : giraffeLogo}></img>
			</button>
		</>
	);
}

export default Logo;
