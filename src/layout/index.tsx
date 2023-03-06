import { Grid } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MENU } from '../App';

const Layout = () => {
	const navigate = useNavigate();

	const handleClickMenu = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate],
	);
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				{MENU.map(({ path, name, children }, index) => (
					<div key={`${path}1`}>
						<button onClick={() => handleClickMenu(path)}>{name}</button>
						{children?.map(({ path, name, index }) => {
							return index ? null : (
								<button key={`${path}2`} onClick={() => handleClickMenu(path)}>
									{name}
								</button>
							);
						})}
					</div>
				))}
			</Grid>
			<Grid item xs={12}>
				<Outlet />
			</Grid>
		</Grid>
	);
};

export default Layout;
