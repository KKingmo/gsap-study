import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`//fade out and set visibility:hidden
gsap.to(element, {
    duration: 2, 
    autoAlpha: 0
});

//in 2 seconds, fade back in with visibility:visible
gsap.to(element, {duration: 2, autoAlpha: 1, delay: 2});`,
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } });
    tl.current
      .from('.stage', { autoAlpha: 0, ease: 'linear' })
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
  <Box
    ref={tweenRef}
    sx={{
      position: 'relative',
      width: '100%',
      height: '700px',
      backgroundColor: '#242424',
      '.stage': {
        visibility: 'hidden',
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
)`,
];

const Fouc = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline({ defaults: { opacity: 0, ease: 'back' } });
			tl.current
				.from('.stage', { autoAlpha: 0, ease: 'linear' })
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
			<Typography variant='h1'>FOUC</Typography>
			<Typography variant='body2'>
				{
					'Flash of Un-styled Content (FOUC) 는 스타일이 지정되어 있지 않은 요소들이 화면에 랜더링 될 경우 콘텐츠의 깜빡이는 플래시 효과를 나타내는 용어 입니다.\n가장 일반적으로 웹폰트가 로드되기 전에 페이지 렌더링 상태에서 기본 글꼴이 나오고 적용된 웹폰트로 변경되는 모습을 상상하시면 됩니다.\n\nFOUC를 피하기 위한 단계별 수행 항목\n- 보이지 않아야 할 요소를 감싸고 있는 전체 부모 요소에게 CSS visibility: hidden 속성 부여하기\n- GSAP의 Special 속성인 autoAlpha : 0 설정\n- 애니메이션 코드를 init() 함수로 래핑\n- 로드 이벤트 리스너를 사용하여 페이지가 로드 된 후 init() 함수를 호출'
				}
			</Typography>
			<Divider flexItem />

			<Typography variant='h2'>autoAlpha</Typography>
			<Typography variant='body2'>
				{
					'값이 0에 도달하면 브라우저 렌더링 성능을 개선하고 대상의 클릭/상호 작용을 방지하기 위해 visibility 속성이 hidden으로 설정된다는 점을 제외하면 opacity와 동일합니다.\n값이 0이 아닌 다른 값이면 visibility 속성이 상속되도록 설정됩니다.\n상속을 유지하기 위해 부모 요소를 hidden으로 설정하지 않습니다(부모 요소가 숨겨져 있다고 가정해 보세요.\n자식을 명시적으로 hidden으로 설정하면 의도한 것과는 다르게 표시될 수 있습니다).\n또한 편의를 위해 요소의 visibility가 처음에 hidden으로 설정되어 있고 opacity가 1이면 불투명도도 0에서 시작해야 한다고 가정합니다.\n이렇게 하면 페이지에서 보이지 않는 상태로 시작한 다음(CSS visibility: hidden으로 설정) 원할 때마다 페이드 인하여 간단하게 표시할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Box
				ref={tweenRef}
				sx={{
					position: 'relative',
					width: '100%',
					height: '700px',
					backgroundColor: '#242424',
					'.stage': {
						visibility: 'hidden',
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
				codeString={CODESTRING[1]}
				title={'autoAlpha 적용 의사코드'}
			/>

			<Divider flexItem />
		</PageLayout>
	);
};

export default Fouc;
