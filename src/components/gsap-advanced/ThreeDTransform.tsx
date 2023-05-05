import { Box, Divider, Typography } from '@mui/material';
import { FC, useEffect } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';
import AnimatedBox from '../common/AnimatedBox';

const CODESTRING = [
	`const ThreeDTransform = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.box', { rotationY: 360, duration: 8 });
      gsap.to('.box2', { transformPerspective: 600 });
      gsap.to('.box3', {
        transformPerspective: 600,
        rotationY: 360,
        duration: 8,
        ease: 'none',
        transformOrigin: '50% 50% -400',
      });
    });

    return () => {
      ctx.revert(); // <- Cleanup!
    };
  }, []);

  return (
    <PageLayout>
      <Box
        className='stage'
        sx={{
          display: 'flex',
          width: '100%',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          perspective: '600px',
        }}>
        <AnimatedBox className='box' size={'md'} />
        <AnimatedBox className='box' size={'md'} />
        <AnimatedBox className='box' size={'md'} />
        <AnimatedBox className='box' size={'md'} />
        <AnimatedBox className='box' size={'md'} />
        <AnimatedBox className='box' size={'md'} />
      </Box>
    
      <Box
        className='stage'
        sx={{
          display: 'flex',
          width: '100%',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AnimatedBox className='box box2' size={'md'} />
        <AnimatedBox className='box box2' size={'md'} />
        <AnimatedBox className='box box2' size={'md'} />
        <AnimatedBox className='box box2' size={'md'} />
        <AnimatedBox className='box box2' size={'md'} />
        <AnimatedBox className='box box2' size={'md'} />
      </Box>

      <Box
        className='stage'
        sx={{
          display: 'flex',
          width: '100%',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AnimatedBox className='box3' size={'md'} />
      </Box>
    </PageLayout>
  );
};

export default ThreeDTransform;`,
	`interface SplitTextIntoDivsProps {
	text: string;
	className?: string;
}

const SplitTextIntoDivs: FC<SplitTextIntoDivsProps> = (props) => {
	const { text, className } = props;

	const letters = text.split('').map((char, index) => {
		return (
			<Box className={className} key={index}>
				{char === ' ' ? '\u00A0' : char}
			</Box>
		);
	});

	return <>{letters}</>;
};

gsap.registerEffect({
	name: 'text3D',
	extendTimeline: true,
	defaults: {
		deg: 360,
	},
	effect: (target: gsap.TweenTarget, config: { deg: number }) => {
		const tl = gsap.timeline();
		tl.to(target, {
			duration: 1.2,
			rotationY: config.deg,
			ease: 'back(3)',
			stagger: { amount: 1 },
			repeat: -1,
		});

		return tl;
	},
});

const ThreeDTransform = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const animation = gsap.timeline();
			animation.text3D('.chars');
		});

		return () => {
			ctx.revert(); // <- Cleanup!
		};
	}, []);

	return (
		<PageLayout>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					justifyContent: 'center',
					fontSize: '2rem',
					fontWeight: 'bold',
				}}>
				<SplitTextIntoDivs className='chars' text={'GSAP Method registerEffect'} />
			</Box>
		</PageLayout>
	);
};

export default ThreeDTransform;`,
];

interface SplitTextIntoDivsProps {
	text: string;
	className?: string;
}

const SplitTextIntoDivs: FC<SplitTextIntoDivsProps> = (props) => {
	const { text, className } = props;

	const letters = text.split('').map((char, index) => {
		return (
			<Box className={className} key={index}>
				{char === ' ' ? '\u00A0' : char}
			</Box>
		);
	});

	return <>{letters}</>;
};

gsap.registerEffect({
	name: 'text3D',
	extendTimeline: true,
	defaults: {
		deg: 360,
	},
	effect: (target: gsap.TweenTarget, config: { deg: number }) => {
		const tl = gsap.timeline();
		tl.to(target, {
			duration: 1.2,
			rotationY: config.deg,
			ease: 'back(3)',
			stagger: { amount: 1 },
			repeat: -1,
		});

		return tl;
	},
});

