import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import SingleMenuEffect from '../../components/button-animation-effects/SingleMenuEffect';
import MultiMenuEffect from '../../components/button-animation-effects/MultiMenuEffect';

const Pages = () => {
	const location = useLocation();

	const renderComponent = useCallback(() => {
		const renderCase = location.pathname.split('/').at(-1);
		switch (renderCase) {
			case '1':
				return <SingleMenuEffect />;
			case '2':
				return <MultiMenuEffect />;
			case '3':
				return <div />;
			case '4':
				return <div />;
		}
	}, [location.pathname]);
	return <>{renderComponent()}</>;
};
export default Pages;
