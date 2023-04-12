import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const ballRef = useRef<gsap.core.Tween | null>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.set('svg', { opacity: 1 });

    gsap.to('.ball', {
      keyframes: {
        '0%': { yPercent: 0, scaleX: 1, scaleY: 1 },
        '7%': { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: 'sine.in' },
        '25%': { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: 'sine.in' },
        '50%': { yPercent: 500, scaleX: 1, scaleY: 1, ease: 'none' },
        '60%': { scaleX: 1.6, scaleY: 0.4, ease: 'none' },
        '65%': { yPercent: 500, scaleX: 1, scaleY: 1 },
        '100%': { yPercent: 0, scaleX: 1, scaleY: 1 },
        easeEach: 'sine.out',
      },
      duration: 0.8,
      repeat: -1,
      transformOrigin: 'center bottom',
    });

    gsap.to('.shadow', {
      scale: 0.7,
      duration: 0.4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      transformOrigin: 'center',
    });
  }, [ballRef]);

  return () => ctx.revert();
}, []);

return (
  <Box
    ref={ballRef}
    sx={{
      padding: 0,
      width: '100%',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#262626',
      svg: {
        width: '350px',
        maxHeight: '400px',
        maxWidth: '100%',
        opacity: 0,
      },
      circle: {
        fill: '#88ce02',
      },
      '.shadow': {
        opacity: 0.2,
      },
    }}>
    <svg viewBox='0 0 100 200'>
      <ellipse className='shadow' cx='50' cy='188' rx='15' ry='5' />
      <circle className='ball' cx='50' cy='22' r='15' />
    </svg>
  </Box>
)`,
	`gsap.to(".box", {
  keyframes: {
    y: [0, 80, -10, 30, 0],
    ease: "none", // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
    easeEach: "power2.inOut" // <- ease between each keyframe (defaults to "power1.inOut")
  },
  rotate: 180,
  ease: "elastic", // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
  duration: 5,
  stagger: 0.2
});`,
	`const boxRef = useRef<gsap.core.Tween | null>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box', {
      keyframes: {
        y: [0, 80, -10, 30, 0],
        ease: 'none', // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
        easeEach: 'power2.inOut', // <- ease between each keyframe (defaults to "power1.inOut")
      },
      rotate: 180,
      ease: 'elastic', // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
      duration: 5,
      stagger: 0.2,
    });
  }, [boxRef]);

  return () => ctx.revert();
}, []);

return (
  <Box
    ref={boxRef}
    sx={{
      lineHeight: 0,
      backgroundColor: '#262626',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '500px',
      padding: 0,
      margin: 0,
      overflow: 'hidden',
      '.box': {
        width: '50px',
        height: '50px',
        aspectRatio: '1 / 1',
        maxWidth: '50px',
        maxHeight: '50px',
        backgroundColor: '#88ce02',
        display: 'inline-block',
        margin: '3rem',
        borderRadius: '3px',
      },
    }}>
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
    <div className='box'></div>
  </Box>
)`,
	`gsap.to(".elem", {
  keyframes: [
   {x: 100, duration: 1},
   {y: 200, duration: 1, onComplete: () => { console.log('complete')}},
   {rotation: 360, duration: 2, delay: -0.25, ease: 'sine.out'}
  ]
});
 
gsap.to(".elem", {
  keyframes: {
   "0%":   { x: 100, y: 100},
   "75%":  { x: 0, y: 0, ease: 'power3.inOut'},
   "100%": { x: 50, y: 50, ease: 'none', onStart: () => { console.log('start')} }
  },
  duration: 2,
})`,
];

const UnderstandingKeyframesB = () => {
	const ballRef = useRef<gsap.core.Tween | null>(null);
	const boxRef = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.set('svg', { opacity: 1 });

			gsap.to('.ball', {
				keyframes: {
					'0%': { yPercent: 0, scaleX: 1, scaleY: 1 },
					'7%': { yPercent: 5, scaleY: 0.9, scaleX: 1.1, ease: 'sine.in' },
					'25%': { yPercent: 100, scaleY: 1.15, scaleX: 0.9, ease: 'sine.in' },
					'50%': { yPercent: 500, scaleX: 1, scaleY: 1, ease: 'none' },
					'60%': { scaleX: 1.6, scaleY: 0.4, ease: 'none' },
					'65%': { yPercent: 500, scaleX: 1, scaleY: 1 },
					'100%': { yPercent: 0, scaleX: 1, scaleY: 1 },
					easeEach: 'sine.out',
				},
				duration: 0.8,
				repeat: -1,
				transformOrigin: 'center bottom',
			});

			gsap.to('.shadow', {
				scale: 0.7,
				duration: 0.4,
				repeat: -1,
				yoyo: true,
				ease: 'sine.inOut',
				transformOrigin: 'center',
			});
		}, [ballRef]);

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box', {
				keyframes: {
					y: [0, 80, -10, 30, 0],
					ease: 'none', // <- ease across the entire set of keyframes (defaults to the one defined in the tween, or "none" if one isn't defined there)
					easeEach: 'power2.inOut', // <- ease between each keyframe (defaults to "power1.inOut")
				},
				repeat: -1,
				rotate: 180,
				ease: 'elastic', // <- the "normal" part of the tween. In this case, it affects "rotate" because it's outside the keyframes
				duration: 5,
				stagger: 0.2,
			});
		}, [boxRef]);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>키프레임 이해하기 - 2</Typography>
			<Typography variant='h2'>Easing keyframes</Typography>
			<Typography variant='body2'>
				{
					'개체(Object) 키프레임과 백분율(Percentage) 키프레임을 사용하면 개별 키프레임에 다양한 ease를 추가할 수 있습니다.'
				}
			</Typography>
			<Box
				ref={ballRef}
				sx={{
					padding: 0,
					width: '100%',
					height: '500px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#262626',
					svg: {
						width: '350px',
						maxHeight: '400px',
						maxWidth: '100%',
						opacity: 0,
					},
					circle: {
						fill: '#88ce02',
					},
					'.shadow': {
						opacity: 0.2,
					},
				}}>
				<svg viewBox='0 0 100 200'>
					<ellipse className='shadow' cx='50' cy='188' rx='15' ry='5' />
					<circle className='ball' cx='50' cy='22' r='15' />
				</svg>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='body2'>
				{'여러 가지 easing 속성, 키프레임 및 일반 트윈 값을 결합할 수도 있습니다.'}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Box
				ref={boxRef}
				sx={{
					lineHeight: 0,
					backgroundColor: '#262626',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					height: '500px',
					padding: 0,
					margin: 0,
					overflow: 'hidden',
					'.box': {
						width: '50px',
						height: '50px',
						aspectRatio: '1 / 1',
						maxWidth: '50px',
						maxHeight: '50px',
						backgroundColor: '#88ce02',
						display: 'inline-block',
						margin: '3rem',
						borderRadius: '3px',
					},
				}}>
				<div className='box'></div>
				<div className='box'></div>
				<div className='box'></div>
				<div className='box'></div>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} />
			<Divider flexItem />

			<Typography variant='h2'>Keyframe tips</Typography>
			<Typography variant='body2'>
				{
					'개체 키프레임과 백분율 키프레임은 모두 트윈과 유사하게 동작하므로 onStart 및 onComplete와 같은 콜백을 활용할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[3]} />
		</PageLayout>
	);
};

export default UnderstandingKeyframesB;
