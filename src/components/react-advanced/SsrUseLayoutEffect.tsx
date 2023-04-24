import { Box, Divider, Typography } from '@mui/material';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const useIsomorphicLayoutEffect = typeof window !== "undefined" 
  ? useLayoutEffect 
  : useEffect;
`,
	`const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const SsrUseLayoutEffect = () => {
	const app = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.box', { opacity: 0 });
		}, app);
		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Box ref={app}>
				<AnimatedBox className='box' size={'md'}>
					Box 1
				</AnimatedBox>
			</Box>
		</PageLayout>
	);
};

export default SsrUseLayoutEffect;
`,
];

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const SsrUseLayoutEffect = () => {
	const app = useRef<HTMLDivElement>(null);

	useIsomorphicLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from('.box', { opacity: 0 });
		}, app);
		return () => ctx.revert();
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>useIsomorphicLayoutEffect</Typography>

			<Typography variant='body2'>
				{
					'useLayoutEffect와 함께 서버 사이드 렌더링(SSR)을 사용하는 경우 경고가 표시될 수 있습니다.\n서버 렌더링 중에 조건부로 useEffect를 사용하면 이 문제를 해결할 수 있습니다.\n이 훅은 코드가 브라우저에서 실행 중일 때 useLayoutEffect를 반환하고 서버에서는 useEffect를 반환합니다.\n\n주의: 서버 측에서 렌더링된 HTML/CSS 콘텐츠와 일치하지 않는 "from" 상태는 자바스크립트가 구문 분석, 실행 및 hydrated되는 동안 스타일이 지정되지 않은 콘텐츠가 계속 표시될 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Box ref={app}>
				<AnimatedBox className='box' size={'md'}>
					Box 1
				</AnimatedBox>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 코드'} />

			<Divider flexItem />
		</PageLayout>
	);
};

export default SsrUseLayoutEffect;
