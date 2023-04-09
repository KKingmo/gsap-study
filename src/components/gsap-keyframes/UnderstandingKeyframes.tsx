import { Box, Divider, Typography } from '@mui/material';
import { MouseEvent, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`// timeline
let tl = gsap.timeline();
tl.to(".box", {
    x: 100
  })
  .to(".box", {
    y: 100
  })
  .to(".box", {
    x: 0
  })
  .to(".box", {
    y: 0
  });

// Array-based keyframes
gsap.to(".box", {
  keyframes: {
    x: [0, 100, 100, 0, 0],
    y: [0, 0, 100, 100, 0],
    ease: "power1.inOut"
  },
  duration: 2
});`,
	`gsap.to(".elem", {
  keyframes: [
    {x: 100, duration: 1, ease: 'sine.out'}, // finetune with individual eases
    {y: 200, duration: 1, delay: 0.5}, // create a 0.5 second gap
    {rotation: 360, duration: 2, delay: -0.25} // overlap by 0.25 seconds
  ],
  ease: 'expo.inOut' // ease the entire keyframe block
});`,
	`gsap.to(".elem", {
  keyframes: {
   "0%":   { x: 100, y: 100},
   "75%":  { x: 0, y: 0, ease: 'sine.out'}, // finetune with individual eases
   "100%": { x: 50, y: 50 },
    easeEach: 'expo.inOut' // ease between keyframes
  },
  ease: 'none' // ease the entire keyframe block
  duration: 2,
})`,
	`gsap.to(".elem", {
  keyframes: {
   x: [100, 0, 50],
   y: [100, 0, 50]
   easeEach: 'sine.inOut' // ease between keyframes
   ease: 'expo.out' // ease the entire keyframe block
  },
  duration: 2,
})`,
	`const eachTween = useRef<gsap.core.Tween | null>(null);
const easeTween = useRef<gsap.core.Tween | null>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    eachTween.current = gsap.to('.elem', {
      keyframes: {
        x: [0, 100, 100, 0, 0],
        y: [0, 0, 100, 100, 0],
        easeEach: 'power4.inOut', // <- customise the ease between each keyframe
      },
      duration: 5,
      paused: true,
    });

    easeTween.current = gsap.to('.elem', {
      keyframes: {
        x: [0, 100, 100, 0, 0],
        y: [0, 0, 100, 100, 0],
        easeEach: 'none', // <- override the default keyframe ease
      },
      ease: 'power4.inOut', // <- apply an ease to all the keyframes
      duration: 5,
      paused: true,
    });

    easeTween.current.play();
  });

  return () => ctx.revert();
}, []);

const handleChange = (event: MouseEvent<HTMLFormElement>) => {
  const target = event.target as HTMLFormElement;
  const value = target.value;
  const text = document.querySelector('.text');

  if (!eachTween.current || !easeTween.current || !text) return;
  if (value === 'ease') {
    eachTween.current.kill();
    easeTween.current.play(0);
    text.textContent = 'ease the whole keyframe';
  } else {
    easeTween.current.kill();
    eachTween.current.play(0);
    text.textContent = 'ease between keyframes';
  }
};

return (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#262626',
      padding: '3rem',
      width: '100%',
      color: '#fff',
      form: {
        display: 'flex',
        flexDirection: 'column',
        '& > * + *': {
          marginTop: '1rem',
        },
        '& > div': { display: 'flex', gap: '1rem' },
      },
      section: {
        display: 'flex',
        width: '100%',
        maxWidth: '500px',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
      },
      svg: {
        minWidth: '200px',
        width: '50%',
      },
    }}>
    <p className='text'>Fine-tune your easing with ease and easeEach</p>
    <section>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'>
        <rect
          opacity='0.5'
          strokeWidth='0.3'
          x='25'
          y='25'
          width='100'
          height='100'
          fill='none'
          stroke='#fff'
          strokeMiterlimit='5'
          strokeDasharray='5'
        />
        <circle cx='25' cy='25' r='2' fill='#d5d5d5' />
        <circle cx='125' cy='25' r='2' fill='#d5d5d5' />
        <circle cx='125' cy='125' r='2' fill='#d5d5d5' />
        <circle cx='25' cy='125' r='2' fill='#d5d5d5' />
        <rect
          className='elem'
          x='10'
          y='10'
          width='30'
          height='30'
          rx='4'
          fill='#88ce02'
        />
      </svg>

      <form onChange={handleChange}>
        <div className='pretty p-default p-curve'>
          <input
            type='radio'
            name='eases'
            id='ease'
            value='ease'
            defaultChecked
          />
          <div className='state'>
            <label htmlFor='ease'>ease</label>
          </div>
        </div>

        <div className='pretty p-default p-curve'>
          <input type='radio' name='eases' id='each' value='each' />
          <div className='state'>
            <label htmlFor='each'>easeEach</label>
          </div>
        </div>
      </form>
    </section>
  </Box>
)`,
];