const ThreeDTransform = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.to('.box', { rotationY: 360, duration: 8, repeat: -1 });
			gsap.to('.box2', { transformPerspective: 600 });
			gsap.to('.box3', {
				transformPerspective: 600,
				rotationY: 360,
				duration: 8,
				ease: 'none',
				transformOrigin: '50% 50% -400',
				repeat: -1,
			});
			const animation = gsap.timeline();
			animation.text3D('.chars');
		});

		return () => {
			ctx.revert(); // <- Cleanup!
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>3D Transform</Typography>
			<Typography variant='body2'>
				{
					'css 애니메이션에서 3d를 시작적으로 보여주려면 perspective 속성이 필요합니다.\nperspective 속성은 누구에게 주느냐에 따라 소실점이 다르게 잡혀 전혀 다른 애니메이션을 생성합니다.'
				}
				<br />
				<br />
				{
					'transformPerspective: 이 속성은 원근법을 적용하기 위해 사용됩니다.\ntransformPerspective 속성은 숫자 값을 사용하며, 그 값은 관찰자와 화면 사이의 거리를 픽셀 단위로 나타냅니다.\n값이 작을수록 원근 효과가 더 강하게 나타나며, 값이 크면 원근 효과가 약해집니다.'
				}
				<br />
				<br />
				{
					'transformOrigin: 이 속성은 변환의 중심점(즉, 회전의 축이나 확대/축소의 기준점 등)을 설정합니다.\ntransformOrigin 속성은 일반적으로 두 개의 퍼센트 또는 픽셀 값을 사용합니다.\n첫 번째 값은 x축 위치를, 두 번째 값은 y축 위치를 나타냅니다.\n이 두 값은 각각 변환 중심점의 수평 및 수직 위치를 설정합니다.'
				}
				<br />
				<br />
				{
					'3D 변환의 경우 transformOrigin은 세 번째 값을 사용하여 z축에 대한 위치를 나타냅니다.\n이 값은 기본적으로 0입니다.\n만약 이 값을 변경하면 변환 중심점이 요소의 평면에서 앞 또는 뒤로 이동합니다.\n예시 코드의 경우, "50% 50% -400"이 설정되어 있어서, 요소의 중심점에서 z축으로 -400px만큼 뒤로 이동한 점이 회전의 중심점이 됩니다.\n이는 회전 효과에 깊이감을 주는 데 도움을 줍니다.'
				}
			</Typography>
			<Typography variant='body2'>
				{'아래와 같이 소실점을 부모요소에게 부여하면 각 애니메이션이 다르게 돌아갑니다.'}
			</Typography>
			<Box
				className='stage'
				sx={{
					display: 'flex',
					width: '100%',
					gap: '2rem',
					justifyContent: 'center',
					alignItems: 'center',
					perspective: '600px',
				}}>
				<AnimatedBox className='box' size={'md'} />
				<AnimatedBox className='box' size={'md'} />
				<AnimatedBox className='box' size={'md'} />
				<AnimatedBox className='box' size={'md'} />
				<AnimatedBox className='box' size={'md'} />
				<AnimatedBox className='box' size={'md'} />
			</Box>
			<Divider flexItem />

			<Typography variant='body2'>
				{'아래와 같이 소실점을 각각의 요소에 부여하면 각 애니메이션이 동일하게 돌아갑니다.'}
			</Typography>
			<Box
				className='stage'
				sx={{
					display: 'flex',
					width: '100%',
					gap: '2rem',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<AnimatedBox className='box box2' size={'md'} />
				<AnimatedBox className='box box2' size={'md'} />
				<AnimatedBox className='box box2' size={'md'} />
				<AnimatedBox className='box box2' size={'md'} />
				<AnimatedBox className='box box2' size={'md'} />
				<AnimatedBox className='box box2' size={'md'} />
			</Box>
			<Divider flexItem />

			<Typography variant='body2'>
				{'아래와 같이 소실점을 각각의 요소에 부여하면 각 애니메이션이 동일하게 돌아갑니다.'}
			</Typography>
			<Box
				className='stage'
				sx={{
					display: 'flex',
					width: '100%',
					gap: '2rem',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<AnimatedBox className='box3' size={'md'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />
			<Divider flexItem />

			<Typography variant='h2'>{'3D Transform Text 만들기'}</Typography>
			<Typography variant='body2'>
				{'gsap.registerEffect()를 이용해 한번 만들어 봅시다.'}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					justifyContent: 'center',
					fontSize: '2rem',
					fontWeight: 'bold',
				}}>
				<SplitTextIntoDivs className='chars' text={'GSAP Method registerEffect'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} title={'구현 의사코드'} />
		</PageLayout>
	);
};

export default ThreeDTransform;
