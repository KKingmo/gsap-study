import { Box, Typography } from '@mui/material';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import PageLayout from '../../layout/PageLayout';

gsap.registerPlugin(MotionPathPlugin);

const PracticeMotionPath = () => {
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	const isScale = useRef<boolean>(false);

	const drawRoute = (target: string, length: number) => {
		const tl = gsap.timeline({ defaults: { duration: 2 } });
		tl.set(`${target} .pick`, { opacity: 0 })
			// scale이 확대되어있다면 축소시간까지 기다리도록 or not
			.to('.map', { scale: 1, x: 0, y: 0, duration: isScale.current ? 2 : 0 })
			.set(`${target} .pick`, { opacity: 1 })
			// fromTo로 재 클릭 했을 시에도 애니메이션이 보이도록
			.fromTo(
				`${target} .path`,
				{
					strokeDashoffset: length,
				},
				{
					strokeDashoffset: 0,
				},
			)
			.to(
				`${target} .pick`,
				{
					motionPath: {
						path: `${target} .path`,
						align: `${target} .path`,
						// 가운데 정렬
						alignOrigin: [0.5, 0.5],
					},
				},
				// path가 그려짐과 동시에 pick이 움직이게
				'<',
			);
		isScale.current = false;
	};

	const handleCurrent = () => {
		const tl = gsap.timeline();
		tl.to('.map', { scale: 2, x: 200, y: -200, duration: 2, ease: 'power3.inOut' }).to(
			'#here',
			{ y: -10, repeat: -1, yoyo: true },
		);
		isScale.current = true;
	};

	const handleMart = () => {
		drawRoute('#emart', 496);
	};

	const handleMedi = () => {
		drawRoute('#medi', 604);
	};

	return (
		<PageLayout>
			<Typography variant='h1'>Motion Path 연습</Typography>
			<Typography variant='h2'>svg stroke 애니메이션</Typography>
			<Typography variant='body2'>
				{
					'stroke-dasharray와 stroke-dashoffset는 SVG의 <path>, <line>, <polyline>, <polygon>, <rect>, <ellipse>, <circle> 등의 요소에 적용할 수 있는 속성입니다.\nstroke-dasharray: 이 속성은 선 스타일을 대시 라인(파선)으로 만드는 데 사용됩니다.\n값은 쉼표 또는 공백으로 구분된 숫자의 리스트이며, 이 숫자들은 대시와 공백의 길이를 순서대로 지정합니다.\n\n예를 들어, stroke-dasharray: 5, 3이면 5 단위의 선과 3 단위의 공백이 반복됩니다.\nstroke-dashoffset: 이 속성은 대시 라인 패턴이 시작되는 위치를 지정합니다.\n값이 0이면 대시 라인 패턴은 선의 시작점에서 시작되며, 값이 양수면 대시 라인 패턴이 그만큼 우측으로 이동하여 시작됩니다.\n\nstroke-dasharray: 496이고 stroke-dashoffset: 496인 경우, 선은 496 단위의 대시와 그 후의 공백으로 구성되어 있습니다.\nstroke-dashoffset: 496는 대시 라인 패턴이 선의 시작점에서 496 단위만큼 우측으로 이동하여 시작되도록 만듭니다.\n\n따라서 이 경우, 첫번째 대시가 선의 끝점에서 시작하여 그 이후에 공백이 있으므로, 실제로 선이 보이지 않게 됩니다.\n이것은 일종의 애니메이션 효과를 만드는 데 사용할 수 있는 트릭으로, 선이 그려지는 것처럼 보이게 하려면 stroke-dashoffset 값을 애니메이션으로 0까지 줄이면 됩니다.\n이렇게 하면 대시 라인 패턴이 왼쪽으로 이동하면서 점차적으로 선이 보이게 됩니다.'
				}
			</Typography>
			<Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
				<Box
					className='container'
					sx={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, 5%)',
						width: '1200px',
						height: '723px',
						overflow: 'hidden',
						boxShadow: '0 0 10px #000',
						borderRadius: '10px',
						li: {
							listStyle: 'none',
						},
						'.navigation': {
							position: 'absolute',
							right: '2rem',
							top: '1rem',
							zIndex: 99,
						},
						'.navigation li': {
							cursor: 'pointer',
							marginBottom: '1rem',
							position: 'relative',
						},
						'.navigation li span': {
							position: 'absolute',
							left: '-50px',
							top: '20px',
							opacity: 0,
							transition: 'all 0.5s',
							transform: 'translate(10px)',
						},
						'.navigation li:hover span': {
							opacity: 1,
							transform: 'translate(0)',
						},
					}}>
					<nav className='navigation'>
						<ul>
							<li className='current' onClick={handleCurrent}>
								<div>
									<svg
										width='53'
										height='53'
										viewBox='0 0 53 53'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g id='current'>
											<g id='Ellipse 3' filter='url(#filter0_d_46_18)'>
												<circle cx='26.5' cy='22.5' r='22.5' fill='white' />
											</g>
											<path
												id='&#8;point'
												d='M25.5742 33.5506C23.5352 31.0363 19 24.9424 19 21.5195C19 17.3665 22.3578 14 26.5 14C30.6406 14 34 17.3665 34 21.5195C34 24.9424 29.4297 31.0363 27.4258 33.5506C26.9453 34.1498 26.0547 34.1498 25.5742 33.5506V33.5506ZM26.5 24.0259C27.8789 24.0259 29 22.9019 29 21.5195C29 20.137 27.8789 19.013 26.5 19.013C25.1211 19.013 24 20.137 24 21.5195C24 22.9019 25.1211 24.0259 26.5 24.0259Z'
												fill='#FC3D3D'
											/>
										</g>
										<defs>
											<filter
												id='filter0_d_46_18'
												x='0'
												y='0'
												width='53'
												height='53'
												filterUnits='userSpaceOnUse'
												colorInterpolationFilters='sRGB'>
												<feFlood
													floodOpacity='0'
													result='BackgroundImageFix'
												/>
												<feColorMatrix
													in='SourceAlpha'
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
													result='hardAlpha'
												/>
												<feOffset dy='4' />
												<feGaussianBlur stdDeviation='2' />
												<feComposite in2='hardAlpha' operator='out' />
												<feColorMatrix
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
												/>
												<feBlend
													mode='normal'
													in2='BackgroundImageFix'
													result='effect1_dropShadow_46_18'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_dropShadow_46_18'
													result='shape'
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<span>현위치</span>
							</li>
							<li className='mart' onClick={handleMart}>
								<div>
									<svg
										width='53'
										height='53'
										viewBox='0 0 53 53'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g id='&#8;mart'>
											<g id='Ellipse 3' filter='url(#filter0_d_46_19)'>
												<circle cx='26.5' cy='22.5' r='22.5' fill='white' />
											</g>
											<g id='Business / Shop_Cart / 24px / Contour'>
												<g id='Union'>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16H17.8594C18.3638 16 18.7892 16.3755 18.8517 16.876L20.1637 27.3721C20.3514 28.8734 21.6276 30 23.1406 30H32C32.5523 30 33 29.5523 33 29C33 28.4477 32.5523 28 32 28H23.1406C22.6362 28 22.2108 27.6245 22.1483 27.124L22.1328 27H32.2344C33.7474 27 35.0236 25.8734 35.2113 24.3721L35.7113 20.3721C35.9351 18.5815 34.5389 17 32.7344 17H20.8828L20.8363 16.6279C20.6486 15.1266 19.3724 14 17.8594 14H17ZM21.1328 19L21.8828 25H32.2344C32.7388 25 33.1642 24.6245 33.2267 24.124L33.7267 20.124C33.8013 19.5272 33.3359 19 32.7344 19H21.1328Z'
														fill='#FFA800'
													/>
													<path
														d='M25 32.5C25 33.3284 24.3284 34 23.5 34C22.6716 34 22 33.3284 22 32.5C22 31.6716 22.6716 31 23.5 31C24.3284 31 25 31.6716 25 32.5Z'
														fill='#FFA800'
													/>
													<path
														d='M30.5 34C31.3284 34 32 33.3284 32 32.5C32 31.6716 31.3284 31 30.5 31C29.6716 31 29 31.6716 29 32.5C29 33.3284 29.6716 34 30.5 34Z'
														fill='#FFA800'
													/>
												</g>
											</g>
										</g>
										<defs>
											<filter
												id='filter0_d_46_19'
												x='0'
												y='0'
												width='53'
												height='53'
												filterUnits='userSpaceOnUse'
												colorInterpolationFilters='sRGB'>
												<feFlood
													floodOpacity='0'
													result='BackgroundImageFix'
												/>
												<feColorMatrix
													in='SourceAlpha'
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
													result='hardAlpha'
												/>
												<feOffset dy='4' />
												<feGaussianBlur stdDeviation='2' />
												<feComposite in2='hardAlpha' operator='out' />
												<feColorMatrix
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
												/>
												<feBlend
													mode='normal'
													in2='BackgroundImageFix'
													result='effect1_dropShadow_46_19'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_dropShadow_46_19'
													result='shape'
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<span>마트</span>
							</li>
							<li className='medi' onClick={handleMedi}>
								<div>
									<svg
										width='53'
										height='53'
										viewBox='0 0 53 53'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g id='medi'>
											<g id='Ellipse 3' filter='url(#filter0_d_50_24)'>
												<circle cx='26.5' cy='22.5' r='22.5' fill='white' />
											</g>
											<g id='Medical / Case / 24px / Contour'>
												<g id='Union'>
													<path
														d='M26 21C26.5523 21 27 21.4477 27 22V23H28C28.5523 23 29 23.4477 29 24C29 24.5523 28.5523 25 28 25H27V26C27 26.5523 26.5523 27 26 27C25.4477 27 25 26.5523 25 26V25H24C23.4477 25 23 24.5523 23 24C23 23.4477 23.4477 23 24 23H25V22C25 21.4477 25.4477 21 26 21Z'
														fill='#0064FA'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M30.9162 17.0838C33.2401 17.5141 35 19.5515 35 22V26C35 28.7614 32.7614 31 30 31H22C19.2386 31 17 28.7614 17 26V22C17 19.5515 18.7599 17.5141 21.0838 17.0838C21.5141 14.7599 23.5515 13 26 13C28.4485 13 30.4859 14.7599 30.9162 17.0838ZM22 19C20.3431 19 19 20.3431 19 22V26C19 27.6569 20.3431 29 22 29H30C31.6569 29 33 27.6569 33 26V22C33 20.3431 31.6569 19 30 19H22ZM28.8293 17C28.4175 15.8348 27.3062 15 26 15C24.6938 15 23.5825 15.8348 23.1707 17H28.8293Z'
														fill='#0064FA'
													/>
												</g>
											</g>
										</g>
										<defs>
											<filter
												id='filter0_d_50_24'
												x='0'
												y='0'
												width='53'
												height='53'
												filterUnits='userSpaceOnUse'
												colorInterpolationFilters='sRGB'>
												<feFlood
													floodOpacity='0'
													result='BackgroundImageFix'
												/>
												<feColorMatrix
													in='SourceAlpha'
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
													result='hardAlpha'
												/>
												<feOffset dy='4' />
												<feGaussianBlur stdDeviation='2' />
												<feComposite in2='hardAlpha' operator='out' />
												<feColorMatrix
													type='matrix'
													values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
												/>
												<feBlend
													mode='normal'
													in2='BackgroundImageFix'
													result='effect1_dropShadow_50_24'
												/>
												<feBlend
													mode='normal'
													in='SourceGraphic'
													in2='effect1_dropShadow_50_24'
													result='shape'
												/>
											</filter>
										</defs>
									</svg>
								</div>
								<span>병원</span>
							</li>
						</ul>
					</nav>
					<Box
						className='map'
						sx={{
							width: '100%',
							height: '100%',
							background: 'url(/assets/map.png) no-repeat center',
							backgroundSize: 'contain',
							'#emart .path': {
								strokeDasharray: 496,
								strokeDashoffset: 496,
							},
							'#medi .path': {
								strokeDasharray: 604,
								strokeDashoffset: 604,
							},
							'.pick': {
								opacity: 0,
							},
						}}>
						<svg
							width='1200'
							height='723'
							viewBox='0 0 1200 723'
							fill='transparent'
							xmlns='http://www.w3.org/2000/svg'>
							<g id='route'>
								<rect width='1200' height='723' fill='none' />

								<g id='emart'>
									<path
										className='path'
										d='M527 465L693 399.5L736 517.5L837.5 453L903 426'
										stroke='#417DFC'
										strokeWidth='5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<g className='pick'>
										<circle
											id='Ellipse 1'
											cx='903.842'
											cy='423.714'
											r='8.45833'
											fill='white'
										/>
										<g id='Ellipse 2' filter='url(#filter0_d_45_2)'>
											<circle
												cx='903.278'
												cy='424.278'
												r='9.4583'
												stroke='#417DFC'
												strokeWidth='3.63896'
												shapeRendering='crispEdges'
											/>
										</g>
									</g>
								</g>
								<g id='medi'>
									<path
										className='path'
										d='M521 469.5L464 314L379.5 345C368.167 349.667 338.2 353.5 309 331.5C293.167 317.333 251.1 292.3 209.5 305.5L81.5 365.5C77.5 367.333 71.2 374.2 78 387'
										stroke='#417DFC'
										strokeWidth='5'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<g className='pick'>
										<circle
											id='Ellipse 1_2'
											cx='78.8416'
											cy='388.714'
											r='8.45833'
											fill='white'
										/>
										<g id='Ellipse 2_2' filter='url(#filter1_d_45_2)'>
											<circle
												cx='78.2778'
												cy='389.278'
												r='9.4583'
												stroke='#417DFC'
												strokeWidth='3.63896'
												shapeRendering='crispEdges'
											/>
										</g>
									</g>
								</g>
								<path
									id='here'
									d='M518.863 464.187C515.183 459.661 507 448.694 507 442.533C507 435.059 513.059 429 520.533 429C528.005 429 534.067 435.059 534.067 442.533C534.067 448.694 525.82 459.661 522.204 464.187C521.337 465.265 519.73 465.265 518.863 464.187V464.187ZM520.533 447.044C523.021 447.044 525.044 445.021 525.044 442.533C525.044 440.045 523.021 438.022 520.533 438.022C518.045 438.022 516.022 440.045 516.022 442.533C516.022 445.021 518.045 447.044 520.533 447.044Z'
									fill='#FC3D3D'
								/>
							</g>
							<defs>
								<filter
									id='filter0_d_45_2'
									x='882.978'
									y='403.978'
									width='40.6'
									height='40.6001'
									filterUnits='userSpaceOnUse'
									colorInterpolationFilters='sRGB'>
									<feFlood floodOpacity='0' result='BackgroundImageFix' />
									<feColorMatrix
										in='SourceAlpha'
										type='matrix'
										values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
										result='hardAlpha'
									/>
									<feMorphology
										radius='5.63889'
										operator='dilate'
										in='SourceAlpha'
										result='effect1_dropShadow_45_2'
									/>
									<feOffset />
									<feGaussianBlur stdDeviation='1.69167' />
									<feComposite in2='hardAlpha' operator='out' />
									<feColorMatrix
										type='matrix'
										values='0 0 0 0 0.57045 0 0 0 0 0.705493 0 0 0 0 0.98955 0 0 0 0.5 0'
									/>
									<feBlend
										mode='normal'
										in2='BackgroundImageFix'
										result='effect1_dropShadow_45_2'
									/>
									<feBlend
										mode='normal'
										in='SourceGraphic'
										in2='effect1_dropShadow_45_2'
										result='shape'
									/>
								</filter>
							</defs>
						</svg>
					</Box>
				</Box>
			</Box>
		</PageLayout>
	);
};

export default PracticeMotionPath;
