import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const AccelerationBasedStagger = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.stage > div', {
				duration: 2,
				opacity: 0,
				stagger: { each: 0.2, ease: 'power3.inOut' },
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Box className='stage' sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
				<AnimatedBox className='green' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />{' '}
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
				<AnimatedBox className='green' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
			</Box>
		</PageLayout>
	);
};

export default AccelerationBasedStagger;
`,
];

const AccelerationBasedStagger = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.stage > div', {
				duration: 2,
				opacity: 0,
				stagger: { each: 0.2, ease: 'power3.inOut' },
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>가속도 기반의 Stagger</Typography>
			<Typography variant='body2'>
				{
					'stagger에 가속도를 추가하면 가속도에 기반한 값을 가지고 대상이 애니메이션을 진행하게 됩니다.\nstagger에 ease속성으로 가속도를 조절할 수 있습니다.'
				}
			</Typography>

			<Box className='stage' sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
				<AnimatedBox className='green' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />{' '}
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
				<AnimatedBox className='green' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default AccelerationBasedStagger;