const UnderstandingKeyframes = () => {
	const eachTween = useRef<gsap.core.Tween | null>(null);
	const easeTween = useRef<gsap.core.Tween | null>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			eachTween.current = gsap.to('.elem', {
				keyframes: {
					x: [0, 100, 100, 0, 0],
					y: [0, 0, 100, 100, 0],
					easeEach: 'power4.inOut', // <- customise the ease between each keyframe
				},
				duration: 5,
				paused: true,
			});

			easeTween.current = gsap.to('.elem', {
				keyframes: {
					x: [0, 100, 100, 0, 0],
					y: [0, 0, 100, 100, 0],
					easeEach: 'none', // <- override the default keyframe ease
				},
				ease: 'power4.inOut', // <- apply an ease to all the keyframes
				duration: 5,
				paused: true,
			});

			easeTween.current.play();
		});

		return () => ctx.revert();
	}, []);

	const handleChange = (event: MouseEvent<HTMLFormElement>) => {
		const target = event.target as HTMLFormElement;
		const value = target.value;
		const text = document.querySelector('.text');

		if (!eachTween.current || !easeTween.current || !text) return;
		if (value === 'ease') {
			eachTween.current.kill();
			easeTween.current.play(0);
			text.textContent = 'ease the whole keyframe';
		} else {
			easeTween.current.kill();
			eachTween.current.play(0);
			text.textContent = 'ease between keyframes';
		}
	};

	return (
		<PageLayout>
			<Typography variant='h1'>키프레임 이해하기</Typography>
			<Typography variant='body2'>
				{
					'하나의 타겟에 애니메이션을 적용하기 위해 여러 개의 트윈을 작성해야 하는 상황이라면 키프레임을 활용해야 할 때입니다.\n키프레임은 코드를 간결하게 유지하면서 일련의 단계를 통해 타겟을 이동할 수 있는 좋은 방법입니다.\n\n아래와 같이 반복적인 타임라인을 하나의 트윈에 맞게 간소화할 수 있습니다.\n키프레임은 트윈 안에 중첩된 하위 타임라인으로 생각하면 좋습니다'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>Object keyframes - v3.0</Typography>
			<Typography variant='body2'>
				{
					'이 키프레임 구문을 사용하면 주어진 대상에 사용할 매개변수 배열을 전달할 수 있습니다. \n.to() 트윈 변수 시퀀스처럼 생각하면 됩니다. \n지연 값을 사용하여 간격이나 겹침을 만들 수 있습니다.\n\n키프레임별 기본 ease는 linear이며 개별 키프레임에서 재정의할 수 있습니다. \n전체 키프레임 시퀀스에 ease를 적용할 수도 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />

			<Typography variant='h2'>Percentage keyframes - v3.9</Typography>
			<Typography variant='body2'>
				{
					'이 익숙한 구문을 사용하면 CSS에서 애니메이션을 쉽게 옮길 수 있습니다! \n키프레임 객체에서 지연 및 지속 시간을 사용하는 대신 트윈 자체에 전체 지속 시간을 지정한 다음 백분율을 사용하여 각 키프레임의 위치를 정의하면 됩니다.\n\nCSS 동작과 일관성을 유지하기 위해 기본 키프레임별 ease는 일반적으로 power1.inOut이지만, 개별 키프레임 또는 easeEach를 사용하여 모든 키프레임에서 이를 재정의할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} />
			<Divider flexItem />

			<Typography variant='h2'>Simple Array-based keyframes - v3.9</Typography>
			<Typography variant='body2'>
				{
					'값의 배열을 정의하기만 하면 트윈에 지정된 시간 동안 균등하게 분배됩니다.\n\n기본 키프레임별 ease는 power1.inOut이지만, easeEach를 사용하여 이를 재정의할 수 있습니다.\n배열의 요소 수가 같을 필요는 없습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[3]} />
			<Divider flexItem />

			<Typography variant='h2'>Easing keyframes</Typography>
			<Typography variant='body2'>
				{
					'애니메이션에서 완급 조절은 필수 요소이며 키프레임은 엄청난 유연성을 제공합니다.\n\n백분율 키프레임과 단순 키프레임을 사용하면 각 키프레임 사이의 완급을 쉽게 제어할 수 있습니다.\n아래 form의 ease를 선택하면 전체적으로 완급 조절이되고, easeEach를 선택하면 키프레임 구간별로 완급 조절이되는 것을 확인할 수 있습니다.'
				}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					overflow: 'hidden',
					backgroundColor: '#262626',
					padding: '3rem',
					width: '100%',
					color: '#fff',
					form: {
						display: 'flex',
						flexDirection: 'column',
						'& > * + *': {
							marginTop: '1rem',
						},
						'& > div': { display: 'flex', gap: '1rem' },
					},
					section: {
						display: 'flex',
						width: '100%',
						maxWidth: '500px',
						justifyContent: 'space-around',
						alignItems: 'center',
						flexWrap: 'wrap',
					},
					svg: {
						minWidth: '200px',
						width: '50%',
					},
				}}>
				<p className='text'>Fine-tune your easing with ease and easeEach</p>
				<section>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'>
						<rect
							opacity='0.5'
							strokeWidth='0.3'
							x='25'
							y='25'
							width='100'
							height='100'
							fill='none'
							stroke='#fff'
							strokeMiterlimit='5'
							strokeDasharray='5'
						/>
						<circle cx='25' cy='25' r='2' fill='#d5d5d5' />
						<circle cx='125' cy='25' r='2' fill='#d5d5d5' />
						<circle cx='125' cy='125' r='2' fill='#d5d5d5' />
						<circle cx='25' cy='125' r='2' fill='#d5d5d5' />
						<rect
							className='elem'
							x='10'
							y='10'
							width='30'
							height='30'
							rx='4'
							fill='#88ce02'
						/>
					</svg>

					<form onChange={handleChange}>
						<div className='pretty p-default p-curve'>
							<input
								type='radio'
								name='eases'
								id='ease'
								value='ease'
								defaultChecked
							/>
							<div className='state'>
								<label htmlFor='ease'>ease</label>
							</div>
						</div>

						<div className='pretty p-default p-curve'>
							<input type='radio' name='eases' id='each' value='each' />
							<div className='state'>
								<label htmlFor='each'>easeEach</label>
							</div>
						</div>
					</form>
				</section>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[4]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default UnderstandingKeyframes;
