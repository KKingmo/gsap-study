import { Box, Divider, Typography, styled } from '@mui/material';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`const comp = useRef(); // create a ref for the root level element (for scoping)
	const circle = useRef();
	
	useLayoutEffect(() => {
		
		// create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
		let ctx = gsap.context(() => {
			
			// Our animations can use selector text like ".box" 
			// this will only select '.box' elements that are children of the component
			gsap.to(".box", {...});
			// or we can use refs
			gsap.to(circle.current, { rotation: 360 });
			
		}, comp); // <- IMPORTANT! Scopes selector text
		
		return () => ctx.revert(); // cleanup
		
	}, []); // <- empty dependency Array so it doesn't re-run on every render
		
	// ...`,
];

const GsapContext = () => {
	const comp = useRef<HTMLDivElement | null>(null);
	const circle = useRef<HTMLDivElement | null>(null);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('.box', { rotation: 360 });
			gsap.to(circle.current, { rotation: 360 });
		}, comp);

		return () => ctx.revert(); // cleanup
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>gsap.context()</Typography>
			<Typography variant='body2'>
				{
					'gsap.context()는 scoped selectors와 이보다 더 중요한 animation cleanup 이라는 유용한 두 가지 기능들을 제공합니다.'
				}
			</Typography>
			<InfoPaper accentColor='error'>{'GSAP context는 React context와 다릅니다.'}</InfoPaper>

			<Divider flexItem />
			<Typography variant='h2'>Scoped Selectors</Typography>
			<Typography variant='body2'>
				{`컨텍스트에 참조를 전달하여 범위를 지정할 수 있습니다. 해당 컨텍스트 내의 GSAP 관련 코드에서 사용되는 모든 텍스트 선택자(예: ".my-class")는 그에 따라 범위가 지정되므로 Ref의 하위 요소만 선택하게 됩니다.\n 때문에 모든 요소에 대해 Ref를 생성할 필요가 없습니다!\n\n아래는 그 구조에 대한 예시입니다.`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Typography variant='body2'>
				{
					'이 예시에서 먼저 상자 및 원 요소를 DOM에 렌더링한 다음 GSAP이 이를 360도 회전합니다.\n이 컴포넌트가 마운트 해제되면 ctx.revert()를 사용해 애니메이션이 정리됩니다.'
				}
			</Typography>
			<Comp ref={comp}>
				<div className='box'>selector</div>
				<div className='circle' ref={circle}>
					Ref
				</div>
			</Comp>
		</PageLayout>
	);
};

export default GsapContext;

const Comp = styled('div')(() => ({
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	justifyContent: 'space-around',
	paddingTop: '2rem',
	backgroundColor: '#fff',
	'& > .box': {
		width: '100px',
		height: '100px',
		borderRadius: '12px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: '#28a92b',
		color: '#fff',
	},
	'& > .circle': {
		width: '100px',
		height: '100px',
		borderRadius: '99%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		backgroundColor: '#8d3dae',
		color: '#fff',
	},
}));
