import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import BaseAnimation from '../../components/first-project/BaseAnimation';
import SettingTimeline from '../../components/first-project/SettingTimeline';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <BaseAnimation />;
			case '2':
				return <SettingTimeline />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
