import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ReactNode } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type AccordionProps = {
	title?: ReactNode | string;
	children?: ReactNode;
	defaultExpanded?: boolean;
};

const CollapsibleBox = ({ title, children, defaultExpanded = false }: AccordionProps) => {
	return (
		<Accordion defaultExpanded={defaultExpanded} sx={{ width: '100%' }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
};

export default CollapsibleBox;
