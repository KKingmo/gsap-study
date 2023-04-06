import { Box, Grid, Link } from '@mui/material';
import InfoPaper from '../../components/common/InfoPaper';

const Index = () => {
	return (
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Box>
					<Link
						target='_blank'
						href='https://css-tricks.com/myth-busting-css-animations-vs-javascript/'>
						JS 애니메이션과 CSS 애니메이션은 성능 차이가 거의 없다.
					</Link>
				</Box>
				<Box sx={{ paddingTop: '1rem' }}>
					<Link target='_blank' href='https://codepen.io/GreenSock/pen/DmgOQx/'>
						GSAP 키프레임과 CSS 키프레임은 성능 차이가 거의 없다.
					</Link>
				</Box>
				<Box sx={{ paddingTop: '2rem' }}>
					<InfoPaper>
						성능을 고려할 때 position을 변경하는 애니메이션은 삼가고 translate 속성으로
						이동시키는 방법을 사용해야 한다.
					</InfoPaper>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Index;
