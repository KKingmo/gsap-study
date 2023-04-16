import { Divider, Typography } from '@mui/material';
import {
	ReactNode,
	createContext,
	useEffect,
	useRef,
	useState,
	useContext,
	ChangeEvent,
} from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`interface SelectedContextType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface GsapComponentProps {
  children: ReactNode;
  id?: number | string;
}

const SelectedContext = createContext<SelectedContextType | undefined>(undefined);

const StyledBox = ({ children, id }: GsapComponentProps) => {
  const el = useRef<HTMLDivElement>(null);
  const context = useContext<SelectedContextType | undefined>(SelectedContext);

  if (!context) {
    throw new Error('StyledBox 컴포넌트는 SelectedContext.Provider 내에서 사용해야 합니다.');
  }

  const { selected } = context;
  const ctx = gsap.context(() => {});

  useEffect(() => {
    return () => ctx.revert();
  }, [ctx]);

  useEffect(() => {
    ctx.add(() => {
      gsap.to(el.current, {
        x: selected === id ? 200 : 0,
      });
    });
  }, [selected, id, ctx]);

  return (
    <div
      className='box'
      ref={el}
      style={{
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
    </div>
  );
};

const Boxes = () => {
  return (
    <div className='boxes' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <StyledBox id='1'>Box 1</StyledBox>
      <StyledBox id='2'>Box 2</StyledBox>
      <StyledBox id='3'>Box 3</StyledBox>
    </div>
  );
};

const Menu = () => {
  const context = useContext<SelectedContextType | undefined>(SelectedContext);

  if (!context) {
    throw new Error('Menu 컴포넌트는 SelectedContext.Provider 내에서 사용해야 합니다.');
  }
  const { selected, setSelected } = context;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setSelected(target.value);
  };

  return (
    <div className='menu' style={{ display: 'flex', gap: '2rem' }}>
      <label>
        <input
          onChange={onChange}
          checked={selected === '1'}
          type='radio'
          value='1'
          name='selcted'
        />
        Box 1
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === '2'}
          type='radio'
          value='2'
          name='selcted'
        />
        Box 2
      </label>
      <label>
        <input
          onChange={onChange}
          checked={selected === '3'}
          type='radio'
          value='3'
          name='selcted'
        />
        Box 3
      </label>
    </div>
  );
};

const ReactContext = () => {
  const [selected, setSelected] = useState('2');

  return (
    <PageLayout>
      <SelectedContext.Provider value={{ selected, setSelected }}>
        <Menu />
        <Boxes />
      </SelectedContext.Provider>
    </PageLayout>
  );
};

export default ReactContext;`,
];

interface SelectedContextType {
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

interface GsapComponentProps {
	children: ReactNode;
	id?: number | string;
}

const SelectedContext = createContext<SelectedContextType | undefined>(undefined);

const StyledBox = ({ children, id }: GsapComponentProps) => {
	const el = useRef<HTMLDivElement>(null);
	const context = useContext<SelectedContextType | undefined>(SelectedContext);

	if (!context) {
		throw new Error('StyledBox 컴포넌트는 SelectedContext.Provider 내에서 사용해야 합니다.');
	}

	const { selected } = context;
	const ctx = gsap.context(() => {});

	useEffect(() => {
		return () => ctx.revert();
	}, [ctx]);

	useEffect(() => {
		ctx.add(() => {
			gsap.to(el.current, {
				x: selected === id ? 200 : 0,
			});
		});
	}, [selected, id, ctx]);

	return (
		<div
			className='box'
			ref={el}
			style={{
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
		</div>
	);
};

const Boxes = () => {
	return (
		<div className='boxes' style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
			<StyledBox id='1'>Box 1</StyledBox>
			<StyledBox id='2'>Box 2</StyledBox>
			<StyledBox id='3'>Box 3</StyledBox>
		</div>
	);
};

const Menu = () => {
	const context = useContext<SelectedContextType | undefined>(SelectedContext);

	if (!context) {
		throw new Error('Menu 컴포넌트는 SelectedContext.Provider 내에서 사용해야 합니다.');
	}
	const { selected, setSelected } = context;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		setSelected(target.value);
	};

	return (
		<div className='menu' style={{ display: 'flex', gap: '2rem' }}>
			<label>
				<input
					onChange={onChange}
					checked={selected === '1'}
					type='radio'
					value='1'
					name='selcted'
				/>
				Box 1
			</label>
			<label>
				<input
					onChange={onChange}
					checked={selected === '2'}
					type='radio'
					value='2'
					name='selcted'
				/>
				Box 2
			</label>
			<label>
				<input
					onChange={onChange}
					checked={selected === '3'}
					type='radio'
					value='3'
					name='selcted'
				/>
				Box 3
			</label>
		</div>
	);
};

const ReactContext = () => {
	const [selected, setSelected] = useState('2');

	return (
		<PageLayout>
			<Typography variant='h1'>React Context</Typography>
			<Typography variant='body2'>
				{
					'props나 콜백을 전달하는 것이 모든 상황에 적합하지 않을 수 있습니다.\n\n통신하려는 컴포넌트가 다른 컴포넌트 안에 깊숙이 중첩되어 있거나 완전히 다른 트리에 있을 수 있습니다.\n이런 상황에서는 React의 컨텍스트를 사용할 수 있습니다.\n\n컨텍스트 프로바이더가 제공하는 값이 무엇이든, useContext 훅을 사용하는 모든 자식 컴포넌트에서 사용할 수 있습니다.'
				}
			</Typography>
			<SelectedContext.Provider value={{ selected, setSelected }}>
				<Menu />
				<Boxes />
			</SelectedContext.Provider>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 코드'} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default ReactContext;
