import React, { useState } from 'react';

const CalcUt = () => {
	const inputTestTime = React.createRef();
	const inputPressureBegin = React.createRef();
	const inputPressureEnd = React.createRef();
	const inputTemperatureBegin = React.createRef();
	const inputTemperatureEnd = React.createRef();

	const [h2LeakMeters, seth2LeakMeters] = useState('');
	const [h2LeakPercent, seth2LeakPercent] = useState('');

	function showResult(event) {
		const testTimer = 589248 / Number(inputTestTime.current.value);
		const parametersBegin =
			(Number(inputPressureBegin.current.value) + 1) /
			(Number(inputTemperatureBegin.current.value) + 273);
		const parametersEnd =
			(Number(inputPressureEnd.current.value) + 1) /
			(Number(inputTemperatureEnd.current.value) + 273);

		const LeakMeters = testTimer * (parametersBegin - parametersEnd);
		const LeakPercent =
			(200 * LeakMeters) / (Number(inputPressureBegin.current.value) * 93);

		seth2LeakMeters('Суточная утечка: ' + LeakMeters.toFixed(4) + ' м3');
		seth2LeakPercent('Суточная утечка: ' + LeakPercent.toFixed(4) + ' %');
	}

	return (
		<div className='flex items-center flex-col'>
			<h3 className='font-bold'>
				Калькулятор суточной утечки Н<sub>2</sub>
			</h3>

			<div className='flex justify-between items-center mt-3'>
				<p className='flex w-[200px] mr-2 justify-end'>Время испытаний:</p>
				<div className='flex items-center'>
					<input
						className='font-normal w-25 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base text-[#4d70b8ee] outline-none focus:border-[#6A64F1] focus:shadow-md'
						type='number'
						placeholder='Время испытаний, часов'
						onInput={showResult}
						ref={inputTestTime}
					/>
					<p className='ml-2 w-20'>
						кгс/см<sup>2</sup>
					</p>
				</div>
			</div>

			<p className='text-sm pt-2'>
				* Время испытаний обычно составляет 8 часов.
			</p>

			<div className='flex justify-between items-center mt-3'>
				<p className='flex w-[200px] mr-2 justify-end'>P в начале испытаний:</p>
				<div className='flex items-center'>
					<input
						className='font-normal w-25 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base text-[#4d70b8ee] outline-none focus:border-[#6A64F1] focus:shadow-md'
						type='number'
						placeholder='P в начале, кгс/см2'
						onInput={showResult}
						ref={inputPressureBegin}
					/>
					<p className='ml-2 w-20'>
						кгс/см<sup>2</sup>
					</p>
				</div>
			</div>

			<div className='flex justify-between items-center mt-3'>
				<p className='flex w-[200px] mr-2 justify-end'>P в конце испытаний:</p>
				<div className='flex items-center'>
					<input
						className='font-normal w-25 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base text-[#4d70b8ee] outline-none focus:border-[#6A64F1] focus:shadow-md'
						type='number'
						placeholder='P в конце, кгс/см2'
						onInput={showResult}
						ref={inputPressureEnd}
					/>
					<p className='ml-2 w-20'>
						кгс/см<sup>2</sup>
					</p>
				</div>
			</div>

			<div className='flex justify-between items-center mt-3'>
				<p className='flex w-[200px] mr-2 justify-end'>T в начале испытаний:</p>
				<div className='flex items-center'>
					<input
						className='font-normal w-25 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base text-[#4d70b8ee] outline-none focus:border-[#6A64F1] focus:shadow-md'
						type='number'
						placeholder='Т в начале, ℃'
						onInput={showResult}
						ref={inputTemperatureBegin}
					/>
					<p className='ml-2 w-20'>℃</p>
				</div>
			</div>

			<div className='flex justify-between items-center mt-3'>
				<p className='flex w-[200px] mr-2 justify-end'>T в конце испытаний:</p>
				<div className='flex items-center'>
					<input
						className='font-normal w-25 py-1.5 px-3 appearance-none rounded-md border border-[#80D8FF] bg-white text-base text-[#4d70b8ee] outline-none focus:border-[#6A64F1] focus:shadow-md'
						type='number'
						placeholder='Т в конце, ℃'
						onInput={showResult}
						ref={inputTemperatureEnd}
					/>
					<p className='ml-2 w-20'>℃</p>
				</div>
			</div>

			<p className='text-sm pt-1.5'>
				** При фиксации значений Р и T в начале и конце испытаний использовать
				приборы одной позиции!
			</p>
			<h4 className='font-bold py-1.5'>Результаты утечки:</h4>
			<p> {h2LeakMeters} </p>
			<p> {h2LeakPercent} </p>
		</div>
	);
};

export default CalcUt;
