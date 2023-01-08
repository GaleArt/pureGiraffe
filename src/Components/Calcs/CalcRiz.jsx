import React from 'react';
import { useState } from 'react';

const CalcRiz = () => {

	const inputVoltage = React.createRef();
	const inputResistPr= React.createRef();
	const inputPlus = React.createRef();
	const inputMinus = React.createRef();
	
	const [fullRiz, setFullRiz] = useState(''); 
	const [plusRiz, setPlusRiz] = useState(''); 
	const [minusRiz, setMinusRiz] = useState(''); 

	function showResult(event) {

		const voltageFull = Number(inputVoltage.current.value);
		const resistPr = Number(inputResistPr.current.value);
		const voltagePlus = Number(inputPlus.current.value);
		const voltageMinus = Number(inputMinus.current.value);

		const resistanceAll = ( ( voltageFull / ( voltagePlus + voltageMinus )) -1 ) * resistPr;
		const resistancePlus = ( ( (voltageFull - voltagePlus) / voltageMinus ) -1 ) * resistPr;
		const resistanceMinus = ( ( (voltageFull - voltageMinus) / voltagePlus ) -1 ) * resistPr;

		setFullRiz('Rиз общая: ' + resistanceAll.toFixed(2) + ' кОм');
		setPlusRiz('Rиз на "+": ' + resistancePlus.toFixed(2) + ' кОм');
		setMinusRiz('Rиз на "-": ' + resistanceMinus.toFixed(2) + ' кОм');
	}
 
	return (
		<div className='Calc'>
				<h3>Калькулятор R изоляции</h3>
				<input type='number' placeholder='Введи U общее' onInput={showResult} ref={inputVoltage} />
				<input type='number' placeholder='Введи R прибора' onInput={showResult} ref={inputResistPr} />
				<input type='number' placeholder='Введи U на "+" ' onInput={showResult} ref={inputPlus} />
				<input type='number' placeholder='Введи U на "-" ' onInput={showResult} ref={inputMinus} />
				<p>Результаты расчета:</p>
				<p> {fullRiz} </p>
				<p> {plusRiz} </p>
				<p> {minusRiz} </p>
		</div>
	);
};

export default CalcRiz;
