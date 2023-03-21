import { Box, Divider, Link, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';
import CollapsibleBox from '../common/CollapsibleBox';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`ease: "power2" //string form is preferred (this is the same as "power2.out")
ease: Power2.easeOut //global object also works`,
	`document.querySelectorAll(".dot").forEach((dot, i) => {  
  gsap.to(dot, {
    duration: 1,
    ease: easeArr[i],
    delay: i * 0.06
  });
});`,
];

const Acceleration = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.to('.green', {
				x: 400,
				repeat: -1,
				ease: 'elastic.out(1, 0.3)',
				yoyo: true,
				duration: 2.5,
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

			<Typography variant='h1'>가속도</Typography>
			<Typography variant='body2'>
				{
					'ease는 애니메이션이 재생될 때의 변경 속도를 제어합니다.\n간단한 사용에서 ease는 애니메이션이 느려지거나 빨라지는지에 대한 여부를 제어합니다.\n\n가속도 제어는 ease를 기본값(default)로 가지며, 커브가 가파를수록 더 급격한 변화를 만들 수 있습니다.'
				}
			</Typography>
			<InfoPaper>
				{
					'- `ease:”bounce”` 애니메이션이 빠질 때 바운스 됩니다.\n\n- `ease:”bounce.in”` 애니메이션이 들어올 때 바운스 됩니다.\n\n- `ease:”bounce.inOut”` 애니메이션이 들어오고 빠질 때 바운스 됩니다.'
				}
			</InfoPaper>
			<InfoPaper>
				{
					'GSAP는 기본 이즈를 "power1.out"으로 사용합니다.\n모든 트윈에서 해당 트윈의 ease 속성을 다른 (유효한) ease 값으로 설정하여 이를 쉽게 덮어쓸 수 있습니다.\ngsap.defaults()를 사용하여 GSAP에 대해 다른 기본 ease를 설정할 수 있습니다.\n특정 타임라인에 대한 기본값을 설정할 수도 있습니다.'
				}
			</InfoPaper>
			<InfoPaper>
				{
					'이즈는 문자열 또는 전역 객체로 참조할 수 있습니다.\n모듈과 빌드 시스템에서 많은 것을 가져오는 것에 대해 걱정할 필요가 없도록 문자열을 사용하는 것이 좋지만, 어느 방식을 사용하든 자유롭게 사용할 수 있습니다.'
				}
			</InfoPaper>

			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<InfoPaper>
				{
					'다른 프로퍼티와 달리 ease 프로퍼티에는 함수 기반 값을 할당할 수 없습니다.\nease 함수 내에서 함수 기반 값을 사용하려면 다음과 같이 트윈 외부에서 루프를 사용해야 합니다:'
				}
			</InfoPaper>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Link target='_blank' href='https://greensock.com/docs/v3/Eases?ref=6234'>
				참고 자료
			</Link>
			<Divider flexItem />
		</PageLayout>
	);
};

export default Acceleration;
