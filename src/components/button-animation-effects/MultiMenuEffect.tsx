import { Box, Divider, Typography, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const tweenRefs = useRef<HTMLLIElement[]>([]);
const tl = useRef<gsap.core.Timeline>(gsap.timeline());
const theme = useTheme();

useEffect(() => {
  if (!theme.palette) return;
  gsap.defaults({ duration: 0.3 });

  const ctx = gsap.context(() => {
    tweenRefs.current.forEach((item) => {
      const tl = gsap
        .timeline({ paused: true })
        .to(item.querySelector('.text'), { color: theme.palette.primary.main, x: 30 })
        .to(
          item.querySelector('.dash'),
          { backgroundColor: theme.palette.secondary.main, x: 30, opacity: 1 },
          '<',
        );

      const handleMouseEnter = () => tl.play();
      const handleMouseLeave = () => tl.reverse();

      item.onmouseenter = handleMouseEnter;
      item.onmouseleave = handleMouseLeave;
    });
  }, tweenRefs);

  return () => ctx.revert();
}, [theme.palette]);

return (
  <Box
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
      <li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
        <div className='dash'></div>
        <div className='text'>Home</div>
      </li>
      <li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
        <div className='dash'></div>
        <div className='text'>About</div>
      </li>
      <li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
        <div className='dash'></div>
        <div className='text'>Product</div>
      </li>
      <li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
        <div className='dash'></div>
        <div className='text'>Contect</div>
      </li>
    </ul>
  </Box>
)`,
];

const MultiMenuEffect = () => {
	const tweenRefs = useRef<HTMLLIElement[]>([]);
	const tl = useRef<gsap.core.Timeline>(gsap.timeline());
	const theme = useTheme();

	useEffect(() => {
		if (!theme.palette) return;
		gsap.defaults({ duration: 0.3 });

		const ctx = gsap.context(() => {
			tweenRefs.current.forEach((item) => {
				const tl = gsap
					.timeline({ paused: true })
					.to(item.querySelector('.text'), { color: theme.palette.primary.main, x: 30 })
					.to(
						item.querySelector('.dash'),
						{ backgroundColor: theme.palette.secondary.main, x: 30, opacity: 1 },
						'<',
					);

				const handleMouseEnter = () => tl.play();
				const handleMouseLeave = () => tl.reverse();

				item.onmouseenter = handleMouseEnter;
				item.onmouseleave = handleMouseLeave;
			});
		}, tweenRefs);

		return () => ctx.revert();
	}, [theme.palette]);

	return (
		<PageLayout>
			<Typography variant='h1'>다중 메뉴 효과</Typography>
			<Typography variant='body2'>
				{
					'각 메뉴 항목에 대한 타임라인을 작성하는 `forEach()` 루프를 만듭니다.\ntweenRefs를 순회하며 각 요소들에 타임라인을 생성하고 바인딩합니다.\n그리고 각 요소들의 타임라인과 상호작용하는 `play(), reverse()`를 요소의 마우스 이벤트에 등록합니다. '
				}
			</Typography>

			<Box
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
					<li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
						<div className='dash'></div>
						<div className='text'>Home</div>
					</li>
					<li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
						<div className='dash'></div>
						<div className='text'>About</div>
					</li>
					<li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
						<div className='dash'></div>
						<div className='text'>Product</div>
					</li>
					<li className='item' ref={(el) => el && tweenRefs.current.push(el)}>
						<div className='dash'></div>
						<div className='text'>Contect</div>
					</li>
				</ul>
			</Box>
			<CodeBlock
				language='tsx'
				codeString={CODESTRING[0]}
				title={'단일 메뉴 예제 의사코드'}
			/>
			<Divider flexItem />
		</PageLayout>
	);
};

export default MultiMenuEffect;
