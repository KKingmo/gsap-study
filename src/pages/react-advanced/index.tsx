import { Box, Grid, Link, Typography } from '@mui/material';
import PageMenu from '../../components/common/PageMenu';

const Index = () => {
	return (
		<>
			<PageMenu />
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Box>
						<Link target='_blank' href='https://greensock.com/react-advanced/'>
							이번 파트는 GSAP Learning Center의 GSAP + React, Advanced Animation
							Techniques를 참고하였습니다.
						</Link>
					</Box>
					<Typography variant='body2' sx={{ paddingTop: '1rem' }}>
						이전의 GSAP + React Basics 파트의 심화 파트입니다.
					</Typography>
				</Grid>
			</Grid>
		</>
	);
};

export default Index;
