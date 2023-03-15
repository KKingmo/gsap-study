import { Box, Button, Typography } from '@mui/material';
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`const { useEffect, useLayoutEffect, useRef, useState } = React;
console.clear();

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function Circle({ children }) {
  return <div className="circle">{children}</div>;
}

function App() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();
      
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
    console.log("creating timeline");
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(".box", {
        rotation: 360
      })
      .to(".circle", {
        x: 100
      });
    }, app);
    return () => ctx.revert();
  }, []);
  
  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed);
    tl.current.reversed(reversed);    
  }, [reversed]);
    
  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <Box>box</Box>
      <Circle>circle</Circle>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
];

interface BoxProps {
	children: ReactNode;
}

const StyledBox = ({ children }: BoxProps) => {
	return (
		<Box
			className='box'
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '12px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				backgroundColor: '#28a92b',
				color: '#fff',
			}}>
			{children}
		</Box>
	);
};

const Circle = ({ children }: BoxProps) => {
	return (
		<Box
			className='circle'
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '99%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				backgroundColor: '#8d3dae',
				color: '#fff',
			}}>
			{children}
		</Box>
	);
};

const ReusingComponents = () => {
	const [reversed, setReversed] = useState<boolean>(false);
	const app = useRef<HTMLDivElement>(null);
	// store the timeline in a ref.
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	console.clear();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// add a box and circle animation to our timeline and play on first render
			console.log('creating timeline');
			tl.current && tl.current.progress(0).kill();
			tl.current = gsap
				.timeline()
				.to('.box', {
					rotation: 360,
				})
				.to('.circle', {
					x: 100,
				});
		}, app);
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		// toggle the direction of our timeline
		console.log('toggling reverse to', reversed);
		tl.current.reversed(reversed);
	}, [reversed]);

	return (
		<PageLayout>
			<Typography variant='h1'>Reusing components</Typography>
			<Box
				className='app'
				ref={app}
				sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<div>
					<Button variant='contained' onClick={() => setReversed(!reversed)}>
						Toggle
					</Button>
				</div>
				<StyledBox>box</StyledBox>
				<Circle>circle</Circle>
			</Box>
			<Typography variant='body2'>
				{`컴포넌트 기반 시스템 내에서는 타겟팅하는 요소를 보다 세밀하게 제어해야 할 수 있습니다. \n자식에게 props을 전달하여 클래스 이름이나 데이터 속성을 조정하고 특정 요소를 타겟팅할 수 있습니다.`}
			</Typography>
			<InfoPaper>
				{`React는 클래스를 스타일링에만 사용하고 데이터 어트리뷰트를 애니메이션과 같은 JS 기능을 위한 엘리먼트를 타겟팅하는 데에만 사용하도록 권장합니다.\n이 글에서는 더 일반적으로 이해되는 클래스를 사용하겠습니다.`}
			</InfoPaper>

			<CodeBlock
				language='tsx'
				codeString={CODESTRING[0]}
				title={'DOCS에서 제공한 예시코드'}
			/>
		</PageLayout>
	);
};

export default ReusingComponents;
