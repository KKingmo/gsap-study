import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import SingleMenuEffect from '../../components/button-animation-effects/SingleMenuEffect';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <SingleMenuEffect />;
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
