import { Box, Button, Divider, Typography } from '@mui/material';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`interface GsapComponentProps {
  children: ReactNode;
  addAnimation: (animation: gsap.core.Tween, index: number) => void;
  index: number;
}

interface CircleProps extends GsapComponentProps {
  rotation: string | number;
}

const RenderBox = ({ children, addAnimation, index }: GsapComponentProps) => {
  const el = useRef<HTMLDivElement>(null);
  // add 'left 100px' animation to timeline
  useEffect(() => {
    console.log('Box effect');
    const ctx = gsap.context(() => {
      const animation = gsap.to(el.current, { x: -100 });
      addAnimation(animation, index);
    });

    return () => ctx.revert();
  }, [addAnimation, index]);

  return (
    <Box
      ref={el}
      sx={{
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1rem',
        backgroundColor: '#28a92b',
      }}>
      {children}
    </Box>
  );
};

const RenderCircle = ({ children, addAnimation, index, rotation }: CircleProps) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Circle effect');
    const ctx = gsap.context(() => {
      const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
      addAnimation(animation, index);
    });

    return () => ctx.revert();
  }, [addAnimation, index, rotation]);

  return (
    <Box
      ref={el}
      sx={{
        width: '100px',
        height: '100px',
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        fontSize: '1rem',
        backgroundColor: '#28a92b',
      }}>
      {children}
    </Box>
  );
};

const PassingDownCallback = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState<gsap.core.Timeline | null>();

  useEffect(() => {
    console.log('App effect');
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  const addAnimation = useCallback(
    (animation: gsap.core.Tween, index: number) => {
      tl && tl.add(animation, index * 0.1);
    },
    [tl],
  );

  useEffect(() => {
    console.log('Reverse effect');
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <PageLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: '2rem 0',
          width: '100%',
          backgroundColor: '#262626',
        }}>
        <Button variant='contained' onClick={() => setReversed(!reversed)}>
          Toggle
        </Button>
        <RenderBox addAnimation={addAnimation} index={0}>
          Box
        </RenderBox>
        <RenderCircle addAnimation={addAnimation} rotation={360} index={1}>
          Circle
        </RenderCircle>
      </Box>
    </PageLayout>
  );
};

export default PassingDownCallback;`,
];

interface GsapComponentProps {
	children: ReactNode;
	addAnimation: (animation: gsap.core.Tween, index: number) => void;
	index: number;
}

interface CircleProps extends GsapComponentProps {
	rotation: string | number;
}

const RenderBox = ({ children, addAnimation, index }: GsapComponentProps) => {
	const el = useRef<HTMLDivElement>(null);
	// add 'left 100px' animation to timeline
	useEffect(() => {
		console.log('Box effect');
		const ctx = gsap.context(() => {
			const animation = gsap.to(el.current, { x: -100 });
			addAnimation(animation, index);
		});

		return () => ctx.revert();
	}, [addAnimation, index]);

	return (
		<Box
			ref={el}
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '8px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: '#fff',
				fontSize: '1rem',
				backgroundColor: '#28a92b',
			}}>
			{children}
		</Box>
	);
};

const RenderCircle = ({ children, addAnimation, index, rotation }: CircleProps) => {
	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log('Circle effect');
		const ctx = gsap.context(() => {
			const animation = gsap.to(el.current, { rotate: rotation, x: 100 });
			addAnimation(animation, index);
		});

		return () => ctx.revert();
	}, [addAnimation, index, rotation]);

	return (
		<Box
			ref={el}
			sx={{
				width: '100px',
				height: '100px',
				borderRadius: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				color: '#fff',
				fontSize: '1rem',
				backgroundColor: '#28a92b',
			}}>
			{children}
		</Box>
	);
};

const PassingDownCallback = () => {
	const [reversed, setReversed] = useState(false);
	const [tl, setTl] = useState<gsap.core.Timeline | null>();

	useEffect(() => {
		console.log('App effect');
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			setTl(tl);
		});
		return () => ctx.revert();
	}, []);

	const addAnimation = useCallback(
		(animation: gsap.core.Tween, index: number) => {
			tl && tl.add(animation, index * 0.1);
		},
		[tl],
	);

	useEffect(() => {
		console.log('Reverse effect');
		tl && tl.reversed(reversed);
	}, [reversed, tl]);

	return (
		<PageLayout>
			<Typography variant='h1'>Passing down a callback to build a timeline</Typography>
			<Typography variant='body2'>
				{
					'이전 파트의 Passing down a timeline prop에 변화를 주었습니다.\n이전 파트에서는 `timeline`객체를 직접 자식 컴포넌트에 전달하여 자식 컴포넌트에서 직접 `timeline`에 자신의 애니메이션을 추가하였습니다.\n이 방식은 컴포넌트가 `timeline`을 직접 수정하므로, 전체 애니메이션 시퀀스에 대한 통제가 더 어려워 질 수 있습니다.\n때문에 이를 `addAnimation`함수를 컴포넌트에 전달하는 방식으로 바꿀 수 있습니다.'
				}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '2rem',
					padding: '2rem 0',
					width: '100%',
					backgroundColor: '#262626',
				}}>
				<Button variant='contained' onClick={() => setReversed(!reversed)}>
					Toggle
				</Button>
				<RenderBox addAnimation={addAnimation} index={0}>
					Box
				</RenderBox>
				<RenderCircle addAnimation={addAnimation} rotation={360} index={1}>
					Circle
				</RenderCircle>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default PassingDownCallback;
