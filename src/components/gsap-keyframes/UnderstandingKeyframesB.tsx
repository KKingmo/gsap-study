import { Box, Divider, Typography } from '@mui/material';
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
];

const UnderstandingKeyframesB = () => {
	const ballRef = useRef<gsap.core.Tween | null>(null);

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
		</PageLayout>
	);
};

export default UnderstandingKeyframesB;
