import React, { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages';
import ReactBasics from './pages/react-basics';
import GsapBasics from './pages/basic-tween';
import Timelines from './pages/timelines';
import BtnAniEffects from './pages/button-animation-effects';
import FirstProject from './pages/first-project';
import GsapKeyframes from './pages/gsap-keyframes';
import ReactAdvanced from './pages/react-advanced';
import GsapAdvanced from './pages/gsap-advanced';
import ReactBasicsPages from './pages/react-basics/Pages';
import BasicTweenPages from './pages/basic-tween/Pages';
import TimelinesPages from './pages/timelines/Pages';
import BtnAniEffectsPages from './pages/button-animation-effects/Pages';
import FirstProjectPages from './pages/first-project/Pages';
import GsapKeyframesPages from './pages/gsap-keyframes/Pages';
import ReactAdvancedPages from './pages/react-advanced/Pages';
import GsapAdvancedPages from './pages/gsap-advanced/Pages';

interface MenuItem {
	path: string;
	name: string;
	element?: ReactElement;
	children?: MenuItem[];
	index?: boolean;
}

/**
 * MENU Config
 */
export const MENU: MenuItem[] = [
	{
		path: '/react-basics',
		name: 'GSAP + React Basics',
		children: [
			{
				path: '/react-basics',
				name: 'GSAP + React Basics',
				element: <ReactBasics />,
				index: true,
			},
			{
				path: '/react-basics/1',
				name: 'Animating on interaction',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/2',
				name: 'Triggering animation on mount - useLayoutEffect()',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/3',
				name: 'Targeting elements with Refs',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/4',
				name: 'gsap.context() is your best friend!',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/5',
				name: 'gsap.context() - Cleaning Up',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/6',
				name: 'Reusing components',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/7',
				name: 'Creating and controlling timelines',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/8',
				name: 'Controlling when React creates our animation',
				element: <ReactBasicsPages />,
			},
			{
				path: '/react-basics/9',
				name: 'Reacting to changes in state',
				element: <ReactBasicsPages />,
			},
		],
	},
	{
		path: '/basic-tween',
		name: 'Basic Tween',
		children: [
			{
				path: '/basic-tween',
				name: 'Basic Tween',
				element: <GsapBasics />,
				index: true,
			},
			{
				path: '/basic-tween/1',
				name: 'GSAP Object',
				element: <BasicTweenPages />,
			},
			{ path: '/basic-tween/2', name: '기초 트위닝', element: <BasicTweenPages /> },
			{ path: '/basic-tween/3', name: 'from()과 fromTo()', element: <BasicTweenPages /> },
			{ path: '/basic-tween/4', name: '지연과 반복', element: <BasicTweenPages /> },
			{ path: '/basic-tween/5', name: '가속도', element: <BasicTweenPages /> },
			{ path: '/basic-tween/6', name: '다중 요소 제어하기', element: <BasicTweenPages /> },
			{ path: '/basic-tween/7', name: '트윈 컨트롤', element: <BasicTweenPages /> },
			{ path: '/basic-tween/8', name: 'from() 트윈의 문제점', element: <BasicTweenPages /> },
		],
	},
	{
		path: '/timelines',
		name: 'Timelines',
		children: [
			{
				path: '/timelines',
				name: 'Timelines',
				element: <Timelines />,
				index: true,
			},
			{
				path: '/timelines/1',
				name: '타임라인이 중요한 이유',
				element: <TimelinesPages />,
			},
			{
				path: '/timelines/2',
				name: '기초 타임라인',
				element: <TimelinesPages />,
			},
			{
				path: '/timelines/3',
				name: 'Position Parameter 시각적 효과',
				element: <TimelinesPages />,
			},
			{
				path: '/timelines/4',
				name: '타임라인의 컨트롤과 라벨링',
				element: <TimelinesPages />,
			},
		],
	},
	{
		path: '/button-animation-effects',
		name: 'Button Animation Effects',
		children: [
			{
				path: '/button-animation-effects',
				name: 'Button Animation Effects',
				element: <BtnAniEffects />,
				index: true,
			},
			{
				path: '/button-animation-effects/1',
				name: '단일 메뉴 효과',
				element: <BtnAniEffectsPages />,
			},
			{
				path: '/button-animation-effects/2',
				name: '다중 메뉴 효과',
				element: <BtnAniEffectsPages />,
			},
			{
				path: '/button-animation-effects/3',
				name: 'Hover Pulse Animation',
				element: <BtnAniEffectsPages />,
			},
		],
	},
	{
		path: '/first-project',
		name: '간단한 프로젝트 만들어보기',
		children: [
			{
				path: '/first-project',
				name: '간단한 프로젝트 만들어보기',
				element: <FirstProject />,
				index: true,
			},
			{
				path: '/first-project/1',
				name: '기초 애니메이션',
				element: <FirstProjectPages />,
			},
			{
				path: '/first-project/2',
				name: '타임라인 기본값 설정',
				element: <FirstProjectPages />,
			},
			{
				path: '/first-project/3',
				name: '애니메이션 미세 조정',
				element: <FirstProjectPages />,
			},
			{
				path: '/first-project/4',
				name: 'FOUC',
				element: <FirstProjectPages />,
			},
		],
	},
	{
		path: '/gsap-keyframes',
		name: 'GSAP keyframes',
		children: [
			{
				path: '/gsap-keyframes',
				name: 'GSAP keyframes',
				element: <GsapKeyframes />,
				index: true,
			},
			{
				path: '/gsap-keyframes/1',
				name: '키프레임 사용하기 - 1',
				element: <GsapKeyframesPages />,
			},
			{
				path: '/gsap-keyframes/2',
				name: '키프레임 사용하기 - 2',
				element: <GsapKeyframesPages />,
			},
			{
				path: '/gsap-keyframes/3',
				name: '키프레임 이해하기 - 1',
				element: <GsapKeyframesPages />,
			},
			{
				path: '/gsap-keyframes/4',
				name: '키프레임 이해하기 - 2',
				element: <GsapKeyframesPages />,
			},
		],
	},
	{
		path: '/react-advanced',
		name: 'GSAP + React Advanced',
		children: [
			{
				path: '/react-advanced',
				name: 'GSAP + React Advanced',
				element: <ReactAdvanced />,
				index: true,
			},
			{
				path: '/react-advanced/1',
				name: 'Component Communication',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/2',
				name: 'Passing down a timeline prop',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/3',
				name: 'Passing down a callback to build a timeline',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/4',
				name: 'React Context',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/5',
				name: 'Imperative Communication',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/6',
				name: 'Creating reusable animations',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/7',
				name: 'RegisterEffect()',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/8',
				name: 'Exit animations',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/9',
				name: 'Exit animations Advanced',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/10',
				name: 'useGsapContext',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/11',
				name: 'useStateRef',
				element: <ReactAdvancedPages />,
			},
			{
				path: '/react-advanced/12',
				name: 'SSR & useLayoutEffect',
				element: <ReactAdvancedPages />,
			},
		],
	},
	{
		path: '/gsap-advanced',
		name: 'GSAP Advanced',
		children: [
			{
				path: '/gsap-advanced',
				name: 'GSAP Advanced',
				element: <GsapAdvanced />,
				index: true,
			},
			{
				path: '/gsap-advanced/1',
				name: 'Motion Path',
				element: <GsapAdvancedPages />,
			},
			{
				path: '/gsap-advanced/2',
				name: 'Practice Motion Path',
				element: <GsapAdvancedPages />,
			},
		],
	},
];

export const ROUTES: RouteObject[] = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '*', element: <div>{'404'}</div> },
			...MENU.map(({ path, element, children }) => ({
				path,
				element,
				children:
					children?.map(({ path, element, index }) => ({ path, element, index })) ||
					undefined,
			})),
		],
	},
];

const App: React.FC = () => {
	const element = useRoutes(ROUTES);

	return <>{element}</>;
};

export default App;
