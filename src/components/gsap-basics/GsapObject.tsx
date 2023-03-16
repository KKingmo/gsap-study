import { Divider, Typography } from '@mui/material';
import CodeBlock from '../common/CodeBlock';
import PageLayout from '../../layout/PageLayout';

const CODESTRING = [
	`gsap.to('.elem',{duration:1,x:100,y:100,rotation:45});

gsap.from('.elem',{duration:1,x:100,y:100,rotation:45});

gsap.fromTo('.elem',
{duration:1,x:-100,y:-100,rotation:-45},
{duration:1,x:100,y:100,rotation:45});`,
	`                        PLAYHEAD
|--------------timeline-----|-----------|
|--tween1--|                |
           |-----tween2-----|-----------|`,
	`//WITH Timelines (cleaner, more versatile)
var tl = gsap.timeline({repeat: 2, repeatDelay: 1});
tl.to("#id", {x: 100, duration: 1});
tl.to("#id", {y: 50, duration: 1});
tl.to("#id", {opacity: 0, duration: 1});

// then we can control the whole thing easily...
tl.pause();
tl.resume();
tl.seek(1.5);
tl.reverse();
...`,
];

const GsapObject = () => {
	return (
		<PageLayout>
			<Typography variant='h1'>GSAP Object</Typography>
			<Typography variant='body2'>
				{
					'gsap 객체는 GSAP의 대부분의 기능에 대한 액세스 포인트 역할을 합니다.\nGSAP의 핵심인 Tweens과 Timelines을 생성하고 제어하는 다양한 메서드와 프로퍼티를 가진 일반 객체일 뿐입니다.'
				}
			</Typography>
			<Divider flexItem />
			<Typography variant='h2'>{`Tween`}</Typography>
			<Typography variant='body2'>
				{`트윈은 모든 애니메이션 작업을 수행하는 것으로, high-performance property setter라고 생각하면 됩니다.\n타겟(애니메이션을 적용하려는 오브젝트), 지속 시간, 애니메이션을 적용하려는 속성을 입력하면 재생 헤드가 새로운 위치로 이동하면 해당 지점의 속성 값이 무엇인지 파악하여 그에 따라 적용합니다.`}
			</Typography>
			<Typography variant='h3'>{'Tween을 만드는 일반적인 방법 예시:'}</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[0]} />
			<Divider flexItem />
			<Typography variant='h2'>{`Timeline`}</Typography>
			<Typography variant='body2'>
				{`타임라인은 트윈을 위한 컨테이너입니다.\n원하는 위치에 애니메이션을 원하는 시간에 배치한 다음 pause(), play(), progress(), reverse(), timeScale() 등의 메서드를 사용하여 전체 시퀀스를 쉽게 제어할 수 있는 최고의 시퀀싱 툴입니다.\n원하는 만큼 타임라인을 만들 수 있습니다.\n애니메이션 코드를 모듈화할 수 있도록 중첩할 수도 있습니다!\n모든 애니메이션(트윈 및 타임라인)은 상위 타임라인(기본적으로 글로벌 타임라인)에 배치됩니다.\n타임라인의 재생 헤드를 이동하면 하위 타임라인으로 내려가므로 재생 헤드가 정렬된 상태를 유지합니다.\n타임라인은 순전히 사물을 그룹화하고 시간/재생 헤드를 조정하는 용도로만 사용되며, 실제로 대상에 속성을 설정하지는 않습니다(트윗이 이를 처리합니다).`}
			</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[1]} />
			<Typography variant='h3'>{'Timeline을 만드는 일반적인 방법 예시:'}</Typography>
			<CodeBlock language='tsx' codeString={CODESTRING[2]} />
		</PageLayout>
	);
};

export default GsapObject;
