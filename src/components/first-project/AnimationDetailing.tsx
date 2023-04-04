import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } });
    tl.current
      .from('.stage', { ease: 'linear' })
      .from('h1', { x: -50 })
      .from('h2', { x: 50 })
      .from('p', { x: -50 })
      .from('button', { y: 30, duration: 1 })
      .from('.planet > img', {
        scale: 0,
        stagger: 0.1,
        duration: 1,
        onComplete: () => {
          gsap.to('.planet > img', {
            rotate:30,
            x: 20,
            scale: '1.05',
            duration: 2,
            yoyo: true,
            repeat: -1,
            stagger: 0.1,
          });
        },
      });
  }, tweenRef);

  return () => ctx.revert();
}, []);`,
];

const AnimationDetailing = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } });
			tl.current
				.from('.stage', { ease: 'linear' })
				.from('h1', { x: -50 })
				.from('h2', { x: 50 })
				.from('p', { x: -50 })
				.from('button', { y: 30, duration: 1 })
				.from('.planet > img', {
					rotate: 30,
					scale: 0,
					stagger: 0.1,
					duration: 1,
					onComplete: () => {
						gsap.to('.planet > img', {
							x: 20,
							scale: '1.05',
							duration: 2,
							yoyo: true,
							repeat: -1,
							stagger: 0.1,
						});
					},
				});
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>애니메이션 미세 조정</Typography>
			<Typography variant='body2'>
				{
					'트윈의 타이밍과 위치를 디테일하게 조정합니다.\n애니메이션의 경우 애니메이션이 언제 시작 되는지에 대한 타이밍이 매우 중요합니다.'
				}
			</Typography>
			<Box
				ref={tweenRef}
				sx={{
					position: 'relative',
					width: '100%',
					height: '700px',
					backgroundColor: '#242424',
					'.stage': {
						width: '100%',
						height: '100%',
						background: '#83FFE1',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						overflow: 'hidden',
					},
					'.contents': {
						position: 'absolute',
						left: '100px',
						top: '170px',
						zIndex: '10',
					},
					h1: {
						fontSize: '80px',
						fontWeight: '800',
						fontFamily: "'Pretandard', sans-serif",
					},
					h2: {
						fontSize: '60px',
						fontWeight: '100',
						marginTop: '-29px',
						marginBottom: '50px',
					},
					p: {
						fontSize: '30px',
						fontWeight: '300',
						color: '#4B4B4B',
						marginBottom: '50px',
					},
					button: {
						color: '#fff',
						fontSize: '20px',
						marginTop: '32px',
						padding: '16px 33px',
						background: '#FF83C6',
						border: 'none',
						borderRadius: '30px',
					},
					'.planet': {
						'> img:nth-child(1)': {
							position: 'absolute',
							right: '259px',
							top: '-23px',
						},
						'> img:nth-child(2)': {
							position: 'absolute',
							right: '-80px',
							top: '326px',
						},
						'> img:nth-child(3)': {
							position: 'absolute',
							right: '-210px',
							bottom: '-582px',
						},
						'> img:nth-child(4)': {
							position: 'absolute',
							left: '-330px',
							top: '-619px',
						},
						'> img:nth-child(5)': {
							position: 'absolute',
							right: '-380px',
							top: '-270px',
						},
					},
				}}>
				<div className='stage'>
					<div className='contents'>
						<h1>PLANET</h1>
						<h2>EXPLORATION</h2>
						<p>
							Let's explore the planets in <br />
							space together
						</p>
						<button>READ MORE</button>
					</div>

					<div className='planet'>
						<img
							src='https://simseonbeom.github.io/Final/assets/planet/12.png'
							alt=''
						/>
						<img
							src='https://simseonbeom.github.io/Final/assets/planet/13.png'
							alt=''
						/>
						<img
							src='https://simseonbeom.github.io/Final/assets/planet/14.png'
							alt=''
						/>
						<img
							src='https://simseonbeom.github.io/Final/assets/planet/15.png'
							alt=''
						/>
						<img
							src='https://simseonbeom.github.io/Final/assets/planet/17.png'
							alt=''
						/>
					</div>
				</div>
			</Box>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[0]}
				title={'이전 파트에 비해 변경된 의사코드'}
			/>
			<Divider flexItem />
		</PageLayout>
	);
};

export default AnimationDetailing;
