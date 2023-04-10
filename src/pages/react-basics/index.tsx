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
						이 파트에서 참고할 Docs 링크
					</Link>
				</Grid>
			</Grid>
		</>
	);
};

export default Index;
