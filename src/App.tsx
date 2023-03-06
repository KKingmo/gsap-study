import React, { ReactElement } from 'react';
import Layout from './layout';
import Home from './pages';
import ReactBasics from './pages/react-basics';
import { Container } from '@mui/material';
import { RouteObject, useRoutes } from 'react-router-dom';

interface MenuItem {
	path: string;
	name: string;
	element: ReactElement;
	children?: MenuItem[];
	index?: boolean;
}

export const MENU: MenuItem[] = [
	{
		path: '/react-basics',
		name: 'GSAP + React Basics',
		element: <div />,
		children: [
			{
				path: '/react-basics',
				name: 'GSAP + React Basics',
				element: <ReactBasics />,
				index: true,
			},
			{ path: '/react-basics/1', name: '1', element: <div />, index: false },
			{ path: '/react-basics/2', name: '2', element: <div />, index: false },
			{ path: '/react-basics/3', name: '3', element: <div />, index: false },
		],
	},
	{
		path: '/start-guide',
		name: 'Started guide',
		element: <div />,
		children: [
			{
				path: '/start-guide',
				name: 'Started guide',
				element: <div />,
				index: true,
			},
			{ path: '/start-guide/1', name: '1', element: <div />, index: false },
			{ path: '/start-guide/2', name: '2', element: <div />, index: false },
			{ path: '/start-guide/3', name: '3', element: <div />, index: false },
		],
	},
	{
		path: '/tween',
		name: '중요한 개념 씹어먹기 1 - Tween',
		element: <div />,
		children: [
			{
				path: '/tween',
				name: '중요한 개념 씹어먹기 1 - Tween',
				element: <div />,
				index: true,
			},
			{ path: '/tween/1', name: '1', element: <div />, index: false },
			{ path: '/tween/2', name: '2', element: <div />, index: false },
			{ path: '/tween/3', name: '3', element: <div />, index: false },
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

	return (
		<Container maxWidth='xl' sx={{ mt: '1rem' }}>
			{element}
		</Container>
	);
};

export default App;
