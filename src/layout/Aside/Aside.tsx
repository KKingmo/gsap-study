import { ListItemText, MenuItem, MenuList, Paper } from '@mui/material';

export type Page = {
	id: number | string;
	path: string;
	name: string;
};

type AsideProps = {
	pages: Page[];
};

const Aside = ({ pages }: AsideProps) => {
	return (
		<Paper>
			{pages.map((page) => (
				<MenuList key={page.id}>
					<MenuItem>
						<ListItemText>{page.name}</ListItemText>
					</MenuItem>
				</MenuList>
			))}
		</Paper>
	);
};

export default Aside;
