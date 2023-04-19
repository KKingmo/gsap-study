import { Box, Divider, Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`function GsapEffect({ children, targetRef, effect, vars }) {  
  
  useLayoutEffect(() => {
    if (gsap.effects[effect]) {
      ctx.add(() => {
        animation.current = gsap.effects[effect](targetRef.current, vars);
      });
    }
  }, [effect]);
    
  return <>{children}</>;
}

function App() {      
  const box = useRef();
  
  return (
    <GsapEffect targetRef={box} effect="spin">
      <Box ref={box}>Hello</Box>
    </GsapEffect>
  );
}`,
	`gsap.registerPlugin(CustomEase, CustomWiggle);
gsap.config({ trialWarn: false });
CustomWiggle.create('myWiggle', {
	wiggles: 8,
	type: 'uniform',
});

gsap.registerEffect({
	name: 'pulse',
	effect(targets: HTMLElement[] | SVGElement[]) {
		return gsap.fromTo(
			targets,
			{
				scale: 1,
			},
			{
				scale: 1.5,
				repeat: 1,
				ease: 'bounce',
				yoyoEase: 'power3',
			},
		);
	},
});

gsap.registerEffect({
	name: 'spin',
	effect(targets: HTMLElement[] | SVGElement[]) {
		return gsap.to(targets, {
			rotation: (i, el) => {
				const rotation = gsap.getProperty(el, 'rotation');
				const rotationValue =
					typeof rotation === 'string' ? parseFloat(rotation) : rotation;
				return gsap.utils.snap(360, rotationValue + 360);
			},
		});
	},
});

gsap.registerEffect({
	name: 'shake',
	effect(targets: HTMLElement[] | SVGElement[]) {
		return gsap.fromTo(
			targets,
			{
				x: 0,
			},
			{
				x: 10,
				ease: 'myWiggle',
			},
		);
	},
});

interface GsapEffectProps {
	children: ReactNode;
	effect: string;
	targetRef: React.RefObject<HTMLElement>;
	vars?: any;
}

interface StyledBoxProps {
	children: ReactNode;
}

const GsapEffect = forwardRef<gsap.core.Animation, GsapEffectProps>(
	({ children, effect, targetRef, vars }, ref) => {
		const animation = useRef<gsap.core.Tween | null>();
		const ctx = gsap.context(() => {});

		useEffect(() => {
			if (gsap.effects[effect]) {
				ctx.add(() => {
					animation.current = gsap.effects[effect](targetRef.current, vars);
				});
			}

			return () => ctx.revert();
		}, [ctx, effect, targetRef, vars]);

		useEffect(() => {
			// forward the animation instance if a ref is passed
			if (!animation.current) return;
			if (typeof ref === 'function') {
				ref(animation.current);
			} else if (ref) {
				(ref as MutableRefObject<gsap.core.Tween | null>).current = animation.current;
			}
		}, [ref]);

		return <>{children}</>;
	},
);
GsapEffect.displayName = 'GsapEffect';

const StyledBox = forwardRef<HTMLDivElement, StyledBoxProps>(({ children }, ref) => {
	return (
		<div className='box' ref={ref}>
			{children}
		</div>
	);
});
StyledBox.displayName = 'StyledBox';

const wrap = gsap.utils.wrap(['pulse', 'spin', 'shake']);

const RegisterEffect = () => {
	const boxRef = useRef<HTMLDivElement>(null);
	const count = useRef<number>(0);
	const [effect, setEffect] = useState<string>('');

	const toggle = () => {
		setEffect(wrap(count.current++));
	};

	return (
		<PageLayout>
			<Box>
				<div>
					<div>
						<button onClick={toggle}>Toggle</button>
					</div>
					<p>Effect: {effect}</p>
					<GsapEffect targetRef={boxRef} effect={effect}>
						<StyledBox ref={boxRef}>Box</StyledBox>
					</GsapEffect>
				</div>
			</Box>
		</PageLayout>
	);
};

export default RegisterEffect;`,
];

const RegisterEffect = () => {
	return (
		<PageLayout>
			<Typography variant='h1'>RegisterEffect()</Typography>
			<Typography variant='body2'>
				{
					'GSAP는 registerEffect()를 사용하여 재사용 가능한 애니메이션을 생성하는 방법을 제공합니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />

			<Typography variant='body2'>
				{
					'이 파트에 관한 예제는 GSAP 유료 플러그인을 사용하고 있기에 코드 블록으로만 남기겠습니다.\n추가로 이 코드에서는 StyledBox 컴포넌트 UI를 디자인해야만 애니메이션을 확인할 수 있습니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title='구현 코드' />
			<Divider flexItem />
		</PageLayout>
	);
};

export default RegisterEffect;
