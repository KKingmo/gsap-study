import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import MattersOfTimelines from '../../components/timelines/MattersOfTimelines';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <MattersOfTimelines />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
