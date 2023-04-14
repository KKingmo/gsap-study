import { Box, Button, Divider, Typography } from '@mui/material';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`function Box({ children, timeline, index }) {
  const el = useRef();
  // add 'left 100px' animation to timeline
  useLayoutEffect(() => {    
    timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline]);
  
  return <div className="box" ref={el}>{children}</div>;
}

function Circle({ children, timeline, index, rotation }) {
  const el = useRef();
  
  useLayoutEffect(() => {   
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline && timeline.to(el.current, {  rotate: rotation, x: 100 }, index * 0.1);
  }, [timeline, rotation]);
  
  return <div className="circle" ref={el}>{children}</div>;
}

function App() {    
  const [tl, setTl] = useState();
      
  return (
    <div className="app">   
      <button onClick={() => setReversed(!reversed)}>Toggle</button>
      <Box timeline={tl} index={0}>Box</Box>
      <Circle timeline={tl} rotation={360} index={1}>Circle</Circle>
    </div>
  );
}`,
	`interface GsapComponentProps {
    children: ReactNode;
    timeline?: gsap.core.Timeline | null;
    index: number;
  }
  
interface CircleProps extends GsapComponentProps {
  rotation: string | number;
}

const RenderBox = ({ children, timeline, index }: GsapComponentProps) => {
  const el = useRef<HTMLDivElement>(null);
  // add 'left 100px' animation to timeline
  useEffect(() => {
    timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
  }, [timeline, index]);

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

const RenderCircle = ({ children, timeline, index, rotation }: CircleProps) => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline && timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1);
  }, [timeline, rotation, index]);

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

const PassingDownTimelineProp = () => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState<gsap.core.Timeline | null>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <PageLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '2rem',
        }}>
        <Button variant='contained' onClick={() => setReversed(!reversed)}>
          Toggle
        </Button>
        <RenderBox timeline={tl} index={0}>
          Box
        </RenderBox>
        <RenderCircle timeline={tl} rotation={360} index={1}>
          Circle
        </RenderCircle>
      </Box>
      <CodeBlock language='tsx' codeString={CODESTRING[1]} />
    </PageLayout>
  );
};

export default PassingDownTimelineProp;
`,
];

interface GsapComponentProps {
	children: ReactNode;
	timeline?: gsap.core.Timeline | null;
	index: number;
}

interface CircleProps extends GsapComponentProps {
	rotation: string | number;
}

const RenderBox = ({ children, timeline, index }: GsapComponentProps) => {
	const el = useRef<HTMLDivElement>(null);
	// add 'left 100px' animation to timeline
	useEffect(() => {
		timeline && timeline.to(el.current, { x: -100 }, index * 0.1);
	}, [timeline, index]);

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

const RenderCircle = ({ children, timeline, index, rotation }: CircleProps) => {
	const el = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// add 'right 100px, rotate 360deg' animation to timeline
		timeline && timeline.to(el.current, { rotate: rotation, x: 100 }, index * 0.1);
	}, [timeline, rotation, index]);

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

const PassingDownTimelineProp = () => {
	const [reversed, setReversed] = useState(false);
	const [tl, setTl] = useState<gsap.core.Timeline | null>();

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			setTl(tl);
		});
		return () => ctx.revert();
	}, []);

	useEffect(() => {
		tl && tl.reversed(reversed);
	}, [reversed, tl]);

	return (
		<PageLayout>
			<Typography variant='h1'>Passing down a timeline prop</Typography>
			<Typography variant='body2'>
				{
					'타임라인에 useRef 대신 useState를 사용하고 있다는 점에 유의하세요.\n이는 자식이 처음 렌더링할 때 타임라인을 사용할 수 있도록 하기 위함입니다.'
				}
			</Typography>

			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'참고 코드'} />
			<Divider flexItem />

			<Typography variant='h1'>Passing down a timeline prop 구현하기</Typography>
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
				<RenderBox timeline={tl} index={0}>
					Box
				</RenderBox>
				<RenderCircle timeline={tl} rotation={360} index={1}>
					Circle
				</RenderCircle>
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 코드'} />
		</PageLayout>
	);
};

export default PassingDownTimelineProp;
