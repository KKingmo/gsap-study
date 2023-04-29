import { Box, Button, Typography } from '@mui/material';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const Killtween = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.orange, .blue', {
				rotation: 360,
				repeat: -1,
				ease: 'linear',
				scale: 1.2,
				duration: 1.5,
				yoyo: true,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>트윈 죽이기</Typography>
			<Typography variant='body2'>
				{
					'gsap.killTweensOf()를 이용해 특정 선택자의 애니메이션만 죽일 수 있고, 더 나아가 선택자의 특정 애니메이션 속성만 죽일 수도 있습니다.'
				}
			</Typography>
			<Button variant='contained' onClick={() => gsap.killTweensOf('.blue')}>
				blue의 애니메이션을 아예 죽이기
			</Button>
			<Button variant='contained' onClick={() => gsap.killTweensOf('.blue', 'scale')}>
				blue의 scale만 죽이기
			</Button>
			<Box className='stage' sx={{ display: 'flex', gap: '5rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
			</Box>
		</PageLayout>
	);
};

export default Killtween;
