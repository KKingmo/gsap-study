import { useEffect, useRef } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

gsap.registerPlugin(Draggable);

const CODESTRING = [
	`const tl = gsap.timeline();
  tl.to(object, {y:300}, "+=1")  // 이전 트윈 종료 후 1초 뒤에 시작 relative position
  tl.to(object, {x:300}, "-=1")  // 이전 트윈 종료 1초 전에 시작 relative position
  tl.to(object, {rotation:90}, "<")  // 이전 트윈 시작될 때 동시에 실행 relative position
  tl.to(object, {opacity:0.5}, "<1") // 이전 트윈 시작 된 후 1초 뒤에 실행 relative position
  tl.to(object2, {x:200}, 1) // 타임라인 1초에 실행 absolute position`,
	`animationRef.current = gsap.timeline();
animationRef.current
	.to('#star', { duration: 1, x: 1150 })
	.to('#circle', { duration: 2, x: 1150 }, '-=0.5')
	.to('#square', { duration: 1, x: 1150 }, 3.2);`,
];
const svgStyles = {
	'& .st0': {
		fill: '#333333',
	},
	'& .st1': {
		display: 'none',
		fill: '#FFFFFF',
	},
	'& .st2': {
		fontFamily: 'Kanit-Medium',
	},
	'& .st3': {
		fontSize: 48,
	},
	'& .st4': {
		fill: '#666666',
	},
	'& .st5': {
		fill: '#CCCCCC',
	},
	'& .st6': {
		fontSize: 32,
	},
	'& .st7': {
		fill: '#00CCFF',
	},
	'& .st8': {
		fill: '#DC35F9',
	},
	'& .st9': {
		fill: '#FFFF33',
	},
	'& .st10': {
		fill: '#FF6600',
	},
	'& .st11': {
		fill: '#E9078A',
		stroke: '#E9078A',
		strokeWidth: 2,
		strokeMiterlimit: 10,
	},
	'& .st12': {
		fill: 'none',
		stroke: '#E9078A',
		strokeWidth: 3,
		strokeMiterlimit: 10,
	},
	'& .st13': {
		display: 'none',
		fill: '#FF6600',
	},
};

