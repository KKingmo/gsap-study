import { Divider, Typography, styled } from '@mui/material';
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
	`const { useLayoutEffect, useRef } = React;

const Nested = () => {
	return (
		<div className='nested'>
			<div className='box'>Nested Box</div>
			<div className='circle'>Nested Circle</div>
		</div>
	);
};

function App() {
	const app = useRef();
	const circle = useRef();

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('.box', {
				rotation: '+=360',
				duration: 3,
				repeat: -1,
				ease: 'none',
			});

			gsap.to(circle.current, {
				rotation: '+=360',
				duration: 3,
				repeat: -1,
				ease: 'none',
			});
		}, app);

		return () => ctx.revert();
	});

	return (
		<div ref={app} className='App'>
			<div className='box'>Box</div>
			<div className='circle' ref={circle}>
				Circle
			</div>
			<Nested />
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
	`,
];

const GsapContext = () => {
	/** Scoped Selectors 예제 */
	const comp = useRef<HTMLDivElement | null>(null);
	const circleA = useRef<HTMLDivElement | null>(null);

	/** Refs or scoped selectors? 예제 */
	const app = useRef<HTMLDivElement | null>(null);
	const circleB = useRef<HTMLDivElement | null>(null);

	/** Scoped Selectors 예제 */
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('.box', { rotation: 360 });
			gsap.to(circleA.current, { rotation: 360 });
		}, comp);

		return () => ctx.revert(); // cleanup
	}, []);

	/** Refs or scoped selectors? 예제 */
	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.to('.box', { rotation: '+=360', duration: 3, repeat: -1, ease: 'none' });
			gsap.to(circleB.current, { rotation: '+=360', duration: 3, repeat: -1, ease: 'none' });
		}, app);

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
			<Comp ref={comp}>
				<div className='box'>selector</div>
				<div className='circle' ref={circleA}>
					Ref
				</div>
			</Comp>
			<Typography variant='body2'>
				{`컨텍스트에 참조를 전달하여 범위를 지정할 수 있습니다. 해당 컨텍스트 내의 GSAP 관련 코드에서 사용되는 모든 텍스트 선택자(예: ".my-class")는 그에 따라 범위가 지정되므로 Ref의 하위 요소만 선택하게 됩니다.\n 때문에 모든 요소에 대해 Ref를 생성할 필요가 없습니다!\n\n아래는 그 구조에 대한 예시입니다.`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Typography variant='body2'>
				{
					'이 예시에서 먼저 상자 및 원 요소를 DOM에 렌더링한 다음 GSAP이 이를 360도 회전합니다.\n이 컴포넌트가 마운트 해제되면 ctx.revert()를 사용해 애니메이션이 정리됩니다.'
				}
			</Typography>
			<Divider flexItem />

			<Typography variant='h2'>Refs or scoped selectors?</Typography>
			<Comp ref={app}>
				<div className='box'>박스</div>
				<div className='circle' ref={circleB}>
					원
				</div>
				<div className='nested'>
					<div className='box'>중첩된 박스</div>
					<div className='circle'>중첩된 원</div>
				</div>
			</Comp>
			<Typography variant='body2'>{`GSAP 관련 코드에서 ".my-class"와 같은 텍스트 선택자를 사용하여 요소를 지정하는 것은 각각의 애니메이션 대상 요소에 ref를 생성하는 것보다 훨씬 간편합니다.\n그래서 일반적으로 gsap.context() 내에서 스코프가 지정된 선택자를 사용하는 것을 권장합니다.\n\n그러나 중요한 예외 사항이 있습니다.\n바로 컴포넌트를 중첩하고 있고, 선택자가 자식 컴포넌트의 요소를 잡아내는 것을 방지하고 싶을 때입니다.\n\n이 예제에서는 메인 앱에서 두 가지 요소가 애니메이션되고 있습니다.\n하나는 스코프가 지정된 클래스 선택자로 지정된 박스이고, 다른 하나는 Ref로 지정된 원입니다.\n또한, 앱 안에는 또 다른 컴포넌트가 중첩되어 있습니다.\n이 중첩된 요소는 '.box'라는 클래스명을 가진 자식 요소도 가지고 있습니다.\n이 중첩된 박스 요소는 앱의 effect 애니메이션에 의해 대상으로 잡히는 것을 볼 수 있습니다.\n반면에, Ref로 지정된 중첩된 원은 애니메이션을 상속받지 않고 있습니다.`}</Typography>
			<Typography variant='body2'>{`즉 Ref로 지정된 스코프에 해당하는 '.box'클래스만 대상으로 잡습니다.\n중첩된 요소까지 뒤져가면서 '.box'클래스를 찾아 대상으로 잡지는 않는다는 점!`}</Typography>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[1]}
				title={'DOCS에서 제공한 예시코드'}
			/>
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
	'& .box': {
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
	'& .circle': {
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
