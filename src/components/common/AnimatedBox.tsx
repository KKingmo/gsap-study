import { SxProps, styled } from '@mui/material';
import { MouseEventHandler, ReactNode, useCallback } from 'react';

type AnimatedBoxProps = {
	className?: string;
	children?: ReactNode;
	sx?: SxProps;
	size?: string | number;
	onClick?: MouseEventHandler<HTMLDivElement>;
};

const AnimatedBox = ({ className, children, sx, size, onClick }: AnimatedBoxProps) => {
	const sizeStyle = useCallback(() => {
		switch (size) {
			case 'xs':
				return { width: '25px', height: '25px', fontSize: '0.5rem' };
			case 'sm':
				return { width: '50px', height: '50px', fontSize: '0.8rem' };
			case 'md':
				return { width: '100px', height: '100px' };
			case 'xm':
				return { width: '150px', height: '150px' };
			case 'lg':
				return { width: '200px', height: '200px', fontSize: '1.2rem' };
			case 'xl':
				return { width: '250px', height: '250px', fontSize: '1.2rem' };
			default:
				return { width: '100px', height: '100px' };
		}
	}, [size]);
	return (
		<StyledBox className={className} onClick={onClick} sx={{ ...sizeStyle(), ...sx }}>
			{children}
		</StyledBox>
	);
};

export default AnimatedBox;

const StyledBox = styled('div')(({ theme }) => ({
	borderRadius: '8px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	color: '#fff',
	fontSize: '1rem',
	'&.green': {
		backgroundColor: 'green',
	},
	'&.orange': {
		backgroundColor: 'orange',
	},
	'&.grey': {
		backgroundColor: 'grey',
	},
	'&.pink': {
		backgroundColor: 'pink',
	},
	'&.purple': {
		backgroundColor: 'purple',
	},
	'&.blue': {
		backgroundColor: 'blue',
	},
}));
