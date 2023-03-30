import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`const tweenRef = useRef<HTMLDivElement>(null);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());
const theme = useTheme();

useEffect(() => {
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to('.text', { color: theme.palette.primary.main, x: 15 });
    tl.current.to(
      '.dash',
      { opacity: 1, x: -5, backgroundColor: theme.palette.secondary.main },
      0,
    );
  }, tweenRef);

  return () => ctx.revert();
}, [theme]);

return (
  <Box
  ref={tweenRef}
  sx={{
    display: 'flex',
    alignSelf: 'center',
    width: '100%',
    gap: '1rem',
    paddingTop: '2rem',
    '& .dash': {
      width: '15px',
      height: '4px',
      marginRight: '10px',
      opacity: 1,
    },
    '& ul': {
      fontSize: '30px',
      color: 'gray',
    },
    '& li': {
      display: 'flex',
      alignItems: 'center',
    },
  }}>
  <ul>
    <li
      className='item'
      onMouseEnter={() => tl.current.play()}
      onMouseLeave={() => tl.current.reverse()}>
      <div className='dash'></div>
      <div className='text'>Home</div>
    </li>
  </ul>
</Box>
)`,
];

const SingleMenuEffect = () => {
	const tweenRef = useRef<HTMLDivElement>(null);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	const theme = useTheme();

	useEffect(() => {
		const ctx = gsap.context(() => {
			tl.current = gsap.timeline({ paused: true });
			tl.current.to('.text', { color: theme.palette.primary.main, x: 15 });
			tl.current.to(
				'.dash',
				{ opacity: 1, x: -5, backgroundColor: theme.palette.secondary.main },
				0,
			);
		}, tweenRef);

		return () => ctx.revert();
	}, [theme]);
	return (
		<PageLayout>
			<Typography variant='h1'>단일 메뉴 효과</Typography>
			<Typography variant='body2'>
				{
					'애니메이션 버튼이나 GSAP의 다른 요소에 인터렉션을 추가하는 것은 CSS의 애니메이션 방식과는 약간 다릅니다.\n대부분의 웹 개발자들은 간단한 버튼효과를 위해 CSS를 사용했을 것 입니다.\nCSS는 기본 클래스에 :hover 선택자를 이용해 기존값에서 변경되고자 하는 값으로 코드를 작성하게 됩니다.\n거기에 자연스러운 효과를 주기 위해 transition을 추가로 작성해야 부드러운 애니메이션 효과를 기대할 수 있습니다.'
				}
			</Typography>
			<InfoPaper>{'모바일 디바이스에서는 :hover가 작동하지 않습니다.'}</InfoPaper>
			<Typography variant='body2'>
				{
					'GSAP을 사용하여 paused된 애니메이션 객체(Tween or Timeline)를 생성합니다.\nJavascript의 Mouse Event를 사용해 (mouseenter, mouseleave) 애니메이션 객체에 `play()` 또는 `reverse()`를 적용합니다.'
				}
			</Typography>
			<Typography variant='body2'>
				{
					'단일 대상의 색상이나 크기를 변경하는것과 같이 간단한 애니메이션을 적용하려면 CSS만 있어도 충분히 원하는 결과를 얻을 수 있습니다.\n그러나 정확한 타이밍이 필요한 여러 객체들을 컨트롤 하거나 재생,되돌아가기,속도,가속도 설정과 같은 작업을 수행하기 위해선 GSAP의 애니메이션 코드가 훨씬 더 많은 유연성을 제공합니다.\n\n아래 단일 메뉴에 마우스를 올렸다가 빼보세요!'
				}
			</Typography>
			<Box
				ref={tweenRef}
				sx={{
					display: 'flex',
					alignSelf: 'center',
					width: '100%',
					gap: '1rem',
					paddingTop: '2rem',
					'& .dash': {
						width: '15px',
						height: '4px',
						marginRight: '10px',
						opacity: 1,
					},
					'& ul': {
						fontSize: '30px',
						color: 'gray',
					},
					'& li': {
						display: 'flex',
						alignItems: 'center',
					},
				}}>
				<ul>
					<li
						className='item'
						onMouseEnter={() => tl.current.play()}
						onMouseLeave={() => tl.current.reverse()}>
						<div className='dash'></div>
						<div className='text'>Home</div>
					</li>
				</ul>
			</Box>
			<Typography variant='h2'>stagger 객체 타입</Typography>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[0]}
				title={'단일 메뉴 예제 의사코드'}
			/>
			<Divider flexItem />
		</PageLayout>
	);
};

export default SingleMenuEffect;
