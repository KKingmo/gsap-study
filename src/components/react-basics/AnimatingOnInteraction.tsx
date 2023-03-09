import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { MouseEvent } from 'react';
import PageLayout from '../../layout/PageLayout';

const AnimatingOnInteraction = () => {
	const onEnter = ({ currentTarget }: MouseEvent<HTMLElement>) => {
		gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 1.2 });
	};

	const onLeave = ({ currentTarget }: MouseEvent<HTMLElement>) => {
		gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1 });
	};

	return (
		<PageLayout>
			<Typography variant='h1'>사용자 상호작용에 애니메이션 적용하기</Typography>
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
			<Typography variant='body2'>
				{
					'하지만 컴포넌트가 마운트된 후 사용자가 트리거한 콜백 없이 애니메이션이 실행되도록 하려면 어떻게 해야 할까요?'
				}
			</Typography>
		</PageLayout>
	);
};

export default AnimatingOnInteraction;
