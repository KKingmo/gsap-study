import { Box, Button, Divider, Typography } from '@mui/material';
import { useCallback, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
    gsap.to('.green', { rotation: 360, x: 100, duration: 1 });

    // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second.
    gsap.from('.purple', { rotation: -360, x: -100, duration: 1 });

    // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second.
    gsap.fromTo('.blue', { x: -100 }, { rotation: 360, x: 100, duration: 1 });
  }, tweenRef);

  return () => ctx.revert();
}, []);

return (
  <Box
    ref={tweenRef}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'center',
      gap: '1rem',
    }}>
    <AnimatedBox className='green'></AnimatedBox>
    <AnimatedBox className='purple'></AnimatedBox>
    <AnimatedBox className='blue'></AnimatedBox>
  </Box>
)`,
	`const staggerRef = useRef<HTMLDivElement>(null);

const handleClickStaggerItem = useCallback(() => {
  gsap.to('.box', {
    duration: 0.5,
    opacity: 0,
    y: -100,
    stagger: 0.1,
    ease: 'back.in',
  });
}, []);

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
    gsap.to('.green', { rotation: 360, x: 100, duration: 1 });

    // target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second.
    gsap.from('.purple', { rotation: -360, x: -100, duration: 1 });

    // target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second.
    gsap.fromTo('.blue', { x: -100 }, { rotation: 360, x: 100, duration: 1 });
  }, tweenRef);

  return () => ctx.revert();
}, []);

return (
  <Box
    ref={staggerRef}
    sx={{
      display: 'flex',
      alignSelf: 'center',
      gap: '1rem',
    }}
    onClick={handleClickStaggerItem}>
    <AnimatedBox className='box green' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box green' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
    <AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
  </Box>
);`,
	`                        PLAYHEAD
|--------------timeline-----|-----------|
|--tween1--|                |
           |-----tween2-----|-----------|`,
	`const timelineRef = useRef<HTMLDivElement>(null);
const tl = useRef<any>(null);

useLayoutEffect(() => {
  if (timelineRef.current === null) return;
  const offsetWidth = timelineRef.current.offsetWidth;

  tl.current = gsap.to('.tween', {
    duration: 4,
    x: () => offsetWidth, // animate by the px width of the nav
    xPercent: -100, // offset by the width of the box
    rotation: 360,
    ease: 'none',
    paused: true,
  });
  return () => {
    tl.current.progress(0).kill();
  };
}, []);

