import React from 'react';
import { useState } from 'react';

const CalcUt = () => {

	const inputTestTime = React.createRef();
	const inputPressureBegin= React.createRef();
	const inputPressureEnd = React.createRef();
	const inputTemperatureBegin = React.createRef();
	const inputTemperatureEnd = React.createRef();
	
	const [h2LeakMeters, seth2LeakMeters] = useState(''); 
	const [h2LeakPercent, seth2LeakPercent] = useState('');  

	function showResult(event) {

		const testTimer = 589248 / Number(inputTestTime.current.value);
		const parametersBegin = ( Number(inputPressureBegin.current.value) + 1 ) / ( Number(inputTemperatureBegin.current.value) + 273 );
		const parametersEnd = ( Number(inputPressureEnd.current.value) + 1 ) / ( Number(inputTemperatureEnd.current.value) + 273 );

		const LeakMeters = testTimer * (parametersBegin - parametersEnd);
		const LeakPercent = (200 * LeakMeters) / (Number(inputPressureBegin.current.value) * 93);

		seth2LeakMeters('Суточная утечка: ' + LeakMeters.toFixed(4) + ' м3');
		seth2LeakPercent('Суточная утечка: ' + LeakPercent.toFixed(4) + ' %');
	}
 
	return (
		<div className='Calc'>
				<h3>Калькулятор суточной утечки Н<sub>2</sub></h3>
				<input type='number' placeholder='Время испытаний' onInput={showResult} ref={inputTestTime} />
				<p>* Время испытаний составляет обычно 8 ч.</p>
				<input type='number' placeholder='Р в начале испытаний' onInput={showResult} ref={inputPressureBegin} />
				<input type='number' placeholder='Р в конце испытаний' onInput={showResult} ref={inputPressureEnd} />
				<p>** При фиксации значения давления в начале и конце испытаний использовать приборы одной позиции!</p>
				<input type='number' placeholder='Т в начале испытаний' onInput={showResult} ref={inputTemperatureBegin} />
				<input type='number' placeholder='Т в конце испытаний' onInput={showResult} ref={inputTemperatureEnd} />
				<p>*** При фиксации значения температуры в начале и конце испытаний использовать приборы одной позиции!</p>
				<p>Результаты утечки:</p>
				<p> {h2LeakMeters} </p>
				<p> {h2LeakPercent} </p>
		</div>
	);
};

export default CalcUt;