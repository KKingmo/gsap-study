import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import MattersOfTimelines from '../../components/timelines/MattersOfTimelines';
import BasicTimeline from '../../components/timelines/BasicTimeline';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <MattersOfTimelines />;
			case '2':
				return <BasicTimeline />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
