import { useCallback, useEffect, useState } from 'react';
import { ButtonBase, Grid, Paper, Skeleton, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MENU } from '../App';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	minHeight: 200,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		minHeight: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const SpanImage = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

const Index = () => {
	const navigate = useNavigate();
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const handleClickCard = useCallback(
		(path: string) => {
			setTimeout(() => {
				navigate(path);
			}, 500);
		},
		[navigate],
	);

	useEffect(() => {
		const img = new Image();
		img.src = `https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300?blur=2.webp`;
		img.onload = () => setIsImageLoaded(true);
	}, []);

	return (
		<Grid container spacing={2} sx={{ mt: '0.5rem' }}>
			{MENU.map(({ path, name }) => (
				<Grid item xs={12} lg={6} key={path}>
					<Paper elevation={24}>
						<ImageButton
							focusRipple
							style={{
								width: '100%',
							}}
							onClick={() => handleClickCard(path)}>
							<ImageSrc
								style={{
									backgroundImage: `url(https://picsum.photos/id/${Math.floor(
										Math.random() * 100,
									)}/300/300?blur=2.webp)`,
									opacity: isImageLoaded ? 1 : 0,
								}}
							/>
							<Skeleton
								animation='wave'
								sx={{
									position: 'absolute',
									left: 0,
									right: 0,
									top: 0,
									bottom: 0,
									transform: 'scale(1)',
								}}
							/>
							<ImageBackdrop className='MuiImageBackdrop-root' />
							<SpanImage>
								<Typography
									component='span'
									variant='subtitle1'
									color='inherit'
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}>
									{name}
									<ImageMarked className='MuiImageMarked-root' />
								</Typography>
							</SpanImage>
						</ImageButton>
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default Index;
