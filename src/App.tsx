import React, { ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages';
import ReactBasics from './pages/react-basics';
import GsapBasics from './pages/gsap-basics';
import ReactBasicsPages from './pages/react-basics/Pages';
import GsapBasicsPages from './pages/gsap-basics/Pages';

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
		path: '/gsap-basics',
		name: 'GSAP 제대로 파고들기',
		children: [
			{
				path: '/gsap-basics',
				name: 'GSAP 제대로 파고들기',
				element: <GsapBasics />,
				index: true,
			},
			{
				path: '/gsap-basics/1',
				name: 'Basic Tween - GSAP Object',
				element: <GsapBasicsPages />,
			},
			{ path: '/gsap-basics/2', name: '기초 트위닝', element: <GsapBasicsPages /> },
			{ path: '/gsap-basics/3', name: 'from()과 fromTo()', element: <GsapBasicsPages /> },
			{ path: '/gsap-basics/4', name: '지연과 반복', element: <GsapBasicsPages /> },
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
