import { Box, Divider, Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`gsap.registerEffect({
	name: 'textEffect',
	extendTimeline: true,
	defaults: {
		y: -100,
		colors: ['red', 'blue'],
	},
	effect: (target: gsap.TweenTarget, config: { y: number; colors: string[] }) => {
		const tl = gsap.timeline();
		tl.from(target, { y: config.y, opacity: 0, stagger: 0.05 }).to(target, {
			color: gsap.utils.wrap(config.colors),
		});

		return tl;
	},
});`,
	`useEffect(() => {
	const ctx = gsap.context((self) => {
		const animation = gsap.timeline();
		animation
			.textEffect('.chars')
			.textEffect('.charsB', { y: 'random(-100,100)', colors: ['blue', 'green'] });
	}, main); // <- Scope!
	return () => ctx.revert(); // <- Cleanup!
}, []);`,
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
	name: 'textEffect',
	extendTimeline: true,
	defaults: {
		y: -100,
		colors: ['red', 'blue'],
	},
	effect: (target: gsap.TweenTarget, config: { y: number; colors: string[] }) => {
		const tl = gsap.timeline();
		tl.from(target, { y: config.y, opacity: 0, stagger: 0.05 }).to(target, {
			color: gsap.utils.wrap(config.colors),
		});

		return tl;
	},
});

const GsapRegisterEffect = () => {
	const main = useRef(null);

	useEffect(() => {
		const ctx = gsap.context((self) => {
			const animation = gsap.timeline();
			animation
				.textEffect('.chars')
				.textEffect('.charsB', { y: 'random(-100,100)', colors: ['blue', 'green'] });
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Box ref={main}>
				<Box sx={{ display: 'flex', fontSize: '2rem', fontWeight: 'bold' }}>
					<SplitTextIntoDivs className='chars' text={'Learning to GSAP Advanced'} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						fontSize: '1rem',
						fontWeight: 'bold',
						justifyContent: 'center',
					}}>
					<SplitTextIntoDivs className='charsB' text={'GSAP Method registerEffect'} />
				</Box>
			</Box>
		</PageLayout>
	);
};

export default GsapRegisterEffect;
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

gsap.registerEffect({
	name: 'textEffect',
	extendTimeline: true,
	defaults: {
		y: -100,
		colors: ['red', 'blue'],
	},
	effect: (target: gsap.TweenTarget, config: { y: number; colors: string[] }) => {
		const tl = gsap.timeline();
		tl.from(target, { y: config.y, opacity: 0, stagger: 0.05 }).to(target, {
			color: gsap.utils.wrap(config.colors),
		});

		return tl;
	},
});

const GsapRegisterEffect = () => {
	const main = useRef(null);

	useEffect(() => {
		const ctx = gsap.context((self) => {
			const animation = gsap.timeline();
			animation
				.textEffect('.chars')
				.textEffect('.charsB', { y: 'random(-100,100)', colors: ['blue', 'green'] });
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>유틸 메서드 : gsap.registerEffect()</Typography>
			<Typography variant='body2'>
				{
					'재 사용이 많은 애니메이션들은 미리 등록을 해놓고 쉽게 가져다 사용할 수 있습니다.\ngsap.registerEffect()를 통해 효과를 등록하면 gsap객체의 effects에 효과가 추가됩니다.'
				}
			</Typography>
			<Box ref={main}>
				<Box sx={{ display: 'flex', fontSize: '2rem', fontWeight: 'bold' }}>
					<SplitTextIntoDivs className='chars' text={'Learning to GSAP Advanced'} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						fontSize: '1rem',
						fontWeight: 'bold',
						justifyContent: 'center',
					}}>
					<SplitTextIntoDivs className='charsB' text={'GSAP Method registerEffect'} />
				</Box>
			</Box>
			<Divider flexItem />

			<Typography variant='h2'>effect 만들기</Typography>
			<Typography variant='body2'>
				{
					'name: effect name, extendTimeline: 타임라인 확장 가능 여부\ndefault: 여기에 설정한 default는 effect의 두 번째 매개변수가 됩니다.\neffect: 애니메이션 함수'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />

			<Typography variant='h2'>effect 사용하기</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />

			<Typography variant='h2'>사용 예시코드</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default GsapRegisterEffect;
