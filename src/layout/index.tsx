import {
	Box,
	Breadcrumbs,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	styled,
} from '@mui/material';
import { ReactNode, useCallback, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MENU } from '../App';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const drawerWidth = 300;

interface MenuType {
	path: string;
	name: string;
	children?: MenuType[];
}

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

interface MainProps {
	open?: boolean;
	children?: ReactNode;
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<MainProps>(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const Layout = () => {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const location = useLocation();

	const toogleMenuOpen = useCallback(() => {
		setMenuOpen((isOpen) => !isOpen);
	}, []);

	const handleClickMenu = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate],
	);

	const renderBreadCrumbs = useCallback(() => {
		const pathnames = location.pathname.split('/').filter((x) => x);
		return (
			<Breadcrumbs
				separator={<NavigateNextIcon fontSize='small' />}
				aria-label='breadcrumb'
				sx={(theme) => ({ color: theme.palette.primary.contrastText })}>
				<Link to='/'>Home</Link>
				{pathnames.map((value, index) => {
					const last = index === pathnames.length - 1;
					const to = `/${pathnames.slice(0, index + 1).join('/')}`;

					const menuItem = MENU.find((menu) => menu.path === to);
					const name = menuItem?.name || value;

					return last ? (
						<Typography key={to}>{name}</Typography>
					) : (
						<Link to={to} key={to}>
							{name}
						</Link>
					);
				})}
			</Breadcrumbs>
		);
	}, [location.pathname]);

	return (
		<Box sx={{ display: 'flex' }}>
			<AppBar position='fixed' open={menuOpen}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={toogleMenuOpen}
						edge='start'
						sx={{ mr: 2, ...(menuOpen && { display: 'none' }) }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						{renderBreadCrumbs()}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant='persistent'
				anchor='left'
				open={menuOpen}>
				<DrawerHeader>
					<IconButton onClick={toogleMenuOpen}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<List dense disablePadding>
					{MENU.map(({ path, name, children }) => (
						<div key={`${path}1`}>
							<ListItem disablePadding>
								<ListItemButton onClick={() => handleClickMenu(path)}>
									<ListItemIcon sx={{ minWidth: 40 }}>
										<MenuBookIcon />
									</ListItemIcon>
									<ListItemText primary={name} />
								</ListItemButton>
							</ListItem>
							<List sx={{ paddingLeft: '0.5rem' }} dense disablePadding>
								{children?.map(({ path, name, index }) => {
									return index ? null : (
										<ListItem key={`${path}2`} disablePadding>
											<ListItemButton onClick={() => handleClickMenu(path)}>
												<ListItemIcon sx={{ minWidth: 32 }}>
													<TurnRightIcon
														fontSize={'small'}
														sx={{ transform: 'rotateX(180deg)' }}
													/>
												</ListItemIcon>
												<ListItemText
													primary={
														<Typography variant='body2'>
															{name}
														</Typography>
													}
												/>
											</ListItemButton>
										</ListItem>
									);
								})}
							</List>
							<Divider />
						</div>
					))}
				</List>
			</Drawer>
			<Main open={menuOpen}>
				<DrawerHeader />
				<Outlet />
			</Main>
		</Box>
	);
};

export default Layout;
