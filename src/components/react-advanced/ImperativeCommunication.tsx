import { Box, Divider, Typography } from '@mui/material';
import { PointerEvent, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const Circle = forwardRef((props, ref) => {
  const el = useRef();
    
  useImperativeHandle(ref, () => {           
    
    // return our API
    return {
      moveTo(x, y) {
        gsap.to(el.current, { x, y });
      }
    };
  }, []);

  return <div className="circle" ref={el}></div>;
});`,
	`function App() {    
  const circleRef = useRef();
       
  useLayoutEffect(() => {    
    // doesn't trigger a render!
    circleRef.current.moveTo(300, 100);
  }, []);
    
  return (
    <div className="app">   
      <Circle ref={circleRef} />
    </div>
  );
}`,
	`interface CircleProps {
	size: string;
	delay: number;
}

interface CircleHandlers {
	moveTo: (x: number, y: number) => void;
}

const Circle = forwardRef<CircleHandlers, CircleProps>(({ size, delay }, ref) => {
	const el = useRef<HTMLDivElement>(null);

	useImperativeHandle(
		ref,
		() => {
			// return our API
			return {
				moveTo(x, y) {
					gsap.to(el.current, { x, y, delay });
				},
			};
		},
		[delay],
	);

	return (
		<Box
			className={\`circle \${size}\`}
			ref={el}
			sx={{
				position: 'relative',
				zIndex: 100,
				backgroundColor: '#28a92b',
				borderRadius: '100%',
				'&.circle': {
					position: 'fixed',
					transform: 'translate(-50%, -50%)',
					top: 0,
					left: 0,
					opacity: 0.3,
				},
				'&.circle.sm': {
					width: '30px',
					height: '30px',
				},
				'&.circle.md': {
					width: '60px',
					height: '60px',
				},
				'&.circle.lg': {
					width: '90px',
					height: '90px',
				},
			}}
		/>
	);
});

Circle.displayName = 'Circle';

const ImperativeCommunication = () => {
	const circleRefs = useRef<(CircleHandlers | null)[]>([]);

	useEffect(() => {
		const { innerWidth, innerHeight } = window;
		circleRefs.current.forEach((ref) => ref?.moveTo(innerWidth / 2, innerHeight / 2));

		const onMove: EventListener = (event) => {
			const { clientX, clientY } = event as unknown as PointerEvent;
			circleRefs.current.forEach((ref) => ref?.moveTo(clientX, clientY));
		};

		window.addEventListener('pointermove', onMove);

		return () => window.removeEventListener('pointermove', onMove);
	}, []);

	const addCircleRef = (ref: CircleHandlers | null) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};
	return (
		<PageLayout>
			<Box>
				<Circle size='sm' ref={addCircleRef} delay={0} />
				<Circle size='md' ref={addCircleRef} delay={0.1} />
				<Circle size='lg' ref={addCircleRef} delay={0.2} />
			</Box>
		</PageLayout>
	);
};

export default ImperativeCommunication;
`,
];

interface CircleProps {
	size: string;
	delay: number;
}

interface CircleHandlers {
	moveTo: (x: number, y: number) => void;
}

const Circle = forwardRef<CircleHandlers, CircleProps>(({ size, delay }, ref) => {
	const el = useRef<HTMLDivElement>(null);

	useImperativeHandle(
		ref,
		() => {
			// return our API
			return {
				moveTo(x, y) {
					gsap.to(el.current, { x, y, delay });
				},
			};
		},
		[delay],
	);

	return (
		<Box
			className={`circle ${size}`}
			ref={el}
			sx={{
				position: 'relative',
				zIndex: 100,
				backgroundColor: '#28a92b',
				borderRadius: '100%',
				'&.circle': {
					position: 'fixed',
					transform: 'translate(-50%, -50%)',
					top: 0,
					left: 0,
					opacity: 0.3,
				},
				'&.circle.sm': {
					width: '30px',
					height: '30px',
				},
				'&.circle.md': {
					width: '60px',
					height: '60px',
				},
				'&.circle.lg': {
					width: '90px',
					height: '90px',
				},
			}}
		/>
	);
});

Circle.displayName = 'Circle';

const ImperativeCommunication = () => {
	const circleRefs = useRef<(CircleHandlers | null)[]>([]);

	useEffect(() => {
		const { innerWidth, innerHeight } = window;
		circleRefs.current.forEach((ref) => ref?.moveTo(innerWidth / 2, innerHeight / 2));

		const onMove: EventListener = (event) => {
			const { clientX, clientY } = event as unknown as PointerEvent;
			circleRefs.current.forEach((ref) => ref?.moveTo(clientX, clientY));
		};

		window.addEventListener('pointermove', onMove);

		return () => window.removeEventListener('pointermove', onMove);
	}, []);

	const addCircleRef = (ref: CircleHandlers | null) => {
		if (ref) {
			circleRefs.current.push(ref);
		}
	};
	return (
		<PageLayout>
			<Typography variant='h1'>Imperative Communication</Typography>
			<Typography variant='body2'>
				{
					'props를 전달하거나 컨텍스트를 사용하는 것은 대부분의 상황에서 잘 작동하지만,\n이러한 메커니즘을 사용하면 재렌더링이 발생하여 마우스 위치에 기반한 값과 같이 지속적으로 값을 변경하는 경우 성능이 저하될 수 있습니다.\n\nReact의 렌더링 단계를 우회하기 위해, useImperativeHandle 훅을 사용하고 컴포넌트에 대한 API를 생성할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Typography variant='body2'>
				{'Imperative Hook이 반환하는 값은 무엇이든 참조로 전달됩니다.'}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />

			<Box>
				<Typography
					variant='h2'
					sx={{ padding: '1rem 2rem', backgroundColor: '#28a92b', color: '#fff' }}>
					마우스를 신나게 움직여보세요~
				</Typography>
				<Circle size='sm' ref={addCircleRef} delay={0} />
				<Circle size='md' ref={addCircleRef} delay={0.1} />
				<Circle size='lg' ref={addCircleRef} delay={0.2} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} title={'구현 코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default ImperativeCommunication;
