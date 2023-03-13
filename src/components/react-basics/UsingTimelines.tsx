import { Box, Button, Typography, styled } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`function App() {
  const el = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".box", {
          rotate: 360
        })
        .to(".circle", {
          x: 100
        });
    }, el);
  }, []);

  return (
    <div className="app" ref={el}>
      <Box>Box</Box>
      <Circle>Circle</Circle>
    </div>
  );
}`,
	`console.clear();
const { useEffect, useLayoutEffect, useRef, useState } = React;

function App() {
  const app = useRef();
  
  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useState(0);

  // only runs on first render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-1", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, []);

  // runs on first render and every time delayedCount changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-2", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  }, [delayedCount]);

  // runs on every render
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box-3", { rotation: "+=360" });
    }, app);
    return () => ctx.revert();
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedCount(count);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setCount(count + 1)}>Click to trigger a render</button>
      </div>
      <p>Count: {count}</p>
      <p>Delayed Count: {delayedCount}</p>
      <p>Renders: {1 + delayedCount + count}</p>
      <div className="flex-row">
        <div className="box box-1 purple">First render</div>
        <div className="box box-2 blue">First render & delayed count change</div>
        <div className="box box-3 red">Every render</div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
];

const UsingTimelines = () => {
	const app = useRef<HTMLDivElement>(null);
	const [count, setCount] = useState<number>(0);
	const [delayedCount, setDelayedCount] = useState<number>(0);
	// only runs on first render
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box-1', { rotation: '+=360' });
		}, app);
		return () => ctx.revert();
	}, []);

	// runs on first render and every time delayedCount changes
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box-2', { rotation: '+=360' });
		}, app);
		return () => ctx.revert();
	}, [delayedCount]);

	// runs on every render
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box-3', { rotation: '+=360' });
		}, app);
		return () => ctx.revert();
	});

	useEffect(() => {
		const timer = setTimeout(() => {
			setDelayedCount(count);
		}, 1000);

		return () => clearTimeout(timer);
	}, [count]);

	return (
		<PageLayout>
			<Typography variant='h1'>Creating and controlling timelines</Typography>
			<Typography variant='body2'>
				{`지금까지는 DOM 요소에 대한 참조를 저장하는 데만 ref를 사용했지만, ref는 요소에만 사용되는 것이 아닙니다. \nref는 렌더 루프 외부에 존재하므로 컴포넌트의 수명 동안 유지하려는 모든 값을 저장하는 데 사용할 수 있습니다. \n\n렌더링할 때마다 타임라인을 새로 만들지 않으려면 effect 내부에 타임라인을 생성하고 이를 ref에 저장하는 것이 중요합니다.`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Typography variant='body2'>
				{`이렇게 하면 다른 useEffect()에서 타임라인에 액세스하고 타임라인 방향을 toggle할 수도 있습니다.`}
			</Typography>
			<Box
				ref={app}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}>
				<div>
					<Button variant='contained' onClick={() => setCount(count + 1)}>
						Click to trigger a render
					</Button>
				</div>
				<p>Count: {count}</p>
				<p>Delayed Count: {delayedCount}</p>
				<p>Renders: {1 + delayedCount + count}</p>
				<Box sx={{ display: 'flex', gap: '2rem' }}>
					<StyledBox className='box-1' sx={{ backgroundColor: 'purple' }}>
						첫 렌더링
					</StyledBox>
					<StyledBox className='box-2' sx={{ backgroundColor: 'blue' }}>
						첫 렌더링 & delayed count 바뀔때
					</StyledBox>
					<StyledBox className='box-3' sx={{ backgroundColor: 'red' }}>
						모든 렌더링
					</StyledBox>
				</Box>
			</Box>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[1]}
				title={'DOCS에서 제공한 예시코드'}
			/>
		</PageLayout>
	);
};

export default UsingTimelines;

const StyledBox = styled('div')(({ theme }) => ({
	width: '200px',
	height: '200px',
	borderRadius: '12px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	color: '#fff',
	fontSize: '0.8rem',
}));