const PositionParameter = () => {
	const playheadRef = useRef<any>();
	const timelineRef = useRef<any>();
	const animationRef = useRef<any>();

	useEffect(() => {
		const pixelsPerSecond = 200;

		animationRef.current = gsap.timeline();
		animationRef.current
			.to('#star', { duration: 1, x: 1150 })
			.to('#circle', { duration: 2, x: 1150 }, '-=0.5')
			.to('#square', { duration: 1, x: 1150 }, 3.2);

		animationRef.current.eventCallback('onUpdate', movePlayhead).paused(true);
		gsap.to('svg', { autoAlpha: 1 });
		const time: any = document.getElementById('time');
		const maxX = animationRef.current.duration() * pixelsPerSecond;

		const children = animationRef.current.getChildren();
		const numChildren = children.length;

		for (let i = 0; i < numChildren; i++) {
			gsap.set('#tween' + i, { x: children[i].startTime() * pixelsPerSecond });
			gsap.set('#rect' + i, { width: children[i].duration() * pixelsPerSecond });
		}

		const dragger = Draggable.create(playheadRef.current, {
			type: 'x',
			cursor: 'pointer',
			trigger: timelineRef.current,
			bounds: { minX: 0, maxX: maxX },
			onDrag: function () {
				animationRef.current.pause();
				time.textContent = animationRef.current.time().toFixed(1);
				animationRef.current.progress(this.x / maxX);
			},
		});

		function movePlayhead() {
			gsap.set(playheadRef.current, { x: animationRef.current.progress() * maxX });
			time.textContent = animationRef.current.time().toFixed(1);
		}
	}, []);
	const handlePlay = () => {
		animationRef.current.play();
	};

	const handlePause = () => {
		animationRef.current.pause();
	};

	const handleReverse = () => {
		animationRef.current.reverse();
	};

	return (
		<PageLayout>
			<Typography variant='h1'>Position Parameter 시각적 효과</Typography>
			<Typography variant='body2'>
				{
					'타임라인 위치 매개변수 설정\n위치 매개변수를 사용하면 타임라인에서 트윈의 시작 시간을 오프셋 할 수 있습니다.\n\n아래 애니메이션의 [ < ], [ || ], [ > ] 버튼들을 눌러 확인할 수 있습니다.'
				}
			</Typography>

			<Box sx={{ width: '100%', height: '100%', ...svgStyles }}>
				<svg
					version='1.1'
					id='Layer_1'
					xmlns='http://www.w3.org/2000/svg'
					xmlnsXlink='http://www.w3.org/1999/xlink'
					x='0px'
					y='0px'
					viewBox='0 0 1280 720'
					xmlSpace='preserve'>
					<rect id='background' x='1' className='st0' width='1280' height='720' />
					<text transform='matrix(1 0 0 1 48.7741 106.0369)' className='st1 st2 st3'>
						A tween is a single animation
					</text>
					<g id='timeline'>
						<rect
							id='tween_x5F_bg'
							x='35'
							y='459.2'
							className='st4'
							width='1200'
							height='50'
						/>
						<rect
							id='tween_x5F_bg_1_'
							x='34'
							y='518.8'
							className='st4'
							width='1200'
							height='50'
						/>
						<rect
							id='tween_x5F_bg_2_'
							x='34'
							y='578.8'
							className='st4'
							width='1200'
							height='50'
						/>

						<g id='tween2'>
							<rect
								id='rect2'
								x='34'
								y='459.2'
								className='st7'
								width='200'
								height='50'
							/>
							<rect
								id='squarethumb'
								x='39.3'
								y='463.5'
								className='st8'
								width='40'
								height='40'
							/>
							<text transform='matrix(1 0 0 1 86.5923 497.4028)' className='st2 st6'>
								tween
							</text>
						</g>
						<g id='tween1'>
							<rect
								id='rect1'
								x='34'
								y='517.7'
								className='st7'
								width='200'
								height='50'
							/>
							<circle id='circlethumb' className='st9' cx='60' cy='543.8' r='20' />
							<text transform='matrix(1 0 0 1 86.6084 555.8825)' className='st2 st6'>
								tween
							</text>
						</g>
						<g id='tween0'>
							<rect
								id='rect0'
								x='35'
								y='577.8'
								className='st7'
								width='200'
								height='50'
							/>
							<text transform='matrix(1 0 0 1 87.5923 616.0003)' className='st2 st6'>
								tween
							</text>
							<polygon
								id='star-icon'
								className='st10'
								points='60,582.8 66.2,595.3 80,597.3 70,607 72.4,620.8 60,614.3 47.7,620.8 50,607 
40,597.3 53.9,595.3 '
							/>
						</g>
						<g id='playhead' ref={playheadRef}>
							<path
								className='st11'
								d='M36,456.5L36,456.5c-7.1,0-12.9-5.8-12.9-12.9v-31.3c0-7.1,5.8-12.9,12.9-12.9h0c7.1,0,12.9,5.8,12.9,12.9
v31.3C48.9,450.8,43.1,456.5,36,456.5z'
							/>
							<line className='st12' x1='36' y1='450.8' x2='35' y2='627.8' />
						</g>
						<text transform='matrix(1 0 0 1 25.2563 448.9027)' className='st5 st2 st6'>
							0
						</text>
						<text transform='matrix(1 0 0 1 236.9839 448.9027)' className='st5 st2 st6'>
							1
						</text>
						<text transform='matrix(1 0 0 1 432.6885 448.9027)' className='st5 st2 st6'>
							2
						</text>
						<text transform='matrix(1 0 0 1 625.4243 448.9027)' className='st5 st2 st6'>
							3
						</text>
						<text transform='matrix(1 0 0 1 819.9199 446.9027)' className='st5 st2 st6'>
							4
						</text>
						<text
							transform='matrix(1 0 0 1 1028.0004 446.9031)'
							className='st5 st2 st6'>
							5
						</text>
						<text
							transform='matrix(1 0 0 1 1225.0004 446.9031)'
							className='st5 st2 st6'>
							6
						</text>
					</g>
					<polygon
						id='star'
						className='st13'
						points='425,248 442.6,283.7 482.1,289.5 453.5,317.3 460.3,356.5 425,338 389.7,356.5 396.5,317.3 
367.9,289.5 407.4,283.7 '
					/>
					<g id='stars'>
						<polygon
							id='star'
							className='st10'
							points='68.8,284.5 80.2,307.6 105.8,311.3 87.3,329.4 91.7,354.8 68.8,342.8 45.9,354.8 
50.3,329.4 31.8,311.3 57.4,307.6 '
						/>
						<circle id='circle' className='st9' cx='68.8' cy='228.1' r='37' />
						<rect id='square' x='33' y='91.1' className='st8' width='74' height='74' />
					</g>
					<text
						id='time'
						transform='matrix(1 0 0 1 1157.1934 675.459)'
						className='st5 st2 st3'>
						0.0
					</text>
					<polygon
						id='play'
						className='st5'
						points='664.5,649.9 664.5,678.4 702.8,664.1 '
						onClick={handlePlay}
					/>
					<polygon
						id='reverse'
						className='st5'
						points='614.6,649.9 614.6,678.4 576.4,664.1 '
						onClick={handleReverse}
					/>
					<path
						id='pause'
						className='st5'
						d='M637.4,686.5h-10.1v-44.6h10.1V686.5z M652.5,641.8h-10.1v44.6h10.1V641.8z'
						onClick={handlePause}
					/>
				</svg>
			</Box>

			<Typography variant='h2'>Position Parameter 사용 예시</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>위의 예시 애니메이션에 적용된 Position Parameter</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />

			<Divider flexItem />
		</PageLayout>
	);
};

export default PositionParameter;
