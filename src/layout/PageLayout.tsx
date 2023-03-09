import { Box } from '@mui/material';
import { ReactNode } from 'react';

type PageLayoutProps = {
	children: ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				justifyContent: 'center',
				gap: '2rem',
			}}>
			{children}
		</Box>
	);
};

export default PageLayout;
