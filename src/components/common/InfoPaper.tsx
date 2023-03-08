import { Paper } from '@mui/material';
import { ReactNode } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type InfoPaperProps = {
	accentColor?: 'error' | 'info' | 'success' | 'warning';
	children: ReactNode;
};

const InfoPaper = ({ accentColor = 'info', children }: InfoPaperProps) => {
	return (
		<Paper
			sx={(theme) => ({
				position: 'relative',
				padding: '0.75rem 0.75rem 0.75rem 1.5rem',
				borderLeft: `${theme.palette[accentColor].main} solid 2px`,
				borderRadius: '10px',
				borderTopLeftRadius: '0px',
				borderBottomLeftRadius: '0px',
				fontSize: '1rem',
				whiteSpace: 'pre-wrap',
			})}>
			<InfoOutlinedIcon
				fontSize={'small'}
				color={accentColor}
				sx={(theme) => ({
					position: 'absolute',
					left: 0,
					top: 0,
					transform: 'translate(-50%, -50%)',
					borderRadius: '100%',
					backgroundColor: theme.palette.background.paper,
				})}
			/>
			{children}
		</Paper>
	);
};

export default InfoPaper;
