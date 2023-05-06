import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const CODESTRING = [\`\`];
const NUMBERS = Array.from({ length: 10 }, (_, i) => i + 1);
const CUSTOM = (index: number, target: any, arr: any) => {
	if (target.classList.contains('orange')) {
		return 0;
	}
	return index * 30;
};
const FunctionBased = () => {
	useEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.to('.box', {
				y: CUSTOM,
				x: CUSTOM,
				rotation: (index, target) => {
					if (target.classList.contains('orange')) {
						return 0;
					}
					return index * 25;
				},
				stagger: 0.1,
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);
	return (
		<PageLayout>
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				{NUMBERS.map((num, i) => (
					<AnimatedBox key={i} className='box' size={'sm'}>
						{num}
					</AnimatedBox>
				))}
				<AnimatedBox className='box orange' size={'sm'}>
					{'11'}
				</AnimatedBox>
			</Box>
		</PageLayout>
	);
};

export default FunctionBased;`,
];

const NUMBERS = Array.from({ length: 10 }, (_, i) => i + 1);

const CUSTOM = (index: number, target: any, arr: any) => {
	if (target.classList.contains('orange')) {
		return 0;
	}
	return index * 30;
};

const FunctionBased = () => {
	useEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.to('.box', {
				y: CUSTOM,
				x: CUSTOM,
				rotation: (index, target) => {
					if (target.classList.contains('orange')) {
						return 0;
					}
					return index * 25;
				},
				stagger: 0.1,
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>함수 기반의 애니메이션</Typography>
			<Typography variant='body2'>
				{
					'이전에 언급한 것처럼 GSAP의 트윈은 함수 기반 값을 가집니다.\n사용자 정의 함수를 작성해 보고 index, target, targets 매개변수를 사용하면서 개념을 익혀봅시다.'
				}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '1rem',
					zIndex: 10,
					height: '300px',
				}}>
				{NUMBERS.map((num, i) => (
					<AnimatedBox key={i} className='box' size={'sm'}>
						{num}
					</AnimatedBox>
				))}
				<AnimatedBox className='box orange' size={'sm'}>
					{'11'}
				</AnimatedBox>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default FunctionBased;
