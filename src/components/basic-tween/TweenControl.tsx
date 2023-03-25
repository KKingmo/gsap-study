import { Box, Button, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<any>(null);

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current = gsap.to('.tween', {
      x: 600,
      paused: true,
    });
  }, tweenRef);
  return () => ctx.revert();
}, []);

return (
  <Box ref={tweenRef}>
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

const TweenControl = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tl = useRef<any>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.to('.tween', {
				x: 600,
				paused: true,
				duration: 4,
			});
		}, tweenRef);
		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>트윈 컨트롤</Typography>
			<Box ref={tweenRef}>
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
			<Typography variant='body2'>
				{
					'처음 자동으로 재생되지 않도록 하려면 paused 속성을 true로 설정하여 자동재생을 막을 수 있습니다.\n\n아래는 Tween 컨트롤 예시 입니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default TweenControl;
