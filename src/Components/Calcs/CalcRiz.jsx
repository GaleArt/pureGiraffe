import React, { useState } from 'react';

const CalcRiz = () => {
	const inputVoltage = React.createRef();
	const inputResistPr = React.createRef();
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

		const resistanceAll =
			(voltageFull / (voltagePlus + voltageMinus) - 1) * resistPr;
		const resistancePlus =
			((voltageFull - voltagePlus) / voltageMinus - 1) * resistPr;
		const resistanceMinus =
			((voltageFull - voltageMinus) / voltagePlus - 1) * resistPr;

		setFullRiz('Rиз общая: ' + resistanceAll.toFixed(2) + ' кОм');
		setPlusRiz('Rиз на "+": ' + resistancePlus.toFixed(2) + ' кОм');
		setMinusRiz('Rиз на "-": ' + resistanceMinus.toFixed(2) + ' кОм');
	}

	return (
		<div className='flex items-center flex-col'>
			<h3>Калькулятор R изоляции</h3>
			<input
				className='form-control block w-1/4 px-3 mt-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
				type='number'
				placeholder='Введи U общее'
				onInput={showResult}
				ref={inputVoltage}
			/>
			<input
				className='form-control block w-1/4 px-3 mt-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
				type='number'
				placeholder='Введи R прибора'
				onInput={showResult}
				ref={inputResistPr}
			/>
			<input
				className='form-control block w-1/4 px-3 mt-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
				type='number'
				placeholder='Введи U на "+" '
				onInput={showResult}
				ref={inputPlus}
			/>
			<input
				className='form-control block w-1/4 px-3 mt-4 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
				type='number'
				placeholder='Введи U на "-" '
				onInput={showResult}
				ref={inputMinus}
			/>
			<h4>Результаты расчета:</h4>
			<p> {fullRiz} </p>
			<p> {plusRiz} </p>
			<p> {minusRiz} </p>
		</div>
	);
};

export default CalcRiz;
