import { Box, Button, Divider, Typography } from '@mui/material';
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`function useStateRef(defaultValue) {
  const [state, setState] = useState(defaultValue);
  const ref = useRef(state);

  const dispatch = useCallback((value) => {
    ref.current = typeof value === "function" ? value(ref.current) : value;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
}
`,
	`const useStateRef = <T extends unknown>(
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
  const [state, setState] = useState<T>(defaultValue);
  const ref = useRef<T>(defaultValue);

  const dispatch = useCallback((value: SetStateAction<T>) => {
    ref.current = typeof value === 'function' ? (value as Function)(ref.current) : value;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
};

const UseStateRef = () => {
  const app = useRef<HTMLDivElement>(null);
  const [count, setCount, countRef] = useStateRef<number>(5);
  const [gsapCount, setGsapCount] = useState<number>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.box', {
        x: 200,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'none',
        onRepeat: () => setGsapCount(countRef.current),
      });
    }, app);
    return () => ctx.revert();
  }, [countRef]);

  return (
    <PageLayout>
      <Box
        ref={app}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <div>
          <Button variant='contained' onClick={() => setCount(count + 1)}>
            Click Me
          </Button>
        </div>
        <p>Count: {count}</p>
        <p>GSAP Count: {gsapCount}</p>
        <AnimatedBox className='box' size={'md'}>
          Box
        </AnimatedBox>
      </Box>
    </PageLayout>
  );
};

export default UseStateRef;`,
];

const useStateRef = <T extends unknown>(
	defaultValue: T,
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
	const [state, setState] = useState<T>(defaultValue);
	const ref = useRef<T>(defaultValue);

	const dispatch = useCallback((value: SetStateAction<T>) => {
		ref.current = typeof value === 'function' ? (value as Function)(ref.current) : value;
		setState(ref.current);
	}, []);

	return [state, dispatch, ref];
};

const UseStateRef = () => {
	const app = useRef<HTMLDivElement>(null);
	const [count, setCount, countRef] = useStateRef<number>(5);
	const [gsapCount, setGsapCount] = useState<number>(0);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box', {
				x: 200,
				duration: 1,
				repeat: -1,
				yoyo: true,
				ease: 'none',
				onRepeat: () => setGsapCount(countRef.current),
			});
		}, app);
		return () => ctx.revert();
	}, [countRef]);

	return (
		<PageLayout>
			<Typography variant='h1'>useStateRef</Typography>

			<Typography variant='body2'>
				{
					'useStateRef는 useState와 비슷하게 작동하지만 세 번째 반환값으로 현재 상태를 참조하는 ref를 제공합니다.\n이 ref는 항상 최신 상태를 가리키므로 콜백에서 오래된 상태 값을 사용하는 문제를 해결할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Box
				ref={app}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1rem',
					alignItems: 'center',
					alignSelf: 'center',
				}}>
				<div>
					<Button variant='contained' onClick={() => setCount(count + 1)}>
						Click Me
					</Button>
				</div>
				<p>Count: {count}</p>
				<p>GSAP Count: {gsapCount}</p>
				<AnimatedBox className='box' size={'md'}>
					Box
				</AnimatedBox>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default UseStateRef;
