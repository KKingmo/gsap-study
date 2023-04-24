import { Grid, Link } from '@mui/material';
import PageMenu from '../../components/common/PageMenu';

const Index = () => {
	return (
		<>
			<PageMenu />
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link target='_blank' href='https://greensock.com/docs/v3'>
						GSAP의 영롱한 DOCS
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Index;
