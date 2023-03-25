import { Box, Divider, Typography } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';
import CollapsibleBox from '../common/CollapsibleBox';

const CODESTRING = [
	`/**
  * Creates a tween coming FROM the given values.
  *
  * gsap.from(".class", {x: 100});
  *
  * @param {TweenTarget} targets
  * @param {TweenVars} vars
  * @returns {Tween} Tween instance
  * @memberof gsap
  * @link https://greensock.com/docs/v3/GSAP/gsap.from()
  */
 function from(targets: TweenTarget, vars: TweenVars): core.Tween;`,
	`/**
 * Creates a tween coming FROM the first set of values going TO the second set of values.
 *
 * gsap.fromTo(".class", {x: 0}, {x: 100});
 *
 * @param {TweenTarget} targets
 * @param {TweenVars} fromVars
 * @param {TweenVars} toVars
 * @returns {Tween} Tween instance
 * @memberof gsap
 * @link https://greensock.com/docs/v3/GSAP/gsap.fromTo()
 */
function fromTo(targets: TweenTarget, fromVars: TweenVars, toVars: TweenVars): core.Tween;`,
];

const FromFromTo = () => {
	const tweenRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.fromTo(
				'.green',
				{
					x: 0,
					y: 0,
					backgroundColor: '#00ff00',
					opacity: 0.5,
					duration: 1,
				},
				{
					x: 400,
					y: 0,
					backgroundColor: '#0000ff',
					scale: 1.5,
					opacity: 1,
					duration: 2,
				},
			);
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

			<Typography variant='h1'>from()과 fromTo()</Typography>

			<Typography variant='h2'>gsap.from()</Typography>
			<CollapsibleBox
				defaultExpanded
				title={
					<Typography variant='body2'>
						{'gsap.from() 메서드는 지정한 값에서 부터 원래의 값으로 애니메이션 됩니다.'}
					</Typography>
				}>
				<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			</CollapsibleBox>
			<Divider flexItem />

			<Typography variant='h2'>gsap.fromTo()</Typography>
			<CollapsibleBox
				defaultExpanded
				title={
					<Typography variant='body2'>
						{
							'gsap.fromTo() 메서드는 지정한 값에서 부터 지정한 값으로 애니메이션을 적용합니다.'
						}
					</Typography>
				}>
				<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			</CollapsibleBox>
			<Divider flexItem />
		</PageLayout>
	);
};

export default FromFromTo;
