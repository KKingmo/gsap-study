import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const CssClearProps = () => {
	useEffect(() => {
		const boxes = gsap.utils.toArray('.box');

		const handleClick = (e: any) => {
			gsap.to(e.currentTarget, { backgroundColor: 'grey', width: '300px' });
		};

		const ctx = gsap.context((self) => {
			boxes.forEach((item: any) => {
				item.addEventListener('click', handleClick);
			});
		}); // <- Scope!

		return () => {
			ctx.revert(); // <- Cleanup!
			boxes.forEach((item: any) => {
				item.removeEventListener('click', handleClick);
			});
		};
	}, []);

	return (
		<PageLayout>
			<Box
				className='stage'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					alignItems: 'flex-start',
				}}>
				<AnimatedBox className='box' size={'md'}>
					1
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					2
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					3
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					4
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					5
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					6
				</AnimatedBox>
				<Button
					variant='contained'
					onClick={() => {
						gsap.set('.box', { clearProps: 'width,backgroundColor' });
					}}>
					reset
				</Button>
			</Box>
		</PageLayout>
	);
};

export default CssClearProps;`,
];

const CssClearProps = () => {
	useEffect(() => {
		const boxes = gsap.utils.toArray('.box');

		const handleClick = (e: any) => {
			gsap.to(e.currentTarget, { backgroundColor: 'grey', width: '300px' });
		};

		const ctx = gsap.context((self) => {
			boxes.forEach((item: any) => {
				item.addEventListener('click', handleClick);
			});
		}); // <- Scope!

		return () => {
			ctx.revert(); // <- Cleanup!
			boxes.forEach((item: any) => {
				item.removeEventListener('click', handleClick);
			});
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>CSS Plugin : clearProps</Typography>
			<Typography variant='body2'>
				{
					"자바스크립트를 통해 css의 속성을 만질 경우 인라인 스타일로 적용되기 때문에 기존의 css설정 값이 우선순위에 밀리게 됩니다.\n다시 이전 상황으로 돌아가려면 인라인 스타일 자체를 없애는 것 뿐만 아니라, 기존의 css스타일 까지 입혀줘야하는 번거로움이 발생하게 됩니다.\n이럴 경우 CSS Plugin 기능 중 clearProps를 사용할 수 있습니다.\ngsap.set('.box', { clearProps: 'width,backgroundColor' })이와 같이 특정 속성만 지울 수도 있고, clearProps에 'all'을 전달하여 모든 속성을 지울 수도 있습니다.\n\n여기서 조심해야 할 사항이 있습니다.\nx:200, scale:0.3과 같이 transform 속성을 제어하는 옵션들이 2개 이상일 경우,\nclearProps:'scale'만 하여도 clearProps는 transform 속성을 지우기 때문에 x:200속성이 지워진다는 것을 아셔야합니다."
				}
			</Typography>
			<Box
				className='stage'
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					alignItems: 'flex-start',
				}}>
				<AnimatedBox className='box' size={'md'}>
					1
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					2
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					3
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					4
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					5
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					6
				</AnimatedBox>
				<Button
					variant='contained'
					onClick={() => {
						gsap.set('.box', { clearProps: 'width,backgroundColor' });
					}}>
					reset
				</Button>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default CssClearProps;
