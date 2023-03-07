import React, { ReactElement } from 'react';
import { Container } from '@mui/material';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages';
import ReactBasics from './pages/react-basics';
import Pages from './pages/react-basics/Pages';

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
				element: <Pages />,
			},
		],
	},
	// {
	// 	path: '/start-guide',
	// 	name: 'Started guide',
	// 	children: [
	// 		{
	// 			path: '/start-guide',
	// 			name: 'Started guide',
	// 			element: <div />,
	// 			index: true,
	// 		},
	// 		{ path: '/start-guide/1', name: '1', element: <div /> },
	// 		{ path: '/start-guide/2', name: '2', element: <div /> },
	// 		{ path: '/start-guide/3', name: '3', element: <div /> },
	// 	],
	// },
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

	return <Container maxWidth='xl'>{element}</Container>;
};

export default App;
