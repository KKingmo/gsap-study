import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current.to('.among', {
      keyframes: {
        '0%': { scale: 1 },
        '10%': { scale: 0.5 },
        '70%': { scale: 3, rotation: 360 },
        '100%': { scale: 1 },
      },
      duration: 1.5,
    });
  }, tweenRef);

  return () => ctx.revert();
}, []);
`,
	`const tweenBRef = useRef<HTMLDivElement>(null);
const tlB = useRef<gsap.core.Timeline>(gsap.timeline());
  
useEffect(() => {
  const ctx = gsap.context(() => {
    tlB.current.to('.among', {
      keyframes: {
        '30%': { x: 420 },
        '50%': { scale: 2 },
        '60%': { x: 0 },
        '70%': { scale: 1 },
        '100%': { x: 420 },
      },
      duration: 3,
    });
  }, tweenBRef);

  return () => ctx.revert();
}, []);`,
];

const KeyframesSecond = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tweenBRef = useRef<HTMLDivElement>(null);

	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	const tlB = useRef<gsap.core.Timeline>(gsap.timeline());

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current.to('.among', {
				keyframes: {
					'0%': { scale: 1 },
					'10%': { scale: 0.5 },
					'70%': { scale: 3, rotation: 360 },
					'100%': { scale: 1 },
				},
				duration: 1.5,
			});
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			tlB.current.to('.among', {
				keyframes: {
					'30%': { x: 420 },
					'50%': { scale: 2 },
					'60%': { x: 0 },
					'70%': { scale: 1 },
					'100%': { x: 420 },
				},
				duration: 3,
			});
		}, tweenBRef);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>키프레임 파헤치기 두번째</Typography>
			<Typography variant='body2'>
				{'키프레임을 사용하여 애니메이션을 생동감있게 만들어 봅시다.'}
			</Typography>
			<Typography variant='h2'>Scale and rotation</Typography>
			<Box
				ref={tweenRef}
				sx={{
					position: 'relative',
					width: '500px',
					height: '350px',
					backgroundColor: '#000',
					'.stage': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
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
					},
				}}>
				<div className='stage'>
					<div className='among'></div>
				</div>
			</Box>
			<Button variant='contained' onClick={() => tl.current.restart()}>
				play
			</Button>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>Wrap around</Typography>
			<Box
				ref={tweenBRef}
				sx={{
					position: 'relative',
					width: '500px',
					height: '350px',
					backgroundColor: '#000',
					'.stage': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
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
					},
				}}>
				<div className='stage'>
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

export default KeyframesSecond;
