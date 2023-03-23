import { Box, Divider, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';
import InfoPaper from '../common/InfoPaper';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`gsap.to('.green', {
  x: 400,
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
  duration: 0.5,
});`,
];

const DelayAndLoop = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.to('.green', {
				x: 400,
				repeat: -1,
				yoyo: true,
				repeatDelay: 1,
				duration: 0.5,
			});
		}, tweenRef);

		return () => ctx.revert();
	}, []);
	return (
		<PageLayout>
			<Box
				ref={tweenRef}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignSelf: 'flex-start',
					gap: '1rem',
				}}>
				<AnimatedBox
					className='green'
					size={'xs'}
					sx={{ position: 'relative', zIndex: 9999 }}></AnimatedBox>
			</Box>

			<Typography variant='h1'>지연과 반복</Typography>
			<Typography variant='body2'>
				{
					'스페셜 속성은 애니메이션이 실행되는 방식과 수행해야 하는 작업을 정의합니다.\n특수 속성은 애니메이션 되지 않습니다.'
				}
			</Typography>
			<InfoPaper>
				{
					'delay: 애니메이션이 시작되기 전에 지연시간을 지정합니다.\n\nrepeat: 애니메이션이 몇번 반복되어야 하는지를 지정합니다.\n\nyoyo: true 로 설정하면 애니메이션이 앞뒤로 재생됩니다.\n\nrepeatDelay: 각 반복 사이에 발생하는 지연시간을 지정합니다. \n\n무한 반복은 reapt: -1 을 설정하면 애니메이션이 무한 반복됩니다.\n\nyoyo속성은 reapt 설정이 들어있어야 사용 가능 합니다.'
				}
			</InfoPaper>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default DelayAndLoop;
