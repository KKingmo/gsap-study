import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const RuntimeRendering = () => {
	const main1 = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 2,
				},
			});

			tl.from('.orange', { opacity: 0, y: 50 })
				.from('.pink', { opacity: 0, y: -50 })
				.from('.blue', { opacity: 0, scale: 1.2 })
				.from('.orange', { opacity: 0 });
		}, main1); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Box
				ref={main1}
				sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '2rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
			</Box>
		</PageLayout>
	);
};

export default RuntimeRendering;`,
	`const RuntimeRendering = () => {
  const main2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 2,
        },
      });

      tl.from('.orange', { opacity: 0, y: 50 })
        .from('.pink', { opacity: 0, y: -50 })
        .from('.blue', { opacity: 0, scale: 1.2 })
        .from('.orange', { opacity: 0, immediateRender: false });
    }, main2); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <PageLayout>
      <Box
        ref={main2}
        sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '2rem' }}>
        <AnimatedBox className='orange' size={'md'} />
        <AnimatedBox className='pink' size={'md'} />
        <AnimatedBox className='blue' size={'md'} />
      </Box>
    </PageLayout>
  );
};

export default RuntimeRendering;`,
];

const RuntimeRendering = () => {
	const main1 = useRef(null);
	const main2 = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 2,
				},
			});

			tl.from('.orange', { opacity: 0, y: 50 })
				.from('.pink', { opacity: 0, y: -50 })
				.from('.blue', { opacity: 0, scale: 1.2 })
				.from('.orange', { opacity: 0 });
		}, main1); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				defaults: {
					duration: 2,
				},
			});

			tl.from('.orange', { opacity: 0, y: 50 })
				.from('.pink', { opacity: 0, y: -50 })
				.from('.blue', { opacity: 0, scale: 1.2 })
				.from('.orange', { opacity: 0, immediateRender: false });
		}, main2); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>런타임 랜더링</Typography>
			<Typography variant='body2'>
				{
					"트윈 애니메이션이 다음과 같이 설정되어 있다면 tl.from('.orange', { opacity: 0, y: 50 })\n애니메이션이 시작하면서 opacity는 1에서 0으로 향하게 됩니다.\n\n이 후에 아래 코드와 같은 트윈을 적용하면 opacity는 1에서 0으로 향하지 않습니다.\ntl.from('.orange', { opacity: 0, y: 50 })\n이는 이전 from 트윈은 애니메이션이 시작되기 전에 메모리에 opacity 1을 저장하였기에 opacity 0으로 향하는 애니메이션을 관측할 수 있었는데\n이전 애니메이션이 끝나면서 메모리에 저장된 opacity 1이 0으로 바뀌게 되면서 opacity가 0에서 0으로 향하게 되어 보이지 않게 되는 현상입니다."
				}
			</Typography>
			<Box
				ref={main1}
				sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '2rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='body2'>
				{
					'때문에 이때는 immediateRender:false 속성을 사용하면 의도한대로 from을 보여줄 수 있습니다.\n이는 scrollTriger를 사용할 때 유용하게 쓰입니다.'
				}
			</Typography>
			<Box
				ref={main2}
				sx={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '2rem' }}>
				<AnimatedBox className='orange' size={'md'} />
				<AnimatedBox className='pink' size={'md'} />
				<AnimatedBox className='blue' size={'md'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default RuntimeRendering;
