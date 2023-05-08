import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`const NUMBERS = Array.from({ length: 30 }, (_, i) => i + 1);

  const value = gsap.utils.distribute({
    base: 0,
    amount: 400,
    ease: 'power3',
    from: 'center',
  });
  
  const GsapUtilsDistribute = () => {
    useEffect(() => {
      const ctx = gsap.context(() => {
        gsap.to('.bar', {
          height: value,
          duration: 2,
          stagger: {
            each: 0.1,
            from: 'center',
          },
        });
      });
  
      return () => {
        ctx.revert();
      };
    }, []);
  
    return (
      <PageLayout>
        <Box
          className='stage'
          sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: '4px' }}>
          {NUMBERS.map((num, i) => (
            <Box className='bar' key={i} sx={{ width: '10px', backgroundColor: 'gray' }} />
          ))}
        </Box>
      </PageLayout>
    );
  };
  
  export default GsapUtilsDistribute;
  `,
];

const NUMBERS = Array.from({ length: 30 }, (_, i) => i + 1);

const value = gsap.utils.distribute({
	base: 0,
	amount: 400,
	ease: 'power3',
	from: 'center',
});

const GsapUtilsDistribute = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.bar', {
				height: value,
				duration: 2,
				stagger: {
					each: 0.1,
					from: 'center',
				},
			});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>gsap.utils.distribute()</Typography>
			<Typography variant='body2'>
				{
					'distribute() 유틸 메서드는 배열 또는 그리드의 항목 전체에 값을 배포할때 사용됩니다.'
				}
			</Typography>

			<Box
				className='stage'
				sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row', gap: '4px' }}>
				{NUMBERS.map((num, i) => (
					<Box className='bar' key={i} sx={{ width: '10px', backgroundColor: 'gray' }} />
				))}
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default GsapUtilsDistribute;
