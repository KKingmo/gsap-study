import { Box, Button, Divider, Typography } from '@mui/material';
import { MutableRefObject, ReactNode, forwardRef, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`function fadeIn(target, vars) {
  return gsap.from(target, { opacity: 0, ...vars });
}

function App() {    
  const box = useRef();
    
  useLayoutEffect(() => {
    const animation = fadeIn(box.current, { x: 100 });
  }, []);
  
  return <div className="box" ref={box}>Hello</div>;
}`,
	`function FadeIn({ children, vars }) {
  const el = useRef();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(el.current.children, { 
        opacity: 0,
        ...vars
      });
    });
    return () => ctx.revert();       
  }, []);
  
  return <span ref={el}>{children}</span>;
}
  
function App() {      
  return (
    <FadeIn vars={{ x: 100 }}>
      <div className="box">Box</div>
    </FadeIn>
  );
}`,
	`interface FadeInProps {
	children: ReactNode;
	stagger?: number;
	x?: number;
}

const FadeIn = forwardRef<gsap.core.Tween | null, FadeInProps>(
	({ children, stagger = 0, x = 0 }, ref) => {
		const el = useRef<HTMLSpanElement | null>(null);
		const animation = useRef<gsap.core.Tween | null>(null);

		useEffect(() => {
			const ctx = gsap.context(() => {
				if (el.current) {
					animation.current = gsap.from(el.current.children, {
						opacity: 0,
						stagger,
						x,
					});
				}
			});
			return () => ctx.revert();
		}, [stagger, x]);

		useEffect(() => {
			// forward the animation instance
			if (typeof ref === 'function') {
				ref(animation.current);
			} else if (ref) {
				(ref as MutableRefObject<gsap.core.Tween | null>).current = animation.current;
			}
		}, [ref]);

		return (
			<span ref={el} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				{children}
			</span>
		);
	},
);

FadeIn.displayName = 'FadeIn';

const CreatingReusableAnimations = () => {
	const animation = useRef<gsap.core.Tween | null>(null);

	const toggle = () => {
		if (animation.current) {
			animation.current.reversed(!animation.current.reversed());
		}
	};

	return (
		<PageLayout>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<Button variant='contained' onClick={toggle}>
					Toggle
				</Button>
				<FadeIn stagger={0.1} x={100} ref={animation}>
					<AnimatedBox className='box' size={'md'}>
						Box 1
					</AnimatedBox>
					<AnimatedBox className='box' size={'md'}>
						Box 2
					</AnimatedBox>
				</FadeIn>
			</Box>
		</PageLayout>
	);
};

export default CreatingReusableAnimations;`,
];

interface FadeInProps {
	children: ReactNode;
	stagger?: number;
	x?: number;
}

const FadeIn = forwardRef<gsap.core.Tween | null, FadeInProps>(
	({ children, stagger = 0, x = 0 }, ref) => {
		const el = useRef<HTMLSpanElement | null>(null);
		const animation = useRef<gsap.core.Tween | null>(null);

		useEffect(() => {
			const ctx = gsap.context(() => {
				if (el.current) {
					animation.current = gsap.from(el.current.children, {
						opacity: 0,
						stagger,
						x,
					});
				}
			});
			return () => ctx.revert();
		}, [stagger, x]);

		useEffect(() => {
			// forward the animation instance
			if (typeof ref === 'function') {
				ref(animation.current);
			} else if (ref) {
				(ref as MutableRefObject<gsap.core.Tween | null>).current = animation.current;
			}
		}, [ref]);

		return (
			<span ref={el} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				{children}
			</span>
		);
	},
);

FadeIn.displayName = 'FadeIn';

const CreatingReusableAnimations = () => {
	const animation = useRef<gsap.core.Tween | null>(null);

	const toggle = () => {
		if (animation.current) {
			animation.current.reversed(!animation.current.reversed());
		}
	};

	return (
		<PageLayout>
			<Typography variant='h1'>Creating reusable animations</Typography>
			<Typography variant='body2'>
				{
					'재사용 가능한 애니메이션을 만드는 것은 앱의 파일 크기를 줄이면서 코드를 깔끔하게 유지할 수 있는 좋은 방법입니다.\n가장 간단한 방법은 함수를 호출하여 애니메이션을 만드는 것입니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />

			<InfoPaper>
				{
					'보다 선언적인 접근 방식을 원한다면 애니메이션을 처리하는 컴포넌트를 만들 수 있습니다.'
				}
			</InfoPaper>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<Button variant='contained' onClick={toggle}>
					Toggle
				</Button>
				<FadeIn stagger={0.1} x={100} ref={animation}>
					<AnimatedBox className='box' size={'md'}>
						Box 1
					</AnimatedBox>
					<AnimatedBox className='box' size={'md'}>
						Box 2
					</AnimatedBox>
				</FadeIn>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} title='구현 코드' />
			<Divider flexItem />
		</PageLayout>
	);
};

export default CreatingReusableAnimations;
