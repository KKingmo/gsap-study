import Layout from '../../layout';

const PAGES = [
	{ id: 1, path: '/1', name: '1' },
	{ id: 2, path: '/2', name: '2' },
];

const Index = () => {
	return (
		<Layout pages={PAGES}>
			<div>오케이</div>
		</Layout>
	);
};

export default Index;
