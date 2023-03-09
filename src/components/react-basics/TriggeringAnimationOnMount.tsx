import { Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import InfoPaper from '../common/InfoPaper';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const comp = useRef(); // create a ref for the root level element (we'll use it later)

useLayoutEffect(() => {
  // -- ANIMATION CODE HERE --

  return () => {
    // cleanup code (optional)
  };
}, []); // <- empty dependency Array so it doesn't re-run on every render!`,
];

const TriggeringAnimationOnMount = () => {
	return (
		<PageLayout>
			<Typography variant='h1'>마운트 시 애니메이션 트리거 - useLayoutEffect() </Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<InfoPaper>
				{
					'빈 의존성 Array를 잊지 마세요! 이를 생략하면 React는 렌더링할 때마다 useLayoutEffect()를 다시 실행합니다.'
				}
			</InfoPaper>
		</PageLayout>
	);
};

export default TriggeringAnimationOnMount;
