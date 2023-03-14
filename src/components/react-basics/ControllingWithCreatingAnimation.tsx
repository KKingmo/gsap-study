import { Box, Button, Typography, styled } from '@mui/material';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`// only runs after first render
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(".box-1", { rotation: "+=360" });
  }, el);
}, []);

// runs after first render and every time 'someProp' changes
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(".box-2", { rotation: "+=360" });
  }, el);
}, [someProp]);

// runs after every render
useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(".box-3", { rotation: "+=360" });
  }, el);
});`,
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

const ControllingWithCreatingAnimation = () => {
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
			<Typography variant='h1'>Controlling when React creates our animation</Typography>
			<Typography variant='body2'>
				{`useLayoutEffect()에 의존성 배열을 전달하지 않으면 첫 번째 렌더링 후와 모든 업데이트 후에 호출됩니다.\n따라서 컴포넌트의 상태가 변경될 때마다 이펙트를 다시 실행하는 재 렌더링이 발생합니다.\n이는 일반적으로 낭비이며 충돌을 일으킬 수 있습니다.`}
			</Typography>
			<Typography variant='body2'>
				{`아래 예시는 렌더링 시기를 컨트롤하는 예시입니다.`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
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

export default ControllingWithCreatingAnimation;

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
