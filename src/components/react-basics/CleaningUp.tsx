import { Box, Link, Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';
import InfoPaper from '../common/InfoPaper';

const CODESTRING = [
	`useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const animation1 = gsap.to(".box1", { rotation: "+=360" });

    const animation2 = gsap.to(".box2", {
      scrollTrigger: {
        //...
      }
    });
  }, el);

  const onMove = () => {
    //...
  };
  window.addEventListener("pointermove", onMove);

  // cleanup function will be called when component is removed
  return () => {
    ctx.revert(); // animation cleanup!!

    window.removeEventListener("pointermove", onMove); // Remove the event listener
  };
}, []);`,
];

const CleaningUp = () => {
	return (
		<PageLayout>
			<Typography variant='h1'>Cleaning Up</Typography>
			<Typography variant='body2'>
				{`useLayoutEffect()는 애니메이션을 없애는 데 사용할 수 있는 정리 함수를 제공합니다.\nReact 18의 strict 모드에서 예기치 않은 동작을 피하려면 적절한 애니메이션 정리가 중요합니다.\n이 패턴은 React의 베스트 프랙티스를 따릅니다.`}
			</Typography>
			<Typography variant='body2'>
				{`gsap.context의 revert()을 사용하면 함수 내에서 생성된 모든 GSAP 애니메이션과 스크롤 트리거를 한꺼번에 쉽고! 깔끔하고! 간단하게! 정리할 수 있습니다.\n\n또한 이 기능을 사용하여 이벤트 리스너와 같이 메모리 누수를 유발할 수 있는 다른 모든 것들을 삭제할 수도 있습니다.`}
			</Typography>

			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<InfoPaper>
				{
					'gsap.matchMedia()는 내부적으로 gsap.context()를 사용하므로 정리를 위해 matchMedia 인스턴스에서 revert()를 호출하기만 하면 됩니다(결합할 필요 없음).'
				}
				<Box>
					<Link
						target='_blank'
						href='https://greensock.com/docs/v3/GSAP/gsap.matchMedia()'>
						gsap.matchMedia() 관련 링크
					</Link>
				</Box>
				<Box>
					<Link target='_blank' href='https://greensock.com/docs/v3/GSAP/gsap.context()'>
						gsap.context() 관련 링크
					</Link>
				</Box>
			</InfoPaper>
		</PageLayout>
	);
};

export default CleaningUp;