return (
  <Box ref={timelineRef}>
    <AnimatedBox
      className='tween'
      sx={{ mb: '2rem', backgroundColor: 'purple' }}></AnimatedBox>
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Button variant='contained' onClick={() => tl.current.play()}>
        play()
      </Button>
      <Button variant='contained' onClick={() => tl.current.pause()}>
        pause()
      </Button>
      <Button variant='contained' onClick={() => tl.current.resume()}>
        resume()
      </Button>
      <Button variant='contained' onClick={() => tl.current.reverse()}>
        reverse()
      </Button>
      <Button variant='contained' onClick={() => tl.current.restart()}>
        restart()
      </Button>
    </Box>
  </Box>
)`,
];

const Example = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const staggerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);
	const tl = useRef<any>(null);

	const handleClickStaggerItem = useCallback(() => {
		gsap.to('.box', {
			duration: 0.5,
			opacity: 0,
			y: -100,
			stagger: 0.1,
			ease: 'back.in',
		});
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// target the element with a class of "green" - rotate and move TO 100px to the left over the course of 1 second.
			gsap.to('.orange', { rotation: 360 });

			// target the element with a class of "purple" - rotate and move FROM 100px to the left over the course of 1 second.
			gsap.from('.purple', { rotation: -360, x: -100, duration: 1 });

			// target the element with a class of "blue" - rotate and move FROM 100px to the left, TO 100px to the right over the course of 1 second.
			gsap.fromTo('.blue', { x: -100 }, { rotation: 360, x: 100, duration: 1 });
		}, tweenRef);

		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.box', {
				duration: 2,
				scale: 0.5,
				opacity: 0,
				delay: 0.5,
				stagger: 0.2,
				ease: 'elastic',
				force3D: true,
			});
		}, staggerRef);

		return () => ctx.revert();
	}, []);

	useLayoutEffect(() => {
		if (timelineRef.current === null) return;
		const offsetWidth = timelineRef.current.offsetWidth;

		tl.current = gsap.to('.tween', {
			duration: 4,
			x: () => offsetWidth, // animate by the px width of the nav
			xPercent: -100, // offset by the width of the box
			rotation: 360,
			ease: 'none',
			paused: true,
		});
		return () => {
			tl.current.progress(0).kill();
		};
	}, []);

	return (
		<PageLayout>
			{/* GSAP Object */}
			<Typography variant='h1'>GSAP Object</Typography>
			<Typography variant='body2'>
				{
					'gsap 객체는 GSAP의 대부분의 기능에 대한 액세스 포인트 역할을 합니다.\nGSAP의 핵심인 Tweens과 Timelines을 생성하고 제어하는 다양한 메서드와 프로퍼티를 가진 일반 객체일 뿐입니다.'
				}
			</Typography>
			<Divider flexItem />

			{/* Tween */}
			<Typography variant='h2'>{`Tween`}</Typography>
			<Typography variant='body2'>
				{`트윈은 모든 애니메이션 작업을 수행하는 것으로, high-performance property setter라고 생각하면 됩니다.\n타겟(애니메이션을 적용하려는 오브젝트), 지속 시간, 애니메이션을 적용하려는 속성을 입력하면 재생 헤드가 새로운 위치로 이동하면 해당 지점의 속성 값이 무엇인지 파악하여 그에 따라 적용합니다.`}
			</Typography>
			<Typography variant='h3'>{'Tween을 만드는 일반적인 방법 예시:'}</Typography>
			<Box
				ref={tweenRef}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignSelf: 'center',
					gap: '1rem',
				}}>
				<AnimatedBox className='green'></AnimatedBox>
				<AnimatedBox className='purple'></AnimatedBox>
				<AnimatedBox className='blue'></AnimatedBox>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'의사코드'} />
			<Divider flexItem />

			{/* Staggers */}
			<Typography variant='h2'>{`Staggers`}</Typography>
			<Typography variant='body2'>
				{`stagger 기능을 사용하면 각 개체의 애니메이션의 시작 사이에 약간의 지연시간을 넣어 보다 쉽게 제어할 수 있습니다.`}
			</Typography>
			<Typography variant='h3'>{'Staggers를 이용하는 일반적인 방법 예시:'}</Typography>
			<Box
				ref={staggerRef}
				sx={{
					display: 'flex',
					alignSelf: 'center',
					gap: '1rem',
				}}
				onClick={handleClickStaggerItem}>
				<AnimatedBox className='box green' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box green' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box orange' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box grey' size={'sm'}></AnimatedBox>
				<AnimatedBox className='box pink' size={'sm'}></AnimatedBox>
			</Box>
			<Typography variant='h3' sx={{ alignSelf: 'center' }}>
				Click a box to transition out
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'의사코드'} />
			<Divider flexItem />

			{/* Timeline */}
			<Typography variant='h2'>{`Timeline`}</Typography>
			<Typography variant='body2'>
				{`타임라인은 트윈을 위한 컨테이너입니다.\n원하는 위치에 애니메이션을 원하는 시간에 배치한 다음 pause(), play(), progress(), reverse(), timeScale() 등의 메서드를 사용하여 전체 시퀀스를 쉽게 제어할 수 있는 최고의 시퀀싱 툴입니다.\n원하는 만큼 타임라인을 만들 수 있습니다.\n애니메이션 코드를 모듈화할 수 있도록 중첩할 수도 있습니다!\n모든 애니메이션(트윈 및 타임라인)은 상위 타임라인(기본적으로 글로벌 타임라인)에 배치됩니다.\n타임라인의 재생 헤드를 이동하면 하위 타임라인으로 내려가므로 재생 헤드가 정렬된 상태를 유지합니다.\n타임라인은 순전히 사물을 그룹화하고 시간/재생 헤드를 조정하는 용도로만 사용되며, 실제로 대상에 속성을 설정하지는 않습니다(트윗이 이를 처리합니다).`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} />
			<Typography variant='h3'>{'Timeline을 만드는 일반적인 방법 예시:'}</Typography>
			<Box ref={timelineRef}>
				<AnimatedBox
					className='tween'
					sx={{ mb: '2rem', backgroundColor: 'purple' }}></AnimatedBox>
				<Box sx={{ display: 'flex', gap: '1rem' }}>
					<Button variant='contained' onClick={() => tl.current.play()}>
						play()
					</Button>
					<Button variant='contained' onClick={() => tl.current.pause()}>
						pause()
					</Button>
					<Button variant='contained' onClick={() => tl.current.resume()}>
						resume()
					</Button>
					<Button variant='contained' onClick={() => tl.current.reverse()}>
						reverse()
					</Button>
					<Button variant='contained' onClick={() => tl.current.restart()}>
						restart()
					</Button>
				</Box>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[3]} title={'의사코드'} />
		</PageLayout>
	);
};

export default Example;
