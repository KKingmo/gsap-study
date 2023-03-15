import { Box, Button, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`function Box({ children, endX }) {
  const boxRef = useRef();

  // run when 'endX' changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        x: endX
      });
    });
    return () => ctx.revert();
  }, [endX]);

  return (
    <div className="box" ref={boxRef}>
      {children}
    </div>
  );
}`,
	`const { useEffect, useRef, useState } = React;

const randomX = gsap.utils.random(-200, 200, 1, true);

function Box({ children, endX }) {    
  const boxRef = useRef();
  const ctx = useRef();

  useEffect(() => {
    ctx.current = gsap.context(() => {}); // nothing initially (we'll add() to the context when endX changes)
    return () => ctx.current.revert();
  }, [ctx]);

  // run when 'endX' changes
  useEffect(() => {
    ctx.current.add(() => {
      gsap.to(boxRef.current, {
          x: endX
        });
    });
  }, [endX]);
  
  return <div className="box" ref={boxRef}>{children}</div>;
}

function App() {  
  const [endX, setEndX] = useState(0);
    
  return (
    <div className="app">
      <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>
      <Box endX={endX}>{endX}</Box>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
];
const randomX = gsap.utils.random(-200, 200, 1, true);

const StyledBox = ({ children, endX }: { children: ReactNode; endX: number }) => {
	const boxRef = useRef<HTMLDivElement>(null);
	const ctx = useRef<any>();

	useEffect(() => {
		ctx.current = gsap.context(() => {}); // nothing initially (we'll add() to the context when endX changes)
		return () => ctx.current.revert();
	}, [ctx]);

	// run when `endX` changes
	useEffect(() => {
		ctx.current.add(() => {
			gsap.to(boxRef.current, {
				x: endX,
			});
		});
	}, [endX]);
	return (
		<Box
			className='box'
			ref={boxRef}
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '12px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: '#fff',
				fontSize: '0.8rem',
				backgroundColor: 'green',
			}}>
			{children}
		</Box>
	);
};

const ReactingToChangesInState = () => {
	const [endX, setEndX] = useState<number>(0);

	return (
		<PageLayout>
			<Typography variant='h1'>Reacting to changes in state</Typography>
			<Typography variant='body2'>
				{`이제 effect 발동 시점을 제어하는 방법을 알았으니 이 패턴을 사용하여 컴포넌트의 변화에 대응할 수 있습니다.\n이 패턴은 props를 전달할 때 특히 유용합니다.`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Box
				className='app'
				sx={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignSelf: 'center' }}>
				<Button variant='contained' onClick={() => setEndX(randomX())}>
					무작위 값 전달하기
				</Button>
				<StyledBox endX={endX}>{endX}</StyledBox>
			</Box>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[1]}
				title={'DOCS에서 제공한 예시코드'}
			/>
		</PageLayout>
	);
};

export default ReactingToChangesInState;
