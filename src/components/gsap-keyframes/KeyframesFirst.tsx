import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current.to('.among', {
      keyframes: {
        '0%': { y: 0 },
        '25%': { y: 0 },
        '50%': { y: -100, ease: 'sine.out' },
        '75%': { y: 0, ease: 'sine.in' },
        '100%': { x: 500, ease: 'none' },
      },
      duration: 2,
      stagger: 0.4,
    });
  }, tweenRef);

  return () => ctx.revert();
}, []);`,
	`const tweenBRef = useRef<HTMLDivElement>(null);
const tlB = useRef<gsap.core.Timeline>(gsap.timeline());
  
useEffect(() => {
  const ctx = gsap.context(() => {
    tlB.current.to('.among', {
      keyframes: {
        '0%': { y: 0 },
        '25%': { y: 0 },
        '50%': { rotation: 360, y: -100, ease: 'sine.out' },
        '75%': { y: 0, ease: 'sine.in' },
        '100%': { x: 500 },
      },
      duration: 2,
      stagger: 0.2,
    });
  }, tweenBRef);

  return () => ctx.revert();
}, []);`,
];

const KeyframesFirst = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tweenBRef = useRef<HTMLDivElement>(null);

	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	const tlB = useRef<gsap.core.Timeline>(gsap.timeline());

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current.to('.among', {
				keyframes: {
					'0%': { y: 0 },
					'25%': { y: 0 },
					'50%': { y: -100, ease: 'sine.out' },
					'75%': { y: 0, ease: 'sine.in' },
					'100%': { x: 500, ease: 'none' },
				},
				duration: 2,
				stagger: 0.4,
			});
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			tlB.current.to('.among', {
				keyframes: {
					'0%': { y: 0 },
					'25%': { y: 0 },
					'50%': { rotation: 360, y: -100, ease: 'sine.out' },
					'75%': { y: 0, ease: 'sine.in' },
					'100%': { x: 500 },
				},
				duration: 2,
				stagger: 0.2,
			});
		}, tweenBRef);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>키프레임 사용하기 첫번째</Typography>
			<Typography variant='body2'>
				{
					'GSAP 3.9 버전이 업데이트 되면서 키프레임 구문에  대한 완전히 새로운 접근 방식으로 들어갑니다.\n예전부터 GreenSock 팀은 키프레임의 대해 많은 이야기를 다뤄왔었습니다.\n\n현재 CSS 애니메이션과 GSAP 애니메이션의 성능 차이가 없기 때문에 굳이 귀찮은 백분율 애니메이션 작업을 CSS로 작업할 필요가 없습니다.'
				}
			</Typography>
			<InfoPaper>
				{
					'CSS keyframes의 default ease값은 “power1.inOut” 이고\nGSAP keyframes의 default ease값은 “power1.out” 입니다.'
				}
			</InfoPaper>
			<Box
				ref={tweenRef}
				sx={{
					position: 'relative',
					width: '500px',
					height: '350px',
					backgroundColor: '#000',
					'.stage': {
						width: '500px',
						height: '350px',
						background: 'gray',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						overflow: 'hidden',
					},
					'.among': {
						width: '80px',
						height: '90px',
						background:
							'url(https://simseonbeom.github.io/Final/assets/among/Crew/Red.png)',
						backgroundSize: 'cover',
						position: 'absolute',
						top: '100px',
						transform: 'translateX(-100%)',
					},
				}}>
				<div className='stage'>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
				</div>
			</Box>
			<Button variant='contained' onClick={() => tl.current.restart()}>
				play
			</Button>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>가속도를 이용해 더 유연하게 애니메이션</Typography>
			<Box
				ref={tweenBRef}
				sx={{
					position: 'relative',
					width: '500px',
					height: '350px',
					backgroundColor: '#000',
					'.stage': {
						width: '500px',
						height: '350px',
						background: 'gray',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						overflow: 'hidden',
					},
					'.among': {
						width: '80px',
						height: '90px',
						background:
							'url(https://simseonbeom.github.io/Final/assets/among/Crew/Red.png)',
						backgroundSize: 'cover',
						position: 'absolute',
						top: '100px',
						transform: 'translateX(-100%)',
					},
				}}>
				<div className='stage'>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
					<div className='among'></div>
				</div>
			</Box>
			<Button variant='contained' onClick={() => tlB.current.restart()}>
				play
			</Button>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default KeyframesFirst;
