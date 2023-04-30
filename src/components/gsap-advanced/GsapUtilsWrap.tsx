import { Box, Divider, Typography } from '@mui/material';
import { FC, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PageLayout from '../../layout/PageLayout';
import CodeBlock from '../common/CodeBlock';

const CODESTRING = [
	`gsap.to(chars, {y:gsap.utils.wrap([-100, 100])});`,
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

const GsapUtilsWrap = () => {
	const main = useRef(null);

	useEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.timeline()
				.from('.chars', {
					y: gsap.utils.wrap([100, -100]),
					opacity: 0,
					stagger: {
						each: 0.02,
						from: 'random',
					},
				})
				.to('.chars', {
					x: 10,
					color: gsap.utils.wrap(['red', 'blue']),
					stagger: {
						each: 0.02,
					},
				});
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Box ref={main} sx={{ display: 'flex', fontSize: '2rem', fontWeight: 'bold' }}>
				<SplitTextIntoDivs className='chars' text={'Learning to GSAP Advanced'} />
			</Box>
		</PageLayout>
	);
};

export default GsapUtilsWrap;`,
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

const GsapUtilsWrap = () => {
	const main = useRef(null);

	useEffect(() => {
		const ctx = gsap.context((self) => {
			gsap.timeline()
				.from('.chars', {
					y: gsap.utils.wrap([100, -100]),
					opacity: 0,
					stagger: {
						each: 0.02,
						from: 'random',
					},
				})
				.to('.chars', {
					x: 10,
					color: gsap.utils.wrap(['red', 'blue']),
					repeat: -1,
					yoyo: true,
					stagger: {
						each: 0.02,
					},
				});
		}, main); // <- Scope!
		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<PageLayout>
			<Typography variant='h1'>유틸 메서드 : gsap.utils.wrap()</Typography>
			<Typography variant='body2'>
				{
					'배열의 다음 항목 또는 주어진 인덱스 뒤의 범위 내 숫자를 반환합니다\n또는 인덱스가 지정되지 않은 경우 해당 객체 또는 값을 반환하는 함수를 반환합니다.\n\n숫자(또는 배열의 인덱스)를 지정된 범위에 배치하여 최대값을 초과하면 시작 부분으로 다시 래핑하고 최소값보다 작으면 끝 부분으로 래핑하도록 합니다.\n트위닝의 맥락에서 이것은 값을 순환하는 효과가 있습니다.\n\n예를 들어 "box" 클래스가 적용된 10개의 요소가 있고, 해당 요소에 애니메이션을 적용하여 첫 번째 상자가 "빨강", 그 다음 "초록", 그 다음 "노랑", 그 다음 "노랑"으로 애니메이션을 적용하고 다시 래핑하여 4번째는 "빨강", 5번째는 "초록" 등으로 애니메이션을 적용하려는 경우 wrap() 함수가 적합합니다\n인덱스 값을 제공하지 않으면 그에 따라 래핑을 수행할 준비가 된 함수를 대신 가져옵니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Box ref={main} sx={{ display: 'flex', fontSize: '2rem', fontWeight: 'bold' }}>
				<SplitTextIntoDivs className='chars' text={'Learning to GSAP Advanced'} />
			</Box>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Divider flexItem />
		</PageLayout>
	);
};

export default GsapUtilsWrap;
