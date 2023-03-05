import { Container, Grid } from '@mui/material';
import Aside, { Page } from './Aside/Aside';
import React from 'react';

type LayoutProps = {
	pages: Page[];
	children: React.ReactNode;
};

const Layout = ({ pages, children }: LayoutProps) => {
	return (
		<Container maxWidth='xl'>
			<Grid container>
				<Grid item xs={1}>
					<Aside pages={pages} />
				</Grid>
				<Grid item xs={11}>
					{children}
				</Grid>
			</Grid>
		</Container>
	);
};

export default Layout;
