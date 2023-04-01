import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);

useEffect(() => {
	const ctx = gsap.context(() => {
		const tween = gsap.to('.button', { scale: 1, yoyo: true, repeat: 15, paused: true });

		const handleMouseEnter = () => tween.restart();
		const handleMouseLeave = () => {
			tween.pause();
			gsap.to('.button', { scale: 0.8 });
		};
		if (!tweenRef.current) return;
		tweenRef.current.onmouseenter = handleMouseEnter;
		tweenRef.current.onmouseleave = handleMouseLeave;
	}, tweenRef);

	return () => ctx.revert();
}, []);

return (
	<Box
		ref={tweenRef}
		sx={{
			'.card': {
				width: '15vw',
				height: '10vw',
				border: '2px solid black',
				borderRadius: '10px',
				position: 'relative',
				background: 'url(https://picsum.photos/500/500) center no-repeat',
				backgroundSize: 'cover',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			},
			h1: {
				color: 'white',
				textShadow: '2px 2px 2px #000',
			},
			'.button': {
				fontSize: '20px',
				background: 'dodgerblue',
				padding: '5px 10px',
				borderRadius: '10px',
				color: 'white',
				position: 'absolute',
				right: '10px',
				bottom: '10px',
				border: '1px solid #fff',
				willChange: 'transform',
				transform: 'scale(0.8)',
			},
		}}>
		<div className='card'>
			<h1>BUY NOW ! </h1>
			<button className='button'>BUY</button>
		</div>
	</Box>
)`,
];

const HoverPulseAnimation = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tween = gsap.to('.button', { scale: 1, yoyo: true, repeat: 15, paused: true });

			const handleMouseEnter = () => tween.restart();
			const handleMouseLeave = () => {
				tween.pause();
				gsap.to('.button', { scale: 0.8 });
			};
			if (!tweenRef.current) return;
			tweenRef.current.onmouseenter = handleMouseEnter;
			tweenRef.current.onmouseleave = handleMouseLeave;
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>Hover Pulse Animation</Typography>
			<Typography variant='body2'>
				{
					'인터렉션 애니메이션을 작업하다 보면 특정한 기교가 정말 많이 필요합니다\n때문에 이를 위한 간단한 연습을 해봅시다.'
				}
			</Typography>

			<Box
				ref={tweenRef}
				sx={{
					'.card': {
						width: '15vw',
						height: '10vw',
						border: '2px solid black',
						borderRadius: '10px',
						position: 'relative',
						background: 'url(https://picsum.photos/500/500) center no-repeat',
						backgroundSize: 'cover',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
					h1: {
						color: 'white',
						textShadow: '2px 2px 2px #000',
					},
					'.button': {
						fontSize: '20px',
						background: 'dodgerblue',
						padding: '5px 10px',
						borderRadius: '10px',
						color: 'white',
						position: 'absolute',
						right: '10px',
						bottom: '10px',
						border: '1px solid #fff',
						willChange: 'transform',
						transform: 'scale(0.8)',
					},
				}}>
				<div className='card'>
					<h1>BUY NOW ! </h1>
					<button className='button'>BUY</button>
				</div>
			</Box>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[0]}
				title={'Hover Pulse Animation 의사코드'}
			/>
			<Divider flexItem />
		</PageLayout>
	);
};

export default HoverPulseAnimation;
