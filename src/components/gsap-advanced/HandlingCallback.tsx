import { Box, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [``];

const HandlingCallback = () => {
	const h2Ref = useRef<HTMLHeadElement>(null);

	useEffect(() => {
		const tl = gsap.timeline();

		const animation = gsap.to('.orange', {
			duration: 1.5,
			y: 100,
			onComplete: complete,
			onCompleteParams: ['orange', 3],
			onUpdate() {
				if (h2Ref.current) {
					h2Ref.current.textContent = '애니메이션 재생 중';
				}
			},
			onStart() {
				// console.log('start!');
			},
		});

		function complete(color: string, number: number) {
			if (h2Ref.current) {
				h2Ref.current.textContent = `${color} 애니메이션 재생 끝`;
			}
			gsap.to('.orange', { rotation: 360 });
		}

		// Cleanup function
		return () => {
			animation.kill();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>콜백처리</Typography>
			<Typography variant='body2' ref={h2Ref}>
				{
					'gsap 애니메이션에서 사용할 수 있는 콜백의 대표적인 예로는 onComplete, onUpdate, onStart, onRepeat가 있습니다.'
				}
			</Typography>
			<Typography variant='h2' ref={h2Ref}>
				애니메이션 재생 전
			</Typography>

			<Box className='stage' sx={{ display: 'flex', gap: '2rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='green' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
			</Box>
		</PageLayout>
	);
};

export default HandlingCallback;
