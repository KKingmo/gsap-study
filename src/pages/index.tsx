import { useCallback } from 'react';
import { Card, CardContent, Container, IconButton, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StartIcon from '@mui/icons-material/Start';

const PAGES = [
	{ id: 1, path: 'react-basics', title: 'GSAP + React Basics' },
	{ id: 2, path: 'started-guide', title: 'Started guide' },
	{ id: 3, path: 'tween', title: '중요한 개념 씹어먹기 1 - Tween' },
	{ id: 4, path: 'timeline', title: '중요한 개념 씹어먹기 2 - Timeline' },
	{ id: 5, path: 'react-advanced', title: 'GSAP + React 고급 애니메이션 기법' },
	{ id: 6, path: 'react-best-practice', title: 'GSAP 조금 더 야무지게 React에서 써먹기' },
];

const Index = () => {
	const navigate = useNavigate();

	const handleClickCard = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate],
	);

	return (
		<Container maxWidth='xl' sx={{ marginTop: '1rem' }}>
			{PAGES.map((page) => (
				<Card key={page.id} sx={{ marginBottom: '1rem', minWidth: 275 }}>
					<CardContent sx={{ '&:last-child': { paddingBottom: '0.25rem' } }}>
						<Typography variant='subtitle1' color='text.secondary'>
							{page.title}
						</Typography>
						<IconButton onClick={() => handleClickCard(page.path)}>
							<StartIcon color='primary' sx={{ height: '2rem', width: '2rem' }} />
						</IconButton>
					</CardContent>
				</Card>
			))}
		</Container>
	);
};

export default Index;
