import { Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`const boxRef = useRef();

useLayoutEffect(() => {
  // Refs allow you to access DOM nodes
  console.log(boxRef); // { current: div.box }
  // then we can animate them like so...
  gsap.to(boxRef.current, {
    rotation: '+=360',
  });
});

return (
  <div className='App'>
    <div className='box' ref={boxRef}>
      Hello
    </div>
  </div>
);`,
];

const TargetingElementsWithRefs = () => {
	return (
		<PageLayout>
			<Typography variant='h1'>Ref로 요소 타겟팅</Typography>
			<Typography variant='body2'>
				{
					'애니메이션을 적용하려면 어떤 요소를 타겟팅할지 GSAP에 알려줘야 합니다.\nReact에서 DOM노드에 접근하는 방법은 Ref를 사용하는 것입니다.\nRef는 특정 DOM 노드에 대한 안전하고 신뢰할 수 있는 참조입니다.'
				}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Typography variant='body2'>
				{
					'하지만 애니메이션에는 많은 DOM 요소를 타깃팅하는 경우가 많습니다.\n10개의 서로 다른 요소를 엇갈리게 배치하려면 각 DOM 노드에 대해 참조를 만들어야 합니다.\n이 작업은 금방 반복되고 지저분해질 수 있습니다.'
				}
				{
					'\n\n그렇다면 텍스트 선택자의 유연성과 Ref의 보안을 어떻게 활용할 수 있을까요?\n\ngsap.context()가 좋은 해결책이 될 수 있습니다.'
				}
			</Typography>
		</PageLayout>
	);
};

export default TargetingElementsWithRefs;
