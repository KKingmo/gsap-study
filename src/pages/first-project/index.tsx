import { Box, Grid, Link, Typography } from '@mui/material';
import PageMenu from '../../components/common/PageMenu';

const Index = () => {
	return (
		<>
			<PageMenu />
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link target='_blank' href='https://codepen.io/kindtigerr/pen/poaMQoa'>
						만들 프로젝트
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Index;
