import { useCallback, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Grid } from '@mui/material';
import Gsap1 from '../components/gsapGround/Gsap1';
import Gsap2 from '../components/gsapGround/Gsap2';
import Gsap3 from '../components/gsapGround/Gsap3';
import Gsap4 from '../components/gsapGround/Gsap4';
import Gsap5 from '../components/gsapGround/Gsap5';

interface ListItem {
	id: string;
	primary: string;
}

const LIST: ListItem[] = [
	{ id: 'a1', primary: '1' },
	{ id: 'a2', primary: '2' },
	{ id: 'a3', primary: '3' },
	{ id: 'a4', primary: '4' },
	{ id: 'a5', primary: '5' },
	{ id: 'a6', primary: '6' },
	{ id: 'a7', primary: '7' },
	{ id: 'a8', primary: '8' },
	{ id: 'a9', primary: '9' },
	{ id: 'a10', primary: '10' },
	{ id: 'a11', primary: '11' },
	{ id: 'a12', primary: '12' },
];

const GsapGround = () => {
	const [currentTab, setCurrentTab] = useState<string | null>(null);

	const handleClickListItem = useCallback((name: string) => {
		setCurrentTab(name);
	}, []);

	const renderTab = useCallback((name: string | null) => {
		switch (name) {
			case '1':
				return <Gsap1 />;
			case '2':
				return <Gsap2 />;
			case '3':
				return <Gsap3 />;
			case '4':
				return <Gsap4 />;
			case '5':
				return <Gsap5 />;
			default:
				return null;
		}
	}, []);

	return (
		<Grid container spacing={2}>
			<Grid item xs={1}>
				<List sx={{ width: '100%', bgcolor: '#ff0' }} component='nav'>
					<ListItemButton>
						<ListItemText primary='목록' />
					</ListItemButton>
					<List component='div' disablePadding>
						{LIST.map((item) => (
							<ListItemButton
								key={item.id}
								sx={{ pl: 4 }}
								onClick={() => handleClickListItem(item.primary)}>
								<ListItemText primary={item.primary} />
							</ListItemButton>
						))}
					</List>
				</List>
			</Grid>
			<Grid item xs={11} sx={{ backgroundColor: '#fff' }}>
				{renderTab(currentTab)}
			</Grid>
		</Grid>
	);
};

export default GsapGround;
