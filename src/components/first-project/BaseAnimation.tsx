import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const BaseAnimation = () => {
const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline();
    tl.current
      .from('.stage', { opacity: 0 })
      .from('h1', { x: -50, opacity: 0 })
      .from('h2', { x: 50, opacity: 0 })
      .from('p', { x: -50, opacity: 0 })
      .from('button', { y: 30, opacity: 0 })
      .from('.planet > img', { scale: 0, stagger: 0.1, opacity: 0 });
  }, tweenRef);

  return () => ctx.revert();
}, []);

return (
  <PageLayout>
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
      title={'Hover Pulse Animation 의사코드'}
    />
    <Divider flexItem />
  </PageLayout>
);
};

export default BaseAnimation;`,
];

const BaseAnimation = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline();
			tl.current
				.from('.stage', { opacity: 0 })
				.from('h1', { x: -50, opacity: 0 })
				.from('h2', { x: 50, opacity: 0 })
				.from('p', { x: -50, opacity: 0 })
				.from('button', { y: 30, opacity: 0 })
				.from('.planet > img', { scale: 0, stagger: 0.1, opacity: 0 });
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>기초 애니메이션</Typography>
			<Typography variant='body2'>
				{'간단한 애니메이션 시퀀스를 설정합니다.\n이후 다음 파트에서 디테일을 추가합니다.'}
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
				title={'Base Animation 의사코드'}
			/>
			<Divider flexItem />
		</PageLayout>
	);
};

export default BaseAnimation;
