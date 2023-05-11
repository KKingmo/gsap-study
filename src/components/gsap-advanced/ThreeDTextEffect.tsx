import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`const ThreeDTextEffect = () => {
    useEffect(() => {
      const ctx = gsap.context(() => {
        const duration = 0.5;
        const tl = gsap.timeline({ repeat: -1 });
        gsap.set('.utils > div', { transformOrigin: '50% 50% -50' });
        tl.from('.utils > div', { rotationX: -90, opacity: 0, stagger: duration }).to(
          '.utils > div',
          {
            rotationX: 90,
            opacity: 0,
            stagger: duration,
          },
          duration,
        );
      });
  
      return () => {
        ctx.revert();
      };
    }, []);
  
    return (
      <PageLayout>
        <Box sx={{ position: 'relative', width: '100%', height: '350px' }}>
          <Box
            className='stage'
            sx={{
              width: '100%',
              height: '350px',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%,-50%)',
              display: 'flex',
              fontSize: '3rem',
              backgroundColor: '#000',
              color: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box
              className='utils'
              sx={{
                perspective: '400px',
                '& > div': {
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%,-50%)',
                },
              }}>
              <Box>checkPrefix()</Box>
              <Box>clamp()</Box>
              <Box>distribute()</Box>
            </Box>
          </Box>
        </Box>
      </PageLayout>
    );
  };
  
  export default ThreeDTextEffect;
  `,
];

const ThreeDTextEffect = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const duration = 0.5;
			const tl = gsap.timeline({ repeat: -1 });
			gsap.set('.utils > div', { transformOrigin: '50% 50% -50' });
			tl.from('.utils > div', { rotationX: -90, opacity: 0, stagger: duration }).to(
				'.utils > div',
				{
					rotationX: 90,
					opacity: 0,
					stagger: duration,
				},
				duration,
			);
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>3D 텍스트 효과</Typography>
			<Typography variant='body2'>
				{
					'하나의 요소가 stagger를 통해 들어오면 다른 하나는 다시 stagger를 통해 빠져나가는 애니메이션을 구현합니다.\ntransformOrigin은 transform이 작동할 기준점을 정하는 역할을 합니다.\n여기서는 x:50%, y:50%, z:-50을 기준점으로 하고 있습니다.\n여기서는 z축을 -50으로 두었기 때문에 뒤로넘어가는 효과가 나타나게 됩니다.'
				}
			</Typography>
			<Box sx={{ position: 'relative', width: '100%', height: '350px' }}>
				<Box
					className='stage'
					sx={{
						width: '100%',
						height: '350px',
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%,-50%)',
						display: 'flex',
						fontSize: '3rem',
						backgroundColor: '#000',
						color: '#fff',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Box
						className='utils'
						sx={{
							perspective: '400px',
							'& > div': {
								position: 'absolute',
								left: '50%',
								top: '50%',
								transform: 'translate(-50%,-50%)',
							},
						}}>
						<Box>checkPrefix()</Box>
						<Box>clamp()</Box>
						<Box>distribute()</Box>
					</Box>
				</Box>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />

			<Divider flexItem />
		</PageLayout>
	);
};

export default ThreeDTextEffect;
