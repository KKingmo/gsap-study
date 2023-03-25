import { Box, Divider, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`interface TweenVars extends AnimationVars {
  // ...
  stagger?: NumberValue | StaggerVars;
  // ...
}

interface CallbackVars {
  callbackScope?: object;
  onComplete?: Callback;
  onCompleteParams?: any[];
  onRepeat?: Callback;
  onRepeatParams?: any[];
  onReverseComplete?: Callback;
  onReverseCompleteParams?: any[];
  onStart?: Callback;
  onStartParams?: any[];
  onUpdate?: Callback;
  onUpdateParams?: any[];
}

/** utils.DistributeConfig */
interface DistributeConfig {
  amount?: number;
  axis?: "x" | "y";
  base?: number;
  each?: number;
  ease?: string | EaseFunction;
  from?: "start" | "center" | "end" | "edges" | "random" | number | [number, number];
  grid?: "auto" | [number, number];
}

interface StaggerVars extends CallbackVars, utils.DistributeConfig {
  repeat?: number;
  repeatDelay?: number;
  yoyo?: boolean;
  yoyoEase?: boolean | string | EaseFunction;
}`,
];

const Staggers = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.to('.box', {
				y: -50,
				repeat: -1,
				yoyo: true,
				stagger: { each: 0.2, from: 'end' },
			});
		}, tweenRef);

		return () => ctx.revert();
	}, []);
	return (
		<PageLayout>
			<Typography variant='h1'>다중 요소 제어하기</Typography>
			<Typography variant='body2'>
				{
					'stagger속성을 사용하면 단일 트윈에서 여러 대상의 시작 시간을 오프셋 설정할 수 있습니다.\n\nGSAP3에서는 GSAP2의 staggerTo(), staggerFrom(), staggerFromTo() 메서드가 더 이상 필요하지 않습니다.'
				}
			</Typography>
			<Divider flexItem />

			<Box
				ref={tweenRef}
				sx={{
					display: 'flex',
					alignSelf: 'center',
					gap: '1rem',
					paddingTop: '2rem',
				}}>
				<AnimatedBox className='box green' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box green' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
			</Box>
			<Typography variant='h2'>stagger 객체 타입</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
		</PageLayout>
	);
};

export default Staggers;
