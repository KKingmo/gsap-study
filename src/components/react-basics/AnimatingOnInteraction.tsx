import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { MouseEvent } from 'react';

const AnimatingOnInteraction = () => {
	const onEnter = ({ currentTarget }: MouseEvent<HTMLElement>) => {
		gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 1.2 });
	};

	const onLeave = ({ currentTarget }: MouseEvent<HTMLElement>) => {
		gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1 });
	};

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '2rem',
			}}>
			<Typography variant='h2'>사용자 상호작용에 애니메이션 적용하기</Typography>
			<Box
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
				sx={{
					display: 'flex',
					alignItems: 'center',
					padding: '0 1rem',
					borderRadius: '1rem',
					aspectRatio: 1,
					color: '#fff',
					background: '#252525',
				}}>
				Hover Me
			</Box>
		</Box>
	);
};

export default AnimatingOnInteraction;
