import { Box, Divider, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { FC, useEffect } from 'react';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
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

const disX = gsap.utils.distribute({
	base: -200,
	amount: 400,
});

const AnimatingValueDistribution = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ repeat: -1 });
			tl.from('.chars', {
				y: gsap.utils.wrap([-10, 10]),
				filter: 'blur(4px)',
				opacity: 0,
				stagger: { each: 0.1, from: 'center' },
			})
				.to('.chars', { delay: 1, x: disX, duration: 3, ease: 'power3.inOut' })
				.to('.chars', {
					delay: -1,
					opacity: 0,
					filter: 'blur(10px)',
					stagger: { each: 0.1, from: 'edges' },
				});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					minHeight: '300px',
					backgroundColor: '#000',
					color: '#fff',
					fontSize: '2rem',
				}}>
				<SplitTextIntoDivs className='chars' text={'INTERSTELLAR'} />
			</Box>
		</PageLayout>
	);
};

export default AnimatingValueDistribution;
`,
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

const disX = gsap.utils.distribute({
	base: -200,
	amount: 400,
});

const AnimatingValueDistribution = () => {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ repeat: -1 });
			tl.from('.chars', {
				y: gsap.utils.wrap([-10, 10]),
				filter: 'blur(4px)',
				opacity: 0,
				stagger: { each: 0.1, from: 'center' },
			})
				.to('.chars', { delay: 1, x: disX, duration: 3, ease: 'power3.inOut' })
				.to('.chars', {
					delay: -1,
					opacity: 0,
					filter: 'blur(10px)',
					stagger: { each: 0.1, from: 'edges' },
				});
		});

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>값 분배를 통한 애니메이션</Typography>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					minHeight: '300px',
					backgroundColor: '#000',
					color: '#fff',
					fontSize: '2rem',
				}}>
				<SplitTextIntoDivs className='chars' text={'INTERSTELLAR'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} title={'구현 의사코드'} />

			<Divider flexItem />
		</PageLayout>
	);
};

export default AnimatingValueDistribution;
