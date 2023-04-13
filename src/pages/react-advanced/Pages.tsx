import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import ComponentCommunication from '../../components/react-advanced/ComponentCommunication';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <ComponentCommunication />;
			case '2':
				return <div />;
			case '3':
				return <div />;
			case '4':
				return <div />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
