import React, { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages';
import ReactBasics from './pages/react-basics';
import GsapBasics from './pages/basic-tween';
import Timelines from './pages/timelines';
import ReactBasicsPages from './pages/react-basics/Pages';
import BasicTweenPages from './pages/basic-tween/Pages';
import TimelinesPages from './pages/timelines/Pages';

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
