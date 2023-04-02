import { Box, Grid, Link, Typography } from '@mui/material';

const Index = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Link target='_blank' href='https://codepen.io/kindtigerr/pen/poaMQoa'>
					만들 프로젝트
				</Link>
				<Box sx={{ paddingTop: '2rem' }}>
					<Typography variant='h2'>위 프로젝트를 만들며 배울 수 있는 항목</Typography>
					<Typography variant='body2' sx={{ paddingTop: '1rem' }}>
						{
							'- HTML Structure\n- Basic Animation\n- Timeline Defaults\n- GSDevTools\n- Fine-turning\n- Un-styled Content'
						}
					</Typography>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Index;
