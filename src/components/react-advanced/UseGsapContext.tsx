import { Box, Divider, Typography } from '@mui/material';
import { RefObject, useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`function useGsapContext(scope) {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  return ctx;
}`,
	`const useGsapContext = (scope: RefObject<HTMLElement>): gsap.Context => {
  const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
  return ctx;
};

const UseGsapContext = () => {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useGsapContext(ref);

  useEffect(() => {
    ctx.add(() => {
      gsap.to('.box', {
        x: 200,
        stagger: 0.1,
      });
    });
    return () => ctx.revert();
  }, [ctx]);

  return (
    <PageLayout>
      <Box ref={ref} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <AnimatedBox className='box' size={'md'}>
          Box 1
        </AnimatedBox>
        <AnimatedBox className='box' size={'md'}>
          Box 2
        </AnimatedBox>
        <AnimatedBox className='box' size={'md'}>
          Box 3
        </AnimatedBox>
      </Box>
    </PageLayout>
  );
};

export default UseGsapContext;
`,
];

const useGsapContext = (scope: RefObject<HTMLElement>): gsap.Context => {
	const ctx = useMemo(() => gsap.context(() => {}, scope), [scope]);
	return ctx;
};

const UseGsapContext = () => {
	const ref = useRef<HTMLDivElement>(null);
	const ctx = useGsapContext(ref);

	useEffect(() => {
		ctx.add(() => {
			gsap.to('.box', {
				x: 200,
				stagger: 0.1,
			});
		});
		return () => ctx.revert();
	}, [ctx]);

	return (
		<PageLayout>
			<Typography variant='h1'>useGsapContext</Typography>

			<Typography variant='body2'>{'GSAP 컨텍스트 인스턴스를 메모합니다.'}</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />

			<Box ref={ref} sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<AnimatedBox className='box' size={'md'}>
					Box 1
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					Box 2
				</AnimatedBox>
				<AnimatedBox className='box' size={'md'}>
					Box 3
				</AnimatedBox>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default UseGsapContext;
