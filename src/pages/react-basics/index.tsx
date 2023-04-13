import { Grid, Link } from '@mui/material';
import PageMenu from '../../components/common/PageMenu';

const Index = () => {
	return (
		<>
			<PageMenu />
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Link target='_blank' href='https://greensock.com/showcase'>
						GSAP showcase link
					</Link>
				</Grid>
				<Grid item xs={12}>
					<Link target='_blank' href='https://greensock.com/react-basics/'>
						이 파트에서는 GSAP Learning Center의 Getting Started with GSAP + React를
						참고하였습니다.
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Index;
