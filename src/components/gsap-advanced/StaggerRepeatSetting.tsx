import { Divider, Grid, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const NUMBERS = Array.from({ length: 12 * 8 }, (_, i) => i + 1);

const StaggerRepeatSetting = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.box', {
        duration: 1,
        scale: 0.2,
        repeat: -1,
        yoyo: true,
        ease: 'power1,inOut',
        stagger: {
          each: 0.1,
          from: 'center',
          grid: 'auto',
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <PageLayout>
      <Grid container spacing={1}>
        {NUMBERS.map((el, index) => (
          <Grid key={index} item xs={1}>
            <AnimatedBox className='box' size={'sm'} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default StaggerRepeatSetting;
  `,
];

const NUMBERS = Array.from({ length: 12 * 8 }, (_, i) => i + 1);

const StaggerRepeatSetting = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box', {
				duration: 1,
				scale: 0.2,
				repeat: -1,
				yoyo: true,
				ease: 'power1,inOut',
				stagger: {
					each: 0.1,
					from: 'center',
					grid: 'auto',
				},
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>Stagger의 반복 설정</Typography>
			<Typography variant='body2'>
				{
					"stagger객체의 grid를 'auto'로 두면 자동으로 행과 열을 계산한다.\n아래 애니메이션의 경우 grid를 auto로 두면 자동으로 grid:[8, 12]를 계산해낸다."
				}
			</Typography>
			<Grid container spacing={1}>
				{NUMBERS.map((el, index) => (
					<Grid key={index} item xs={1}>
						<AnimatedBox className='box' size={'sm'} />
					</Grid>
				))}
			</Grid>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />

			<Divider flexItem />
		</PageLayout>
	);
};

export default StaggerRepeatSetting;
