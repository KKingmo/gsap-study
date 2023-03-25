import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const onEnter = () => {
  gsap.from('.first', { scale: 0 });
  gsap.fromTo('.second', { scale: 0 }, { scale: 1 });
};

return (
  <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
    <AnimatedBox
      className='blue'
      size='lg'
      onMouseEnter={onEnter}
      sx={{ position: 'relative', border: '2px solid #000', borderRadius: '100%' }}>
      <Box
        className='first'
        sx={{
          flex: 1,
          height: '100%',
          backgroundColor: 'skyblue',
          borderRadius: '100%',
        }}></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
        }}>
        from()
      </Box>
    </AnimatedBox>
    <AnimatedBox
      className='blue'
      size='lg'
      onMouseEnter={onEnter}
      sx={{ position: 'relative', border: '2px solid #000', borderRadius: '100%' }}>
      <Box
        className='second'
        sx={{
          flex: 1,
          height: '100%',
          backgroundColor: 'skyblue',
          borderRadius: '100%',
        }}></Box>
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
        }}>
        fromTo()
      </Box>
    </AnimatedBox>
  </Box>
);
`,
];

const BugInFromTween = () => {
	const onEnter = () => {
		gsap.from('.first', { scale: 0 });
		gsap.fromTo('.second', { scale: 0 }, { scale: 1 });
	};

	return (
		<PageLayout>
			<Typography variant='h1'>from() 트윈의 문제점</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
				<AnimatedBox
					className='blue'
					size='lg'
					onMouseEnter={onEnter}
					sx={{ position: 'relative', border: '2px solid #000', borderRadius: '100%' }}>
					<Box
						className='first'
						sx={{
							flex: 1,
							height: '100%',
							backgroundColor: 'skyblue',
							borderRadius: '100%',
						}}></Box>
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#fff',
						}}>
						from()
					</Box>
				</AnimatedBox>
				<AnimatedBox
					className='blue'
					size='lg'
					onMouseEnter={onEnter}
					sx={{ position: 'relative', border: '2px solid #000', borderRadius: '100%' }}>
					<Box
						className='second'
						sx={{
							flex: 1,
							height: '100%',
							backgroundColor: 'skyblue',
							borderRadius: '100%',
						}}></Box>
					<Box
						sx={{
							position: 'absolute',
							left: '50%',
							top: '50%',
							transform: 'translate(-50%, -50%)',
							color: '#fff',
						}}>
						fromTo()
					</Box>
				</AnimatedBox>
			</Box>
			<Typography variant='body2'>
				{
					'from() 트윈에는 몇가지 의도치 않은 문제점이 발생할 수 있습니다.\n위의 circle 안에 마우스를 올리면 scale이 0에서 기본 스타일로 변경됩니다.\n\n여기서 위의 circle 안에 마우스를 빨리 올렸다가 빼는 것을 반복하다보면 문제점을 발견할 수 있습니다.\n\n마우스를 빨리 올렸다가 빼면 scale:0에서 원래의 크기로 돌아오기 전에 애니메이션이 끝나 원래 크기보다 작아집니다.\n\n이 경우 fromTo()를 이용해 애니메이션이 끝날때의 상태를 명시해주는 것으로 일정한 애니메이션을 보여줄 수 있습니다.'
				}
			</Typography>

			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default BugInFromTween;
